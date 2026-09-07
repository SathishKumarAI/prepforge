---
qid: ing_d31e04c7bd__aws__local
question: 'Explain: Cache Memory - Redis — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 462
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:18:05-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the redesign of a high‑traffic URL‑shortening service (TinyURL). The existing monolith hit 2 M requests/day and suffered from 200 ms latency spikes during traffic bursts. My goal: reduce latency by 70 % while keeping cost < $500/month.

**Action & Design**  
I introduced **Redis** as an in‑memory cache for the mapping “short → long” URLs, using **Amazon ElastiCache (Redis)** for managed scalability and persistence via RDB snapshots. The flow:  
1. Client requests a short URL → Lambda reads from Redis; if miss, fetches from DynamoDB and writes back to Redis with TTL 24 h.  
2. Shortening requests hit the same cache layer before persisting in DynamoDB.

I also added **API Gateway + Lambda** for stateless request handling, ensuring **99.9 % availability** with auto‑scaling. Cost was projected via AWS Pricing Calculator: ~\$120/month for ElastiCache (cache‑cluster 2×R6g.large) + \$30/month for API Gateway/Lambda.

**Result**  
Latency dropped from 200 ms to 50 ms (80 % improvement). Traffic spikes were absorbed without throttling, and the cache hit rate exceeded **95 %**. Monthly cost stayed under \$150, a **70 % reduction** versus the legacy stack.

**Reflection & Learnings**  
*Ownership*: I owned the full lifecycle from design to deployment. *Dive Deep*: I profiled Redis memory usage and adjusted eviction policies after observing cold‑start patterns. *Bar‑raiser focus*: The quantified 80 % latency cut, cost savings, and high cache hit rate demonstrate clear impact and a learning loop that fed back into continuous monitoring.

**Leadership Principles Anchored**  
- **Customer Obsession**: Faster redirects improve user experience.  
- **Ownership & Deliver Results**: Took end‑to‑end responsibility and achieved measurable outcomes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
