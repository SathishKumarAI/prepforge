---
qid: ing_7565a5bdb2__aws__local
question: 'Explain: High level design for Rate Limiter — Ratelimiterapi'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 410
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:51:27-05:00'
sources: []
---

**Situation & Task**  
While leading the *API Gateway* team at my previous AWS‑partner startup, we had to throttle requests from a rapidly growing fintech client whose burst traffic caused downstream microservices to fail. I owned the design of **RateLimiterAPI**, an internal service that could enforce per‑user and global limits with sub‑second latency.

**Action (Design)**  
1. **Stateless Lambda + DynamoDB TTL** – Each request hits API Gateway → Lambda, which checks a *rate key* in a partitioned DynamoDB table.  
2. **Atomic Counter via `UpdateItem` with `ADD`** – Guarantees no race conditions while counting per‑second windows.  
3. **Global vs. Per‑User limits** – Two tables (`user_limits`, `global_limits`) share the same key pattern; a single Lambda can read/write both in one transaction (using DynamoDB’s *BatchWriteItem*).  
4. **Cache layer (ElastiCache Redis)** – Hot keys for high‑traffic users are cached with 1 s expiration to reduce DB hits.  
5. **Fail‑over strategy** – If DynamoDB latency spikes, the Lambda falls back to Redis only, returning “429” until DB recovers.

**Result**  
Implemented in <3 weeks; post‑launch we saw a **92% reduction in downstream errors** and **latency dropped from 350 ms to 45 ms**. Cost stayed under $1k/month by leveraging DynamoDB’s on‑demand mode and Redis cache.

**Reflection (Bar‑raiser focus)**  
I *own* the end‑to‑end service, *dived deep* into DynamoDB consistency models, quantified impact with real metrics, and learned that caching is essential for bursty traffic—so I incorporated a fallback path in the design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
