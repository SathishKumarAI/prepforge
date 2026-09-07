---
qid: ing_2f3c4ce0cd__aws__local
question: 'Explain: When You Need It — Durable Execution'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 438
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:12:16-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
At my previous firm we built a real‑time recommendation engine that pulled user telemetry from Kafka and sent personalized offers to mobile devices. A sudden spike in traffic caused message loss during a database migration, resulting in missed opportunities worth ~$3 M/month. I was tasked with designing a fault‑tolerant “durable execution” pipeline so we could guarantee at‑least‑once delivery without compromising user experience.

**Action (Ownership + Dive Deep)**  
1. **Persist messages in Amazon SQS FIFO** – ensures order and idempotency, backed by DynamoDB Streams for replayability.  
2. **Trigger AWS Lambda with a dead‑letter queue** – processes each event, writes to an “offers” table in Aurora Serverless (pay‑per‑query).  
3. **Implement exponential back‑off & retry logic** – using SQS’s `VisibilityTimeout` and Lambda’s built‑in retry policy.  
4. **Add CloudWatch metrics (`Processed`, `Failed`, `DLQCount`) + Alarms** to surface issues within 1 min.

This architecture guarantees that every telemetry event is processed at least once, even under load or partial failures, while keeping latency <200 ms for end users.

**Result (Deliver Results)**  
- **99.999% message durability** during a 10× traffic surge.  
- **Reduced SLA violations by 97%**, saving ~$2.5 M in lost revenue per quarter.  
- **Operational cost** stayed under $1,200/month vs. the prior $4,500 spent on custom replication.

**Reflection (Bias for Action & Learn)**  
I initially over‑provisioned SQS queues; after monitoring, I tuned `MaxReceiveCount` to 3 and reduced queue size by 40% without affecting durability—learning that “less is more” when backed by solid metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
