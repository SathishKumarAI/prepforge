---
qid: ing_2299c2b91e__aws__local
question: 'Explain: After — I Built My Second ETL Pipeline. This Time, I Started Thinking
  Like a Data Engineer'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 430
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:44:45-05:00'
sources: []
---

**Situation & Task**  
In my first ML project I built an ad‑hoc ETL pipeline that ran nightly on a single EC2 instance. It broke when data volume doubled, and the team was stuck in a 12 h outage window. My goal: re‑architect the pipeline to be **scalable, fault‑tolerant, and cost‑efficient** while still delivering clean features for downstream models.

**Action (Design & Implementation)**  
- **Data ingestion:** Switched from manual S3 uploads to **Amazon Kinesis Data Firehose** so raw logs streamed in real time with built‑in retry logic.  
- **Processing layer:** Deployed a stateless **AWS Glue ETL job** that runs on-demand, automatically scales workers based on data size, and writes clean parquet files to an **S3 data lake** partitioned by date.  
- **Orchestration & monitoring:** Used **Amazon Step Functions** to coordinate the pipeline steps (firehose → glue → Athena). Integrated CloudWatch alarms for job failures; on alert a Lambda sends a Slack notification.  
- **Cost control:** Enabled Glue’s *job bookmarks* to avoid re‑processing already seen data, and scheduled jobs during off‑peak hours, reducing compute spend by 35 %.

**Result**  
The new pipeline processes 10× more data with <5 min latency, reduces manual intervention from 3 days to 30 minutes, and cuts monthly ETL costs from $1.2k to $780 (a 34 % savings). The downstream ML models now receive fresh features every hour, improving prediction accuracy by 12 %.  

**Learning & Ownership**  
I realized that treating data as a product—monitoring health, automating retries, and provisioning on‑demand compute—is essential. I documented failure modes, ran post‑mortems, and shared the architecture with the team, fostering a culture of continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
