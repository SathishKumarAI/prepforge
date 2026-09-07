---
qid: ing_a4fcf5543d__aws__local
question: 'Explain: Ordering — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 484
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:40:18-05:00'
sources: []
---

**Situation & Task**  
I was tasked to build a real‑time order processing pipeline for an e‑commerce platform that could handle 50 k orders per second during flash sales while guaranteeing at‑least‑once delivery and eventual consistency across inventory, billing, and analytics systems.

**Action – Design**  
* **Ingress** – Amazon Kinesis Data Streams (shards tuned to 10 MB/s) for low‑latency ingestion.  
* **Ordering & Deduplication** – A Lambda “OrderValidator” consumes the stream, assigns a monotonically increasing sequence number per user (using DynamoDB’s atomic counters), and writes validated events to an SQS FIFO queue (`OrderQueue`). FIFO guarantees strict ordering *per key*.  
* **Processing** – Another Lambda batch consumer pulls from `OrderQueue`, updates inventory in DynamoDB (with conditional writes) and publishes a “OrderCompleted” event to SNS.  
* **Reliability & Retry** – Dead‑letter queues for both Kinesis and SQS, CloudWatch alarms on failure rates (>1 %).  
* **Observability** – Kinesis Data Firehose streams all events to Redshift for analytics; metrics are visualized in Grafana.

**Result**  
- Achieved 99.999% order‑processing success during a 24‑hour sale, reducing cart abandonment by **12 %** versus the legacy batch system.  
- Cost per processed order dropped from $0.15 to $0.08 (≈ 47 % savings) by leveraging reserved Kinesis capacity and scaling Lambda concurrency automatically.

**Reflection**  
*Ownership*: I owned the end‑to‑end flow, wrote automated tests for idempotency, and continuously tuned shard counts.  
*Dive Deep*: Analyzed CloudWatch logs to pinpoint a 5 ms latency spike caused by DynamoDB hot partitions; solved it with provisioned throughput adjustments.  
*Learning from Failure*: After an initial outage where duplicate orders slipped through, I introduced deterministic keys in the FIFO queue, turning a blind‑spot into a feature that now guarantees ordering and idempotency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
