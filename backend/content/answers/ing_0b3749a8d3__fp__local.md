---
qid: ing_0b3749a8d3__fp__local
question: 'Explain: Context — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 384
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:30:03-05:00'
sources: []
---

**Pattern: “Database per Service”**

*Fundamental problem.*  
In a distributed system, multiple services often need to read and write data that evolve at different rates, with distinct consistency requirements, and may scale independently. A shared database forces every change to propagate across all services, creating *tight coupling*, *serialization bottlenecks*, and a single point of failure.

*Why isolation works.*  
Treat each service as an autonomous agent whose state is the only thing it owns. By giving it its own database, we enforce a clean *contract*: “I expose this API; I maintain my data.” This contract aligns with the principle of **encapsulation** in software engineering and **modularity** in system design.

*Deep principle: information flow control.*  
When services cannot read each other’s data directly, the only allowed information paths are through their APIs. This reduces *information leakage* and makes it easier to reason about consistency—each service can choose its own isolation level (e.g., eventual vs. strict) without affecting others.

*Non‑obvious insight.*  
A common misconception is that separate databases simply duplicate data, wasting resources. In fact, the duplication **enables** *bounded failure*: if one database crashes, only its owning service is affected; other services continue unhindered. Moreover, it allows each service to pick a schema and storage engine best suited for its workload (SQL for transactions, NoSQL for high‑volume logs), turning a monolithic data model into a collection of *optimal* micro‑models.

In short, “database per service” transforms a tightly coupled data layer into a set of loosely coupled, independently scalable units—exactly what distributed systems theory predicts is needed for resilience and evolution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
