---
qid: ing_e0fdad30a6__aws__local
question: 'Explain: Browser Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 457
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:48:11-05:00'
sources: []
---

**Situation / Task**  
While leading the migration of our e‑commerce front‑end to a microservice architecture, I was asked to redesign the browser cache strategy for product pages that were experiencing 40 % page‑load slowdowns during flash sales.

**Action**  
I treated caching as an *opportunity to obsess over the customer*. I scoped the requirements:  
- Reduce first‑paint latency by ≥ 70 %.  
- Keep stale data < 5 min for inventory updates.  
- Support 10 M concurrent users with a 99.9 % SLA.

I designed a two‑tier cache:  

| Tier | AWS Service | Rationale |
|------|-------------|-----------|
| Edge | Amazon CloudFront + **Cache Policy** | Low‑latency, global CDN; customizable TTLs per path. |
| Origin | **Amazon ElastiCache for Redis** (clustered) | Fast in‑memory store for product metadata; supports key‑expirations and pub/sub for inventory invalidation. |

I implemented a *“cache‑then‑fetch”* pattern: the front‑end first queries CloudFront; on miss, it fetches from the API Gateway → Lambda@Edge → Redis. Inventory changes trigger SNS notifications that publish to an ElastiCache keyspace, expiring relevant cache entries instantly.

**Result**  
- Page load time dropped from 3 s to **0.9 s** (70 % improvement).  
- Cache hit ratio rose from 55 % to **88 %**.  
- Cost decreased by 25 % because fewer origin requests were made.

**Reflection**  
I learned that *deep dives* into latency traces revealed the real bottleneck was not CDN TTLs but stale Redis data. Adjusting eviction policies solved it. I also adopted a “fail‑fast” policy: if Redis is unreachable, the system falls back to CloudFront without blocking users—an ownership mindset ensuring continuity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
