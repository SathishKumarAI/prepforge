---
qid: ing_a35916b279__fp__local
question: 'Explain: MRU (Most Recently Used) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 374
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:53:19-05:00'
sources: []
---

**MRU (Most‑Recently‑Used) – a counterintuitive eviction rule**

At its core, MRU addresses the *optimal replacement problem*: given a fixed‑size buffer and an unknown future request sequence, choose which entry to evict so that future misses are minimized. Most policies favour “old” data (LRU, LFU), reasoning that recently used items will be reused soon. MRU flips this intuition: it assumes that the *most recent* access is an outlier—perhaps a one‑off or a burst that won’t repeat. By discarding it, MRU keeps the buffer filled with items that have already proven stable over multiple accesses.

Mathematically, MRU corresponds to a **greedy policy on the reverse recency order**. If we model requests as a Markov chain with high self‑transition probabilities for “stable” items, the steady‑state occupancy of an item is proportional to its access frequency *minus* its last‑access time. The optimal policy under this model is indeed MRU.

A non‑obvious insight: **MRU excels when the workload contains short bursts followed by long idle periods**—common in streaming or one‑shot inference tasks. In such regimes, the most recent item often belongs to a transient “hot” phase; evicting it prevents cache pollution and preserves items that will be needed again after the burst. Thus, MRU is not a naïve rule but an optimal strategy under bursty request dynamics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
