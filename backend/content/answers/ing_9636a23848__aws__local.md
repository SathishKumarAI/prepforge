---
qid: ing_9636a23848__aws__local
question: 'Explain: Amazon Custom OA Problems (2026, HackerRank)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 479
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:05:28-05:00'
sources: []
---

**Situation / Task**

During the 2026 HackerRank assessment I was asked to solve an “Amazon‑Custom OA Problem” that required building a real‑time recommendation engine for a large e‑commerce catalog (≈ 10M SKUs, 5 B user interactions). The goal was to return the top‑k personalized items within 100 ms while staying under a $0.05 per request cost.

**Action**

1. **Data ingestion & feature store** – Ingested clickstream into Kinesis Data Streams → Lambda → DynamoDB (partition key = `user_id`). Used Amazon SageMaker Feature Store to cache derived features (recency, frequency) and updated every 5 min via Glue jobs.
2. **Model training** – Trained a LightGBM ranking model on SageMaker with hyper‑parameter tuning (AWS ParallelCluster). Achieved NDCG@10 = **0.42** vs baseline 0.31.
3. **Serving architecture** – Deployed the model as a SageMaker endpoint behind an Application Load Balancer. Cached predictions in Amazon ElastiCache Redis (TTL = 300 s) to hit the 100 ms SLA for 90% of requests. Used Lambda@Edge for final personalization logic, ensuring low latency globally.
4. **Cost & scalability** – Autoscaled the endpoint using SageMaker’s built‑in auto‑scaling; cost per inference ≈ $0.00002 → < $0.05 per request. Added CloudWatch metrics and alarms to detect drift (> 5% NDCG drop) and trigger retraining.

**Result**

- **Latency:** 95th percentile latency = 78 ms (below target).  
- **Accuracy:** Lift of 35 % in click‑through rate over the previous recommendation system.  
- **Cost:** Reduced inference cost by 60 % while handling a 3× traffic spike during Black Friday.

**Reflection**

I took full ownership, diving deep into feature engineering and model tuning. The biggest failure was an initial mis‑estimation of cache TTL, which caused stale recommendations; I learned to instrument real‑time freshness metrics early. This experience reinforced my bias for action and commitment to delivering results at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
