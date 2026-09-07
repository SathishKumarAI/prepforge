---
qid: ing_d12785b04b__aws__local
question: What’s next? — Hello, World! - Zerodha Tech Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 375
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:13:48-05:00'
sources: []
---

**Customer Obsession + Deliver Results**

*Situation*: At a fintech startup we launched an ML‑driven recommendation engine that increased user engagement by **12 %** in the first quarter.  
*Task*: I was asked to identify the next big leap—how to keep users “in the loop” without overwhelming them with noise.

*Action*:  
1. **Dive Deep** into usage logs (≈ 5 M events/day) using **Amazon Kinesis + Redshift** to surface temporal patterns.  
2. Built a **real‑time contextual bandit** in SageMaker Pipelines that weighs recent user intent against long‑term portfolio goals.  
3. Deployed the model with **AWS Lambda + API Gateway**, scaling automatically to 10 k concurrent requests per minute, keeping latency < 200 ms.  
4. Implemented an A/B test (N=120k users) that showed a **9 %** lift in click‑through and a **4 %** drop in churn.

*Result*: The system now recommends actions 3× faster than the previous batch model, saving $2K/month in compute costs while driving a **15 %** increase in annual recurring revenue.  

**Bar‑raiser takeaways**  
- Ownership: I owned data ingestion, modeling, and deployment end‑to‑end.  
- Dive Deep: I extracted actionable signals from raw telemetry.  
- Quantified impact: 12–15 % lift and $2K/month savings.  
- Learning: Early experiments mis‑estimated user intent; we pivoted to a bandit approach after observing drift, turning failure into a stronger solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
