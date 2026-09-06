---
qid: ing_5a37566905__fp__local
question: 'Explain: Time to Live (TTL) — 7 Cache Eviction Strategies You Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 472
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:16:11-05:00'
sources: []
---

**Time‑to‑Live (TTL) and the Seven Key Cache‑Eviction Schemes**

When a system stores data in a short‑term buffer, it faces the *budget–utility trade‑off*: keep enough items to answer future queries quickly, but discard stale or rarely used ones before memory runs out.  
A TTL is a simple *budget* that guarantees each cached entry expires after a fixed horizon \(T\). The challenge is deciding **which** of the remaining \(N-1\) items to evict when the buffer overflows.  

The seven canonical policies arise from different optimization criteria on the *expected hit probability*:

| Policy | Criterion | Typical Scenario |
|--------|-----------|------------------|
| **LRU (Least‑Recently‑Used)** | Maximize hits by keeping most recently accessed items | Highly temporal locality |
| **LFU (Least‑Frequently‑Used)** | Keep items with highest access frequency | Stable workloads |
| **ARC (Adaptive Replacement Cache)** | Dynamically blend LRU & LFU to track changing patterns | Non‑stationary traffic |
| **LRFU (Hybrid of LRU/LFU)** | Linear combination of recency and frequency | When both matter |
| **Random** | Uniformly sample for eviction | Minimal overhead, high entropy workloads |
| **Clock (Second‑Chance)** | Approximate LRU with a rotating pointer | Low‑cost hardware implementation |
| **LRU‑K (k‑th Recency)** | Evict items whose last \(k\) accesses are farthest back | When recent bursts dominate |

Each strategy can be framed as solving an *online convex optimization* problem: minimize the expected miss cost subject to a capacity constraint.  
A subtle insight many overlook is that **TTL itself is not a policy but a bound**—it forces every entry into the “stale” set after \(T\), turning eviction into a *selection from stale items*. Consequently, the optimal strategy often becomes “evict the least useful among those already doomed to expire.” This perspective unifies TTL with classic cache theory and guides practical tuning: choose a TTL that balances freshness against the natural decay of utility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
