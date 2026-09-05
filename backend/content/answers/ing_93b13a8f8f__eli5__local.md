---
qid: ing_93b13a8f8f__eli5__local
question: 'Explain: Use cases: — Delivery Semantics'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 201
total_tokens: 358
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:31:42-05:00'
sources: []
---

**Delivery semantics in machine‑learning pipelines**

Think of a data scientist’s workflow like a postal service that delivers packages (model predictions) to customers.  
*“At least once”* means the system guarantees every package reaches its destination, but sometimes a customer might get duplicate copies because the postman is cautious—so your ML model may be run twice on the same input.  
*“Exactly once”* is like having a smart lock that opens only one time; each prediction is delivered exactly once, no repeats and no misses.  

In practice, “at least once” is easier to build (you can retry if something fails), while “exactly once” requires extra bookkeeping—tracking which inputs have already been processed—to avoid duplicate predictions or lost results.  The choice depends on how costly a duplicated prediction is versus the complexity of ensuring perfect delivery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
