---
qid: ing_e7adfac7bb__aws__local
question: 'Explain: Airbnb System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 420
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:02:37-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **S**ituation – In 2023 I led a cross‑functional team at Airbnb to redesign the ML recommendation engine that powers *“Homes You May Like.”* The previous system had a 12 % drop in click‑through rate (CTR) after a surge of new listings.  
> **T**ask – Build a scalable, low‑latency pipeline that can ingest millions of user interactions daily and deliver real‑time personalized scores with < 50 ms latency for 99th percentile requests.  
> **A**ction – I architected an event‑driven microservice stack on AWS:  
> - **Kinesis Data Streams** (10 M events/second) → **Lambda** for feature extraction → **DynamoDB Global Tables** for hot user state.  
> - Model training in **SageMaker Pipelines** nightly, model serving via **Amazon SageMaker Edge Manager** on an **ECS Fargate** cluster behind **ALB** with auto‑scaling based on CPU/Memory thresholds.  
> - Feature store built on **AWS Glue Data Catalog** + **Athena** for batch analytics; real‑time predictions cached in **ElastiCache Redis** (clustered, read replicas).  
> **R**esult – The new architecture cut model inference latency from 350 ms to 38 ms, boosted CTR by 18 % within two weeks, and reduced monthly ops cost by $120k by eliminating on‑prem infra.  

**Bar‑raiser insights:** I demonstrated *ownership* by owning the end‑to‑end flow, *dive deep* into latency bottlenecks (profiling Lambda memory usage), quantified impact with CTR metrics, and learned from a failed cold‑start in Lambda by migrating to Fargate for predictable performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
