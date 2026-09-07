---
qid: ing_63af739592__aws__local
question: 'Explain: Tech Decisions — Foodorderingzomatoswiggy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 387
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:10:33-05:00'
sources: []
---

**Situation / Task**  
I led the architecture redesign of a high‑traffic food‑ordering app (similar to Zomato/Swiggy) that was experiencing > 60 % cart abandonment due to slow response times during peak hours.

**Action**  
- **Ownership & Bias for Action:** I formed a cross‑functional squad, set clear SLAs (≤ 200 ms per API), and drove the migration from monolithic backend to microservices on AWS ECS/Fargate.  
- **Dive Deep & Invent & Simplify:** Built a real‑time recommendation engine using SageMaker Pipelines that pulled user preferences, restaurant popularity, and time‑of‑day data into an Elasticsearch index for sub‑50 ms lookups.  
- **Scalability/Availability:** Employed Application Load Balancer + Auto Scaling groups (spike‑ready to 10k RPS), RDS Aurora Serverless for transactional consistency, and SQS for order queuing to decouple services.  
- **Cost & Trade‑offs:** Leveraged Spot Instances for batch inference (↓ 40 % compute cost) while reserving on‑demand for latency‑critical services.

**Result**  
Within 3 months: cart abandonment dropped from 60 % → 22 %, average order value rose by 18 %, and total operating cost fell 35 %. The model’s precision hit 92 % recall, directly boosting upsell revenue. I documented lessons (e.g., need for better cache invalidation) and shared them in a company‑wide knowledge base, reinforcing a culture of continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
