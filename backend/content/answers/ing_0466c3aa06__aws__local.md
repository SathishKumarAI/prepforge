---
qid: ing_0466c3aa06__aws__local
question: 'Explain: 7 Steps to Automating Descriptive Statistics with Python'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 506
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:34:38-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team to replace manual Excel reports for our quarterly customer‑behavior analytics with an automated Python pipeline. The goal was to cut report turnaround from **3 days → 30 minutes** while keeping accuracy above **99.5%**.

**Action**  
1. **Define scope & metrics** – identified key descriptive stats (mean, median, std dev, percentiles) for ~10 M rows of clickstream data.  
2. **Extract‑Transform‑Load (ETL)** – used *AWS Glue* jobs written in Python to read raw logs from S3, clean nulls, and aggregate by user cohort.  
3. **Statistical engine** – deployed a lightweight *Pandas + NumPy* script on an EC2 Spot instance; leveraged *Dask* for parallelism across 4 vCPUs.  
4. **Automate execution** – scheduled the Glue job via EventBridge, triggered Lambda to start the EC2 instance and shut it down after completion (cost ≈ $0.02 per run).  
5. **Store results** – persisted CSVs back to S3 in Parquet for fast Athena queries.  
6. **Validate & monitor** – compared outputs against legacy Excel using unit tests; set up CloudWatch alarms for deviations > 0.1%.  
7. **Distribute insights** – published results to an Amazon QuickSight dashboard accessible to product managers.

**Result**  
- Report latency reduced from 3 days to **30 minutes** (≈ 99% time savings).  
- Cost per run dropped from $5 (manual effort) to <$0.05 (AWS bill).  
- Accuracy maintained at **99.6%** versus the previous 98.9%.  

**Leadership Principles Reflected**  
- *Customer Obsession*: Delivered faster, more reliable insights for product teams.  
- *Ownership & Dive Deep*: Designed end‑to‑end pipeline, tuned performance, and iterated on failure points (e.g., handling missing data).  

Bar‑raisers listen for quantified impact, clear ownership, deep technical decisions, and evidence of learning from early failures—exactly what this project demonstrates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
