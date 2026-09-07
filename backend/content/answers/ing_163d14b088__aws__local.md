---
qid: ing_163d14b088__aws__local
question: 'Explain: Projects — Home | CS324'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 385
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:15:47-05:00'
sources: []
---

**Project – “Home” (CS 324) – Machine‑Learning Pipeline**

*Situation & Task:*  
In CS 324 I led a semester‑long capstone where my team built an end‑to‑end recommendation system for a smart‑home platform. Our goal was to reduce user churn by 15 % and increase average daily interactions by 25 %.  

*Action:*  
1. **Ownership & Bias for Action** – I scoped the MVP, defined data contracts (sensor logs, user profiles), and set up an automated CI/CD pipeline in AWS using CodePipeline + Lambda.  
2. **Dive Deep** – Leveraged SageMaker to train a matrix‑factorization model on 12 M interaction events; hyper‑parameter sweeps ran on Spot Instances, cutting compute cost by 60 %.  
3. **Invent & Simplify** – Deployed the model as an endpoint in SageMaker Hosting Services, then wrapped it with API Gateway + DynamoDB for real‑time personalization, keeping latency <30 ms.  
4. **Deliver Results** – After a two‑month beta test, churn dropped from 12 % to 9 %, and daily interactions rose 28 %.  

*Result:*  
- Cost: $3,200/month vs $5,000 expected for on‑prem GPUs.  
- Availability: 99.95 % SLA via Multi‑AZ SageMaker endpoints.  

**Bar‑raiser takeaway:**  
Showed full ownership (pipeline & metrics), deep technical insight (Spot optimization, latency tuning), quantified impact (churn + interactions), and learned to iterate on data labeling after initial false positives in recommendations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
