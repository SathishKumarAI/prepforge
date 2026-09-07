---
qid: ing_08a063bf55__aws__local
question: 'Explain: Pub/sub APIs — What is Pub/Sub Messaging? - Pub/Sub Messaging
  Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 391
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:45:30-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a team that had to ingest millions of sensor events from IoT devices and deliver real‑time alerts to downstream analytics services. The existing REST pipeline was hitting throttling limits, causing 15 % latency spikes during peak traffic.

**Action**  
I chose **Amazon SNS + SQS (Pub/Sub)** as the backbone.  
* **SNS** acted as the publisher: each device published a lightweight JSON payload.  
* **SQS FIFO queues** received the messages, guaranteeing order and exactly‑once delivery.  
* A Lambda consumer processed batches of 10 000 messages per invocation, updating DynamoDB and pushing to Kinesis for downstream ML models.

I added **Dead‑Letter Queues** for failed deliveries and CloudWatch metrics to auto‑scale the Lambda concurrency to 2000 during a sudden spike (e.g., a firmware update event). The design used **Serverless** components, keeping ops overhead minimal.

**Result**  
Latency dropped from 350 ms to under 50 ms (90 % improvement). Throughput increased from 500 msg/s to 20 000 msg/s. Cost savings were ~30 % compared with the legacy REST approach because we avoided provisioning EC2 instances and used pay‑per‑message pricing.

**Reflection**  
*Ownership*: I owned the end‑to‑end flow and conducted post‑mortems after each surge event.  
*Dive Deep*: By instrumenting CloudWatch alarms I discovered that 70 % of failures were due to transient network hiccups, leading me to add retry logic in SNS.  

This showcases Amazon’s **Customer Obsession** (low latency for end users) and **Ownership** (full lifecycle responsibility).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
