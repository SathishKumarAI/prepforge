---
qid: ing_3215978b75__aws__local
question: Your provider gives you 2M tokens/minute. How do you rate-limit your own
  users so you don't blow through it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 393
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:18:22-05:00'
sources: []
---

**Situation / Task**  
I was leading a SaaS startup that leveraged an LLM API capped at **2 M tokens/minute**. Our user base grew to 10 k concurrent tenants; without control we risked exceeding the quota and incurring downtime.

**Action**  
1. **Design a token‑budget per tenant** – allocate *maxTokensPerMinute* = 20 000 (≈ 0.001 % of total).  
2. **Implement a leaky‑bucket rate limiter in API Gateway + Lambda Authorizer** that tracks tokens used per minute via DynamoDB TTL tables, throttling requests when the bucket is full.  
3. **Cache prompt–response pairs** in Amazon ElastiCache (Redis) to reduce token usage by 35 %.  
4. **Monitor & alert** with CloudWatch metrics (`TokensUsed`, `ThrottleCount`) and automatically spin up a secondary LLM endpoint on SageMaker when overall usage hits 80 % of the quota, ensuring no single point of failure.

**Result**  
- Achieved **99.9 % availability** during peak load, keeping token spend under budget.  
- Reduced average response cost by **$0.12 per request** (≈ 30 % savings).  
- Scaled to 50 k tenants with linear performance thanks to DynamoDB’s low‑latency counters.

**Learnings**  
Ownership: I owned the quota and drove cross‑team alignment.  
Dive Deep: Detailed token accounting revealed caching benefits.  
Bar‑raiser cue: I quantified impact (cost, availability) and iterated on throttling thresholds based on real traffic patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
