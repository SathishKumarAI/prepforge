---
qid: ing_cde4e3ea8c__think__local
question: 'Explain: A standard Alibaba coding round. Design a data structure for a
  fixed-capacity cache that supports get and put in O(1) and evicts the least-recently-used
  entry when full. Implement it in Python.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 603
total_tokens: 827
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:33:39-05:00'
sources: []
---

**1. Clarify the problem and set assumptions**  
- Cache size is fixed (`capacity`).  
- Operations `get(key)` and `put(key, value)` must run in *O(1)* time.  
- When inserting into a full cache we evict the **least‑recently used (LRU)** entry – i.e., the one that has gone longest without being accessed or updated.

**2. Pick a mental model / data‑structure framework**  
The classic solution is a *hash table* for constant‑time key lookup, coupled with a *doubly linked list* to maintain usage order (most recent at head, least recent at tail).  
- The hash map stores `key → node` references.  
- Each node holds `(key, value)` and pointers to its previous/next nodes.

**3. Reason through the algorithm step‑by‑step**  

| Operation | Steps |
|-----------|-------|
| **get(key)** | 1) Look up node in map (`O(1)`). <br>2) If not found → return `-1`. <br>3) Move that node to head of list (unlink from current spot, link at front). <br>4) Return its value. |
| **put(key, val)** | 1) If key already exists: update value and move node to head. <br>2) Else: create new node. <br>3) If capacity reached: remove tail node (least recent), delete its map entry. <br>4) Insert new node at head, add map entry. |

All list operations (unlink, link) are *O(1)* because we have direct node references.

**4. Common pitfalls to avoid**  
- Forgetting to update the map when evicting a node.  
- Using a singly linked list—moving an arbitrary node would require traversal.  
- Mis‑ordering: head must always be most recent; tail is least recent.  
- Edge cases where capacity = 0 or single‑element cache.

**5. Sanity‑check & explain verbally**  
Test mentally with a small cache (capacity = 2):  
`put(1,1)` → list `[1]`.  
`put(2,2)` → list `[2,1]`.  
`get(1)` → moves `1` to head: `[1,2]`.  
`put(3,3)` → capacity full → evict tail (`2`) → list `[3,1]`.  
All operations behaved as expected. Communicate this flow aloud or via a diagram to confirm understanding before coding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
