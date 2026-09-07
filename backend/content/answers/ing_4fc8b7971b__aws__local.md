---
qid: ing_4fc8b7971b__aws__local
question: 'Explain: RDB (Redis Database) — How Does Redis Persist Data?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 722
total_tokens: 957
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:25:17-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the migration of a real‑time recommendation engine from an on‑prem Redis cluster to **Amazon ElastiCache for Redis**. The business required 99.999% availability while keeping read latency under 2 ms and staying within the $12k/month budget. I had to explain how Redis persists data, evaluate trade‑offs between RDB snapshots and AOF logs, and design a cost‑effective, highly available architecture.

**Action**  
1. **Dive Deep into Persistence Mechanisms** – I documented that Redis offers two primary persistence options:  
   * **RDB (snapshotting)**: every `save <seconds> <changes>` triggers an asynchronous fork creating a point‑in‑time dump (`dump.rdb`). It is fast for recovery and inexpensive in storage, but may lose up to the last snapshot interval.  
   * **AOF (Append‑Only File)**: logs every write command; `appendfsync` policy can be `always`, `everysec`, or `no`. Guarantees minimal data loss (<1 second) at higher disk I/O cost.

2. **Design Choice** – For the recommendation engine we chose **RDB + AOF (hybrid)** with `appendfsync everysec`. This balances durability (≤1 s loss) and performance, keeping write throughput >50k ops/s on a single node.

3. **AWS‑Specific Implementation** –  
   * Deploy two **ElastiCache Redis nodes** in different AZs for high availability.  
   * Enable **Automatic Backup** (RDB snapshots every 6 h) and **Multi-AZ Refresh** to keep replicas up to date.  
   * Store RDB/AOF files on **Amazon EFS** (low‑latency, durable) instead of local SSD to survive node replacement.  
   * Use **CloudWatch Alarms** on `rdb_last_bgsave_status` and `aof_rewrite_pending` to trigger auto‑scaling or manual intervention.

4. **Cost & Scalability Calculations** –  
   * 2 x cache.r5.large (1.6 GB RAM) = $0.25/hr → ~$180/month.  
   * EFS 500 GiB @ $0.30/GB/mo = $150/mo.  
   * Total ~\$330/mo, a 35% reduction vs. on‑prem hardware while improving availability from 99.9% to 99.999%.

**Result**  
Post‑migration, read latency dropped to **1.8 ms**, write throughput exceeded **70k ops/s**, and the system achieved **99.999% uptime** for a year. The hybrid persistence model limited data loss to <0.5 seconds during a node failure, meeting SLAs and reducing manual recovery time from 4 h to under 30 min.

---

### Leadership Principles Highlighted  
* **Ownership** – I owned the entire migration plan, from technical design to cost analysis.  
* **Dive Deep & Bias for Action** – Thoroughly examined Redis persistence options, ran benchmarks, and implemented a hybrid strategy quickly.  
* **Deliver Results** – Achieved measurable performance gains, cost savings, and reliability improvements within budget constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
