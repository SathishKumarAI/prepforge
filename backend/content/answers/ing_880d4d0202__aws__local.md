---
qid: ing_880d4d0202__aws__local
question: 'Explain: Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 476
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:31:53-05:00'
sources: []
---

**Situation / Task**  
I was tasked to redesign the ingestion pipeline for a real‑time fraud detection ML model that processed ~5 M events per day. The legacy batch system caused 30 min latency and missed 12 % of high‑value transactions.

**Action**  
I introduced an **Amazon SQS FIFO queue** as the decoupling layer between the ingestion API and the training job. Each event was wrapped in a JSON record, stamped with a unique deduplication ID, and pushed to SQS. A Lambda function subscribed to the queue, batched 10 k records every 5 s, and forwarded them to **Amazon Kinesis Data Firehose** for persistent storage in S3 (raw) and immediate ingestion into **SageMaker Feature Store**. For model inference I used an **AWS Step Functions** state machine that pulled batches from the queue, ran a pre‑trained XGBoost model on **ECS Fargate**, and pushed predictions back to DynamoDB for real‑time lookups.

- **Scalability:** SQS scales elastically to millions of messages; Lambda concurrency limits were auto‑scaled via provisioned concurrency.  
- **Availability:** FIFO queues guarantee at‑least‑once delivery with strict ordering, mitigating data loss.  
- **Cost:** Using serverless components (Lambda, Fargate) avoided overprovisioning and reduced EC2 spend by 40 %.  

**Result**  
Latency dropped from 30 min to <5 s, increasing successful detections by **15 %** and reducing false positives by 22 %. The system now supports 10× growth without code changes.

> *Bar‑raiser cues:* ownership of end‑to‑end flow, deep dive into queue semantics, quantified impact (latency & detection metrics), and post‑mortem analysis that led to the adoption of FIFO for idempotence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
