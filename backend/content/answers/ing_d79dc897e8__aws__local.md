---
qid: ing_d79dc897e8__aws__local
question: 'Explain: Apache Flink — Batch vs Stream Processing - What''s the Difference?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 499
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:26:56-05:00'
sources: []
---

**Answer (Amazon Style)**  

> **Leadership Principles:** *Customer Obsession* & *Dive Deep*

### Situation
At my previous role I was asked to refactor an ETL pipeline that processed ~5 TB of log data nightly and also needed near‑real‑time anomaly alerts for a fintech client. The legacy system used Spark batch jobs, causing 12 h latency for the alerting use case.

### Task
I had to decide whether to keep batch processing or switch to a streaming solution using **Apache Flink** while keeping cost under $2k/month and ensuring 99.9% availability.

### Action
1. **Clarified Requirements:**  
   - Batch: nightly aggregation of user sessions (window size = 24 h).  
   - Stream: real‑time fraud detection with ≤ 200 ms latency.

2. **Designed Dual Flink Pipelines**  
   - *Batch* – `DataSet` API, executed on an EMR cluster (10 m5.xlarge nodes) for 1 h → $0.40/exec.  
   - *Stream* – `DataStream` API on Kinesis Data Analytics (Flink managed service). State stored in DynamoDB; checkpoints every 30 s to S3.

3. **Scalability & Cost**  
   - Auto‑scaling for stream cluster: 5–15 m6g.large nodes, cost ≈ $1.8k/month.  
   - Batch cluster spun down after job → $0.12/exec.  

4. **Availability**  
   - Multi‑AZ deployment; state recovery from S3/SQS ensures < 2 min downtime.

5. **Result**  
   - Reduced alerting latency from 12 h to < 200 ms (× 360 x faster).  
   - Overall cost dropped by 35% while maintaining data integrity.

### Result
The client now receives fraud alerts in real time, improving customer trust and reducing chargebacks by **15% YoY**. I documented the architecture and trained the team, turning a single‑team project into a cross‑functional knowledge base—demonstrating ownership and scalable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
