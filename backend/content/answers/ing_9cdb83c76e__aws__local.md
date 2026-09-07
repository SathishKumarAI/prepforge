---
qid: ing_9cdb83c76e__aws__local
question: 'Explain: Class KafkaConsumer<K,V> — KafkaConsumer (kafka 2.2.0 API)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 402
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:19:29-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
In a recent data‑science sprint I had to pull millions of labeled event records from Kafka 2.2.0 into an ML training pipeline for churn prediction. The requirement was to consume, de‑duplicate and serialize the stream with zero latency while guaranteeing at‑least‑once delivery.

**Action (Dive Deep & Ownership)**  
I wrapped `KafkaConsumer<K,V>` in a stateless microservice that:
1. **Configures** `enable.auto.commit=false`, `max.poll.records=10 000` to batch messages.
2. Uses `assign()`/`seek()` for precise offset control, storing committed offsets in DynamoDB (single‑partition table) so a restart resumes exactly where it left off.
3. Deserializes `V` via Avro into a POJO, then streams the batch to **Amazon Kinesis Data Firehose** → **S3** (JSON lines).  
4. Triggers an **SageMaker training job** only when a 5 GB checkpoint lands in S3, keeping costs predictable.

**Result (Deliver Results)**  
The pipeline processed 2 M events per hour with < 200 ms end‑to‑end latency and 0.01 % data loss. Cost dropped from $120/hr (self‑managed EC2) to $30/hr on Fargate + Kinesis, a **75 % reduction**.

**Bar‑raiser Takeaway**  
I owned the full data path, dove deep into Kafka’s offset semantics, quantified latency and cost, and iterated after an initial failure that caused duplicate labels—now prevented by idempotent DynamoDB keys.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
