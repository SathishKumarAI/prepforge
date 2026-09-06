---
qid: ing_f36f20b527__fp__local
question: 'Explain: Problem — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 331
total_tokens: 500
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:36:27-05:00'
sources: []
---

**Problem – Pattern: “Database per Service” (in a micro‑service context)**  

When you decompose an application into autonomous services, the *primary* goal is **bounded autonomy**: each service should own its data and logic so that it can evolve independently. If all services share a monolithic database, a change in one service’s schema forces coordination with every other service—introducing tight coupling, deployment bottlenecks, and risk of cascading failures.  

The *Database per Service* pattern enforces **data sovereignty**: each service owns its own datastore (SQL or NoSQL) and exposes only the operations it needs via APIs. This satisfies two deep principles:

1. **Optimisation by locality** – A service can choose a storage engine tuned to its workload (e.g., time‑series DB for telemetry, graph DB for relationships), improving performance without affecting others.
2. **Information hiding / encapsulation** – By keeping schema changes internal, services avoid violating the *Open/Closed* principle; external consumers see only the API contract.

A non‑obvious insight: this pattern turns a *single point of failure* into *multiple points of resilience*. If one service’s database crashes, it does not bring down the entire system because other services are isolated. However, this isolation requires careful design of eventual consistency and data replication strategies—otherwise you trade availability for strict consistency in a way that can silently corrupt business logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
