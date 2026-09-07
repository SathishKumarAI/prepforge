---
qid: ing_5eae7dfc24__aws__local
question: 'Explain: Graph Databases — 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 626
total_tokens: 863
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:59:40-05:00'
sources: []
---

**Situation & Task**  
At my last role I was asked to design a recommendation engine that had to support *real‑time* graph traversal for millions of users while staying under an $800k yearly budget. The hiring manager wanted me to decide whether a graph database, relational DB or NoSQL store would best fit the use case and, if so, which type.

**Action**  
I mapped each database category to the *Customer Obsession* and *Dive Deep* principles:

| Category | Typical Use‑Case | Key AWS Service(s) | Why It Fits |
|----------|------------------|--------------------|-------------|
| **Property Graph (Neo4j, Amazon Neptune)** | Relationship‑heavy queries like “friend of a friend” or knowledge graphs. | `Amazon Neptune` – fully managed, 3-node cluster, 99.999% availability. | Low latency (<10 ms) traversals; native graph APIs. |
| **Document (MongoDB Atlas, DynamoDB)** | Semi‑structured product catalogs with occasional graph queries. | `DynamoDB` + PartiQL for ad‑hoc joins. | Pay‑per‑request, auto‑scaling, 3‑year retention policy. |
| **Wide‑Column (Cassandra, ScyllaDB)** | Time‑series event logs that need efficient range scans. | `Amazon Keyspaces` – Cassandra API compatible, serverless scaling. | Linear scalability, high write throughput. |
| **Relational (Aurora PostgreSQL/MySQL)** | Complex joins with transactional guarantees. | `Amazon Aurora Serverless v2`. | 5× cheaper than on‑prem RDS; auto‑scaling up to 64 k IOPS. |
| **Key‑Value (Redis, DynamoDB)** | Caching recommendation scores. | `ElastiCache for Redis`. | Sub‑millisecond reads; built‑in eviction policies. |

I presented a *hybrid architecture*:

1. **Neptune** for core graph traversal (`$30k/yr`).  
2. **DynamoDB** for user profiles (`$10k/yr`).  
3. **ElastiCache Redis** for hot recommendation vectors (`$15k/yr`).  

The total projected cost was **$55k/yr**, 30% below the budget, and I modeled a 99.95% SLA with multi‑AZ deployments.

**Result**  
The pilot served 1 M users/day with an average traversal time of 8 ms (≤10 ms target) and generated a 12% lift in upsell revenue within two months. Post‑deployment, we reduced read latency by 40% after migrating hot paths to Redis.  

**Reflection**  
I learned that *no single database* is “one size fits all.” By diving deep into each technology’s strengths and aligning them with business KPIs, I delivered a cost‑effective, highly available solution that directly impacted the customer experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
