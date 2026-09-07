---
qid: vq_e089396068__aws__local
question: '1 Question 1: How big is the input size?'
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 516
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:19:14-05:00'
sources: []
---

**Situation & Task (S)**  
In my last role at a fintech startup I was asked to redesign our on‑premise DSA (Data Stream Analyzer) that ingested 5 TB of log data daily and performed real‑time anomaly detection. The existing system could only process 10 GB/s, so we were missing critical fraud alerts.

**Action (A)**  
I owned the project, mapped out the **input size** (≈ 5 TB/day ≈ 57 MB/s) and built a new pipeline on AWS:

| Step | Service | Reasoning |
|------|---------|-----------|
| Ingest | Amazon Kinesis Data Streams | Handles high‑throughput ingest with low latency. |
| Buffer & Transform | Lambda + DynamoDB Streams | Serverless scaling, 99.999% availability, cost per invocation. |
| Compute | AWS Glue / EMR (Spark) | Batch processing of daily summaries; Spark cluster auto‑scales to 200 mCPU for peak loads. |
| Storage | S3 Glacier Deep Archive | Cost‑effective long‑term storage for raw logs. |
| Alerting | CloudWatch Alarms + SNS | Real‑time notifications with < 5 s latency. |

I applied **Dive Deep** by instrumenting metrics: ingest rate, Lambda cold starts, EMR job duration, and S3 cost per GB. I also used **Bias for Action** to prototype a serverless version that cut provisioning time from weeks to hours.

**Result (R)**  
- Throughput increased from 10 GB/s to **70 GB/s**, allowing us to process the full 5 TB/day with no back‑logs.  
- Anomaly detection latency dropped from 12 min to **< 30 s**.  
- Operational cost fell by **35 %** (from $12k/month to $7.8k/month).  
- The system achieved **99.995% availability**, meeting our SLA.

**Reflection**  
I learned that accurately sizing the input is critical; under‑estimating leads to bottlenecks, over‑estimating inflates cost. I also realized the value of continuous monitoring—early anomaly in metrics prevented a potential outage. This experience reinforced my commitment to **Ownership** and **Customer Obsession**, ensuring our fraud detection engine delivers reliable, timely insights for end users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
