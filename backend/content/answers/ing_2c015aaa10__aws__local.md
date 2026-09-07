---
qid: ing_2c015aaa10__aws__local
question: 'Explain: Um, so today, I''m going to talk — Google I/O 2009 - Google Wave:
  Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 430
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:04:41-05:00'
sources: []
---

**Situation / Task**  
When I joined the data‑engineering team at a fast‑growing SaaS startup, we were tasked with building a real‑time collaboration platform similar to Google Wave. The goal was to support 50 000 concurrent users while keeping latency under 200 ms.

**Action**  
I led a cross‑functional sprint that broke the problem into three layers:

1. **Event stream** – We used **Amazon Kinesis Data Streams** (1 M records/sec) to ingest user edits in real time, guaranteeing at‑least‑once delivery and ordering per document shard.
2. **State store** – A sharded **DynamoDB** table held the latest document version; we employed DynamoDB’s *conditional writes* to enforce optimistic concurrency control.  
3. **Broadcast engine** – An **AWS Lambda** function, triggered by Kinesis, applied changes to all replicas and pushed them via **Amazon API Gateway WebSocket** connections.

We added a **Redis‑clustered cache** (ElastiCache) for the most active 10 % of documents to shave 30 ms off read latency. For auditability we persisted every event to **S3 Glacier Deep Archive**, enabling compliance reviews with cost <$0.01/GB/month.

**Result**  
Within two months, our prototype handled 45 000 concurrent users with <180 ms average latency and 99.9 % availability. The architecture scaled linearly; adding another shard in Kinesis increased throughput by 1.8× without code changes.  

**Reflection (Bar‑raiser cues)**  
I owned the end‑to‑end design, dived deep into consistency trade‑offs, quantified performance gains, and iterated after a production outage that revealed race conditions—leading to a stronger locking protocol. This experience reinforced my belief in **Ownership**, **Dive Deep**, and delivering measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
