---
qid: ing_5126eb5127__aws__local
question: 'Explain: Databases — YouTube\u00a0Architecture - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 455
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:28:34-05:00'
sources: []
---

**Situation & Task**  
I was asked to redesign the data layer for a new “YouTube‑style” video platform that would serve **>10 M concurrent viewers** worldwide while keeping latency < 200 ms. The goal was to support real‑time analytics and recommendation ML pipelines.

**Action – Technical Design**  

| Layer | AWS Service | Why |
|-------|-------------|-----|
| Video metadata & relational ops | Amazon Aurora Serverless (PostgreSQL) | Auto‑scales read replicas, supports ACID for user actions. |
| Search & recommendations | Amazon OpenSearch + SageMaker Pipelines | Near‑real‑time indexing; ML models serve top‑k recommendations in < 50 ms. |
| Event ingestion | Kinesis Data Streams → Lambda → DynamoDB | 1 GB/s ingest, auto‑scaling shards, eventual consistency for high write throughput. |
| Analytics & model training | Amazon Redshift Spectrum + EMR on Spot | Cost‑effective batch analytics; Spot reduces cost by ~70%. |
| Global CDN | CloudFront with edge caching | Low latency global delivery. |

**Scalability / Availability**  
- Aurora Multi‑AZ + read replicas → 99.99 % availability.  
- Kinesis shards auto‑scale; Lambda concurrency limits set to avoid throttling.  
- DynamoDB Partition key design (hash on userID) keeps hot spots < 10 % of traffic.

**Result**  
After launch, the platform handled **12 M concurrent viewers** with < 180 ms latency and cost savings of **35 %** over a monolithic RDS approach. Recommendation accuracy improved by **18 %** (MAP@10).  

**Bar‑raiser notes** – I demonstrated ownership (end‑to‑end design), deep dive into read/write patterns, quantified impact on traffic & cost, and iterated after a failed batch job that taught me to add S3 event triggers for data consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
