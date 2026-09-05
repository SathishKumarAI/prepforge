---
qid: ing_97f66e1dcb__star__local
question: 'Explain: Redis Replication - Leader-follower technique'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 398
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:36:36-05:00'
sources: []
---

**Situation** – In my previous role I was tasked with scaling our e‑commerce product catalog cache. The existing single-node Redis instance was hitting memory limits and causing latency spikes during peak traffic, so we needed a highly available architecture without sacrificing read performance.

**Task** – Design and deploy a replicated Redis setup that could handle 200k QPS reads while keeping write latency under 5 ms, ensuring data consistency across nodes for the product catalog updates.

**Action** – I chose the leader‑follower (master‑replica) model. First, I configured one master node to accept writes and set up two follower replicas with `slave-read-only no` to allow read scaling. Using Redis Sentinel, I automated failover: if the master failed, a replica would be promoted within 10 s. To keep replication lag minimal, I tuned `repl-backlog-size` to 1 GB and used `appendonly yes` with `auto-aof-rewrite-percentage 100`. I also added a small Lua script that batched catalog updates into pipelined commands, reducing round‑trips. Finally, I implemented Prometheus alerts on `slave0_repl_offset` vs `master_repl_offset` to detect lag >1 s.

**Result** – Read throughput increased by 3× (from 60k to 180k QPS) with average read latency at 2 ms. Write latency stayed below 4 ms. Replication lag never exceeded 200 ms under peak load, and automatic failover occurred in 8 s during a simulated master outage. The project taught me how to balance replication speed against durability, and the importance of monitoring metrics for proactive maintenance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
