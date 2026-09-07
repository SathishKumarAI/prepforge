---
qid: ing_b9311d8583__aws__local
question: 'Explain: Event Sourcing — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 578
total_tokens: 809
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:22:37-05:00'
sources: []
---

**Situation / Task**  
I led the redesign of our order‑processing pipeline at a mid‑size e‑commerce firm. The legacy monolith was brittle: every state change required a full database write, making rollback and audit impossible. My goal was to shift to an event‑sourced architecture that could stream changes in real time to downstream services (inventory, billing, analytics) while keeping latency under 200 ms.

**Action**  
I championed a **Pub/Sub + Event Sourcing** pattern:

| Component | AWS Service | Role |
|-----------|-------------|------|
| Event store | **Amazon Kinesis Data Streams** (partition key = OrderID) | Immutable log of every state change |
| Pub/Sub | **Amazon SNS** topics per aggregate type | Fan‑out to microservices |
| Consumers | **AWS Lambda** + **SQS** | Idempotent event handlers that rebuild read models in **DynamoDB** |
| Query layer | **Amazon DynamoDB Streams** → **Elasticsearch** | Low‑latency reads for dashboards |

Key design decisions:

- **Partitioning by OrderID** keeps related events together, enabling linear scalability (up to 10 k records/sec) while preserving order.
- **Exactly‑once processing** via Lambda’s built‑in retry and SQS visibility timeout; we measured 0.02 % duplicate rate in production.
- **Cost control**: Kinesis shards at $0.015/hr per shard, with 5 shards costing ~$36/month for the expected load—sub‑$1M annual spend versus the $3.2M legacy system.

**Result**  
Within three months:

- Latency from order creation to inventory update dropped from 1 s to **150 ms** (30% faster than SLA).
- Operational cost fell by **45 %**, and audit logs became tamper‑proof, enabling compliance reporting in minutes instead of weeks.
- The system scaled seamlessly during the holiday surge—handling 4× traffic without a single outage.

**Reflection**  
I took full ownership of the migration, iterating on the design after an early failure where missing idempotency caused duplicate charges. By diving deep into Lambda’s retry semantics and adjusting SQS visibility timeouts, we eliminated that bug. This experience reinforced my bias for action: prototype quickly, measure rigorously, and iterate until the solution meets both customer obsession (fast, reliable orders) and ownership (end‑to‑end accountability).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
