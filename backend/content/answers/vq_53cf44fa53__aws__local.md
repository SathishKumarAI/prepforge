---
qid: vq_53cf44fa53__aws__local
question: How can you create a DataFrame a) using existing RDD, and b) from a CSV
  file?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 435
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:51:45-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous role I was tasked with building an analytics pipeline that could ingest streaming logs, persist them in S3, and expose a real‑time DataFrame for downstream ML models. The goal was to cut the model training time by 30 % while keeping costs below $5K/month.

**Action (A)**  

| Scenario | Approach | AWS Services |
|----------|----------|--------------|
| **a) From an existing RDD** | • `SparkSession.read` is not needed; convert the RDD to a DataFrame via `spark.createDataFrame(rdd, schema)`.<br>• Use a custom case class or StructType for strict typing. | `Amazon EMR`, `Apache Spark` |
| **b) From a CSV file** | • Store raw CSVs in an S3 bucket (`data/raw/`).<br>• Read with `spark.read.option("header","true").csv(s3://bucket/data/raw/*.csv")`.<br>• Cache the DataFrame in memory for iterative ML. | `Amazon S3`, `Amazon EMR`, `AWS Glue` (catalog) |

**Result (R)**  
- Converted 2 TB of streaming logs to a cached DataFrame in < 4 min on an EMR cluster, reducing training time from 90 min to 63 min (30 % improvement).  
- Cost per month fell from $7.8K to $4.6K by switching to S3 object lifecycle policies and using spot instances for the cluster.

**Learning & Bar‑raiser cues**  
I took full ownership of schema evolution, added automated tests that validated row counts against source files (Bias for Action). I also performed a deep dive into GC tuning to avoid OOM errors (Dive Deep). The result demonstrates measurable impact on both performance and cost—key metrics that bar‑raisers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
