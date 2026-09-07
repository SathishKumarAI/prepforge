---
qid: vq_0ae28dd640__aws__local
question: What are the different ways to handle row duplication in a PySpark DataFrame?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 482
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:38:11-05:00'
sources: []
---

**Leadership Principles:** *Ownership*, *Dive Deep*  

**Situation (S)**  
I led a data‑engineering team that ingested > 5 TB of click‑stream logs nightly into an EMR cluster. Duplicate rows were polluting downstream analytics and inflating storage costs by ~12 %.  

**Task (T)**  
Design a robust, cost‑effective deduplication pipeline that runs in under 4 h each night while keeping data freshness.

**Action (A)**  
1. **Schema enforcement & partitioning** – added a *dedupe_flag* column and partitioned by date/hour to limit scan scope.  
2. **Two‑step PySpark strategy**  
   - **Hash‑based de‑dup:** `df.withColumn("hash", md5(concat_ws("|", *cols)))` → `dropDuplicates(["hash"])`. Fast, O(n) with minimal shuffle.  
   - **Window‑function de‑dup (for high‑cardinality keys):** `row_number().over(Window.partitionBy(keys).orderBy(ts))` → filter `rn==1`. Handles subtle duplicates missed by hash due to collisions.  
3. **Persist to S3 via EMRFS** – write deduped data in Parquet, partitioned, and register in Glue Data Catalog for Athena queries.  
4. **Cost control** – used spot instances (80 % savings) and set `spark.sql.shuffle.partitions` to 2000 based on cluster size.  

**Result (R)**  
- Reduced duplicate storage from 12 % to < 1 %.  
- Cut nightly ETL runtime by 35 %, freeing ~4 h of compute for other jobs.  
- Achieved > 99.9 % accuracy in downstream metrics, validated against ground‑truth sample sets.

**Learning & Bar‑raiser cues:** I documented trade‑offs (hash collisions vs window cost), iterated on partition size, and performed A/B tests to prove impact—demonstrating deep ownership and data‑driven decision making.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
