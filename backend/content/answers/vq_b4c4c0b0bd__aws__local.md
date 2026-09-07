---
qid: vq_b4c4c0b0bd__aws__local
question: Describe the importance of using compress-codec parameter?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 434
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:10:12-05:00'
sources: []
---

**Situation / Task**  
In a data‑lake project for an e‑commerce retailer, we ingested 12 TB of clickstream logs nightly into Amazon S3 and queried them with Athena. The cost was $1,200/month and query latency exceeded the SLA (10 s → 45 s).  

**Action**  
I led a “compression audit” to evaluate codec options (Snappy, Gzip, Parquet‑ZSTD). I scripted a benchmark in Spark that measured write throughput, storage savings, and Athena query speed. The tests ran on a sample of 1 TB logs.

*Key decisions:*  
- Adopt **Parquet with ZSTD** for all new streams (lossless, columnar, >3× compression).  
- Enable *S3 Intelligent‑Tiering* to automatically move cold partitions.  
- Update Glue crawlers to set `compression-codec` metadata so Athena uses the right codec.  

**Result**  
After rollout:  
- Storage dropped from 12 TB → 4.2 TB (≈65% savings).  
- Athena query latency fell from 45 s to 9 s (≈80% faster).  
- Monthly S3 storage cost fell by $800, and query costs by $350.  

**Reflection**  
*Ownership*: I owned the end‑to‑end pipeline change and coordinated with Data Science, Ops, and Finance.  
*Dive Deep*: The codec benchmark revealed that Gzip saved 30% more space but hurt query speed; ZSTD hit a sweet spot.  
*Learned*: Early adoption of a “compression policy” avoided ad‑hoc cost spikes when data volume grew by 3× next quarter.

**AWS services used:** S3, Glue (crawlers), Athena, Spark on EMR.  

**Leadership Principles highlighted:** Customer Obsession (fast answers for analysts), Ownership, Dive Deep.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
