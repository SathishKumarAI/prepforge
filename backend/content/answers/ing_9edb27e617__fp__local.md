---
qid: ing_9edb27e617__fp__local
question: 'Explain: Forces — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 373
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:43:05-05:00'
sources: []
---

**Pattern: Database per Service**

*Fundamental problem.*  
In a monolith the entire codebase shares one schema; data is “shared” by reference. When you split into services, that shared schema becomes a *single point of contention*: every service must coordinate on locking, migrations, and consistency, eroding the autonomy promised by micro‑services.

*Why it must work this way.*  
Each service owns its own data model. This guarantees **independent evolution**: schema changes do not ripple through unrelated services. It also yields *bounded consistency*: a service can enforce ACID on its local store while interacting with others via eventual or compensating transactions, matching the CAP trade‑off that micro‑services accept.

*Deeper principle.*  
Treat the system as a collection of **probabilistic models** rather than a single relational model. Each service’s database encodes its own joint distribution over domain entities; inter‑service queries become *conditional probability estimations*, not joins. This aligns with information theory: by isolating entropy, you reduce cross‑entropy leakage and simplify inference.

*Non‑obvious insight.*  
A local database is not a bottleneck if the service is *data‑centric*. The real constraint is **query complexity** across services. By exposing only read‑only APIs (or event streams) for cross‑service data, you convert costly joins into *eventual consistency* patterns, turning a potentially linear‑time dependency into sublinear amortized cost.

In short, database per service preserves service autonomy, simplifies evolution, and aligns the architecture with probabilistic information flow, while keeping inter‑service communication efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
