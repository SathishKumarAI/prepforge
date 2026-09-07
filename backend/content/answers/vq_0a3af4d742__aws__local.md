---
qid: vq_0a3af4d742__aws__local
question: How are dataframes in Pandas merged?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 510
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:38:04-05:00'
sources: []
---

**Situation (S)**  
While leading a data‑science sprint for our recommendation engine, we hit a bottleneck: two large Pandas DataFrames—`user_behavior` (~10 M rows) and `product_catalog` (~200 k rows)—needed to be joined daily before feeding into SageMaker. The merge was taking ~15 min on an EC2 m5.xlarge, causing downstream pipelines to lag.

**Task (T)**  
Reduce the merge time to under 1 min, maintain correctness, and keep costs < $0.20 per run.

**Action (A)**  
1. **Dive Deep into Data:** Profiling revealed a one‑to‑many join on `product_id` with many duplicate keys in `user_behavior`.  
2. **Engineering Solution:**  
   * Converted both tables to Parquet and stored them in S3 (`s3://data-lake/...`).  
   * Used **AWS Glue** (PythonShell) to perform a distributed merge:  
     ```python
     user = spark.read.parquet("s3://.../user_behavior")
     prod = spark.read.parquet("s3://.../product_catalog")
     result = user.join(prod, "product_id", "inner")
     result.write.parquet("s3://.../merged/")
     ```
   * Leveraged **Amazon Athena** for quick ad‑hoc queries on the merged Parquet.  
3. **Cost & Availability:** Spot instances (c5.large) lowered compute cost by 35 %, and Glue’s serverless model eliminated idle resource waste.

**Result (R)**  
Merge time dropped from 15 min to **42 seconds**, saving ~$0.12 per run. The new pipeline processed 30 M rows/day with < 1 % error rate, directly boosting recommendation accuracy by 3 pp and increasing revenue lift of $2.5 M/month.

**Leadership Principles Highlighted:**  
- **Ownership & Bias for Action** – proactively redesigned the data flow without waiting for infra support.  
- **Dive Deep** – thorough profiling guided the choice of distributed processing over in‑memory Pandas.  

This showcases measurable impact, technical depth, and a learning loop: we monitored Glue job logs to identify future tuning opportunities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
