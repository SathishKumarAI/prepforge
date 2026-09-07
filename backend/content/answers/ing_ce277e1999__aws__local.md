---
qid: ing_ce277e1999__aws__local
question: What Went Wrong? — Prime Video Microservices - by Neo Kim
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 388
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:07:16-05:00'
sources: []
---

**Situation / Task**  
I led the rollout of a new recommendation engine for Prime Video’s micro‑service stack. The goal was to increase watch time by 15 % in six months and keep latency under 200 ms.

**Action**  
- *Ownership*: I took full ownership, coordinating data scientists, infra engineers, and product owners.  
- *Dive Deep*: We discovered that the model’s training pipeline was running on an outdated GPU‑based ECS cluster (t3.medium), causing a 40 % delay in inference and stale recommendations.  
- *Bias for Action & Invent & Simplify*: I migrated the inference service to **AWS Lambda** with **ECS Fargate Spot** for burst capacity, added a **Redis cache** (Amazon ElastiCache) for pre‑computed user vectors, and re‑engineered the data pipeline using **Kinesis Data Streams** + **SageMaker Endpoint**.  
- *Deliver Results*: The new architecture cut inference latency from 350 ms to 120 ms, reduced costs by 35 % (from $12k/month to $7.8k), and increased watch time by 18 % in the first quarter.

**Result**  
The deployment hit our KPI ahead of schedule, and the team learned that scaling decisions must be tied directly to real‑time performance metrics rather than legacy assumptions.

**Bar‑raiser takeaways**  
- Clear ownership leads to faster problem isolation.  
- Deep dives uncover hidden bottlenecks; quantifiable metrics guide trade‑offs.  
- Rapid iteration with AWS managed services can deliver both speed and cost efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
