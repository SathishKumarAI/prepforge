---
qid: ing_c354265d79__aws__local
question: 'Explain: Message Throughput — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 480
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:44:43-05:00'
sources: []
---

**Situation**  
At my last role I was tasked with designing a real‑time message‑throughput system for a “WhatsApp‑like” app that had to support 10 M concurrent users and deliver 1 B messages/day without any dropped packets.

**Task**  
Build a horizontally scalable, fault‑tolerant architecture that guarantees at least **99.999% availability** and <30 ms latency for message delivery while keeping cost below $2 M/yr.

**Action**  

| Requirement | AWS Service | Design Decision |
|-------------|------------|-----------------|
| Ingestion of millions of messages per second | Amazon Kinesis Data Streams (shards 200) | Shard‑level auto‑scaling + enhanced fan‑out for low latency. |
| Real‑time processing & routing | AWS Lambda + Step Functions | Stateless Lambdas with 5 s timeout, orchestrated via SF to handle retries and dead‑letter queues. |
| Persistent storage (chat history) | Amazon DynamoDB (global tables) | Partition key: `conversation_id`; sort key: `timestamp`. Global tables give cross‑region replication for DR. |
| Push notifications & offline delivery | SNS + SQS FIFO | SNS topics per user; fallback to SQS FIFO when the device is offline, guaranteeing exactly‑once delivery. |
| Monitoring & fault tolerance | CloudWatch + X-Ray | Custom metrics (messages/second, latency buckets) trigger alarms that auto‑scale shards or add Lambda concurrency. |

**Result**  
After deployment, throughput reached **1.2 B messages/day**, latency stayed at **22 ms average**, and the system sustained a 99.999% uptime over six months. Operational cost was $1.8 M/yr—10 % below budget. The design also allowed us to roll out a new “group chat” feature in just two sprints, thanks to reusable Lambda functions.

**Learning & Ownership**  
I owned the trade‑off between DynamoDB read capacity and latency; we initially over‑provisioned, learned from real traffic patterns, and adjusted provisioned throughput by 35 % without affecting performance. This iterative “bias for action” approach kept costs in check while delivering measurable business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
