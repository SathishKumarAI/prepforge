---
qid: ing_09ac504a80__aws__local
question: 'Explain: Introduction — 7 Steps to Automating Descriptive Statistics with
  Python'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 478
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:48:01-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked with turning a weekly manual report of descriptive statistics (mean, median, std‑dev, percentiles) into an automated pipeline for 200+ data sets, each up to 10 GB. The goal: cut the reporting cycle from **5 days → 2 hours** and give analysts instant insights.

**Action – 7 Steps**  
1. **Ingest** – Use **Amazon S3** to store raw CSVs; trigger a **Lambda** on upload.  
2. **Validate & Clean** – Run a **PySpark job** on an **EMR cluster** (10 m5.xlarge nodes) for schema checks and NaN handling.  
3. **Feature Extraction** – Use **pandas‑api on Spark** to compute mean, median, std, 25/75 percentiles in a single pass.  
4. **Persist Results** – Write to **Amazon DynamoDB** (partition key: dataset_id) for low‑latency reads.  
5. **Version Control** – Store job definitions in **AWS CodeCommit** and CI‑deploy via **CodePipeline**.  
6. **Monitoring** – CloudWatch metrics + alerts on job failures; automated retries with exponential backoff.  
7. **Visualization** – Expose results through a lightweight **API Gateway + Lambda** that feeds into QuickSight dashboards.

**Result**  
- Reduced reporting time from 5 days to **2 hours** (≈ 80% faster).  
- Cost per dataset dropped from $12 → $1.30 due to spot‑instance usage and serverless components.  
- Accuracy: 99.9% match with manual calculations on a 100‑dataset audit.

**Reflection & Ownership**  
I **owned** the end‑to‑end pipeline, performed a cost/benefit analysis for each AWS service (Dive Deep), and iterated after an initial spike in Lambda cold starts by moving to provisioned concurrency. This showcases *Customer Obsession*—delivering instant insights—and *Ownership*, turning a manual process into a reusable, scalable system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
