---
qid: ing_61eb04a3ae__fp__local
question: 'Explain: Circuit Breakers — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 401
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:33:42-05:00'
sources: []
---

**Why a Circuit Breaker Is Needed**

At Uber’s scale each ride request triggers dozens of reads from a sharded online store (Cassandra, Dynamo‑style).  
If the store becomes saturated—latency spikes or a partition fails—the application would start queuing requests until the store recovers.  The back‑pressure would cascade to the front‑end, causing timeouts and user loss.  A *circuit breaker* observes response times and failure rates; once they cross a threshold it “opens” and bypasses the slow storage, returning cached data or a graceful error.  This keeps the system responsive while the store recovers.

**How an Integrated Cache Works**

1. **Cache‑first read**: All reads go to a distributed in‑memory cache (Redis/Key‑Value store).  
2. **Cache miss → store read**: If absent, the request hits the online store and the result is written back to the cache.  
3. **Cache consistency**: Writes update both store and cache atomically; stale entries are invalidated via TTL or publish‑subscribe events.  

Because most ride‑related data (driver locations, fare estimates) is *read‑heavy* and *write‑light*, the hit ratio stays >95 %.  With a circuit breaker, even if the store stalls, the cache continues to serve reads at ~40 M ops/s with sub‑10 ms latency.

**Non‑obvious Insight**

The *circuit breaker is not just fault tolerance*; it also **acts as an implicit load balancer**. By diverting traffic to a fast in‑memory layer when the store’s latency rises, it smooths demand peaks and reduces the variance of downstream service latencies—something most designs overlook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
