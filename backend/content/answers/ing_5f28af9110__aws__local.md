---
qid: ing_5f28af9110__aws__local
question: 'Was DynamoDB the right choice? — From Zero to 50 Million Uploads per Day:
  Scaling Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 560
total_tokens: 807
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:01:01-05:00'
sources: []
---

**Situation / Task**

I led the media ingestion pipeline for a design‑tool startup that grew from 10 k to 50 M uploads/day in under two years. The core requirement was a low‑latency, globally consistent key/value store for metadata (user id, file hash, status). We had to keep operational costs predictable while handling bursty traffic during product launches.

**Action**

I evaluated DynamoDB, RDS, and an S3+Glue approach:

| Option | Cost predictability | Throughput limits | Consistency | Operational effort |
|--------|---------------------|-------------------|-------------|--------------------|
| **DynamoDB** | Pay‑per‑request + Reserved Capacity | Unlimited with auto‑scaling | Strong (single‑region) | Low |
| **RDS** | Variable, high at scale | 10 k RPS max before sharding | Strong | High |
| **S3+Glue** | Cheap storage, expensive ETL | Near‑unlimited reads | Eventual | Medium |

I chose DynamoDB because it met all constraints:  
* **Scalability:** Auto‑scaling on read/write units allowed 50 M uploads/day (≈5 k writes/sec) without provisioning.  
* **Availability:** Built‑in multi‑AZ replication gave 99.999% uptime.  
* **Cost:** We reserved 80 % of the capacity, reducing spend by 30 % vs on‑demand.  

We designed a *partition key* as `userId#uploadDate` and a *sort key* as `fileHash`. Secondary indexes exposed file status for analytics. To avoid hot partitions during peak events, we added a deterministic hash prefix (`h1`, `h2`, …) to the partition key.

**Result**

After deployment:

- **Latency:** 95 % of writes < 20 ms (vs 200 ms on RDS).  
- **Cost:** Monthly spend dropped from $12k to $8.4k (30 % savings).  
- **Reliability:** Zero downtime during a 10‑day marketing campaign that pushed uploads over 70 M/day.

**Reflection**

I took full ownership of the decision, performed a deep dive into traffic patterns, and validated with a pilot. The trade‑off was higher read costs during peak periods, but we mitigated it by caching hot metadata in ElastiCache. If I could redo it, I'd add a *write‑through cache* to reduce DynamoDB write amplification further. This experience reinforced that **Ownership** and **Dive Deep** are essential when scaling at Amazon’s pace.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
