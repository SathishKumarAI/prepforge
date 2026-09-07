---
qid: ing_bdac2ad837__aws__local
question: 'Explain: The Thundering Herd — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 420
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:32:18-05:00'
sources: []
---

**Situation / Task**  
At a media‑streaming startup we had a recommendation API that hit our ML model every time a user requested a playlist. During peak hours (10 % of traffic) the same cold‑start request would flood the GPU cluster, causing latency to spike from 120 ms to 3 s – a classic *thundering herd*.  

**Action**  
I owned the solution:  
1. **Cache the model output** in an in‑memory store (Amazon ElastiCache Redis) keyed by user+context.  
2. Use **Redis `SETNX` + TTL** to let only one request compute and publish; others wait on a pub/sub channel.  
3. Deployed **Lambda@Edge** to serve cached results from CloudFront, off‑loading 70 % of traffic.  
4. Added **CloudWatch alarms** for cache hit ratios; automated scaling of Redis nodes via DynamoDB Streams.  

**Result**  
Cache hit ratio rose from 5 % to 92 %. API latency dropped 80 %, SLA improved from 85 % <1 s to 99 % <200 ms. GPU cost fell by 60 % (from $12k/month to $4.8k).  

**Reflection**  
*Ownership*: I drove the end‑to‑end change and maintained post‑mortems.  
*Dive Deep*: Profiling revealed the single compute bottleneck; caching solved it with minimal code changes.  
*Learned*: Early experiments with a simple in‑process cache caused stale data; moving to Redis added consistency guarantees.  

**AWS Services Used**: ElastiCache (Redis), Lambda@Edge, CloudFront, DynamoDB Streams, CloudWatch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
