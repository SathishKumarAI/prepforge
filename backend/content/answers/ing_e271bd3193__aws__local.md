---
qid: ing_e271bd3193__aws__local
question: 'Explain: How we’ve automated fleet-level root cause analysis'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 408
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:51:27-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a team that managed a 3‑million‑vehicle fleet. Quarterly we spent ~80 hrs manually digging into telematics logs to find why a subset of trucks had recurring “latency spike” alarms—costing $12k/month in idle time.

**Action**  
I built an automated root‑cause engine (RCE) that ingests raw telemetry (~5 TB/day) into **Amazon S3**, triggers **AWS Glue** jobs to clean and partition data, and loads it into a **Redshift Spectrum** cluster for fast SQL queries. A **Step Functions** state machine orchestrates the pipeline:  
1️⃣ Lambda parses logs → CloudWatch metrics → SNS alert if latency > 200 ms.  
2️⃣ If threshold breached, SageMaker’s AutoML model classifies the anomaly type (network jitter vs. hardware failure).  
3️⃣ Results are stored in DynamoDB and visualized via QuickSight dashboards.

**Result**  
- Reduced manual analysis time from 80 hrs/month to **≤5 hrs**.  
- Identified a firmware bug causing 30 % of spikes; patch rollout cut idle cost by **$9k/month** (≈75 % reduction).  
- Cost of the solution: <$1,200/yr vs. $14,400 manual effort.

**Why this matters**  
*Customer Obsession*: Faster fixes mean drivers get back on road sooner. *Ownership & Dive Deep*: I owned data pipelines, tuned ML models, and iterated after each failure to improve precision by 12 %. This approach scales—adding new vehicle types only requires a schema tweak, not a new pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
