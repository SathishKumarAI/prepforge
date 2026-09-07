---
qid: ing_3e031998d6__aws__local
question: 'Explain: Caching'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 461
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:46:15-05:00'
sources: []
---

**Answer (Amazon style)**  

*Leadership Principles:* **Ownership** – I drove the end‑to‑end solution; **Dive Deep** – I dissected latency & cost trade‑offs.

**S**ituation  
In 2023 my team built a real‑time recommendation engine for a global e‑commerce platform. Production inference latency hit 350 ms per request, exceeding our SLA of 200 ms and causing a 12% drop in conversion rate during peak traffic.

**T**ask  
I was tasked with reducing inference latency by at least 30 % while keeping cost under the $2 M budget.

**A**ction  
1. **Profiling & Analysis** – Using CloudWatch and X-Ray, I identified that 70 % of latency came from loading a 5 GB model into memory for each request.  
2. **Design Decision – Model Caching** – Implemented an in‑memory cache (Amazon Elasticache Redis) to store the pre‑loaded model per availability zone.  
3. **Implementation** – Deployed Lambda@Edge functions that first query Redis; on a miss, they fetch the model from S3 Glacier Deep Archive and warm the cache asynchronously.  
4. **Cost Optimization** – Chose Redis “cache.t2.micro” for hot zones (≈$0.03/hr) and “cache.t1.micro” for cold zones (≈$0.02/hr), totaling $18 k/month versus $45 k for EC2 instances.  

**R**esult  
- Latency dropped to 140 ms (+60 % improvement).  
- Conversion rate rebounded by 9%, translating to an estimated $1.3 M additional revenue per quarter.  
- Cost savings of $27 k/month freed budget for future ML experiments.

*Bar‑raiser cues:* I demonstrated full ownership, deep technical dive into the root cause, quantified impact on business metrics, and a clear learning loop—future cache invalidation logic will be automated via EventBridge to prevent stale data drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
