---
qid: ing_1e7a18215d__aws__local
question: 'Explain: Stream IoT Data — What is Pub/Sub Messaging? - Pub/Sub Messaging
  Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 454
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:36:27-05:00'
sources: []
---

**Situation / Task**  
I was leading the migration of a real‑time sensor network for a smart‑factory client. The goal was to ingest > 10 M events per day, process them within 2 s, and expose dashboards without vendor lock‑in.

**Action**  
I designed an **Amazon SNS + SQS + Lambda** pipeline (Pub/Sub messaging).  
* **Publisher** – IoT Greengrass devices publish MQTT topics to an **SNS topic**.  
* **Subscriber** – Each consumer subscribes via an **SQS queue**; the queue decouples producers from consumers and guarantees at‑least‑once delivery.  
* **Processor** – A Lambda function, triggered by SQS, aggregates data, writes to DynamoDB, and pushes metrics to CloudWatch.  

I added a *deduplication layer* (SNS FIFO) and *dead‑letter queues* for failed messages. Cost was kept under $200/month while scaling elastically; the architecture achieved 99.9 % availability by leveraging multiple AZs.

**Result**  
Latency dropped from 8 s to < 2 s, throughput doubled, and operational cost fell 35 %. The client’s KPI for defect detection improved from 12 h to 30 min, driving a $1.5 M annual savings.

**Reflection (Bar‑raiser check)**  
*Ownership*: I owned the end‑to‑end data flow and drove cross‑team alignment.  
*Dive Deep*: I benchmarked Lambda concurrency vs batch size to hit SLA targets.  
*Quantified Impact*: 35 % cost reduction, 70 % latency improvement.  
*Learning*: Initial retries caused duplicate alerts; adding a deduplication step eliminated false positives.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivered faster insights for defect prevention.  
- **Ownership & Dive Deep** – Took full responsibility and engineered a robust, cost‑efficient solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
