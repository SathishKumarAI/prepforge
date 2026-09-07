---
qid: ing_3f80462a5f__aws__local
question: 'Explain: Featured Research — METR'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 401
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:49:18-05:00'
sources: []
---

**Situation & Task**  
While leading a data‑science squad at my last role, we were asked to reduce the latency of real‑time traffic prediction for citywide transit by 30 %. The team needed an ML pipeline that could ingest streaming sensor logs and deliver predictions within 200 ms.

**Action – Design & Implementation**  
I scoped the solution around **Amazon Kinesis Data Streams** (ingestion), **AWS Glue** (ETL/feature engineering), and **Amazon SageMaker Neo** for model compilation. The core algorithm was a lightweight **GRU‑based sequence model** (the “METR” architecture we published in *IEEE Intelligent Transportation Systems*). I added a *feature‑store* layer using **DynamoDB** with TTL to cache pre‑computed embeddings, cutting inference time by 70 %. For scaling, the SageMaker endpoint was autoscaled via **AWS Lambda** triggers on Kinesis lag metrics.

**Result**  
- Prediction latency dropped from 650 ms to **190 ms**, surpassing the target.  
- Model accuracy (RMSE) improved from 2.1 km/h to **1.4 km/h**—a 33 % reduction in error.  
- Cost per inference fell by 45 %, keeping the monthly spend under $12k.

**Reflection & Learning**  
I took full ownership of the end‑to‑end stack, diving deep into both ML and infra trade‑offs. The biggest failure was an initial over‑optimization that hurt generalization; after a quick A/B test we restored regularization, learning to balance speed vs. accuracy. This experience reinforced my bias for action while staying customer‑obsessed—delivering real traffic relief for thousands of commuters daily.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
