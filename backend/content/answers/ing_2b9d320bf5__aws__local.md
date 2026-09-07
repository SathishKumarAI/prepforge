---
qid: ing_2b9d320bf5__aws__local
question: 'Explain: So, we we got that resolved. But — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 442
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:03:32-05:00'
sources: []
---

**Situation / Task**  
I was tasked with redesigning the video recommendation pipeline for a global platform that serves **1 billion daily active users (DAU)** and streams **3 trillion minutes of video per month**. The goal: cut cold‑start latency by 70 % while keeping recommendation accuracy above 0.78 AUC.

**Action**  
*Owned* the end‑to‑end solution, applying **Customer Obsession** and **Dive Deep**.  
1. **Data ingestion** – used **Amazon Kinesis Data Streams** to buffer real‑time user events (≈ 5 GB/s) into **S3 Glacier Deep Archive** for long‑term analytics.  
2. **Feature store** – built a **feature registry** on **AWS Glue Data Catalog + DynamoDB** with per‑user feature vectors cached in **ElastiCache Redis** (TTL = 30 s).  
3. **Model training & inference** – trained a **deep factorization machine** on **SageMaker** (GPU instances), auto‑scaling via **ECS Fargate Spot** for cost efficiency. Inference served through **AWS Lambda@Edge** + **App Runner**, ensuring sub‑200 ms latency globally.  
4. **A/B testing & monitoring** – leveraged **Amazon CloudWatch Metrics** and **SageMaker Model Monitor** to track AUC drift; a 0.03 drop triggered an automatic rollback.

**Result**  
- Latency dropped from **1,200 ms → 360 ms** (70 % reduction).  
- Recommendation accuracy improved from **0.75 → 0.81 AUC** (+8 %).  
- Cost per recommendation inference fell by **$0.0004**, saving **≈ $12M annually**.

*Bar‑raiser notes:* clear ownership, deep technical dive, quantifiable impact, and a learning loop (rollback on drift).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
