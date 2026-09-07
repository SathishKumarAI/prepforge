---
qid: vq_d47c020cec__aws__local
question: what are the operation of dataframe?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 531
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:16:18-05:00'
sources: []
---

**Situation & Task**  
In my last role I was tasked to migrate a 12‑TB nightly ETL pipeline from on‑prem Hadoop to AWS. The goal was to cut processing time by 70 % and reduce infra costs while keeping data quality intact.

**Action – Operations on DataFrames**  
I re‑implemented the workflow in **AWS Glue** (Spark‑based) using PySpark DataFrames, leveraging these core operations:

| Operation | What it does | Why we used it |
|-----------|--------------|----------------|
| `select()` / `filter()` | Column projection & row filtering | Cuts shuffle size → faster joins |
| `groupBy().agg()` | Aggregations (sum, avg, count) | Enables windowed metrics with minimal memory |
| `join()` (broadcast vs. shuffle) | Merging datasets | Broadcast small reference tables to avoid costly shuffles |
| `withColumn()` / `when()` | Feature engineering & conditional logic | Keeps transformations in‑memory for speed |
| `dropDuplicates()` | Deduplication | Guarantees idempotent runs |
| `write.format("parquet").partitionBy()` | Partitioned write | Improves downstream Athena queries |

I orchestrated the job with **AWS Step Functions**, added **Glue Catalog** for schema management, and scheduled via EventBridge. For cost control I enabled **Auto‑Scaling** on Glue crawlers and used **Spot Instances** for EMR clusters.

**Result**  
- Processing time dropped from 6 hrs to **1.2 hrs** (≈80 % faster).  
- Infra spend fell by **$18k/month** (from $45k to $27k).  
- Data quality incidents decreased by **90 %** due to schema enforcement in Glue Catalog.

**Reflection & Learning**  
I initially underestimated the shuffle cost of a large join, which caused out‑of‑memory errors. By diving deep into Spark UI metrics and switching to broadcast joins, I avoided costly retries—an example of *Bias for Action* and *Dive Deep*. The success reinforced my ownership mindset: continuously iterate on performance until it aligns with customer (product) needs.

**Leadership Principles Highlighted**  
- **Ownership** – Took end‑to‑end responsibility from design through production.  
- **Dive Deep** – Analyzed Spark metrics to identify bottlenecks and applied targeted optimizations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
