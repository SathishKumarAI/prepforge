---
qid: ing_565d7cf8cc__aws__local
question: 'Explain: Request rate limiter — Scaling your API with rate limiters'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 452
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:41:19-05:00'
sources: []
---

**Situation / Task**  
When I joined a fintech startup, our RESTful pricing API was throttled to 100 req/s per customer. A sudden spike during a product launch hit 2 000 req/s, causing >30 % latency and a 15 % surge in error rate. The leadership team demanded a scalable, cost‑effective solution that kept the user experience intact.

**Action**  
I led an end‑to‑end redesign around **Amazon API Gateway + DynamoDB** for token buckets, coupled with **Lambda** for enforcement logic (the *RateLimiter* function).  
1. **Token bucket per client** stored in a partitioned DynamoDB table (`client_id` as PK) with TTL to auto‑expire.  
2. Lambda reads/updates the token count atomically using `UpdateItem` with conditional writes, guaranteeing consistency without locks.  
3. API Gateway’s *Usage Plans* were used for coarse limits; the fine‑grained bucket logic handled burst tolerance.  
4. For scaling, I enabled **DAX** to cache frequent lookups, reducing DynamoDB read capacity by ~70 %.  
5. A CloudWatch alarm triggers an auto‑scaling policy on Lambda concurrency when error rates exceed 10 %.

**Result**  
Post‑deployment:  
- Latency dropped from 350 ms to <80 ms under peak load (30 % improvement).  
- Error rate fell from 15 % to <1 %.  
- DynamoDB capacity cost reduced by ~45 %, and Lambda invocations stayed within budget.

**Learnings & Ownership**  
I owned the entire incident response, documented the failure mode in a post‑mortem, and introduced a *rate‑limit SLA* metric into our monitoring stack. This reinforced **Ownership** (owning the system’s health) and **Dive Deep** (understanding token bucket mechanics). The solution remains simple yet robust, embodying **Invent & Simplify** while delivering measurable business results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
