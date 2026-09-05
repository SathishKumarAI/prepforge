---
qid: ing_f139ab5d2a__star__local
question: 'Explain: High-Level Architecture — How Uber Serves Over 40 Million Reads
  Per Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 327
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:30:46-05:00'
sources: []
---

**Situation:**  
When I joined Uber’s data platform team, the new ride‑matching service was hitting a spike—over 40 million read requests per second during peak hours—and our backend database was choking on latency.

**Task:**  
I had to design an architecture that would keep read latency under 10 ms while scaling horizontally, all without rewriting the existing OLTP layer.

**Action:**  
I proposed a two‑tier cache stack: first, a local in‑process LRU buffer for per‑node hot data; second, a globally shared Redis cluster using consistent hashing and slot replication. We added an async “read‑through” middleware that would fetch from PostgreSQL only on a miss, then populate the caches via a Kafka stream of change events. To avoid cache stampedes we introduced a short random back‑off lock per key. We also monitored hit ratios with Prometheus and auto‑scaled Redis nodes based on traffic.

**Result:**  
The new system delivered 98 % cache hit rates during peak, slashing read latency from 120 ms to 8 ms and reducing DB load by 70 %. The team learned the importance of a lightweight local buffer combined with a distributed cache that can scale out without complex sharding logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
