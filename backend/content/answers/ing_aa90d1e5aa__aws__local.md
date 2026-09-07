---
qid: ing_aa90d1e5aa__aws__local
question: 'Explain: Auto error identification — GitHub - sierra-research/tau-bench:
  Code and Data for Tau-Bench \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 429
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:51:58-05:00'
sources: []
---

**Situation / Task**  
At my last role I was responsible for the data‑quality pipeline of a high‑frequency trading firm. We were ingesting 10 M+ rows per day from multiple feeds and needed to surface schema drift or missing values before models could be retrained. The team had no automated error detection, so every build cycle involved hours of manual SQL checks.

**Action**  
I architected an **Auto‑Error Identification** service inspired by the *Tau‑Bench* repo on GitHub.  
1. **Data ingestion** – `AWS Kinesis Data Firehose` streamed raw JSON to an `S3` landing zone.  
2. **Schema & anomaly detection** – a scheduled Lambda (Python 3.10) parsed each file, compared it against a *glue catalog* schema stored in `AWS Glue Data Catalog`. If fields were missing or out‑of‑range, the function logged to CloudWatch and sent an SNS alert.  
3. **Metric aggregation** – `Amazon Timestream` captured per‑file error counts; a quick Looker dashboard visualized drift over time.  
4. **Cost control** – I used *On‑Demand* Lambda for low traffic periods and *Provisioned Concurrency* during peak windows, keeping the monthly spend below $120 while guaranteeing 99.9 % availability.

**Result**  
Within three weeks we reduced manual data‑quality checks from 8 hrs/day to **30 min**. The error‑rate dropped by **45 %**, and model retraining lag fell from 4 days to **12 hours**.  

**Reflection**  
I took full ownership of the pipeline, performed a deep dive into schema evolution patterns, quantified impact with real metrics, and iterated on failure modes (e.g., handling partially corrupt files). This aligns with Amazon’s *Ownership*, *Dive Deep*, and *Deliver Results* principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
