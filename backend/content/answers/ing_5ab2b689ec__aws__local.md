---
qid: ing_5ab2b689ec__aws__local
question: 'Explain: Scaling the design — Salesrankbycategory'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 494
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:50:39-05:00'
sources: []
---

**Situation & Task (S)**  
I was tasked with building *SalesRankByCategory* for a global e‑commerce platform that served 200 M active users and processed ~10 k orders per second. The goal was to deliver real‑time category‑level sales rank scores with <1 s latency, while keeping cost under $50K/month.

**Action (A)**  
I owned the end‑to‑end pipeline:  
1. **Data ingestion** – Kinesis Data Streams fed raw order events into a *Lambda* microservice that performed lightweight cleansing and enriched records with product metadata.  
2. **Feature store** – The cleansed stream was written to DynamoDB (partition key = category, sort key = timestamp) for low‑latency lookups.  
3. **Model training & inference** – A SageMaker endpoint hosted a Gradient Boosting model that calculated the rank score from recent sales volume and price elasticity. I used *SageMaker Neo* to compile the model for Lambda‑Edge, enabling in‑edge inference on CloudFront for users in Asia.  
4. **Cache layer** – Redis‑ElastiCache cached the top‑10 ranks per category; a TTL of 30 s ensured freshness while cutting downstream load by ~70%.  

I leveraged *AWS Step Functions* to orchestrate retries and dead‑letter queues, guaranteeing at‑least‑once processing. I also added CloudWatch metrics (latency, error rate) and an automated scaling policy that spun up additional Lambda instances when the Kinesis shard iterator lag exceeded 5 s.

**Result (R)**  
- **Latency:** 0.8 s average (99th percentile <1.3 s).  
- **Cost:** $42K/month, a 30% reduction vs the legacy Spark batch approach.  
- **Accuracy:** Rank predictions improved conversion lift by 12% for promoted categories.  

**Learning & Bar‑raiser cues** – I took full ownership, dove deep into latency bottlenecks, quantified impact with A/B tests, and iterated after a cold‑start failure that taught me to pre‑warm Lambda functions during traffic spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
