---
qid: ing_2de5b144b8__star__local
question: 'Explain: Consistency — ACID Transactions | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 294
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:00:14-05:00'
sources: []
---

**Situation:**  
While leading the migration of our recommendation engine from a single‑node MySQL database to a distributed NoSQL cluster (Cassandra), we discovered that user preference updates were sometimes lost, causing stale recommendations and a drop in click‑through rate by 12%.

**Task:**  
I needed to reintroduce strong consistency for preference writes without sacrificing the high write throughput our users demanded.

**Action:**  
I designed a two‑phase commit (2PC) wrapper around Cassandra using Apache ZooKeeper as the coordinator. For each user update, the client first sent a prepare request to all replicas; once every node acknowledged, the coordinator issued a global commit. To keep latency low I limited 2PC to the most recent 10 k preference records per shard and used lightweight transactions (LWT) for conflict detection on the primary replica. We also added an asynchronous reconciliation job that ran nightly to reconcile any missed commits.

**Result:**  
Consistency errors dropped from 12% to <0.1%, restoring a 9% lift in click‑through rate within two weeks. The system still handled 15k writes per second, and I learned how ACID principles can be pragmatically applied even in highly distributed environments by combining coordination services with targeted LWTs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
