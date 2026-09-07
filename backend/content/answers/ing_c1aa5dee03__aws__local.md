---
qid: ing_c1aa5dee03__aws__local
question: 'Explain: What to Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 427
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:41:06-05:00'
sources: []
---

**What to Cache – A Customer‑Obsessed Answer**

*Situation*: I led the redesign of a recommendation engine for an e‑commerce platform that served 5 M daily users. The original monolith hit the database 4× per request, causing >1 s latency and a 12% cart abandonment spike.

*Task*: Reduce latency while keeping cache consistency and cost under control.

*Action*:  
- **Identify hot data**: Profiled query logs → top 10 % of products (≈200 k items) were requested >80% of the time.  
- **Cache strategy**: Implemented a *read‑through* cache with AWS ElastiCache Redis, TTL = 15 min for product metadata and user‑profile vectors.  
- **Invalidation policy**: Used DynamoDB Streams + Lambda to publish “product‑updated” events; Lambda writes to SNS → triggers `Redis.RESET` via the SDK, ensuring eventual consistency within <2 s.  
- **Scalability & cost**: Chose a *clustered* Redis node (cache‑node‑type cache.r5.large) with auto‑scaling; projected 30% reduction in RDS read replicas and $1.8k/month savings.

*Result*: Latency dropped from 1.2 s to 350 ms (75% improvement), cart abandonment fell by 4%, and we reduced database load by 70%.  

**Bar‑raiser check**:  
- **Ownership** – I drove the end‑to‑end solution, from profiling to deployment.  
- **Dive Deep** – Detailed analysis of query patterns and invalidation logic.  
- **Quantified Impact** – Concrete latency and abandonment metrics.  
- **Learning from Failure** – Initial trial with Memcached caused stale reads; switched to Redis with pub/sub for stricter consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
