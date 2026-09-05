---
qid: ing_b04f5d50f9__star__local
question: 'Explain: Flow: Redirecting to Original URL — Design URL Shortener | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 405
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:24:37-05:00'
sources: []
---

**Situation**  
At my last internship I was tasked with building a production‑ready URL shortener for a startup that expected to handle 10 M active users and 5 B redirects per month. The existing prototype stored mappings in memory, but it couldn’t scale beyond a few thousand requests per second.

**Task**  
I had to design a robust redirect service: generate unique short codes, store them efficiently, guarantee high availability, and keep latency under 30 ms while supporting eventual consistency across regions.

**Action**  
1. **Code generation** – I used a base‑62 counter with a rotating salt per shard; each 64‑bit ID was encoded to a 6‑character string.  
2. **Storage layer** – A partitioned DynamoDB table (shard key = first two chars) handled writes, while an LRU Redis cache served hot reads. I added TTLs to keep the cache fresh.  
3. **Routing** – The API Gateway routed `/r/{code}` to a Lambda that looked up Redis; on miss it queried DynamoDB and refreshed the cache.  
4. **Failover** – Implemented read‑replicas in another AZ; if primary failed, traffic was switched via Route 53 health checks.  
5. **Metrics & alerting** – Prometheus scraped latency, error rates, and cache hit ratio; alerts triggered when hit ratio fell below 90 %.

**Result**  
The system sustained 2 M redirects/sec with a 98.7 % cache hit rate, keeping average latency at 18 ms. Deployment reduced failure incidents by 85 %. I learned that combining sharded NoSQL storage with edge caching and proactive monitoring is key to scaling redirect services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
