---
qid: ing_c0e965ab90__aws__local
question: 'Explain: User Base — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 516
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:40:02-05:00'
sources: []
---

**Situation (S)** – I was asked to redesign Instagram’s “User Base” feature so it could serve **10 billion active users** while delivering personalized feeds in real‑time.

**Task (T)** – Build a scalable, highly available system that ingests millions of posts per second, stores user profiles, and runs ML‑based ranking for each viewer without compromising latency (<200 ms).

**Action (A)**  
1. **Data ingestion & storage** – Use **Amazon Kinesis Data Streams** to buffer uploads, then fire‑hose into **DynamoDB Global Tables** (partitioned by country) for low‑latency profile reads.  
2. **Feature extraction** – Trigger a **Lambda** per batch to push image/video metadata to **SageMaker Pipelines**, training a *contrastive* recommendation model nightly.  
3. **Serving layer** – Deploy the model as an **AWS Inferentia** endpoint behind **Amazon CloudFront**; cache top‑10 feeds in **ElastiCache for Redis** per region.  
4. **Observability & cost control** – Use **CloudWatch Metrics** + **X-Ray** to track 99.9 % availability, auto‑scaling based on queue depth, and spot‑instance back‑end compute.

**Result (R)** – Achieved a 3× reduction in average feed latency, increased user engagement by **12 %** (daily active users grew from 1B to 1.2B), and cut inference cost by **40 %** through model compression and spot usage.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Deliver instant, relevant content that keeps users scrolling longer.  
- **Ownership & Dive Deep** – Own the end‑to‑end pipeline, from ingestion to ML scoring, continuously profiling bottlenecks.  

Bar‑raisers look for concrete ownership, deep technical detail (e.g., why Kinesis over SQS), quantified impact (latency, engagement), and lessons learned—here, shifting to Spot Instances saved cost while maintaining SLA.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
