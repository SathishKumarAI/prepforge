---
qid: ing_5eb34b5f12__star__local
question: 'Explain: The Database As Queue Anti-Pattern — Code rant: The Database As
  Queue Anti-Pattern'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 338
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:37:26-05:00'
sources: []
---

**Situation**  
I was leading a micro‑services migration for a fintech app that had been using an RDS table as a message queue to coordinate background billing jobs. The queue table grew to over 2 M rows, and the service hit 60 % CPU on every poll because it was doing full table scans.

**Task**  
I needed to eliminate the queue bottleneck while preserving transactional safety and ensuring no messages were lost or processed twice.

**Action**  
First, I replaced the polling loop with a Kafka consumer group that reads from a dedicated topic. The database remained the source of truth for idempotency: each message contains the primary key of the billing record, and the worker performs an `INSERT … ON CONFLICT DO NOTHING` into a “processed” table. This guarantees exactly‑once processing without scanning the entire queue. I also added a TTL index on the processed table to purge old entries automatically. To keep the system resilient, I introduced a dead‑letter topic for failed messages and a monitoring alert that triggers if the lag exceeds 5 min.

**Result**  
Queue latency dropped from ~15 s to <200 ms per job, CPU usage fell below 20 %, and we eliminated the risk of message loss or duplication. The migration also freed up database resources for transactional queries, improving overall app throughput by 30 %. I learned that treating a relational table as a queue can quickly become a scalability nightmare; decoupling messaging from persistence with an event bus is far more robust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
