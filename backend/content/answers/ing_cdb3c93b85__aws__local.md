---
qid: ing_cdb3c93b85__aws__local
question: 'Explain: Log to multiple systems — What is Pub/Sub Messaging? - Pub/Sub
  Messaging Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 435
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:06:03-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a data‑engineering team tasked with ingesting sensor logs from millions of IoT devices into two downstream analytics pipelines (real‑time dashboards and batch ML models). The legacy pull‑based system was throttling at 10 k req/s and caused SLA violations.  

**Action**  
I introduced a **Pub/Sub messaging pattern** using Amazon SNS as the publisher hub and Amazon SQS + Lambda for consumers. Devices publish each log event to an SNS topic; SNS fan‑outs to two dedicated SQS queues—one for real‑time (high‑priority) processing, one for batch analytics. Each queue triggers an AWS Lambda that writes to DynamoDB or S3 respectively. I added dead‑letter queues and CloudWatch metrics for back‑pressure monitoring.  

**Result**  
Throughput increased from 10 k req/s to >1 M req/s with <2 ms latency on the real‑time path, while cost dropped by 35 % due to serverless scaling. SLA compliance rose from 85 % to 99.9 %.  

**Why Pub/Sub?**  
* **Decoupling** – Publishers don’t need to know consumer details.  
* **Scalability & Availability** – SNS/SQS are managed, multi‑AZ, and auto‑scales.  
* **Reliability** – DLQs and retries guarantee eventual delivery.  

**Leadership Principles**  
* *Customer Obsession* – Delivered a faster, more reliable data pipeline for downstream analytics users.  
* *Dive Deep* – Instrumented metrics to surface bottlenecks and iterated on queue policies.  

**Bar‑raiser takeaways** – I owned the end‑to‑end flow, quantified impact with clear KPIs, and learned that adding an extra queue can trade a small latency hit for massive resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
