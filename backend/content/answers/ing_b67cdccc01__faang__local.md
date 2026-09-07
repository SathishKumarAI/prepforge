---
qid: ing_b67cdccc01__faang__local
question: 'Two-part coding warm-up: given a stream of user actions, return the k most
  engaged-with items. Then: why might your heap solution be the wrong choice in production?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 440
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:47:14-05:00'
sources: []
---

**Clarify**  
We receive an infinite stream of `(user_id, item_id)` actions and must return the *k* items with the highest engagement (most distinct users). Assume actions are time‑ordered, memory is limited, and we can’t store every pair.

**Approach**  
1. Maintain a hash map `item→set_of_users` to count distinct users per item.  
2. After each action, update the set; if its size changes, push `(size, item)` into a max‑heap.  
3. When asked for top‑k, pop k elements from the heap (or keep a separate min‑heap of size k that updates on every change).  

**Depth**  
- **Update complexity:** O(1) amortized per action (hash lookup + set insert).  
- **Space:** `O(U)` where U is total distinct `(item,user)` pairs; worst‑case large.  
- **Query complexity:** O(k log k) if we maintain a min‑heap of size k.  

**Edge Cases**  
- Duplicate actions from the same user: set prevents double counting.  
- Extremely popular items: sets grow huge, causing memory blow‑up.  
- Stream pauses: heap may contain stale entries; need lazy deletion.

**Optimize & Communicate**  
In production, this naïve heap + hash approach is risky because:
1. **Unbounded memory:** storing a set per item can exceed RAM for popular items or long‑running streams.  
2. **High write amplification:** each action updates the heap even if the count doesn’t change significantly, causing unnecessary overhead.  
3. **Consistency under failure:** a crash loses all in‑memory sets; recomputing from scratch is expensive.

A better design would use *count‑min sketch* or *HyperLogLog* per item to estimate distinct counts with fixed memory, and periodically run a background job that aggregates top‑k via a min‑heap. This gives bounded space, tolerates duplicates, and supports fault tolerance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
