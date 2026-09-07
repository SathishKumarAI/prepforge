---
qid: ing_a6035b0284__aws__local
question: 'Explain: Design Instagram — Grokking System Design Interview: Patterns
  & Mock Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 377
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:42:18-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional team to launch a new “Explore” feed at Instagram, I was asked to redesign the recommendation engine for 1 billion monthly active users (MAU). The goal: boost user engagement by 15% and reduce cold‑start latency to <200 ms.

**Action**  
I applied *Ownership* and *Dive Deep*. First, I mapped the data pipeline: clickstream → S3 → Glue ETL → Redshift for training. For inference I built a stateless microservice on **AWS Lambda** behind an **API Gateway**, backed by a **Redis‑cache layer (Amazon ElastiCache)** to store user embeddings and pre‑computed item vectors. The recommendation logic ran in **SageMaker Neo** models compiled for Lambda, ensuring <200 ms latency. I introduced *Bias for Action* by rolling out the system in A/B groups; 10% of traffic hit the new engine while the rest stayed on legacy Spark jobs.

**Result**  
Post‑deployment, user dwell time increased **18%**, and click‑through rate (CTR) rose from 3.2 % to 4.1 %, surpassing our target. Cost per recommendation dropped by **22 %** thanks to serverless scaling. I documented the failure mode where cache miss caused a 350 ms spike; we added a fallback queue in SQS, reducing error rates by 95 %.

**Reflection**  
The bar‑raiser will note my end‑to‑end ownership, data‑driven impact, and rapid iteration—key for scaling Instagram’s recommendation system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
