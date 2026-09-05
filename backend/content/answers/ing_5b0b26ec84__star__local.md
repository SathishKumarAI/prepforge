---
qid: ing_5b0b26ec84__star__local
question: 'Explain: High-Level Design — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 375
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:29:35-05:00'
sources: []
---

**Situation:**  
While working on a startup’s growth platform, we noticed our marketing team was hitting the limit of 10 000 custom URLs per month on our legacy service. The traffic spike during a campaign forced us to design a scalable URL‑shortening system that could handle millions of requests per day with minimal latency.

**Task:**  
I needed to architect a high‑availability, low‑latency solution that supports unique short codes, custom aliases, and analytics while keeping costs under $5 k/month. The system had to be horizontally scalable and easily monitorable.

**Action:**  
1. Chose **AWS Lambda + API Gateway** for the request layer, enabling zero‑capacity planning.  
2. Implemented a **partitioned DynamoDB table** (hash on hash(key) of the short code) for persistence, using global secondary indexes to support custom alias lookups.  
3. Generated short codes via a deterministic base‑62 counter stored in **Redis** (Elasticache) to avoid collisions and keep latency < 10 ms.  
4. Added a **Kinesis stream** that pushes each click event to an S3 bucket for batch analytics, with Athena queries for real‑time dashboards.  
5. Built monitoring via CloudWatch metrics and alerts on request latency > 100 ms or error rate > 1%.

**Result:**  
The new system handled 15 M requests/day with <30 ms average latency, reduced infrastructure cost to $3.2 k/month, and the analytics pipeline delivered click data in under 5 minutes. I learned that decoupling request handling from storage and leveraging managed services can dramatically simplify scaling while keeping costs predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
