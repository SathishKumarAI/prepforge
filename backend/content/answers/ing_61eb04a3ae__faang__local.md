---
qid: ing_61eb04a3ae__faang__local
question: 'Explain: Circuit Breakers — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 466
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:31:40-05:00'
sources: []
---

**Clarify**  
We need to explain how Uber uses a *circuit breaker* pattern combined with an integrated cache to serve >40 M reads/sec from its online store (e.g., Cassandra/Redis). Assume the read traffic is highly skewed, most requests hit hot keys, and failures can cascade if not isolated.

**Approach**  
1. **Circuit Breaker**: Wrap every remote read call with a breaker that tracks failure rate, latency, and response codes.  
2. **Integrated Cache**: Use an in‑memory cache (e.g., memcached or Redis) as the first tier; fall back to the persistent store only on miss.  
3. **Cache Invalidation**: Push updates from writes via a pub/sub channel so that cached entries stay fresh.  
4. **Backpressure & Throttling**: When the breaker opens, throttle requests to the cache and serve stale data or “service unavailable” responses.

**Depth**  
- *Breaker state*: Closed → Open after >10 % failures in 1 min; half‑open after 30 s with limited traffic.  
- *Cache hit ratio*: ~95 %; thus most reads avoid network hop to Cassandra.  
- *Latency*: Cache hits <0.5 ms, open breaker responses <1 ms; fallback adds ~10–15 ms.  
- *Throughput*: 40 M rps achieved by parallelism across shards and by keeping the cache in local memory per node.

**Edge Cases**  
- Sudden cache miss burst → potential spike to backend; mitigated by request rate limiting.  
- Cache eviction policy (LRU) could evict hot keys; monitored via metrics.  
- Broken breaker logic could keep system open unnecessarily; require health‑check pings.

**Optimize & Communicate**  
Explain trade‑offs: tighter failure thresholds reduce latency but risk false positives; looser thresholds improve availability but increase backend load. Highlight how the integrated cache + circuit breaker decouple read traffic from storage, ensuring scalability and resilience. Conclude with a diagram of request flow and state transitions to illustrate the system’s robustness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
