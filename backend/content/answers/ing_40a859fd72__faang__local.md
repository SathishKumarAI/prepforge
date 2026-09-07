---
qid: ing_40a859fd72__faang__local
question: 'Explain: Least Frequently Used (LFU) — 7 Cache Eviction Strategies You
  Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 580
total_tokens: 822
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:14:24-05:00'
sources: []
---

**Least‑Frequently‑Used (LFU) – A Quick Dive**

| **What it is** | LFU keeps the *k* most frequently accessed items alive; on a miss it evicts the entry with the lowest hit count. |
|----------------|-------------------------------------------------------------------|
| **Why use it?** | Works best when access patterns are *stable*: hot items stay hot, cold items fade away. |
| **Core idea** | Each cache line holds a *frequency counter*. On every read/write, increment that counter. When space is needed, remove the line with the smallest counter (ties broken by recency). |

---

### 1️⃣ Clarify  
- Are we talking about an in‑memory key/value store?  
- What’s the hit/miss ratio and cache size constraints?  
- Do we need O(1) eviction or can we afford O(log k)?

### 2️⃣ Approach  
1. **Data structures** – hash map (`key → (value, freq)`), plus a *frequency list* (e.g., bucketed doubly linked lists) to group keys by frequency.  
2. **Increment on access** – move key from its current freq‑bucket to the next higher one.  
3. **Eviction** – keep pointer to the lowest non-empty bucket; pop any entry from it.

### 3️⃣ Depth (Complexities)  
- **Lookup / update**: *O(1)* average if we use hash map + linked list pointers.  
- **Evict**: *O(1)* by peeking the min‑freq bucket.  
- **Memory overhead**: O(k) for buckets + O(k) for entries.

### 4️⃣ Edge Cases  
- **Frequency overflow** – reset all counters when a threshold is reached (e.g., after `INT_MAX`).  
- **Tie‑breakers** – use LRU within the same freq bucket to avoid starvation.  
- **Cold start** – initial accesses may skew counts; consider a warm‑up period.

### 5️⃣ Optimize & Communicate  
- **Cache‑friendly**: store counters in cache line with the value to reduce misses.  
- **Batch updates**: if many reads occur, buffer increments and apply them periodically to reduce pointer churn.  
- **Explain trade‑offs**: LFU is great for skewed workloads but can be slower than LRU on highly dynamic data; mention this when choosing a strategy.

> *TL;DR*: LFU keeps the most frequently accessed items by maintaining per‑item counters and bucketed lists, offering O(1) lookups and evictions with modest overhead—ideal when access patterns are stable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
