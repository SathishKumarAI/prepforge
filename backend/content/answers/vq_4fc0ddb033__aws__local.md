---
qid: vq_4fc0ddb033__aws__local
question: What are the difference between relational database and HDFS?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 506
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:51:11-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the migration of our nightly ETL pipeline from a legacy on‑premise relational database (PostgreSQL) to an Amazon EMR cluster that read data from HDFS. The goal was to reduce query latency for 10 M daily sales records and cut storage costs by 30 %.  

**Action**  
I first **dive deep** into the workload: transactional reads/writes were ~2 GB/day, while analytical scans required full‑table scans of 8 GB. I mapped key differences:

| Feature | Relational DB (PostgreSQL) | HDFS (EMR/S3) |
|---------|----------------------------|---------------|
| Schema enforcement | Strong, ACID | Schema‑on‑read, eventual consistency |
| Query model | SQL, row‑level ops | MapReduce / Spark, columnar formats |
| Scalability | Vertical + limited sharding | Horizontal scaling, auto‑spinning nodes |
| Cost | Licensing + RDS I/O | Spot instances + S3 storage |
| Availability | Multi‑AZ with failover | High durability (S3) + cluster resiliency |

I chose **Amazon EMR** + **Apache Spark** for processing and stored data in **Parquet on Amazon S3**. This leveraged columnar compression, reduced I/O by 70 %, and allowed the cluster to autoscale during peak loads, keeping cost under $0.10/GB processed.

**Result**  
Post‑migration, query latency dropped from 12 s to <2 s for a full table scan (5× speedup), storage costs fell 32 %, and we eliminated the single point of failure inherent in our old relational setup.  

**Leadership Principles Reflected**  
- **Customer Obsession:** Faster insights improved marketing spend decisions.  
- **Ownership & Dive Deep:** I owned the migration, dissected every metric, and chose the right AWS services for scale and cost.  

Bar‑raiser cues: clear ownership, data‑driven impact, deep technical trade‑off analysis, and lessons learned (e.g., we initially underestimated network costs, so we added VPC endpoints to cut egress).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
