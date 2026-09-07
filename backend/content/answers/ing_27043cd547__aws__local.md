---
qid: ing_27043cd547__aws__local
question: 'Explain: AOF (Append-Only File) — How Does Redis Persist Data?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 485
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:54:05-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was responsible for scaling an in‑memory cache that served a global e‑commerce platform (30 M daily requests). The team needed a durable persistence strategy so that data could survive node failures without compromising latency.

**Action**  
I championed Redis **Append‑Only File (AOF)** persistence. AOF logs every write command to disk, enabling full replay on restart. I compared it with RDB snapshots and chose AOF for 99.9 % durability while keeping write throughput > 50 k ops/sec.  
Key design choices:  

| Decision | AWS Service | Reasoning |
|----------|-------------|-----------|
| AOF with `appendfsync everysec` | **Amazon EBS** (gp3) | Balances latency (~1 ms I/O) and cost ($0.10/GB‑month). |
| WAL compaction (`auto-aof-rewrite-percentage 100`) | **S3 Lifecycle** | Offloads stale logs to S3 for archival, saving on EBS. |
| Multi‑AZ replicas | **ElastiCache Redis** | Provides high availability with automatic failover (≤ 1 s switchover). |

I automated monitoring: `redis-cli INFO persistence` exposed writeback latency; I set CloudWatch alarms when it exceeded 200 ms, triggering a hot‑standby promotion. After deployment, we saw **0.3 % RTO** on node loss and **+12 % cost savings** versus an RDB‑only strategy.

**Result**  
The persistence model met SLA targets (latency < 5 ms) while reducing failure impact to under 2 seconds, directly supporting a $250M revenue stream. I documented the trade‑offs in a whitepaper that became the baseline for future cache deployments across AWS regions.  

*Leadership Principles*: **Ownership** – drove end‑to‑end solution; **Dive Deep** – quantified latency, cost, and durability metrics; **Deliver Results** – delivered measurable uptime improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
