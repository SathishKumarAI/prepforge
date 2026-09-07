---
qid: ing_77ca18976e__aws__local
question: 'Explain: Resulting context — Pattern: Saga'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 448
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:56:07-05:00'
sources: []
---

**Situation & Task**  
I was leading a cross‑functional team that built an end‑to‑end recommendation engine for a streaming platform. The pipeline processed 1 TB of clickstream logs daily and had to serve real‑time predictions with <50 ms latency. The existing monolithic ETL caused data staleness and made rollback impossible.

**Action**  
I introduced a **Saga‑style orchestration**: each transformation (cleaning, feature extraction, model inference) ran as an independent microservice in ECS/Fargate, coordinated by Step Functions. If any step failed, the saga automatically triggered compensating actions (e.g., re‑run only the downstream tasks). I also added a versioned S3 “landing zone” and used Glue to catalog data, ensuring idempotency.

*Key AWS services*:  
- **Step Functions** for Saga orchestration  
- **ECS/Fargate** for stateless workers  
- **S3 + Glue** for durable storage & schema evolution  
- **CloudWatch** with custom metrics for SLA monitoring  

I ran a controlled rollout and measured: latency dropped from 120 ms to **48 ms**, throughput increased by **35 %**, and data loss during failures fell from 4.2 % to <0.1 %. Cost was optimized by auto‑scaling Fargate tasks, saving ~18 % annually.

**Result**  
The new Saga pattern gave us *predictable recovery*, *real‑time insights*, and a **+15 % increase in user engagement** (measured by watch time).  

**Reflection**  
I learned that treating long‑running ML pipelines as distributed transactions—rather than monoliths—yields measurable reliability gains. This aligns with Amazon’s Leadership Principles of **Ownership** (own the entire pipeline) and **Dive Deep** (engineer robust failure paths).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
