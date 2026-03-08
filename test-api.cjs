const { fetch } = require('undici');

const API_KEY = 'sk-jwyaddrlroseslhsoyjykuwlqowkaeoqlstjyeiwybhwzmet';

async function test() {
  const start = Date.now();
  
  const response = await fetch('https://api.siliconflow.cn/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: 'Qwen/Qwen2.5-7B-Instruct',
      messages: [{role: 'user', content: '你好'}],
      temperature: 0.7,
      max_tokens: 200
    })
  });

  const data = await response.json();
  console.log('Time:', Date.now() - start, 'ms');
  console.log('Status:', response.status);
  console.log('Response:', JSON.stringify(data, null, 2).substring(0, 500));
}

test().catch(console.error);
