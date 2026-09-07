---
qid: ing_fe21bf675e__aws__local
question: How many message queues do you know? — Types of Message Queues
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 624
total_tokens: 858
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:52:45-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *“I’ve worked with over a dozen queueing patterns in production—both open‑source and managed—because the right pattern drives reliability, cost, and speed.”*  

| Queue type | Typical use case | Core AWS services | Key metrics |
|------------|-----------------|-------------------|-------------|
| **SQS Standard** | High‑throughput, at‑least‑once delivery | `Amazon SQS` | 1 M+ messages/sec, 5 % duplicate rate |
| **SQS FIFO** | Ordered, exactly‑once processing | `Amazon SQS` | 300 msg/s per queue, 0.01 s latency |
| **SNS + SQS fan‑out** | Publish/subscribe to multiple consumers | `SNS`, `SQS` | 10 M+ notifications/day |
| **Kinesis Data Streams** | Real‑time analytics & ML feature pipelines | `Amazon Kinesis` | 500 MiB/s per shard, <1 s latency |
| **Kafka (MSK)** | Low‑latency event ingestion & replay | `Amazon MSK` | 50 k msg/s per broker, 10 µs ack |
| **EventBridge** | Serverless event bus across services | `Amazon EventBridge` | 200 M events/month, <5 ms delay |
| **SQS + Lambda** | Serverless workers on demand | `SQS`, `AWS Lambda` | 100 k invocations/sec, cost $0.20/MB‑s |
| **Redis Streams** (ElastiCache) | In‑memory fast queue for microservices | `Amazon ElastiCache – Redis` | <1 ms latency, 10 k msg/s |

### STAR example

- **Situation:** Our ML training pipeline stalled because the feature store was bottlenecked on a legacy RabbitMQ cluster.  
- **Task:** Migrate to an AWS‑native solution that guarantees at‑least‑once delivery and auto‑scales with training jobs.  
- **Action:** Deployed `Amazon Kinesis Data Streams` (1 shard) for feature ingestion, wired it to `S3` via Lambda for persistence, and used `SQS FIFO` to trigger Spark jobs in EMR. Added CloudWatch alarms on *GetRecords.IteratorAgeMilliseconds* > 30 s.  
- **Result:** Throughput increased from 5 k msg/s to 120 k msg/s; training job latency dropped 60 % (from 12 min to 4 min). Cost fell by 35 % due to serverless Lambda scaling and reduced EC2 hours.

**Bar‑raiser cues:** ownership of the full pipeline, deep dive into throughput vs. cost trade‑offs, quantitative impact, and lessons learned when a fallback replay path was needed after a shard failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
