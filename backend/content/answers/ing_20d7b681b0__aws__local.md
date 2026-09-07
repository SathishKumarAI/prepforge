---
qid: ing_20d7b681b0__aws__local
question: 'Explain: You’re In Control — Apache Cassandra | Apache Cassandra Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 392
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:41:36-05:00'
sources: []
---

**Situation / Task**  
I led a migration from an on‑prem MySQL cluster to **Apache Cassandra** for our real‑time recommendation engine (2 M requests/day). The goal was to eliminate single‑point failure and achieve >99.999% availability while keeping query latency under 50 ms.

**Action**  
*Owned* the design: I mapped the data model, chose a **wide‑row schema**, and set up **replication factor = 3** across three AWS regions (using EC2 + EBS). I implemented *compaction strategy* tuning (`SizeTieredCompactionStrategy`) to keep read amplification low.  
I added **Cassandra’s built‑in repair & anti‑entropy mechanisms** (nodetool repair, gossip protocol) and leveraged **AWS CloudWatch + Grafana dashboards** for real‑time metrics.  
For *data consistency*, I used **QUORUM reads/writes** and applied **Lightweight Transactions** where necessary.  
I scripted the entire deployment in Terraform, enabling **Infrastructure as Code** and automated rollback on failure.

**Result**  
- Availability rose from 99.3% to **>99.999%** (downtime < 1 min/quarter).  
- Latency dropped 30 % (average 35 ms vs 50 ms).  
- Operational cost fell 25 % by eliminating the costly MySQL licensing and scaling only read replicas.

**Reflection**  
I *dive deep* into Cassandra’s internals, learned that compaction aggressiveness was causing write stalls, and adjusted accordingly—an example of learning from failure.  

> **Leadership Principles:** Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
