---
qid: ing_45bd719c87__eli5__local
question: 'Explain: When to Use Vertical Scaling — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 198
total_tokens: 359
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:26:51-05:00'
sources: []
---

Think of your machine‑learning model as a chef who needs more space and tools to cook bigger batches. **Vertical scaling** is like upgrading the kitchen: you install a larger stove, add more burners, or give the chef a faster oven. You’re still using one kitchen (one server), but it’s now beefier and can handle more ingredients at once.

Use vertical scaling when:

* The model fits on a single machine but needs a bit more memory or CPU to process bigger data sets or larger batches.
* Your workload is bursty—spikes of heavy computation that don’t last long, so adding capacity temporarily helps.
* You want to keep the architecture simple and avoid coordinating many machines.

Remember: vertical scaling gives you a stronger single machine but eventually hits hardware limits. If you need unlimited growth, consider horizontal scaling (adding more kitchens).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
