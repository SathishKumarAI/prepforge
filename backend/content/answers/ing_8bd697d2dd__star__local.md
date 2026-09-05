---
qid: ing_8bd697d2dd__star__local
question: 'Explain: Database Replication & Backups — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 339
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:12:35-05:00'
sources: []
---

**Situation:**  
While building a prototype for an Instagram‑style photo sharing app, our engineering team noticed that the user upload queue was throttling during peak traffic. The single PostgreSQL instance we had was becoming a bottleneck and data loss risk grew with frequent crashes.

**Task:**  
I needed to design a robust database architecture that ensured high availability, low latency for reads (feed generation), and safe recovery in case of failure—all while keeping the cost under our MVP budget.

**Action:**  
1. Implemented logical replication from the primary PostgreSQL node to two read replicas using `pglogical`. This allowed all feed queries to hit replicas, reducing load on the writer.  
2. Added a WAL‑based streaming backup to an S3 bucket, rotating daily snapshots and keeping a 7‑day retention policy for point‑in‑time recovery.  
3. Introduced automated failover with Patroni; if the primary failed, one replica would promote after a health check timeout of 5 s.  
4. Used Redis caching for hot user feeds to further cut read traffic from the DB.

**Result:**  
Read latency dropped from ~350 ms to <120 ms during peak hours, and the system achieved 99.95% uptime over three months of load testing. The failover test restored service in under 12 s with no data loss, proving our replication/back‑up strategy was sound. I learned that combining logical replication with WAL streaming gives both high availability and granular recovery without breaking cost constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
