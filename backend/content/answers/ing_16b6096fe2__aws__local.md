---
qid: ing_16b6096fe2__aws__local
question: 'Explain: Summary — Caching Strategies Summary | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 468
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:17:02-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team to build a real‑time recommendation engine that served 2 M users per day. The model’s inference latency was >400 ms, causing a 12 % drop in click‑through rate (CTR). I had to design a caching strategy that reduced latency while keeping the model up‑to‑date.

**Action**  
1. **Dive Deep & Ownership** – profiled every request with CloudWatch and identified that 80 % of traffic hit the same 5 k user segments.  
2. Built a two‑tier cache:  
   * **Edge Layer** – Amazon CloudFront + Lambda@Edge to store pre‑computed feature vectors for the hot segments (≈10 GB, 99.9 % hit rate).  
   * **In‑region Layer** – ElastiCache‑Redis with `READ_REPLICA` nodes; TTL of 5 min, auto‑eviction policy `volatile-lru`.  
3. Deployed a **Lambda function** that invalidates Redis keys when the nightly training job pushes a new model version to S3 (S3 Event → SNS → Lambda).  
4. Implemented **Feature Store** in SageMaker Feature Store for consistent feature access, eliminating recomputation.

**Result**  
- Latency dropped from 400 ms to 60 ms (15× improvement).  
- CTR rose by 18 % within one week of deployment.  
- Cost stayed below $1.2k/month (vs. projected $3.5k for a DynamoDB‑only approach).  

**Learnings**  
The key was treating cache as an *extension* of the model, not a separate component—an example of **Ownership** and **Bias for Action**. The bar‑raiser will notice that I quantified impact (CTR +18 %), chose AWS services with clear trade‑offs (CloudFront vs. Redis), and documented failure points (cache staleness) to iterate quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
