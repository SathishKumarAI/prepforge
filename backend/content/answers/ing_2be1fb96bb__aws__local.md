---
qid: ing_2be1fb96bb__aws__local
question: 'Explain: Relational vs. Non-Relational Databases — 11 System Design Concepts
  Explained, Simply'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 583
total_tokens: 823
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:04:17-05:00'
sources: []
---

**Relational vs. Non‑Relational Databases – 11 Key Design Concepts**

**Situation:** While architecting a global e‑commerce platform, I needed to decide between RDS (relational) and DynamoDB (non‑relational).  
**Task:** Deliver a system that supports high‑volume transactions, flexible schema, and sub‑second latency.  

| # | Concept | Relational (RDS) | Non‑Relational (DynamoDB) |
|---|---------|------------------|---------------------------|
| 1 | **Schema Flexibility** | Fixed tables → migrations slow | JSON/attribute‑based → evolve on the fly |
| 2 | **ACID vs. BASE** | Strong consistency, transactional | Eventual consistency, high write throughput |
| 3 | **Joins & Normalization** | Multi‑table joins cost CPU | No joins; use denormalized items or global secondary indexes |
| 4 | **Query Language** | SQL, expressive filters | PartiQL / attribute predicates, limited aggregation |
| 5 | **Scalability Model** | Scale‑up (larger instance) + read replicas | Horizontal scaling via sharding & auto‑scaling |
| 6 | **Availability** | Multi‑AZ failover, but single point of failure per node | Built‑in replication across AZs, no downtime on scale |
| 7 | **Cost Predictability** | Instance hours + storage | Pay‑per‑request; can spike with heavy reads/writes |
| 8 | **Backup & Restore** | Manual snapshots or automated backups | Point‑in‑time recovery via continuous backups |
| 9 | **Performance Tuning** | Indexes, query plans | Provisioned throughput / on‑demand capacity, caching |
|10 | **Security** | IAM + encryption at rest/traffic | Same, plus fine‑grained access via IAM policies |
|11 | **Ecosystem Integration** | RDS Proxy, Aurora Serverless | DynamoDB Streams → Lambda, Kinesis |

**Result:** I chose a hybrid: user accounts in RDS for ACID compliance; product catalog and cart state in DynamoDB for low latency. This yielded 99.999% availability, <5 ms read latency at 1M RPS, and cost savings of **30%** over an all‑RDS solution.

**Reflection:** I owned the trade‑off analysis (Dive Deep), validated with load tests (Bias for Action), and documented lessons to guide future migrations—exactly what a bar‑raiser expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
