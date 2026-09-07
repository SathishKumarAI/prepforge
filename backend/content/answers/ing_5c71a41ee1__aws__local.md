---
qid: ing_5c71a41ee1__aws__local
question: 'Explain: So suddenly you have a lot more — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 465
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:54:20-05:00'
sources: []
---

**Situation**  
I was hired as a senior ML engineer at a video‑platform startup that suddenly got invited to the Seattle Conference on Scalability. The panel asked us to explain how we scale YouTube‑style recommendations for millions of users worldwide.

**Task**  
My goal was to design an end‑to‑end recommendation pipeline that could ingest 50 M daily user interactions, train a deep ranking model in real time, and serve predictions with <200 ms latency at global scale—all while keeping costs under $5 M/yr.

**Action**  
1. **Data ingestion** – Kinesis Data Streams + Glue for schema evolution; this gives us 99.9% durability and auto‑scaling.  
2. **Feature store** – DynamoDB with DAX caching (latency <10 ms) and daily batch refresh via EMR on spot instances, keeping feature costs at $0.02/feature‑fetch.  
3. **Model training** – SageMaker Pipelines orchestrated by Step Functions; we use distributed MXNet on GPU Spot clusters (max 50 % cheaper than On‑Demand).  
4. **Serving** – SageMaker Neo edge containers deployed to CloudFront Lambda@Edge, guaranteeing <200 ms global latency and auto‑scaling via Lambda concurrency limits.  
5. **Observability** – CloudWatch metrics + X-Ray traces; we set up anomaly detection that auto‑restarts failing shards.

**Result**  
Within 3 months the recommendation system processed 60 M interactions/day, boosted CTR by 18% (from 1.2% to 1.45%), and reduced latency from 350 ms to 180 ms. Cost dropped 23% compared to our legacy batch‑only pipeline.

**Reflection**  
I learned that *ownership* means questioning every cost lever and *dive deep* requires exposing the data flow end‑to‑end. The bar‑raiser will notice my quantified impact, systematic trade‑offs, and willingness to iterate on failures—exactly what Amazon expects for a high‑impact ML leader.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
