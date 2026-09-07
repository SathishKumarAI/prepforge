---
qid: ing_ce19afcf41__aws__local
question: 'Explain: Step 3: Design core components — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 414
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:07:08-05:00'
sources: []
---

**Situation** – I was tasked to design the core components for a high‑traffic Twitter‑style feed (the “system‑design‑primer” repo).  
**Task** – Build a scalable, highly available architecture that supports millions of users posting tweets, following each other, and consuming feeds in real time.  
**Action** –  

1. **Data model & storage** – Use DynamoDB for user profiles and follow graphs (partition key = userID) because of low‑latency reads/writes and auto‑scaling. Store tweets in an S3 data lake with a partitioned Parquet schema; use Amazon Athena for analytics.  
2. **Feed generation** – Adopt a *push* model: on tweet write, publish to SNS → Lambda that writes to Kinesis Data Streams. Workers consume the stream and materialize per‑user home feeds into a Redis cache (Elasticache) for sub‑100 ms read latency.  
3. **API gateway** – Fronted by API Gateway + Lambda Authorizer; throttling ensures burst protection.  
4. **Observability & cost control** – CloudWatch metrics trigger Auto Scaling of Lambda concurrency; Spot Instances for ETL jobs keep costs 30% lower than on‑demand.

**Result** – The prototype handled 2 M tweets/day with a 99.9 % success rate and <200 ms average read latency, while keeping monthly spend <$15k (vs $45k for a monolithic design).  

*Leadership Principles*: **Customer Obsession** – deliver instant feeds; **Ownership** – I led the end‑to‑end design, trade‑offs, and cost optimization. *Bar‑raiser notes*: clear ownership of each component, deep dive into DynamoDB vs RDS choices, quantified performance metrics, and lessons learned from an initial 5 % latency spike that was fixed by moving to a push model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
