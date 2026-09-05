---
qid: ing_c52bafa47f__eli5__local
question: 'Q: Why is Continuous Batching superior to Static Batching for LLMs?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 239
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:48:26-05:00'
sources: []
---

Think of a large language model (LLM) as a kitchen that must feed many hungry customers.  
**Static batching** is like taking all the orders at once, packing them into one big pot, and waiting until the pot is full before starting to cook. While efficient on paper, it forces you to keep every order waiting even if some are ready earlier; the kitchen sits idle for those slow ones.

**Continuous batching** is a “just‑in‑time” cooking line: as soon as a new order arrives, it’s added to the pot and the stove starts working immediately. The pot grows gradually, never staying empty or overfull, so every order gets processed as soon as its ingredients are ready. This keeps the stove (the GPU) busy all the time and reduces the wait for each customer.

In short, continuous batching lets an LLM handle inputs in a flowing stream rather than clumping them together, improving speed and resource use—just like a well‑tuned kitchen that never idles or overflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
