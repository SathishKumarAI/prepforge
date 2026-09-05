---
qid: ing_bcceb37445__star__local
question: 'Explain: Each of them have their pros and — Database Design Tips | Choosing
  the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 298
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:48:39-05:00'
sources: []
---

**Situation**  
During my senior capstone, we were building an e‑commerce platform that had to handle 10 k concurrent users and support real‑time inventory updates across multiple warehouses.

**Task**  
I needed to choose a database architecture that would keep latency under 200 ms for read queries while ensuring ACID compliance for stock decrements during checkout.

**Action**  
I first mapped the data model: user profiles, product catalog, orders, and warehouse inventory. I evaluated relational (PostgreSQL), NoSQL (MongoDB), and NewSQL (CockroachDB) options. PostgreSQL offered strong joins but struggled with write spikes; MongoDB provided horizontal scaling but lacked multi‑document transactions. CockroachDB gave distributed ACID guarantees with SQL syntax.  
I implemented a hybrid approach: core transactional data in CockroachDB, cached product listings in Redis, and used Kafka for event sourcing of inventory changes. I tuned PostgreSQL’s connection pool, added read replicas, and applied sharding on the orders table.

**Result**  
The system sustained 12 k concurrent users with <150 ms read latency and zero lost orders during peak load tests. The hybrid design reduced operational complexity by 30% compared to a monolithic NoSQL solution, and I learned that combining databases can leverage each technology’s strengths while mitigating their weaknesses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
