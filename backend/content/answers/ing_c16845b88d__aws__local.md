---
qid: ing_c16845b88d__aws__local
question: 'Explain: Queue vs Pub/Sub — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 441
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:40:26-05:00'
sources: []
---

**Scenario (S)**  
While revamping our recommendation engine at a consumer‑tech startup, we had to ingest millions of user events per day and trigger ML pipelines in real time.

**Task (T)**  
Decide whether to use an **Amazon SQS queue** or an **Amazon SNS/SQS pub/sub pattern** to decouple event ingestion from downstream processing while keeping latency < 200 ms for 99.9% of messages.

**Action (A)**  
I chose a *pub/sub* design:  

1. **Event source → Amazon Kinesis Data Streams** (partitioned by user ID) – scales to >10 M records/s with low latency.  
2. **Kinesis ➜ Lambda** (batch size 500, 5 s window) publishes to an SNS topic “UserEvents”.  
3. **SNS → two SQS queues**:  
   * *QueueA* for the real‑time recommendation microservice (short‑lived visibility timeout 30 s).  
   * *QueueB* for batch model retraining (longer visibility, DLQ for failures).  

This satisfies **Customer Obsession** (instant personalization) and **Ownership** (I owned the end‑to‑end flow). I ran a proof of concept: throughput 1.2 M events/s, 99.9th percentile latency 120 ms; cost $0.045 per million messages vs $0.07 with SQS alone.

**Result (R)**  
The new pipeline cut recommendation lag by **35%**, boosted click‑through rate from 3.8% to 5.2%, and reduced ops hours for devs by 40 %.  

*Bar‑raiser notes*: I demonstrated ownership, deep dive into metrics, quantified impact, and learned that a single queue under high load caused backpressure; adding pub/sub decoupled producers/consumers and improved resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
