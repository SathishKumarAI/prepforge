---
qid: ing_70b2c5704c__star__local
question: 'Explain: Dispatch System - Using Google S2 Library'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 382
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:12:51-05:00'
sources: []
---

**Situation** – In my last role at a ride‑hailing startup, we were scaling from 50k active drivers to 300k in just six months. Our existing geo‑partitioning used a simple latitude/longitude grid that caused massive imbalance: some cells had 10x more requests than others, leading to driver starvation and high wait times.

**Task** – I was tasked with designing a new dispatch layer that could evenly spread pickups across the city while keeping latency under 200 ms per request. The system needed to be fault‑tolerant and support dynamic cell sizing as demand fluctuated.

**Action** – I chose Google’s S2 library for its hierarchical, quasi‑uniform spatial indexing. First, I mapped each driver’s current location to an S2 cell at level 15 (≈ 200 m). Then, during a dispatch request, the system queried nearby cells within a configurable radius using the S2CellUnion API, aggregating drivers by cell and applying a weighted random selection that favored less‑busy cells. I integrated this logic into our Go microservice, added caching with Redis for hot cells, and instrumented latency metrics in Prometheus. To handle high traffic, I sharded the request queue across 8 worker nodes.

**Result** – The new dispatch system reduced average passenger wait time from 4.2 min to 1.7 min (a 60% drop) and balanced driver utilization within ±15%. It also cut API latency to an average of 120 ms. I learned that choosing the right spatial index—S2 in this case—combined with careful cell‑level load balancing can dramatically improve real‑world service quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
