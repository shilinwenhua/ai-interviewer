import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const SYSTEM_PROMPT = `你是一位资深的AI产品面试官，擅长帮助求职者准备AI产品经理岗位的面试。

要求：
1. 回答专业、详细
2. 结合实际案例
3. 回答控制在200-500字
4. 使用中文`;

const API_KEY = 'sk-jwyaddrlroseslhsoyjykuwlqowkaeoqlstjyeiwybhwzmet';

app.post('/api/chat', async (req, res) => {
  const { message, history } = req.body;
  
  try {
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...(history || []).slice(-10),
      { role: 'user', content: message }
    ];

    const response = await fetch('https://api.siliconflow.cn/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: 'Qwen/Qwen2.5-7B-Instruct',
        messages: messages,
        temperature: 0.7,
        max_tokens: 500
      })
    });

    const data = await response.json();
    
    if (data.choices && data.choices[0]) {
      res.json({ reply: data.choices[0].message.content });
    } else {
      res.json({ error: 'API返回异常' });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log('API server running on http://localhost:3001 (SiliconFlow)');
});
