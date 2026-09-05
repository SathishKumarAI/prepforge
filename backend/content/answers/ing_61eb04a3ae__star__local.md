---
qid: ing_61eb04a3ae__star__local
question: 'Explain: Circuit Breakers — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 379
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:43:58-05:00'
sources: []
---

**Situation:**  
When I joined the data platform team at Uber, we were handling over 40 million read requests per second from our online storage layer (S3‑like object store). The latency was spiraling: a single hot shard could bring down downstream services, and any spike in traffic risked cascading failures across the fleet.

**Task:**  
I had to design a resilient read path that kept latency under 100 ms for 99.9% of requests while preventing overload on our storage backend. The solution needed to be lightweight enough to run at scale across thousands of nodes.

**Action:**  
I implemented an integrated cache layer using Redis‑Cluster as a shared, low‑latency store and wrapped each read path in a circuit breaker pattern (using the Hystrix‑style library). The breaker opened when error rates exceeded 5% or latency surpassed 200 ms, temporarily redirecting traffic to a fallback “shadow” dataset. I also added request coalescing: concurrent identical reads were collapsed into one cache fetch, and I tuned eviction policies to keep hot keys in memory. Monitoring dashboards tracked circuit state, cache hit ratios, and storage back‑end metrics.

**Result:**  
Cache hit ratio jumped from 12% to 68%, cutting average latency from 350 ms to 78 ms for the critical 99th percentile. The circuit breaker prevented 93% of potential cascading failures during traffic spikes, keeping service availability above 99.95%. I learned that combining fine‑grained caching with a simple fault‑tolerance pattern can turn an unreliable storage backend into a high‑throughput, low‑latency engine for millions of reads per second.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
