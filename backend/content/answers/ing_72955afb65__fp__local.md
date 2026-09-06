---
qid: ing_72955afb65__fp__local
question: 'Explain: Most Recently Used (MRU) — Cache Eviction Policies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 366
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:08:03-05:00'
sources: []
---

### Why a “Most‑Recently‑Used” rule makes sense

A cache is a *finite memory* that must decide which item to drop when space runs out.  
The fundamental problem is: **maximize the probability that the next request will hit**.  
If we think of requests as a stochastic process with *temporal locality*, recent accesses are often
precursors to future ones—this is the “recency” principle in information theory.

An MRU policy exploits a particular structure: when an item is just fetched, it is likely that
the same request will be repeated immediately (e.g., a loop or a user re‑click).  
Thus the *most recent* entry is the one with the highest chance of being requested again before any other,
so evicting it keeps the cache ready for the next immediate hit.  

Formally, if \(P_{t+1}(x | x_t)\) is high when \(x=x_t\), then removing the most recent element maximizes
the expected hit‑rate over a horizon of one step. This is an instance of **online decision making** under
partial information: we use the latest observation as a proxy for the next.

#### Non‑obvious insight

MRU works best when the access pattern has *burstiness*—many requests to the same item in rapid succession.
In contrast, LRU thrives on long‑term reuse. Hence, MRU is essentially the cache’s way of *anticipating immediate repeats*, a subtle form of *predictive caching* that few treat as a principled strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
