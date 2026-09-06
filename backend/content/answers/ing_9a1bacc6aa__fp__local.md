---
qid: ing_9a1bacc6aa__fp__local
question: 'Explain: Size-based Eviction — CachesExplained \u00b7 google/guava Wiki
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 443
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:33:48-05:00'
sources: []
---

### Size‑Based Eviction – Why It’s the Right Strategy for Caches

A cache stores a subset of data that is expensive to recompute or fetch. The **core problem**: *How do we keep the most valuable items alive when storage is limited?*  
The intuitive answer is to limit the total size (bytes, number of entries) rather than a fixed count. Why? Because the cost of evicting an item depends on its footprint and on how often it will be reused.

1. **Information‑theoretic optimality** – In a stochastic workload, the *optimal* eviction policy is to keep items with the highest ratio of expected future benefit to size (akin to the Knapsack problem). A size‑based cap forces us to evaluate each candidate against this ratio implicitly: if an item is large but rarely accessed, its contribution to hit probability per byte drops below that of a smaller, more frequently used entry.

2. **Geometric interpretation** – Imagine a 2‑D plane where the x‑axis is “bytes” and the y‑axis is “hit probability.” A size limit defines a vertical line; we keep all points left of it. This guarantees that for any two items, if one dominates (smaller or equal size, higher hit rate), it will survive while the dominated one may be evicted.

3. **Practical non‑obvious insight** – *Eviction should consider *cumulative* size, not just individual entry sizes.* A cache hit on a small item can still trigger eviction of a larger, less useful item because the total size constraint forces rebalancing. Thus, policies like LRU or LFU become *size‑aware*: an entry that is frequently accessed but huge may be evicted earlier than a rare, tiny one.

In short, size‑based eviction aligns cache policy with the fundamental trade‑off between storage cost and expected benefit, ensuring optimal use of limited memory while remaining simple to implement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
