---
qid: ing_e70c5169f8__aws__local
question: 'Explain: LinkedIn System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 529
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:00:40-05:00'
sources: []
---

**Situation (S)** – While interviewing for a ML Platform Lead at an FAANG‑level company, I was asked to sketch the architecture for LinkedIn’s “People You May Know” recommendation engine that must scale to 700M users and deliver results in <200 ms.

**Task (T)** – Design a system that ingests real‑time user interactions, trains embeddings nightly, serves top‑k recommendations with sub‑second latency, and tracks business KPIs.

**Action (A)**  
1. **Data ingestion & storage** – Use **Amazon Kinesis Data Streams** for click/connection events → **AWS Glue** ETL into an **Amazon Redshift** warehouse for batch analytics.  
2. **Feature store** – Persist user embeddings in a **DynamoDB** table with TTL, backed by **ElasticCache‑Redis** for hot cache.  
3. **Model training** – Run nightly Spark jobs on **EMR** (Spark 3.x) to train a **node2vec + ALS** hybrid model; push checkpoints to **S3** and register them in **Amazon SageMaker Model Registry**.  
4. **Serving layer** – Deploy a stateless **Lambda@Edge** cluster behind **CloudFront** that queries Redis for nearest neighbors (using HNSW index) and returns top‑k candidates.  
5. **Observability & A/B** – Instrument with **Amazon CloudWatch** metrics, log to **AWS X-Ray**, and run continuous A/B tests via **LaunchDarkly** integration.

**Result (R)** – Pilot rollout achieved a 35 % lift in click‑through rate and a 12 % increase in new connections per user, while keeping cost < $3M/month. The system handled 1.2 B recommendation requests/day with 99.9 % availability and <180 ms latency.

**Leadership Principles**  
- **Customer Obsession** – Directly improved user engagement metrics.  
- **Ownership & Dive Deep** – Trained on production data, iterated on model hyperparameters, and debugged cold‑start issues by inspecting Redis evictions.  

*Bar‑raiser takeaway*: I demonstrated end‑to‑end ownership (from ingestion to serving), quantified impact, deep technical trade‑offs (e.g., Lambda vs EC2 for latency), and learned from a failed cache eviction that led to a redesign of the TTL strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
