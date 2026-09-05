---
qid: ing_0f909fe69f__star__local
question: 'Explain: Master-Slave Replication — Data Replication in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 351
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:59:31-05:00'
sources: []
---

**Situation** – In the spring of 2023 I was leading a data‑engineering sprint for our e‑commerce platform’s recommendation engine. The production database had grown to 12 TB, and read latency on the analytics layer was creeping past 300 ms during peak traffic.

**Task** – My goal was to reduce read latency by at least 50 % while keeping write consistency intact, without incurring a major rewrite of our existing PostgreSQL stack.

**Action** – I proposed a master‑slave replication architecture. First, we set up a primary (master) instance that handled all writes and implemented logical decoding to stream changes to two read replicas (slaves). Using `pg_basebackup` for initial sync and WAL shipping via `wal_sender`/`wal_receiver`, we ensured near real‑time data propagation. On the application side, we switched our analytics queries to target the slaves using a simple round‑robin load balancer in front of them. To guard against split‑brain scenarios, we enabled `synchronous_commit=local` on the master and monitored replication lag with `pg_stat_replication`. We also added automated failover scripts that promoted a slave to master if the primary went down.

**Result** – Read latency dropped from 320 ms to 140 ms (55 % improvement), and our analytics throughput increased by 3× during traffic spikes. The team learned how logical replication can be tuned for low‑latency reads while preserving consistency, and we documented a failover playbook that reduced recovery time from minutes to under a minute.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
