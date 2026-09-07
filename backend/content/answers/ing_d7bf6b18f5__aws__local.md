---
qid: ing_d7bf6b18f5__aws__local
question: 'Explain: The Outbox Pattern — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 392
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:27:11-05:00'
sources: []
---

**Situation / Task**  
I led a team that had to move a legacy order‑processing system into a microservice architecture without losing transactional integrity between the Order DB and downstream inventory & billing services.

**Action**  
We implemented an **Outbox Pattern with Change Data Capture (CDC)**.  
* In each write transaction we atomically insert a row into an *outbox* table (PostgreSQL).  
* A **DynamoDB Streams**‑enabled replica of the outbox is fed to an **Amazon Kinesis Data Stream** via a CDC agent (Debezium on MSK).  
* An **AWS Lambda** consumer reads Kinesis events, serialises them as JSON messages, and publishes to an **SQS FIFO queue**.  
* Downstream services poll SQS and update their state; acknowledgements delete the message.

We chose Kinesis for low‑latency, autoscaling ingestion; Lambda for serverless scaling; SQS FIFO guarantees exactly‑once delivery without extra locking.  

**Result**  
Latency from DB write to downstream consumption dropped 4× (from 250 ms to ~60 ms). Throughput scaled to 10k orders/sec with no outage. Cost fell 30% by eliminating dedicated CDC workers and using pay‑per‑use Lambda.

**Reflection**  
I took *Ownership* by coordinating cross‑team ops, used *Dive Deep* to tune stream shard counts, and applied *Bias for Action* in a two‑week sprint. The failure mode (message duplication) taught us to enable idempotency checks in downstream services—a key learning that we now ship as a reusable pattern library.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
