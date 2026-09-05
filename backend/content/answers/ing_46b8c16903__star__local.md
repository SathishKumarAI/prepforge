---
qid: ing_46b8c16903__star__local
question: 'Explain: Q38: Explain token counting and why it matters'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 335
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:50:02-05:00'
sources: []
---

**Situation:**  
During a sprint for our chatbot product, we noticed that the model’s response time was spiking whenever users asked multi‑part questions. The engineering team suspected something was wrong with how prompts were being constructed.

**Task:**  
I had to identify the root cause and reduce latency by ensuring the token budget stayed within the 4 k‑token limit of our deployment tier, without compromising answer quality.

**Action:**  
First, I instrumented the prompt pipeline to log token counts using OpenAI’s `tiktoken` library. By visualizing the distribution per user session, we discovered that optional context snippets were inflating token usage by ~30 %. I refactored the code to truncate non‑essential history and switched from GPT‑3.5‑turbo to a more efficient base model for certain use cases. Additionally, I implemented a dynamic prompt truncation strategy that drops the oldest messages when the total exceeds 3,800 tokens, preserving the most recent context.

**Result:**  
Token usage dropped by 25 %, cutting average response latency from 1.8 s to 0.9 s and keeping us under the hard limit for 99.5 % of requests. This also saved roughly $200/month on compute costs. I learned that continuous token monitoring is essential in production LLM services, turning what seemed like a performance hiccup into a measurable cost‑saving improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
