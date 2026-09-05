---
qid: ing_55f515d028__star__local
question: 'Explain: Related patterns — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 299
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:19:42-05:00'
sources: []
---

**Situation**  
At my previous company we were migrating a monolithic analytics platform to microservices. The legacy system had one massive PostgreSQL database that all services touched, which caused frequent deadlocks and made scaling impossible.

**Task**  
I was tasked with designing the data layer for our new recommendation service so it could handle 2 M requests per day without impacting other teams’ workloads, while keeping latency under 120 ms.

**Action**  
We adopted a “database per service” pattern. I chose Amazon Aurora Serverless for its auto‑scaling and low cost, then created a dedicated schema with only the tables the recommendation engine needed (users, items, interactions). To keep data consistent across services, we implemented an event‑driven replication pipeline: every write to the user profile service published a Kafka event; our recommendation service subscribed and updated its local cache. We also added read replicas in each region for global latency reduction and used connection pooling with PgBouncer to limit connections.

**Result**  
The new architecture cut cross‑service contention by 80 %, reduced average request latency from 210 ms to 95 ms, and allowed us to scale the recommendation service independently during peak traffic. I learned that isolating data ownership not only improves performance but also simplifies rollback and deployment cycles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
