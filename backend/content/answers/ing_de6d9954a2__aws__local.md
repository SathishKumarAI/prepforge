---
qid: ing_de6d9954a2__aws__local
question: 'Explain: Mobile Accessories — Designing Data-Intensive Applications Book'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 415
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:42:32-05:00'
sources: []
---

**Situation & Task**  
I was tasked to architect a recommendation engine for a mobile‑accessories retailer that processes 10 M daily user interactions and 1 M product updates. The goal: deliver real‑time, personalized suggestions while keeping latency < 200 ms and cost below $0.02 per request.

**Action (Design)**  
*Data ingestion*: Use **Kinesis Data Streams** to capture clickstream and inventory events, then fire‑hose into **S3** (partitioned by hour) for durable storage.  
*Feature store*: Build a **DynamoDB** table keyed on `user_id|timestamp` with TTL = 30 days; populate via **Lambda** that aggregates Kinesis records.  
*Model training*: Schedule nightly jobs in **AWS Glue** to generate user‑item interaction matrices, store them in **Amazon SageMaker Training** using a distributed XGBoost algorithm (10 GB dataset → 4 h compute).  
*Inference*: Deploy the trained model as an endpoint on **SageMaker RealTimeInference** behind an Application Load Balancer. Use **Redis ElastiCache** for caching top‑N recommendations per user, refreshing every hour.  

**Result**  
- Latency dropped from 1.2 s to < 150 ms (70 % improvement).  
- Recommendation click‑through rate rose 15 pp (from 3.2 % to 4.7 %).  
- Cost per request fell to $0.018, saving ~$120k annually.

**Reflection & Bar‑raiser notes**  
I demonstrated *Ownership* by selecting services that matched our SLA and cost targets, *Dive Deep* through precise throughput/latency calculations, and *Bias for Action* with a rapid 2‑week prototype. The key learning: caching the top‑N list drastically cut inference load; without it we’d have exceeded the RPS budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
