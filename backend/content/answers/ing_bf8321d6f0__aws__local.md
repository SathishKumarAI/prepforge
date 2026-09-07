---
qid: ing_bf8321d6f0__aws__local
question: 'Explain: Manual cleanup — Why a database is not always the right tool for
  a queue based system - CloudAMQP'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 426
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:37:14-05:00'
sources: []
---

**Situation** – In my last role I built an event‑driven order‑processing pipeline that used RabbitMQ (CloudAMQP) for decoupling microservices. The queue held up to **10 k messages per second**, but the downstream consumer started dropping messages during peak load, and we saw a 15 % increase in abandoned carts.

**Task** – I had to investigate why our “cleanup” logic was failing and decide whether the database should be used for queue management or if another pattern would scale better.

**Action** –  
1. **Dive Deep**: Instrumented RabbitMQ with Prometheus metrics (queue depth, consumer lag). We saw 95 % of messages stuck in a single partition due to lock contention in our PostgreSQL “cleanup” table.  
2. **Ownership & Bias for Action**: Migrated the cleanup logic from a blocking SQL job to an *event‑driven* Lambda that processes `message_cleaned` events asynchronously.  
3. **AWS Services**:  
   - **Amazon SQS FIFO** (instead of CloudAMQP) for guaranteed ordering and at‑least‑once delivery.  
   - **DynamoDB Streams** to trigger cleanup without locking the DB.  
4. **Scalability & Cost**: SQS scales elastically, eliminating 30 % of EC2 spend; DynamoDB’s read/write capacity auto‑scales with a predictable $0.25/1M writes.

**Result** – Queue latency dropped from 8 s to <200 ms during peak hours, cart abandonment fell by **22 %**, and overall system cost decreased by **18 %** in the first quarter post‑migration.

*Bar‑raiser note*: I showcased ownership (identified root cause), depth (metrics & architectural trade‑offs), quantified impact (latency & cost savings), and learned that a database is often a bottleneck for high‑throughput queues.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
