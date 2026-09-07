---
qid: ing_909c08412d__faang__local
question: 'Explain: Least Frequently Used (LFU) — Cache Eviction Policies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 444
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:20:32-05:00'
sources: []
---

**Least‑Frequently‑Used (LFU)**  
*Cache eviction policy that removes the item accessed the fewest times.*

---

### Clarify
You’re asked to explain LFU as a cache replacement strategy.  
Assumptions:  
- Cache holds `k` items; when full we must evict one.  
- We can track how often each key is read/updated.  
- Ties are broken by recency (L‑RU) or arbitrary order.

### Approach
1. **Count accesses** – maintain a frequency counter per item.  
2. **Identify min‑frequency** – keep the smallest count in O(1).  
3. **Evict** – remove any key with that count (usually LRU among them).

Data structures: hash map `key → node`, and a *bucket* list where each bucket holds all keys of the same frequency, linked together for O(1) promotion.

### Depth
- **Insertion / Access:** increment counter; move node to next bucket.  
- **Eviction:** pop from the head of the lowest‑frequency bucket.  
- **Complexity:** All operations `O(1)` amortized.  
- **Trade‑offs:** LFU excels when hot items are truly “hot” over time, but it can suffer *cache pollution* if a key spikes once and then drops; also, frequency counts grow unbounded (usually reset or use decay).

### Edge Cases
- New item → freq = 1.  
- All items same frequency → tie‑break by LRU.  
- Frequency overflow → periodic re‑normalization.

### Optimize & Communicate
To mitigate cache pollution, implement *decaying* counts (e.g., halve frequencies periodically) or a *windowed* LFU that only considers recent accesses.  
Explain the algorithm to interviewers by walking through an example trace, highlighting O(1) guarantees and why LFU is preferable when access patterns are skewed toward long‑term popularity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
