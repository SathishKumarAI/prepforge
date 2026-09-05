---
qid: vq_45bb007b60__star__local
question: What is locking ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 338
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:56:50-05:00'
sources: []
---

**Situation:**  
While leading the backend for a real‑time analytics platform at my last job, we noticed that our click‑stream aggregation service was dropping data during peak traffic. The ingestion pipeline used a shared in‑memory cache (Redis) to batch events before persisting them to Cassandra, and concurrent writers were occasionally corrupting the cache.

**Task:**  
I had to design a concurrency control mechanism so that multiple worker threads could safely update the cache without losing or duplicating data, all while keeping latency below 200 ms per event.

**Action:**  
I introduced fine‑grained **locking** using Redis’ `SETNX` with an expiration flag. Each worker acquired a lock on its own queue key before pushing events. I also implemented optimistic locking via CAS (`WATCH/MULTI/EXEC`) for bulk updates, and added a background reaper that cleaned stale locks if a process crashed. To avoid bottlenecks, I switched from a single global mutex to sharded locks based on user ID hashes, reducing contention by 70 %. Additionally, I instrumented lock acquisition times in Prometheus to monitor contention spikes.

**Result:**  
After deployment, cache corruption dropped to zero and throughput increased from 3,200 events/sec to 5,600 events/sec. Latency stayed under 150 ms even during flash traffic. The exercise taught me that effective locking is about balancing safety with performance—choosing the right granularity and fallback strategies can dramatically improve system reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
