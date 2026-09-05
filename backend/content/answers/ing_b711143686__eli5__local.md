---
qid: ing_b711143686__eli5__local
question: Why is load balancing LLM inference different from load balancing stateless
  HTTP, and what does a good routing layer do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 257
total_tokens: 428
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:26:38-05:00'
sources: []
---

Imagine a busy restaurant where customers (requests) come in for a dish that takes time to cook (an LLM inference). In a simple café (stateless HTTP), each order is quick and the kitchen can serve anyone on a first‑come, first‑served line; you just need enough cooks so no one waits too long.  

With an LLM, each “dish” is heavy: it keeps a huge recipe book (model weights) in memory, uses a lot of cooking pot space (GPU/CPU), and may still be working on the same order for minutes. If many orders hit the same kitchen at once, that kitchen can overflow while others sit idle.

A good routing layer is like a smart host who knows which kitchen has enough “pot space” and “chef memory” free right now. It looks at each incoming request’s size, checks every kitchen’s current load (how much of its memory and compute it already uses), and sends the order to the least busy kitchen that can finish it quickly. This keeps all kitchens balanced, prevents any one from getting stuck, and makes sure customers get their meals on time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
