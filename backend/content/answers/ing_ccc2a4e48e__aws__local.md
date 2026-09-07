---
qid: ing_ccc2a4e48e__aws__local
question: 'Explain: Reliable — RabbitMQ: One broker to queue them all | RabbitMQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 402
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:03:53-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a data‑pipeline team that had to ingest millions of ML training events per day from disparate sources (clickstream, IoT telemetry, internal logs). The existing architecture used one RabbitMQ broker for all queues, causing message loss during traffic spikes and making the system hard to scale. My goal was to build a *reliable* ingestion layer that could handle 5 M messages/sec with <0.1 % delivery failure.

**Action**  
I re‑architected the pipeline around **Amazon SQS + SNS** for decoupling, and introduced **Amazon Kinesis Data Streams** as a durable buffer before processing. Each event type got its own stream partition (shard), enabling parallel consumption by separate Lambda functions that push data into an **EMR cluster** for feature extraction. I also added **CloudWatch Alarms** on queue depth and DLQ metrics, and automated scaling via **Application Auto Scaling** on the Kinesis shards.

*Key decisions*:  
- Replace single RabbitMQ broker → distributed SQS/SNS + Kinesis (high availability, auto‑scaling).  
- Use Lambda for stateless consumers (cost‑effective, instant scaling).  
- Store raw events in S3 for audit and replay.  

**Result**  
Throughput increased from 0.5 M to **5 M messages/sec** with delivery success >99.999%. Costs dropped 30% due to serverless consumption. The system survived a 200% traffic surge during a product launch without downtime.

**Reflection**  
I *owned* the failure points by diving deep into RabbitMQ logs, learned that sharding and serverless scaling were critical, and applied those lessons to future projects—exactly what Amazon expects of a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
