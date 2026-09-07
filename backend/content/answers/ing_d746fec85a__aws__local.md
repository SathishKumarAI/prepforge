---
qid: ing_d746fec85a__aws__local
question: 'Explain: Latency — Serverless Architecture - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 407
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:26:09-05:00'
sources: []
---

**Situation / Task**  
I was tasked to reduce the inference latency of a real‑time recommendation model from 350 ms to under 100 ms for our mobile app while keeping costs <15% of the current spend.

**Action (Design)**  
- Migrated the model to **AWS Lambda@Edge** so predictions ran in the same region as users, cutting RTT.  
- Deployed a **SageMaker Endpoint** behind an **API Gateway cache** with a 1 s TTL, ensuring that repeated requests hit memory instead of recomputing.  
- Used **Amazon CloudFront Functions** to pre‑process payloads and route only necessary fields to Lambda, reducing payload size by 40%.  
- Implemented **X-Ray tracing** to identify the 10 ms bottleneck in data deserialization and replaced the native JSON parser with a faster C++ library.  

**Result**  
Latency dropped from 350 ms → **92 ms** (≈74% reduction). Daily inference volume rose by 30%, yet total monthly cost fell from $12k to **$9.8k** thanks to caching and edge execution, a **18% savings**.

**Leadership Principles Anchored**  
- *Customer Obsession* – delivered faster responses that improved user engagement by 15%.  
- *Ownership* – drove the end‑to‑end migration and post‑deployment monitoring.

**Bar‑raiser signals**  
- Demonstrated ownership of both architecture and metrics.  
- Deep dive into tracing data to pinpoint latency sources.  
- Quantified impact on performance and cost, learning that caching + edge compute beats monolithic serverless for high‑frequency inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
