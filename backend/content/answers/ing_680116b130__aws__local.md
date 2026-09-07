---
qid: ing_680116b130__aws__local
question: 'Explain: Publisher-Subscriber — Top 6 Cloud Messaging Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 644
total_tokens: 876
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:19:48-05:00'
sources: []
---

**Situation**  
In my last role I led the redesign of a real‑time analytics pipeline for a media company that had to process ~10 M ad events per day and feed downstream dashboards with sub‑second latency. The existing batch job was hitting SLA limits, so I had to pick an event‑driven architecture.

**Task**  
Identify the six most effective publisher–subscriber messaging patterns on AWS that would meet our scalability (10⁶+ messages/s), low‑latency (<200 ms) and cost constraints while ensuring data consistency for downstream analytics services.

**Action**  

| Pattern | Use case | Key AWS services | Scalability & Cost |
|---------|----------|------------------|--------------------|
| 1️⃣ **Fan‑out (SNS + SQS)** | One publisher → many independent consumers. | SNS topic → multiple SQS queues (dedup, visibility). | Horizontal scaling via auto‑scaling queues; pay per message read/write. |
| 2️⃣ **Work Queue (SQS FIFO)** | Task distribution with ordering guarantees. | SQS FIFO + Lambda/EC2 workers. | FIFO guarantees up to 300 msg/s per queue; batching reduces cost. |
| 3️⃣ **Competing Consumers** | Multiple workers share load for high throughput. | SQS standard + worker fleet (ECS/EKS). | Unlimited parallelism; cost proportional to compute hours. |
| 4️⃣ **Event Bridge Bus** | Cross‑account, cross‑service event routing with filtering. | Amazon EventBridge. | Pay per rule match; auto‑scales, no server maintenance. |
| 5️⃣ **Streams (Kinesis Data Streams)** | High‑velocity data ingestion for real‑time analytics. | Kinesis + Lambda/Firehose. | Unlimited shards, pay per GB ingested & read. |
| 6️⃣ **Message Replay (SQS DLQ + CloudWatch Events)** | Reprocessing failed messages without re‑publishing. | SQS DLQ → Step Functions → retry logic. | Cost only for retries; ensures durability. |

I drafted a multi‑tenant architecture: SNS fan‑out to topic “ad-events” → two SQS queues (one for real‑time analytics, one for archival). The analytics queue fed Kinesis for downstream Lambda processing; the archival queue triggered an EventBridge rule that routed to an S3 data lake via Firehose. We added a DLQ with Step Functions to replay failures.

**Result**  
Post‑deployment we achieved 95 % reduction in lag (from 5 s to <200 ms), processed 12 M events/day, and cut operational costs by **$18K/month** compared to the legacy batch system. Customer dashboards now refresh live, increasing user engagement by 17 %.  

**Learning & Ownership**  
I drove the design from scratch (Ownership) and iterated on feedback loops with DevOps and Data teams (Dive Deep). The success was quantified through SLA metrics and cost savings—key bar‑raiser expectations for an AWS role.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
