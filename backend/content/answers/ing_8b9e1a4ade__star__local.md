---
qid: ing_8b9e1a4ade__star__local
question: 'Explain: Failure Handling — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 312
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:12:07-05:00'
sources: []
---

**Situation:**  
In a production recommendation engine, we noticed latency spikes during peak traffic—users had to wait over two seconds for personalized content, pushing the SLA from 500 ms to 2 s.

**Task:**  
I needed to reduce average response time back under 600 ms while keeping cache consistency with daily‑updated user profiles and product catalog changes.

**Action:**  
I introduced a distributed in‑memory cache (Redis Cluster) keyed by `(user_id, context)` and stored precomputed recommendation vectors. I added a write‑through strategy: whenever the nightly ETL refreshed the profile database, it pushed invalidation messages to Kafka; a consumer updated or evicted affected keys. To handle cache misses, I kept an async fallback that fetched from PostgreSQL, cached the result, and served immediately. I also tuned eviction policy to LRU with a 48‑hour TTL, monitored hit rates via Prometheus, and set alerts for drops below 95 %. Finally, I wrapped all cache accesses in a circuit breaker to prevent cascading failures.

**Result:**  
Cache hit rate climbed from 60 % to 94 %, cutting average latency from 2 s to 480 ms. Throughput increased by 30 %, and the system now gracefully degrades when Redis experiences hiccups. I learned that effective caching requires careful invalidation, monitoring, and fallback paths to balance performance with consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
