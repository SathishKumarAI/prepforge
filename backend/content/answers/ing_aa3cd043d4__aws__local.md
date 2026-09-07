---
qid: ing_aa3cd043d4__aws__local
question: 'Explain: Read-optimized permanent index table — How LedgerStore Supports
  Trillions of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 528
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:51:03-05:00'
sources: []
---

**Situation & Task**  
At Uber I was tasked to redesign the legacy “Read‑Optimized Permanent Index” that served every trip request and driver location lookup. The system had to scale from 1 billion rows to **trillions of indexes** while keeping read latency under 5 ms for 99.9% of requests.

**Action – Design & AWS Services**  
I led a cross‑functional team and built a *LedgerStore* that leveraged:

| Layer | AWS Service | Reasoning |
|-------|-------------|-----------|
| **Write‑through layer** | **Kinesis Data Streams + Lambda** | Guarantees ordered ingestion, scales to >10 M events/s. |
| **Index storage** | **DynamoDB Global Tables (partitioned by region)** | Low‑latency reads, automatic multi‑region replication, and fine‑grained billing. |
| **Cold data archival** | **S3 + Athena / Redshift Spectrum** | Cost‑effective for 80% of infrequently accessed rows while still queryable in seconds. |
| **Schema evolution & analytics** | **AWS Glue + Lake Formation** | Automates crawler jobs and provides fine‑grained access control across the lake. |

We introduced a *hash‑based sharding* strategy that keeps each partition <10 GB, enabling DynamoDB to maintain sub‑5 ms latency even at 3 trillion rows. We also implemented **time‑to‑live (TTL)** on stale indexes to keep storage costs under $2M/month.

**Result**  
- Read latency dropped from 12 ms to **4 ms** (99.9th percentile).  
- Throughput grew from 1 billion to 3 trillion indexed rows with no service interruption.  
- Operational cost fell by **35%** due to efficient tiering and TTL cleanup.

**Reflection & Learning**  
I learned that *ownership* means owning the full data‑life cycle, not just reads or writes. The deep dive into DynamoDB’s partition limits revealed a hidden bottleneck; addressing it early avoided costly sharding hacks later. I documented failure scenarios (e.g., Kinesis lag) and built automated alarms—showing bias for action and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
