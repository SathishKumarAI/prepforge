---
qid: ing_a3c23659b4__think__local
question: 'Explain: Implement an LRU cache with O(1) get/put. Now add per-entry TTL.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 564
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:54:23-05:00'
sources: []
---

**Metacognitive Road‑Map for the “LRU + TTL” Design**

1. **Clarify the spec & assumptions**  
   - LRU cache: `get(key)` and `put(key,val)` in *O(1)*.  
   - Per‑entry Time‑To‑Live (TTL): each item expires after a given duration from insertion or last update.  
   - Decide whether expired items are removed lazily (on access) or eagerly (background sweep).  
   - Assume the environment is single‑threaded unless stated otherwise.

2. **Choose the core data structures**  
   - A hash map (`key → node`) for constant lookup.  
   - A doubly linked list for ordering by recent use; head = most recent, tail = least.  
   - Each `node` stores `value`, `expiryTime` (current time + TTL), and pointers.

3. **Design the operations**  
   - `get(k)`: look up node in map; if missing → miss. If present but expired (`now > expiry`) treat as miss, remove it, and return null. Otherwise move node to head and return value.  
   - `put(k,v,ttl)`: if key exists, update value, reset expiry, move to head. Else create new node with computed `expiryTime`, insert at head, add to map; if capacity exceeded, evict tail (remove from list & map).  
   - Expiry cleanup: optionally run a periodic sweep that walks the tail backwards until it hits an unexpired node.

4. **Avoid common pitfalls**  
   - Don’t forget to update `expiryTime` on every put or refresh.  
  ‑ Be careful with time units (ms vs s) and clock drift.  
  ‑ When evicting due to capacity, check if the tail is already expired; you might skip a non‑expired item in favor of an expired one.

5. **Validate & communicate**  
   - Test edge cases: inserting with TTL 0, very large TTLs, rapid successive gets/puts, and concurrent access if applicable.  
   - Explain that LRU ordering remains intact even when items expire; the list may contain “dead” nodes until they’re purged on next access or via sweep.  
   - Emphasize that all core operations stay *O(1)* because map lookups and linked‑list pointer updates are constant time, while any background cleanup runs in *O(n)* but doesn’t affect individual API calls.

This structured approach keeps the design clear, ensures efficiency, and guards against subtle bugs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
