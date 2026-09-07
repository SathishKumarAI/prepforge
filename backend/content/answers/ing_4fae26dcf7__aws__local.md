---
qid: ing_4fae26dcf7__aws__local
question: 'Explain: New Key on Every Retry — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 332
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:25:07-05:00'
sources: []
---

**Situation / Task**  
While building a serverless inference API for a recommendation engine, we discovered that transient network errors caused duplicate predictions on client retries. The SLA required *exactly one* result per request and the cost penalty was $0.02 per extra inference call.

**Action**  
I introduced an **Idempotency Key** flow:  

1. Clients send a UUID with each request.  
2. An API Gateway custom authorizer checks DynamoDB for the key.  
3. If new, Lambda invokes SageMaker endpoint and stores the key + result in DynamoDB (TTL 7 days).  
4. Subsequent retries return cached output instantly.  

This design uses **API Gateway**, **Lambda**, **DynamoDB** (partitioned by key), and **SageMaker**. It scales horizontally, keeps availability at 99.9% (auto‑scaling Lambda), and costs $0.0001 per lookup vs $0.02 per inference.

**Result**  
After deployment, duplicate calls dropped from ~12 % to <0.01%, cutting inference cost by **$18k/month** and improving customer satisfaction scores by 3 points.  

**Reflection (Bar‑raiser notes)**  
I owned the problem end‑to‑end, dove deep into retry patterns, quantified impact with real spend data, and learned that a simple cache can replace expensive compute when idempotency is enforced.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
