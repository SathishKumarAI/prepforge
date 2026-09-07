---
qid: vq_ec6beb20b6__aws__local
question: HOW DO YOU DELETE DUPLICATE RECORDS WHILE KEEPING ONE COPY?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 536
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:21:16-05:00'
sources: []
---

**Situation / Task**  
I was leading a data‑cleaning sprint for the **Customer Insights** team that ingested 120 M rows nightly from multiple ad‑tech partners. Duplicate customer records caused skewed lifetime‑value calculations and inflated storage costs by ~15 %. The goal: deduplicate while preserving one canonical record per `customer_id`.

**Action (Technical)**  
1. **Ingest → S3 + Glue** – raw files landed in an S3 bucket; AWS Glue crawlers cataloged them into a Lake Formation table (`raw_customers`).  
2. **Deduplication job** – A Spark job on EMR (10 m nodes, 4 vCPU each) executed:
   ```python
   df = spark.read.table("raw_customers")
   dedup = (
       df.groupBy("customer_id")
          .agg(first("record_timestamp").alias("first_ts"),
               max("last_updated").alias("max_ts"))
          .join(df, on="customer_id")
          .where(col("record_timestamp") == col("first_ts"))
   )
   ```
   This keeps the earliest record per ID.  
3. **Write to a new Glue table** (`clean_customers`) in Parquet, partitioned by `region`.  
4. **Incremental refresh** – Using AWS DMS CDC we capture new inserts/updates and run the same logic on micro‑batches.

**Result**  
- Duplicate rows dropped from 120 M to 75 M (37 % reduction).  
- Storage cost fell from $1.8K/month to $1.1K/month.  
- Customer lifetime‑value metrics became consistent; downstream dashboards saw a 12 % improvement in forecast accuracy.

**Reflection**  
I owned the end‑to‑end pipeline, dove deep into Spark’s `agg` semantics, and iterated on the join condition after noticing false positives (learned to use `first()` with `orderBy`). I also documented trade‑offs: EMR cluster costs vs. S3 write amplification; chose Parquet for cost‑effective compression and query performance.

**Leadership Principles Highlighted**  
- **Ownership** – I drove the project from data ingestion to production deployment.  
- **Dive Deep** – Explored Spark internals, Glue catalog behavior, and partitioning strategy.  

This example shows how to delete duplicates while keeping one copy in an AWS‑centric, metrics‑driven way.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
