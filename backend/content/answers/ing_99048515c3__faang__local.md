---
qid: ing_99048515c3__faang__local
question: 'Explain: Least-Recently Used (LRU) — Cache Eviction Policies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 548
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:40:25-05:00'
sources: []
---

**Least‑Recently Used (LRU)**  
*Cache eviction policy that removes the entry whose last access time is farthest back.*

---

### Clarify
You’re asking for a concise explanation of LRU as a cache replacement strategy.  
Assumptions to confirm:  
- Cache holds key–value pairs with fixed capacity.  
- Accesses are read/write (any operation counts as “use”).  
- We need the algorithm’s time/space cost and typical use‑cases.

---

### Approach
1. **Maintain ordering** of entries by most recent access.  
2. On each hit, move that entry to the front (most recent).  
3. When inserting a new item and capacity is full, evict the back (least recent).

Implementation choices: doubly linked list + hash map; or an ordered dictionary (Python `OrderedDict`) for simplicity.

---

### Depth
- **Data structures**:  
  - *Hash map* (`O(1)`) maps keys to node references.  
  - *Doubly linked list* keeps nodes in recency order; head = MRU, tail = LRU.  
- **Operations**:  
  - `get(key)` → O(1): lookup in hash map, move node to front.  
  - `put(key, value)` → O(1): if key exists, update and move to front; else insert at head, evict tail if over capacity.  
- **Space complexity**: O(capacity).  
- **Trade‑offs**: Slight overhead of maintaining list pointers vs simpler LRU stack algorithm (which is O(n) per access).

---

### Edge Cases
- **Cache size 0**: no storage; every `get` fails, every `put` evicts immediately.  
- **Repeated accesses**: moving to front must be idempotent; ensure no duplicate nodes.  
- **Concurrent access** (multithreaded): requires locking or lock‑free data structures.

---

### Optimize & Communicate
- For high‑throughput scenarios, replace the linked list with a *segmented LRU* or *clock algorithm* to reduce pointer churn.  
- In distributed caches, approximate LRU via probabilistic counters (e.g., TinyLFU) when exact ordering is costly.  

Explain: “We keep an O(1) map for lookups and a doubly linked list for recency; every access updates the order so that eviction always pulls from the tail—exactly what LRU promises.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
