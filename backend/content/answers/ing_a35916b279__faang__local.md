---
qid: ing_a35916b279__faang__local
question: 'Explain: MRU (Most Recently Used) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 663
total_tokens: 903
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:04:38-05:00'
sources: []
---

**Clarify**  
You’re asking for the eight most common cache‑eviction policies that use *most‑recently used* (MRU) information. I’ll assume we’re talking about in‑memory caches (e.g., LRU, LFU) and that “top 8” means the most widely adopted or historically significant strategies.

**Approach**  
1. List each strategy with a one‑sentence definition.  
2. Highlight how MRU data is leveraged (recency vs. frequency).  
3. Mention typical use‑cases or trade‑offs.  
4. Keep it concise to fit 160–240 words.

**Depth**

| # | Strategy | How MRU Is Used | Typical Use‑Case / Trade‑Off |
|---|----------|-----------------|--------------------------------|
| 1 | **LRU (Least Recently Used)** | Evicts the entry whose *last access* is farthest in the past. | Most common for general caching; O(1) with doubly linked list + hash map. |
| 2 | **MRU (Most Recently Used)** | Opposite of LRU: evict the most recently accessed item. | Useful when recent items are likely to be short‑lived (e.g., page replacement in OS). |
| 3 | **LFU (Least Frequently Used)** | Tracks access *count*; ties broken by recency. | Good for workloads with long‑term popularity, but heavier bookkeeping. |
| 4 | **ARC (Adaptive Replacement Cache)** | Dynamically balances LRU and LFU using MRU & LRU lists. | Adapts to workload changes; more complex O(1) ops. |
| 5 | **CLOCK / Clock-Pro** | Approximate LRU via a circular list with reference bits; CLOCK‑PRO adds MRU list. | Low overhead, suitable for large caches. |
| 6 | **Random Replacement (RR)** | Picks a random entry regardless of recency; sometimes combined with MRU hints. | Extremely simple, good when eviction cost dominates. |
| 7 | **Stack Distance / Belady’s Optimal** | Uses future access information (theoretically optimal); often approximated by MRU statistics in simulations. | Provides theoretical baseline for evaluation. |
| 8 | **GDSF (Greedy Dual Size Frequency)** | Weights recency, frequency, and size; MRU contributes to “frequency” part. | Balances cache space vs. hit‑rate, used in web caches. |

**Edge Cases**  
- Highly bursty traffic may make LRU suboptimal—MRU or ARC can help.  
- Small cache sizes amplify the cost of bookkeeping for LFU/ARC.  
- Random replacement fails when eviction locality matters.

**Optimize & Communicate**  
Explain that selecting a policy depends on workload characteristics (temporal locality, item size). For interviewers, emphasize trade‑offs: time/memory overhead vs. hit‑rate improvement, and how MRU is leveraged differently across strategies. This shows you understand both the theory and practical tuning of cache eviction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
