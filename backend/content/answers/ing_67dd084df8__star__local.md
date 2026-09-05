---
qid: ing_67dd084df8__star__local
question: 'Explain: Single Source Replication — Data Replication in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 324
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:55:20-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a real‑time recommendation engine that pulled user behavior from our primary PostgreSQL cluster. The data warehouse was on a separate read replica, but after a weekend upgrade the replica fell behind by over 15 minutes, causing stale recommendations and a 12% drop in click‑through rate.

**Task:**  
I had to restore consistency between the master and the replica without affecting production traffic, ensuring that downstream analytics could start using fresh data within 5 minutes.

**Action:**  
First I identified the replication lag with `pg_stat_replication` and confirmed it was due to a backlog of WAL segments. I then performed a “single source” catch‑up by temporarily pausing all non‑critical writes on the master, executed `pg_basebackup` to create a fresh snapshot, and streamed the WAL logs from that point forward to the replica using `pg_recvlogical`. While the replica was catching up, I rerouted analytical queries to a standby buffer pool that served the most recent data. After replication caught up, I switched traffic back to the live replica.

**Result:**  
Replication lag dropped from 15 minutes to under 30 seconds in less than an hour, restoring real‑time recommendations and lifting click‑through rates by 9%. I learned how critical it is to monitor WAL flow and to have a fast failover plan that leverages single source replication for minimal downtime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
