---
qid: ing_8ad286ad44__aws__local
question: 'Explain: Personalization at Spotify using Cassandra & HDFS'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 413
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:39:21-05:00'
sources: []
---

**Situation** – While leading a data‑engineering team for a music streaming startup, we needed to scale our recommendation engine from 10 M daily active users to 100 M without increasing latency beyond 200 ms per request.

**Task** – Design an architecture that ingests clickstream events, stores user‑profile embeddings, and serves real‑time personalized playlists with <5 % drift in accuracy.

**Action**  
1. **Data Ingestion & Storage** – Chose **Amazon Kinesis Data Streams** (real‑time) + **AWS Glue** for ETL into a **Cassandra cluster on EC2** (low‑latency key/value store) and **HDFS on EMR** (batch analytics).  
2. **Feature Store** – Cassandra holds per‑user embeddings; HDFS stores raw event logs for nightly model retraining with Spark MLlib.  
3. **Serving Layer** – Deployed a **Lambda@Edge + DynamoDB Accelerator (DAX)** cache to hit personalized playlist metadata within 50 ms.  
4. **Cost/Scalability Trade‑offs** – Cassandra’s tunable consistency kept write cost low; EMR spot instances cut batch compute spend by 40 %.  
5. **Monitoring & A/B Tests** – Used CloudWatch metrics + SageMaker Experiments to track hit‑rate and churn, iterating models until CTR improved from 12 % to 18 % (6 pp lift).

**Result** – Achieved <200 ms latency for 95 % of requests, reduced infrastructure cost by 35 %, and increased monthly active users by 25 M within 6 months.

*Leadership Principles*: **Ownership** – drove the end‑to‑end solution; **Dive Deep** – quantified trade‑offs and tuned consistency levels.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
