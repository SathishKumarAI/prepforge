---
qid: ing_eb465073d3__fp__local
question: 'Explain: Solution — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 329
total_tokens: 498
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:19:20-05:00'
sources: []
---

## Why “Database per Service” is the Right Choice

When a system splits into autonomous services, each service must **own** its own data to avoid tight coupling.  
From a *consistency* standpoint, two services that share a database inevitably create a *single point of contention*: a write in one service can break invariants in another unless they coordinate through transactions or versioned schemas—both costly and fragile.  

Treating the database as an **opaque contract** mirrors the principle of *information hiding* in software engineering: a service exposes only the operations it needs, not its internal persistence details. This isolation lets each team evolve schema, indexing strategy, or even technology (SQL ↔ NoSQL) without breaking others—an embodiment of *independent evolution* in distributed systems.

The pattern also enforces *bounded context*: the domain model of one service cannot be polluted by another’s fields, preserving the purity of its business logic. In probabilistic terms, each service learns a **posterior** over its own data; sharing a database would force them to share priors and likelihoods, reducing modeling flexibility.

### Non‑obvious insight  
A single “master” database looks simpler but actually **serializes all writes**, becoming the bottleneck for scalability. By giving each service its own storage, write throughput scales linearly with the number of services—an often overlooked benefit that turns a monolithic bottleneck into a horizontally scalable asset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
