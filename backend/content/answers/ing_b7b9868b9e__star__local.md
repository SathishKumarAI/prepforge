---
qid: ing_b7b9868b9e__star__local
question: 'Explain: Now these are generally not used for — Database Design Tips |
  Choosing the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 421
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:38:52-05:00'
sources: []
---

**Situation:**  
During a senior‑level interview, I was asked to design the data layer for a new e‑commerce platform that needed to handle millions of product listings and real‑time inventory updates while supporting complex transactional sales.

**Task:**  
I had to choose which database technology would best serve each use case—catalog search versus order processing—and justify why certain databases are generally not used for specific tasks (e.g., using a relational DB for highly variable user sessions).

**Action:**  
I first mapped out the workload patterns: catalog reads were 90 % read‑heavy with occasional writes, while orders required ACID guarantees and strict consistency. I evaluated options—PostgreSQL for orders, Elasticsearch for full‑text search, and Redis for session caching. I avoided using a single NoSQL store (like DynamoDB) for orders because it would complicate multi‑row transactions; likewise, I didn’t use PostgreSQL for the catalog due to its poor horizontal scaling for read spikes. I also set up sharding in Elasticsearch to handle 10 k QPS and implemented read replicas in Postgres for failover.

**Result:**  
The hybrid stack achieved <200 ms average latency for catalog queries, 99.9% transaction success rate, and a 40 % cost reduction by leveraging open‑source components. I learned that choosing the right database per workload pattern—not a one‑size‑fits‑all—drives both performance and maintainability in large systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
