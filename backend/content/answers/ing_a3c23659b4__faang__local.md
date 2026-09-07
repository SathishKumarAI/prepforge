---
qid: ing_a3c23659b4__faang__local
question: 'Explain: Implement an LRU cache with O(1) get/put. Now add per-entry TTL.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 526
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:05:55-05:00'
sources: []
---

**Clarify**  
We need a data structure that supports `get(key)` and `put(key, value)` in **O(1)** while evicting the least‑recently used item when capacity is exceeded. Additionally each entry has its own *time‑to‑live* (TTL) after which it becomes invalid. Clarify:  
- Is TTL expressed as an absolute expiry timestamp or a relative duration?  
- Should expired items be removed eagerly or lazily on access?  
- Do we still count expired entries toward capacity?  

**Approach**  
Use the classic **hash map + doubly linked list** for LRU. Store, per node: `key`, `value`, `expiry`. On each `get`/`put`:  
1. Remove any stale nodes (lazy cleanup).  
2. For `get`, if key exists and not expired, move node to head and return value; else delete it and return miss.  
3. For `put`, if key exists update value, expiry, and move to head; otherwise create node, insert at head, evict tail if over capacity.  

**Depth**  
- Hash map: `key → node` for O(1) lookup.  
- Doubly linked list: head = most recent, tail = least recent.  
- TTL stored as absolute epoch time (`now + ttl`).  
- Expiry check is constant time; eviction of expired nodes is lazy (only when accessed).  
- Complexity: `O(1)` for both operations; memory `O(capacity)`.  

**Edge Cases**  
- Expired key on `get` must be purged and count as a miss.  
- Inserting an already‑expired key should replace it.  
- TTL of 0 or negative should treat entry as immediately expired (evict on put).  
- Capacity zero → all puts fail silently.  

**Optimize & Communicate**  
To avoid repeated scans for stale entries, we can maintain a min‑heap keyed by expiry to pop the earliest expirations during `put`/`get`. This adds `O(log n)` overhead but guarantees that the cache never holds expired items beyond capacity. Explain trade‑offs: lazy cleanup keeps operations pure O(1) but may let memory bloat; heap cleanup is more deterministic but costs extra log factor. Conclude by emphasizing how the design preserves LRU semantics while honoring per‑entry TTLs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
