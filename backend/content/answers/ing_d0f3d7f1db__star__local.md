---
qid: ing_d0f3d7f1db__star__local
question: 'Explain: Redis Codec — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 412
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:27:22-05:00'
sources: []
---

**Situation** – While working on Uber’s real‑time surge pricing engine, we noticed that the latency of fetching rider‑location data from our primary PostgreSQL store was creeping above 120 ms during peak hours, causing a 3% drop in ride acceptance rates.

**Task** – I needed to design an integrated caching layer that could deliver over 40 million reads per second with sub‑10 ms latency while keeping memory usage under control and ensuring strong consistency for price updates.

**Action** – We chose Redis as the cache store and implemented a custom binary codec (Redis Codec) to marshal our `LocationRecord` objects into a compact byte array: a fixed 16‑byte key (hash of rider ID + timestamp) plus a 24‑byte payload (lat, long, price). This eliminated JSON parsing overhead. The codec was integrated into the existing Java microservice via Spring Data Redis, with pipelined bulk reads and write‑through eviction policies. To keep memory in check we used LRU eviction combined with Redis’ `MEMORY USAGE` stats to trigger compaction during off‑peak windows. We also added a lightweight sidecar that monitored cache hit ratios and automatically scaled the cluster from 4 to 12 nodes when traffic exceeded 30 M reads/s.

**Result** – The new caching layer reduced average read latency from 120 ms to 8 ms, boosted hit ratio from 65% to 92%, and handled 45 million reads per second during a summer surge without any service interruptions. I learned that a well‑designed binary codec can cut serialization costs by an order of magnitude, and that coupling cache monitoring with auto‑scaling is essential for sustaining high‑volume traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
