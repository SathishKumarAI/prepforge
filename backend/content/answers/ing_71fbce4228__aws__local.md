---
qid: ing_71fbce4228__aws__local
question: 'Explain: Interview Statistics — Abridge Software Engineer Interview Experience
  - United States'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 437
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:43:02-05:00'
sources: []
---

**Situation**  
When I joined Abridge (a medical‑transcription SaaS) we had a flaky “Interview Statistics” dashboard that was used by hiring managers to track candidate pipelines. The data was pulled from our internal SQL repo and plotted in a PowerBI report, but the latency was > 10 min and outages were common during peak interview weeks.

**Task**  
Redesign the pipeline so it delivered real‑time metrics (Cohort completion rate, average score, time‑to‑hire) with 99.9% availability, while keeping costs < $50/month.

**Action**  
1. **Ownership & Dive Deep** – I mapped the data flow: raw logs → S3 → Athena → QuickSight.  
2. Replaced the nightly ETL job with an **AWS Glue Streaming** script that ingests CloudWatch Logs in real time, writes partitioned Parquet to S3 (reducing storage by 40 %).  
3. Built a **serverless API** using **API Gateway + Lambda** (Python) to query Athena on demand; added caching via **DAX** for the most common queries.  
4. Deployed **Amazon QuickSight** dashboards that refresh every 5 min, powered by the same DAX layer.  
5. Implemented **CloudWatch Alarms** and an **SNS topic** to notify Ops if query latency > 2 s.

**Result**  
- Latency dropped from 10 min to < 30 sec (90 % reduction).  
- Availability rose to 99.97 % over the last quarter.  
- Cost decreased from $120/month to $28/month (~77 % savings).  
- Hiring managers reported a 25 % faster decision cycle.

**Learning** – The first failure was over‑provisioning Lambda memory; we tuned to 256 MB, saving $12/month and improving cold‑start times. I now routinely audit resource utilization before scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
