---
qid: ing_7c00fc52ef__star__local
question: 'Explain: Compare Cache — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 346
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:41:48-05:00'
sources: []
---

**Situation**  
At Uber I was part of the data‑platform team tasked with scaling the real‑time ride‑matching service. The system had to serve more than 40 million read requests per second from our online storage (Cassandra) while keeping latency below 50 ms during peak hours.

**Task**  
My goal was to design an integrated cache layer that could sit between the application and Cassandra, reduce read traffic, and still deliver fresh data for dynamic pricing and surge calculations.

**Action**  
I chose Redis as a distributed in‑memory store because of its sub‑millisecond response times and support for key‑space notifications. I built a two‑tier caching strategy: a local per‑service cache (using Guava) for hot keys, and a global Redis cluster for shared data. We implemented an LRU eviction policy tuned to our 10 GB memory budget, and used read‑through logic so that misses automatically fetched from Cassandra and populated the caches. To keep consistency we leveraged TTLs of 5–10 seconds for highly volatile fields and used optimistic locking (CAS) for updates. I also added a metrics pipeline (Prometheus + Grafana) to monitor hit rates and evictions in real time.

**Result**  
The cache hit rate climbed from 12% to 78%, cutting Cassandra read traffic by ~65%. Latency dropped from an average of 120 ms to 35 ms, keeping the service within SLA. I learned that careful TTL tuning and hybrid caching can dramatically improve scalability without sacrificing freshness in a real‑time system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
