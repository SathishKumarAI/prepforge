---
qid: ing_970ca08fcd__aws__local
question: 'Explain: Interview Notes - Zomato Design — Interviewnotes 2Ndjune2022'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 549
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:07:39-05:00'
sources: []
---

**Situation / Task**  
When I joined a startup‑style food‑tech company, the product team wanted an end‑to‑end recommendation engine that could surface personalized restaurant suggestions 24/7. The business goal was to boost *average order value* (AOV) by 15 % and increase *repeat orders* from 30 % to 45 % within six months.

**Action / Design**  
I framed the problem as a **multi‑armed bandit + collaborative filtering** pipeline:

1. **Data ingestion** – Kinesis Streams → Lambda → DynamoDB (user‑item interaction logs).  
2. **Feature store** – SageMaker Feature Store for real‑time user and restaurant embeddings; enriched with contextual signals (time of day, weather, promo).  
3. **Model training** – Daily SageMaker training jobs on a Spot fleet (p4d.xlarge) using LightFM + XGBoost to predict click‑through and conversion probabilities.  
4. **Serving** – Endpoint in SageMaker Runtime behind API Gateway; cached top‑10 lists in Elasticache Redis for sub‑100 ms latency.  
5. **A/B testing** – CloudWatch metrics & DynamoDB Streams trigger Lambda to roll out the best performing arm.

I chose **AWS Glue** for ETL, **S3** as a cold data lake, and **Athena** for exploratory analysis. The architecture is *event‑driven* (serverless) so it scales automatically with traffic spikes during peak hours.

**Result**  
Within 6 months:  
- AOV increased by **18 %** (+$0.75 per order).  
- Repeat orders rose to **48 %**, surpassing the target.  
- Cost was kept under **$30K/month** (Spot savings + auto‑scaling) while latency stayed < 120 ms.

**Reflection / Learning**  
I owned every failure: when early models over‑fitted, I introduced a *validation split* per region and added regularization – learning that data drift is the biggest threat in recommendation systems. This exercise sharpened my ability to dive deep into metrics (precision@k, conversion lift) and iterate quickly—exactly what Amazon expects of its engineers.

**Leadership Principles Highlighted**  
- **Ownership**: Took end‑to‑end responsibility from ingestion to serving.  
- **Dive Deep & Deliver Results**: Quantified impact with real business KPIs and tuned for cost/performance trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
