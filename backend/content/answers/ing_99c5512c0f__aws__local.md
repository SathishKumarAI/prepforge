---
qid: ing_99c5512c0f__aws__local
question: 'Explain: Two-Tiered Caching — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 523
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:13:28-05:00'
sources: []
---

**Situation / Task**  
While redesigning our recommendation engine for the e‑commerce platform, I was tasked with reducing API latency from ~120 ms to <30 ms while keeping cost under 15 % of the current spend.

**Action**  
I introduced a **two‑tiered cache** (in‑memory + distributed) and evaluated the *top eight eviction strategies* for each tier:

| Tier | Strategy | Why it fits |
|------|----------|-------------|
| In‑memory (Redis) | **LRU** – fast eviction, high hit rate for short‑lived session data. | 99 % of requests are read‑heavy and temporally local. |
|  | **LFU** – protects frequently used personalized models. | Reduces churn on popular items. |
| Distributed (Amazon ElastiCache) | **TTL** – guarantees stale data is purged predictably for time‑sensitive offers. | Aligns with business promo cycles. |
|  | **Random Replacement** – low overhead, useful when item popularity is uniform. | Keeps CPU usage <5 %. |
|  | **ARC (Adaptive Replacement Cache)** – self‑tuning LRU/LFU mix. | Handles bursty traffic during sales. |
|  | **Clock-Pro** – efficient memory use for large model shards. | Cuts memory footprint by 20 % vs pure LRU. |
|  | **FIFO** – deterministic eviction for cache warming phases. | Simplifies debugging. |
|  | **Custom Weighting (cost‑aware)** – evicts based on retrieval cost + model accuracy loss. | Keeps overall recommendation quality >95 %. |

I used **Amazon CloudWatch** metrics to monitor hit ratios, evictions, and latency; the final mix yielded a **32 % latency reduction** and **12 % cost saving**.

**Result**  
The new cache strategy improved user engagement by 4.7 % (A/B test), directly contributing to an additional $1.2M in quarterly revenue. I documented lessons learned: early assumptions about LRU alone were insufficient, and continuous metric‑driven tuning is essential.  

**Leadership Principles Highlighted**  
- **Customer Obsession** – reduced latency for a better shopping experience.  
- **Ownership & Dive Deep** – rigorously evaluated each eviction policy with real data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
