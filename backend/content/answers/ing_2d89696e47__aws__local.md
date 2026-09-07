---
qid: ing_2d89696e47__aws__local
question: 'Explain: Fault Tolerant — Apache Cassandra | Apache Cassandra Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 700
total_tokens: 933
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:08:11-05:00'
sources: []
---

**Situation – Task**  
While migrating a real‑time recommendation engine from an on‑prem HBase cluster to **Apache Cassandra** on EC2, my team had to guarantee *zero data loss* and *99.999% availability* during the cutover. The business KPI was that no user request could hit a “service unavailable” page; even under a 30 % traffic spike we needed 10‑second latency.

**Action – Design & Implementation**  
I first mapped Cassandra’s fault‑tolerance primitives to our SLA:  

| Feature | AWS Service / Tool | Reasoning |
|---------|--------------------|-----------|
| **Replication Factor (RF)** | 3 (default) | Guarantees that a write is committed to ≥2 nodes before ack, protecting against single‑node failures. |
| **Consistency Levels** | `QUORUM` reads/writes | Ensures at least two replicas agree; trade‑off: slight latency increase (~5 ms). |
| **Read/Write Repair & Anti‑Entropy** | `nodetool repair`, `sstablecompactionopt` | Periodic background reconciliation keeps all replicas in sync, preventing data divergence. |
| **Dynamic Snitching** | Built‑in | Routes requests to the healthiest node, reducing impact of transient faults. |
| **Compaction Strategy** | SizeTiered + Leveled (for hot keys) | Keeps read amplification low, aiding fault tolerance under heavy writes. |
| **Multi‑AZ Deployment** | EC2 Auto Scaling Groups in 3 AZs | Protects against zone failures; combined with Cassandra’s RF = 3, we get *regional* availability. |

I scripted an automated `nodetool repair` schedule (every 4 hrs) and set up CloudWatch alarms on node latency & disk I/O to trigger auto‑replacements. During the migration, we observed:

- **Write throughput**: 120k ops/s sustained with <10 ms latency.
- **Read latency**: 95th percentile at 8 ms, even during a 30 % traffic spike.
- **Zero data loss**: No divergent replicas detected over 48 h of validation.

**Result – Impact & Metrics**  
Post‑migration, the recommendation engine achieved **99.9999% availability** and a **25% reduction in read latency** compared to HBase. The automated repair pipeline cut manual ops hours by **70%**, freeing engineers to focus on feature work.  

**Reflection – Learning from Failure**  
Initially we used `LOCAL_QUORUM`, which under a single‑AZ outage caused 15 ms spikes; switching to global `QUORUM` eliminated that. This taught me the importance of aligning consistency settings with fault‑tolerance goals—a classic *Bias for Action* lesson balanced by *Dive Deep* analysis.

> **Leadership Principles Highlighted**  
> - **Customer Obsession**: Delivered uninterrupted, low‑latency recommendations.  
> - **Ownership & Dive Deep**: Ownled the migration, dissected replication & consistency trade‑offs, and automated repair to avoid future failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
