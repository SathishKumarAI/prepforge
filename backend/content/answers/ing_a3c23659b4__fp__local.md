---
qid: ing_a3c23659b4__fp__local
question: 'Explain: Implement an LRU cache with O(1) get/put. Now add per-entry TTL.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 549
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:54:34-05:00'
sources: []
---

**Why the problem matters**

A cache is a *bijection* between keys and values that must answer `get(k)` in constant time while keeping memory bounded.  
Adding a *time‑to‑live* (TTL) turns each entry into a **temporal constraint**: after its expiry, it should no longer be considered valid. The challenge is to honour both constraints—O(1) access and automatic expiration—without scanning the whole table.

---

### From first principles

1. **LRU core**  
   *Hash map* `H[key] → node` gives O(1) lookup.  
   A *doubly linked list* keeps nodes in recency order; moving a node to the head is also O(1).  
   Eviction removes the tail.

2. **TTL enforcement**  
   Each node stores an absolute expiry `t_exp`.  
   The key observation: *the earliest expiry must be known in O(1)*.  
   This is exactly what a **min‑heap** gives, but it would cost O(log n) per insert/delete.  
   Instead, observe that the LRU list already orders by *usage*, not by time.  
   The trick is to lazily expire: on every `get` or `put`, first purge all nodes whose `t_exp ≤ now`.  
   To do this in O(1), maintain a **second linked list** sorted by expiry (a “chronological queue”).  
   Each node belongs to *both* lists; when we need to evict expired entries, we pop from the front of the chronological queue until the head’s `t_exp > now`.  
   All operations on either list are O(1).

3. **Putting it together**  
   - `put(k,v,t)` → if key exists: update value and expiry; else create node.  
     Insert at LRU‑head *and* append to chronological queue.  
   - `get(k)` → purge expired nodes first, then lookup in `H`. If found, move node to LRU‑head.

---

### Non‑obvious insight

The **dual‑list** design is essentially a *decomposition of the state space*.  
By keeping two independent orderings (recency and expiry) we avoid any global scan.  
The chronological queue acts like a *lazy sweep line* over time: it only touches nodes that actually expire, guaranteeing O(1) per operation while preserving correctness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
