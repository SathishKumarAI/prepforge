---
qid: ing_8dcd1202ac__fp__local
question: 'Explain: And now, as a result of that — AWS re:Invent 2021 - Which NoSQL
  database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 419
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:06:32-05:00'
sources: []
---

## Choosing the “right” NoSQL at AWS re:Invent 2021

At its core, a **NoSQL** system is an *optimization problem*: you must trade off consistency, latency, throughput and storage cost against your data model and query patterns.  
AWS presents three main candidates:

| Database | Core design principle | Typical workload |
|----------|-----------------------|------------------|
| **DynamoDB** | Partition‑key + optional sort key → *horizontal scaling by sharding* | Key–value or simple range queries, micro‑services, real‑time analytics |
| **DocumentDB (MongoDB‑compatible)** | Flexible JSON schema + secondary indexes | CRUD with ad‑hoc filtering, content management |
| **RDS Aurora Serverless** | Relational ACID + auto‑scaling | Legacy apps needing SQL but with bursty traffic |

The decision boils down to *information locality* versus *query expressiveness*.  
- If your application is *key‑centric* and can tolerate eventual consistency, DynamoDB’s single‑partition throughput model gives the lowest latency and simplest scaling.  
- If you need rich ad‑hoc queries over nested documents, DocumentDB’s secondary indexes avoid costly scans and keep write paths fast.  
- If you must preserve relational integrity but still want cost‑efficiency during idle periods, Aurora Serverless auto‑scales on demand.

**Non‑obvious insight:** *The “right” database is the one that lets your application treat data as an **immutable event stream***. By designing for append‑only writes (e.g., using DynamoDB Streams or Kinesis), you can decouple write latency from read complexity, letting any of these services serve the reads while a downstream analytics layer handles joins and aggregations. This pattern turns a “one‑size‑fits‑all” database into a composable system that scales naturally with your data’s true growth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
