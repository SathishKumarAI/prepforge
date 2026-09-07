---
qid: vq_d90c363f83__aws__local
question: '? How would you debug and restart the process ?'
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 416
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:17:41-05:00'
sources: []
---

**Situation & Task**  
In my previous role I managed an ETL workflow that ingested ~2 TB/day from partner APIs into Redshift. A downstream analytics dashboard began reporting stale metrics; the job had stalled after a schema change in the source. My goal was to identify the root cause, restart the pipeline with minimal downtime, and prevent recurrence.

**Action**  
1. **Observability (Customer Obsession + Dive Deep)** – I queried CloudWatch Logs for Glue jobs, examined the Spark UI on EMR, and reviewed S3 object timestamps. The logs revealed a `NullPointerException` in a UDF triggered by an unexpected null column.  
2. **Rapid Mitigation (Bias for Action)** – I updated the job script to include defensive checks (`coalesce`) and redeployed it via CodePipeline. A Lambda function was added to auto‑trigger the job on S3 “ObjectCreated” events, ensuring no data loss.  
3. **Automation & Resilience (Ownership + Deliver Results)** – Implemented an SNS alert for job failures and a CloudWatch Alarm that invoked a Step Functions state machine to restart the Glue job with exponential back‑off.  
4. **Post‑mortem & Prevention** – Added a schema‑validation step in the ingestion Lambda; updated documentation and ran unit tests on all UDFs.

**Result**  
- Downtime reduced from 3 h to <10 min.  
- Daily data volume processed without loss (2 TB/day).  
- Failure rate dropped by 85% over the next quarter, improving dashboard accuracy for 12,000+ users.  

The experience reinforced that ownership means building end‑to‑end observability and automating recovery so customers never see stale data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
