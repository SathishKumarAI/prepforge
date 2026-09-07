---
qid: vq_182597abc5__aws__local
question: Difference between Call-by-value and call-by-name parameter?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 407
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:40:43-05:00'
sources: []
---

**Situation / Task**  
I was leading a migration of an on‑prem ETL pipeline to **AWS Glue + Lambda** for a fintech client that needed to process millions of rows daily while keeping costs under \$10k/month. The team debated whether to pass large data frames as *call‑by‑value* or *call‑by‑name* in the Python UDFs, which would impact memory usage and execution time.

**Action (Design & AWS services)**  
I scoped the problem:  
- **Call‑by‑value** copies the entire frame into each worker—high RAM (~8 GiB per node) → increased EC2 spot cost.  
- **Call‑by‑name** lazily evaluates columns, keeping only a reference until needed—memory down to ~1 GiB.  

I prototyped both on Glue **Job Bookmarks** and **Spark dynamic allocation**, instrumenting the job with CloudWatch metrics (CPU, memory, shuffle bytes). I also set up an S3 data lake with **Partitioned Parquet** for efficient predicate pushdown.

**Result**  
Switching to call‑by‑name reduced peak memory from 8 GiB to 1.2 GiB per executor, cutting the Glue job cost by **32%** (from \$7.8k to \$5.4k/month). Runtime dropped 18%, and we avoided spot termination incidents.

**Reflection & Learning**  
I owned the decision, diving deep into Spark internals and AWS pricing models. The bar‑raiser would note my quantitative impact, clear trade‑off analysis, and post‑mortem review that documented how lazy evaluation can be leveraged for other data sources.  

*Leadership Principles:* **Ownership**, **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
