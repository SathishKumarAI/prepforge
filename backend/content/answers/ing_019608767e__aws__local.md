---
qid: ing_019608767e__aws__local
question: 'Explain: Software — Designing Data-Intensive Applications Book'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 471
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:27:46-05:00'
sources: []
---

**Situation / Task**  
At my previous company we had a monolithic recommendation engine that read all user logs from S3, processed them with Spark, and wrote back scores to DynamoDB. The pipeline ran nightly, but latency grew as data volume doubled every month; by Q2 2024 we were missing the 8 pm “daily digest” deadline in 45% of runs. I was asked to redesign for **real‑time ingestion** while keeping cost under $50k/month.

**Action**  
I took *Ownership* and *Dive Deep*:  
1. **Requirements** – ingest ~5 TB/day, compute feature vectors within 30 min, store in a low‑latency catalog.  
2. **Design** – split the pipeline into three services:  
   - **Kinesis Data Streams** (shard count tuned to 10 MB/s) for real‑time log ingestion.  
   - **AWS Lambda** + **Step Functions** to run stateless feature extraction and store results in **DynamoDB Global Tables** for high availability.  
   - **Amazon SageMaker Pipelines** to retrain models every 12 h on the latest data.  
3. **Cost & Scalability** – Kinesis shard scaling (auto‑scaling) keeps ingestion cost at ~$2k/month; Lambda execution time is ~0.1 s per record, costing <$0.5k. DynamoDB autoscaling ensures <1% throttling.  
4. **Trade‑offs** – we moved from batch to event‑driven architecture, accepting a slight increase in operational complexity but eliminating the nightly bottleneck.

**Result**  
Within 3 weeks of deployment:  
- Latency dropped from 90 min to 12 min (≥80% improvement).  
- Daily digest hit deadline 98% of the time.  
- Operating cost fell by 35% compared with the old Spark job.  

I documented the architecture, ran a post‑mortem on a few edge failures, and introduced automated smoke tests in CI, demonstrating *Bias for Action* and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
