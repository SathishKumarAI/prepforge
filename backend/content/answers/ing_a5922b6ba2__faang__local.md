---
qid: ing_a5922b6ba2__faang__local
question: 'Explain: Capacity Estimation and Constraints — Mapserviceyelpgooglemap'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 521
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:09:56-05:00'
sources: []
---

**Capacity Estimation & Constraints for a Map‑Service (Yelp/Google Maps)**  

| Section | Content |
|---------|---------|
| **Clarify** | We’re asked how to estimate the system capacity—requests per second, data size, latency—and what constraints (compute, storage, network) limit it. Assume: <br>• Real‑time map rendering + POI lookup <br>• Multi‑tenant API usage <br>• 99.9 % SLA on response time |
| **Approach** | 1️⃣ Define key metrics (RPS, latency, data throughput). 2️⃣ Identify resource bottlenecks: CPU for tile generation, GPU for vector rendering, SSD I/O for tile cache, network for CDN. 3️⃣ Build a micro‑benchmark (synthetic traffic + real POI queries). 4️⃣ Use queuing theory / Amdahl’s law to extrapolate scaling limits. |
| **Depth** | *CPU*: Tile rasterization ~ 10 ms per tile on a single core; with 8 cores → 800 RPS. *GPU*: Vector rendering offloads ~ 70 % of CPU load, boosting RPS by 2×. *Storage*: 1 TB SSD can serve ~ 5 M tiles/day; cache hit ratio > 90 % reduces disk traffic. *Network*: CDN edge nodes reduce latency to < 50 ms globally; bandwidth cost scales linearly with data served (~ 10 GB per million requests). Use load‑balancing + auto‑scaling clusters; implement rate limiting per API key. |
| **Edge Cases** | • Sudden flash crowds (e.g., concerts) → burst RPS spikes; need burst buffers. <br>• POI update frequency: high churn demands write amplification on storage. <br>• Geographic skew: users in low‑latency regions may saturate a single edge node. |
| **Optimize & Communicate** | • Pre‑render popular tiles at higher zoom levels and cache them in memory. <br>• Compress vector data (Protocol Buffers) to cut bandwidth by 60 %. <br>Explain the trade‑off: tighter compression → more CPU decoding; larger caches → higher RAM cost. Present a slide with capacity curves vs. cost, highlighting where diminishing returns begin. |

*Word count: ~210.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
