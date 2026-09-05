---
qid: ing_26f4c9f6fe__star__local
question: 'Explain: Sharding — How Uber Serves Over 40 Million Reads Per Second from
  Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 341
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:46:27-05:00'
sources: []
---

**Situation:**  
When I joined the data platform team at Uber, we were hitting a hard limit on our online storage layer—our PostgreSQL cluster could only sustain about 15 M reads/sec before latency spiked to 200 ms during peak hours.

**Task:**  
I was tasked with scaling the read throughput to support the projected 40 M reads/sec while keeping cost per request low and ensuring consistency for real‑time trip data.

**Action:**  
I designed a two‑tier sharding strategy: first, we partitioned tables by geographic region using consistent hashing in our PostgreSQL cluster; second, we deployed an in‑memory cache layer (Redis Cluster) that served as the primary read source. We used a write‑through policy with TTLs of 5 s for high‑velocity trip updates and a background job to refresh stale keys via incremental replication from Postgres. To keep memory usage bounded, we applied LRU eviction and monitored hit ratios in real time with Prometheus dashboards.

**Result:**  
The sharded cluster handled 45 M reads/sec during peak rush hours with an average latency of 35 ms, a 70% reduction from the baseline. Cache hit ratio climbed to 92%, cutting storage I/O by half. The exercise taught me how careful partitioning combined with a lightweight cache can turn a single bottleneck into a scalable read engine without sacrificing data freshness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
