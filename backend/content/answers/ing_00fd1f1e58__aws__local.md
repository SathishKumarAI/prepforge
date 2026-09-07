---
qid: ing_00fd1f1e58__aws__local
question: 'Explain: When to Use Pub/Sub — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 575
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:26:51-05:00'
sources: []
---

**Situation (S)**  
While building a real‑time fraud detection pipeline for a payment platform, I had to ingest billions of transaction events per day and feed them into multiple ML models—anomaly scoring, rule‑based filtering, and a reinforcement learning engine that updated its policy every minute. The ingestion layer needed to decouple producers (POS terminals, mobile apps) from consumers (ML workers, analytics dashboards), guarantee at least once delivery, and support elastic scaling as traffic spiked during holidays.

**Task (T)**  
Design an event bus that can handle high throughput, low latency, and provide durability without becoming a single point of failure. I had to decide whether to use a classic queue (SQS) or a publish/subscribe model (SNS + Kinesis Streams).

**Action (A)**  
I chose **Amazon Kinesis Data Streams** as the core Pub/Sub fabric because:  

| Requirement | Why Kinesis Pub/Sub? |
|-------------|----------------------|
| **Multiple consumers** | Each ML model can subscribe independently without extra queues. |
| **At‑least‑once semantics** | Shards guarantee record durability; consumer checkpoints avoid data loss. |
| **Elastic scaling** | Auto‑scaling shards support 10 GB/s throughput, matching our peak of 12 GB/s during Black Friday. |
| **Low latency** | Records are available to consumers in <200 ms, enabling near‑real‑time scoring. |
| **Cost efficiency** | Pay only for read/write capacity; no need for separate SQS queues per consumer. |

I added an SNS topic for alerting when shard limits were approached, and used Lambda to checkpoint Kinesis shards into DynamoDB. For high‑availability, I replicated the stream across two AZs and enabled data retention of 24 hours.

**Result (R)**  
The Pub/Sub design reduced end‑to‑end latency from 1.2 s (SQS + Lambda) to <200 ms. Throughput scaled automatically during a 50% traffic surge, keeping processing lag below 5 seconds. Cost dropped by **35 %** compared to the queue‑based baseline because we eliminated per‑consumer SQS queues and leveraged Kinesis’s efficient shard scaling.

---

### Leadership Principles Highlighted
- **Customer Obsession:** Delivered instant fraud alerts that protected merchants from losses.  
- **Ownership & Dive Deep:** Built end‑to‑end pipeline, tuned shard count, and monitored latency at the packet level.  

Bar‑raiser signals: clear ownership of scalability trade‑offs, quantified performance gains, and learning loop—after a 12 GB/s spike we re‑architected to use Kinesis Streams instead of SQS, proving iterative improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
