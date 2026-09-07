---
qid: ing_167d99ab71__aws__local
question: 'Explain: Cleaning the Column Names — How to Clean Messy CSV Files with
  Python: A Beginner\u2019s Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 478
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:16:26-05:00'
sources: []
---

**Situation / Task**  
I was hired by a fintech startup to build an automated ingestion pipeline for raw CSV feeds from third‑party vendors. The feeds had inconsistent column names (e.g., `cust_id`, `Cust ID`, `customerId`) that broke downstream ML models, causing a 35 % drop in prediction accuracy.

**Action**  
I designed a serverless solution on AWS:

| Step | Service | Reasoning |
|------|---------|-----------|
| **1. Ingest** | S3 + EventBridge | Store raw CSVs; trigger on upload. |
| **2. Transform** | Lambda (Python 3.11) | Run a `pandas`‑based script that: <br>• Uses regex & fuzzy matching to map columns to a canonical schema.<br>• Logs mismatches to CloudWatch for audit. |
| **3. Persist** | Glue Catalog + Athena | Register cleaned tables; enable SQL queries for downstream ML jobs. |
| **4. Monitor** | CloudWatch Alarms + X-Ray | Capture latency (< 2 s per file) and error rates. |

The Lambda function ran in a dedicated VPC with 1 GB RAM, scaling automatically to 10 concurrent invocations—enough for peak bursts of 200 files/day.

**Result**  
- Reduced column‑name errors from **35 %** to **< 0.5 %**.  
- Improved ML model accuracy by **12 pp** (from 78 % to 90 %).  
- Cut ingestion cost from $1.20/hr to **$0.32/hr** by eliminating on‑prem ETL servers.

**Learning / Bar‑raiser notes**  
I *owned* the entire pipeline, diving deep into regex edge cases and Lambda cold‑start optimization. I quantified impact with clear metrics (accuracy, error rate) and iterated based on failure logs—demonstrating *Customer Obsession*, *Ownership*, and *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
