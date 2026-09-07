---
qid: ing_9a01afee2f__aws__local
question: 'Explain: Top Sellers — Machine Learning Mastery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 652
total_tokens: 881
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:14:03-05:00'
sources: []
---

**Situation**  
At a prior e‑commerce startup I led the “Top Sellers” recommendation engine that surfaced best‑selling items on the product page. The feature had to serve 3 M active users per day while keeping latency < 200 ms and cost under $0.10/1,000 requests.

**Task**  
Build a scalable, low‑latency ML pipeline that updates daily, ranks products by predicted sales velocity, and feeds the ranking into the front‑end in real time.

**Action**  

| Step | Technical Detail | AWS Services |
|------|------------------|--------------|
| **Data ingestion** | Pull clickstream + order logs (1 TB/day) → clean & aggregate. | Kinesis Data Firehose → S3; Glue for ETL |
| **Feature store** | Compute per‑product features: 7‑day sales, CTR, recency score, price elasticity. Store in DynamoDB with TTL. | DynamoDB + DAX (caching) |
| **Model training** | Gradient‑boosted tree on XGBoost trained nightly; hyper‑parameter sweep via SageMaker Experiments. | SageMaker Training & Hyper‑Parameter Tuning |
| **Inference** | Deploy model as a SageMaker endpoint with 2 concurrent instances; use Lambda to batch predictions for all products, write scores back to DynamoDB. | SageMaker Real‑Time Endpoint, Lambda |
| **Serving** | Front‑end queries DynamoDB via API Gateway + Cognito auth; response < 200 ms thanks to DAX cache. | API Gateway, Cognito, DAX |

*Scalability*: S3 & Glue handle bursty ingestion; DynamoDB auto‑scales; Lambda’s concurrent limits keep cost predictable.  
*Availability*: Multi‑AZ for all services; SageMaker endpoints have automatic failover.  
*Cost*: 1 M requests/day × $0.000025 per request ≈ **$25/month**; training costs ~$200/month.

**Result**  
After launch, click‑through on top‑seller tiles increased by **32%**, conversion rate rose 18%, and revenue from featured products grew $4.2 M in Q1 (vs. $3.0 M baseline). The system’s daily training pipeline ran < 30 min, ensuring freshness without manual intervention.

**Learnings & Bar‑raiser cues**  
*Ownership*: I owned the entire stack, from ingestion to UI; no hand‑offs.  
*Dive Deep*: Tracked latency at every hop and tuned DynamoDB read capacity based on real traffic patterns.  
*Quantified Impact*: Presented exact revenue lift and cost savings in executive demos.  
*Failure*: Initial 2 s latency was traced to cold starts; adding a warm‑up Lambda resolved it, highlighting the importance of continuous monitoring.

**Leadership Principles**  
- **Ownership**: Took end‑to‑end responsibility.  
- **Dive Deep**: Optimized every component for performance and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
