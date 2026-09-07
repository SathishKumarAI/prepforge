---
qid: ing_2d36b4b803__aws__local
question: 'Explain: Related designs problems — Foodorderingzomatoswiggy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 373
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:07:12-05:00'
sources: []
---

**Situation / Task**  
At a food‑delivery startup (FoodOrderingZ), the business needed to scale its recommendation engine so that users received personalized restaurant suggestions within 200 ms, even during peak lunch hours when traffic spiked 5×.

**Action**  
I owned the end‑to‑end solution. First, I *dived deep* into user logs and trained a matrix‑factorization model on SageMaker, saving the embedding weights in Amazon EFS for persistence. To serve predictions at scale, I deployed the model as an endpoint behind **Amazon API Gateway + Lambda@Edge** (cold start < 200 ms) and cached frequent requests with **ElastiCache Redis**. For real‑time feature updates, I built a data pipeline using **Kinesis Data Streams → Lambda → DynamoDB** so new user interactions immediately refreshed the model without retraining from scratch.

I performed *bias‑for‑action* testing by rolling out the new architecture to 10% of traffic, measuring latency (↓ 48%) and conversion rate (+ 3.2%). After validation, I scaled to 100% traffic, keeping cost under $12k/month while handling > 1M requests/day.

**Result**  
- Latency dropped from 450 ms to 180 ms (customer‑obsessed).  
- Order volume grew by **4.5%** during peak periods (deliver results).  
- Cost efficiency improved by **30%** versus a monolithic EC2 deployment.  

**Bar‑raiser takeaways** – I demonstrated full ownership, deep technical chops, data‑driven impact, and rapid learning from A/B test failures to iterate quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
