export const runtime = 'edge';

const SYSTEM_PROMPT = `你是一位资深的AI产品面试官，擅长帮助求职者准备AI产品经理岗位的面试。

要求：
1. 回答专业、详细
2. 结合实际案例
3. 回答控制在200-500字
4. 使用中文`;

export default async function handler(request) {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { 
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const { message, history } = await request.json();

    if (!message) {
      return new Response(JSON.stringify({ error: 'Message is required' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...(history || []).slice(-10),
      { role: 'user', content: message }
    ];

    // 硅基流动 API
    const response = await fetch('https://api.siliconflow.cn/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer sk-jwyaddrlroseslhsoyjykuwlqowkaeoqlstjyeiwybhwzmet`
      },
      body: JSON.stringify({
        model: 'Qwen/Qwen2.5-7B-Instruct',
        messages: messages,
        temperature: 0.7,
        max_tokens: 1000
      })
    });

    const data = await response.json();

    if (data.choices && data.choices[0]) {
      return new Response(JSON.stringify({ 
        reply: data.choices[0].message.content
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      return new Response(JSON.stringify({ error: 'API返回异常', detail: data }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
