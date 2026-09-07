---
qid: ing_7566faaae8__faang__local
question: 'Explain: Vertical Partitioning — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 549
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:17:31-05:00'
sources: []
---

**Vertical Partitioning – Scaling a Database (FAANG‑style)**  

| Step | What I’d say |
|------|--------------|
| **Clarify** | *Problem*: We have a monolithic table with many columns, but only a subset is read/write heavy while the rest is infrequently accessed. The goal is to shard or partition without breaking ACID semantics. <br>*Assumptions*: 1️⃣ Single‑tenant vs multi‑tenant; 2️⃣ Read/write ratio per column set; 3️⃣ Existing schema constraints (FKs, joins); 4️⃣ Latency SLA and budget for cross‑partition queries. |
| **Approach** | 1️⃣ Identify “hot” columns → create a *core* partition. <br>2️⃣ Move cold columns to separate tables or sharded stores. <br>3️⃣ Use a shared primary key (or surrogate) to join at the application layer or via materialized views. <br>4️⃣ Decide on storage: RDBMS for core, NoSQL/column‑store for auxiliary data. <br>5️⃣ Plan migration with zero downtime (e.g., dual writes + feature flags). |
| **Depth** | • Core table stays in a high‑performance relational store; all transactional ops hit it. <br>• Auxiliary tables can be partitioned by tenant ID or range, using consistent hashing for scale. <br>• Join performance: pre‑compute denormalized columns or use read replicas to offload joins. <br>• Consistency: use distributed transactions (e.g., two‑phase commit) only if cross‑store updates are frequent; otherwise opt for eventual consistency with compensating logic. |
| **Edge Cases** | • Hot spot on the shared key → add a sharding key or use composite PK. <br>• Schema evolution: adding new columns may require re‑partitioning. <br>• Cross‑tenant queries become expensive if they span partitions; test with realistic query mixes. |
| **Optimize & Communicate** | • Benchmark read/write latency before/after partitioning. <br>• Incrementally roll out to a percentage of traffic, monitor SLA drift. <br>• Document the mapping in a data dictionary and update CI/CD pipelines to reflect new schemas. <br>Explain trade‑offs: reduced write amplification vs increased join cost; highlight that vertical partitioning is most beneficial when read/write patterns are highly skewed and the core table remains small enough for high availability. |

*Word count*: ~215 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
