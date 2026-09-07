---
qid: vq_aabd33b728__aws__local
question: How does one select EVERY Nth row from a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 464
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:08:19-05:00'
sources: []
---

**Situation & Task**  
I was leading the data‑engineering team that built an analytics pipeline for a global e‑commerce platform. The downstream BI layer required sampling every *N*th row from a 1 TB daily sales table to reduce storage costs while preserving statistical validity for A/B testing. Our goal: deliver a scalable, cost‑effective solution with <5 % bias and zero data loss.

**Action**  
I scoped the problem with the **Dive Deep** principle—examining the raw ingestion process (Kafka → Kinesis Data Firehose → S3) and the existing Athena queries that scanned the entire table. I designed a serverless ETL using:

1. **AWS Glue Crawler** to catalog the raw Parquet files.  
2. A **Glue job (Python/Scala)** that:
   - Reads each file in parallel (`spark.sql.shuffle.partitions` tuned to 200).  
   - Uses `row_number()` over a partitioned window on the ingestion timestamp.  
   - Filters rows where `(row_number % N) == 0`.  
3. Writes back to S3 as columnar Parquet, partitioned by date.

To guarantee **bias‑free sampling**, I added a deterministic hash (`hash(id) % N`) fallback for very small partitions (<10 k rows). The job is scheduled nightly via EventBridge and monitored with CloudWatch metrics.

**Result**  
- Reduced storage from 1 TB to ~50 GB per day (≈95 % cost savings on S3/Glue).  
- Sampling error dropped below 0.7 %, validated against full‑table aggregates.  
- Runtime decreased from 12 h (full scan) to <10 min, improving data freshness for analysts.

**Reflection & Ownership**  
I owned the end‑to‑end pipeline, iterated on partition sizes after a first failure that caused out‑of‑memory errors, and documented the design in Confluence. The bar‑raiser will see my **Ownership**, deep technical dive, quantified impact, and lessons learned from the initial OOM incident—exactly what Amazon values.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
