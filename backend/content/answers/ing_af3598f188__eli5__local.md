---
qid: ing_af3598f188__eli5__local
question: 'Explain: Continuous batching — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 232
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:15:10-05:00'
sources: []
---

Imagine a busy kitchen where chefs (the LLM) prepare orders (model requests). In a normal rush, each order is cooked one by one—slow and wasteful because the stove sits idle while waiting for the next customer. **Continuous batching** is like the kitchen deciding to wait until several orders arrive before starting a batch of dishes at once. All the orders are grouped together (“batched”) and cooked simultaneously on the same set of burners, using the same ingredients (the model weights) just once. This way the stove stays busy, and each dish finishes faster than if it were made alone.

In an **LLM gateway and serving platform**, continuous batching works the same way: incoming user prompts are collected over a short window, combined into one large request, sent to the language‑model server, and then split back into individual responses. It keeps the GPU or CPU fully utilized, reduces latency for many users, and lowers cost—just like an efficient kitchen that never lets its burners idle while still serving every guest promptly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
