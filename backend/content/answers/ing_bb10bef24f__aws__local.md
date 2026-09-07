---
qid: ing_bb10bef24f__aws__local
question: 'Explain: CDC Approaches — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 384
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:26:40-05:00'
sources: []
---

**Situation & Task**  
I led a migration of our on‑prem data lake to an S3‑based analytics platform at a fintech where real‑time fraud alerts required sub‑second updates. The challenge: capture every change in the transactional database and stream it to downstream ML models with minimal latency.

**Action (Design)**  
1. **Change Data Capture** – I chose Amazon DMS for CDC, enabling *continuous replication* from PostgreSQL to an SQS queue.  
2. **Stream Processing** – Lambda functions consume SQS, transform records, and push them into Kinesis Data Streams.  
3. **ML Inference Layer** – An ECS‑Fargate container hosts a TensorFlow model that reads the stream and writes predictions to DynamoDB for instant lookup by the fraud engine.  
4. **Observability & Scaling** – CloudWatch metrics trigger auto‑scaling of Lambda concurrency; Kinesis shards are increased when CPU >70 %.  

**Result**  
- Latency dropped from 5 s (batch ETL) to <200 ms per record, improving fraud detection accuracy by 12 % (from 88 % to 100 %).  
- Cost was reduced by 18 % through serverless scaling versus fixed EC2.  

**Reflection (Bar‑raiser cues)**  
I took *Ownership* of the entire pipeline, performed a *Dive Deep* into DMS replication lag and Lambda timeout logs, and iterated until SLA met. The failure mode—SQS backlog during peak load—was mitigated by implementing dead‑letter queues and adjusting batch size. This experience reinforced my bias for action while ensuring robust observability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
