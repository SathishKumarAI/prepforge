---
qid: ing_896a9f7804__eli5__local
question: Explain tensor parallelism vs pipeline parallelism for inference. When do
  you need each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 271
total_tokens: 435
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:14:28-05:00'
sources: []
---

Imagine a giant sandwich shop that makes enormous, multi‑layered sandwiches (a big neural network).  
**Tensor parallelism** is like splitting each layer’s ingredients among several chefs: every chef gets only a slice of the bread, cheese, and lettuce for one layer, works on it simultaneously, then hands the finished slice to the next chef. It speeds up the *same* part of the sandwich by dividing its work across many people.  
**Pipeline parallelism** is like having each chef specialize in a different stage: one cuts the bread, the next adds cheese, the next puts lettuce, and so on. The sandwich moves from chef to chef, each working on a different layer at the same time. It speeds up the *whole* sandwich by overlapping stages.

Use **tensor parallelism** when a single layer is too large for one machine’s memory or you need the fastest possible inference for that layer.  
Use **pipeline parallelism** when you want to keep many layers busy simultaneously, especially if your model has many distinct stages and each fits comfortably on its own device.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
