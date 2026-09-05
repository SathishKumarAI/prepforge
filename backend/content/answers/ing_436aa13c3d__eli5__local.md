---
qid: ing_436aa13c3d__eli5__local
question: 'Explain: Caching Tier — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 273
total_tokens: 432
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:23:21-05:00'
sources: []
---

Think of a machine‑learning model as a busy bakery that has to hand out cakes (predictions) to many customers at once.  
The **caching tier** is the pastry counter where the most popular cake flavors are already prepared and ready for quick pick‑up. When a new customer orders a flavor that’s on the counter, they get it instantly; if it’s not there, the baker has to make it from scratch (run the full model).

**Scalability** in this context means being able to add more counters or expand the existing ones so that even with thousands of customers ordering at the same time, every one still gets a cake fast.  
You do this by:

1. **Adding more cache nodes**—more pastry counters spread across the city (distributed caching).  
2. **Sharding**—dividing flavors among counters so each counter only holds a subset (partitioning data).  
3. **Replication**—keeping copies of popular flavors on multiple counters to avoid single‑point bottlenecks.

Thus, a scalable cache keeps the “cake” (model output) ready for many users without overloading the original baking station (the heavy ML model).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
