---
qid: ing_e7724ecb7e__star__local
question: 'Explain: Eliminate polling — What is Pub/Sub Messaging? - Pub/Sub Messaging
  Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 318
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:11:30-05:00'
sources: []
---

**Situation:**  
At my previous startup we had a real‑time analytics pipeline that processed clickstream data from our mobile app. The ingestion service was pulling events every minute from an SQS queue to keep the dashboard up to date, but latency spiked when traffic doubled during promotions.

**Task:**  
I needed to reduce polling overhead and lower response time so the dashboards reflected user activity within seconds, without over‑provisioning compute resources.

**Action:**  
I redesigned the architecture to use Amazon SNS for publish/subscribe. Each mobile client sent events directly to an SNS topic; I created two subscriptions: one to a Lambda function that writes to DynamoDB Streams and another to an SQS queue for batch processing by our data lake workers. By switching from polling to event‑driven triggers, the Lambda invoked instantly on each publish, and the downstream services were notified only when new data arrived. I also enabled SNS fan‑out to a Kinesis stream for real‑time analytics, adding a filter policy to route only high‑value events to the heavy processors.

**Result:**  
Polling latency dropped from 60 seconds to under 2 seconds on average, throughput increased by 35%, and we cut EC2 usage by 40% during peak periods. I learned that decoupling producers and consumers with Pub/Sub not only improves responsiveness but also scales cost‑effectively by consuming resources only when needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
