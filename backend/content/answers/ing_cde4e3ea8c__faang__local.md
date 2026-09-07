---
qid: ing_cde4e3ea8c__faang__local
question: 'Explain: A standard Alibaba coding round. Design a data structure for a
  fixed-capacity cache that supports get and put in O(1) and evicts the least-recently-used
  entry when full. Implement it in Python.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 652
total_tokens: 920
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:39:18-05:00'
sources: []
---

**Clarify**  
We need a cache of fixed size `k`. It must expose two operations:  

*`get(key)` – return the value or `None` if absent, marking the key as most‑recently used.  
*`put(key,val)` – insert or update; if capacity exceeded, evict the *least recently used* (LRU) entry. All in **O(1)**.

**Approach**  
Combine a hash map (`dict`) for O(1) key lookup with a doubly‑linked list to track usage order.  
- The dict maps keys → nodes of the list.  
- The list’s head is MRU, tail is LRU.  
On `get` or `put`, move the node to the head. On insertion when full, pop the tail.

**Depth (Python implementation)**  

```python
class Node:
    __slots__ = ("k","v","prev","next")
    def __init__(self,k=None,v=None):
        self.k,self.v=k,v
        self.prev=self.next=None

class LRUCache:
    def __init__(self, capacity:int):
        self.cap=capacity
        self.map={}
        # dummy head/tail to avoid edge checks
        self.head=Node(); self.tail=Node()
        self.head.next=self.tail; self.tail.prev=self.head

    def _remove(self,n:Node):
        n.prev.next=n.next
        n.next.prev=n.prev

    def _add_to_head(self,n:Node):
        n.next=self.head.next
        n.prev=self.head
        self.head.next.prev=n
        self.head.next=n

    def get(self,key):
        if key not in self.map:
            return None
        node=self.map[key]
        self._remove(node)
        self._add_to_head(node)
        return node.v

    def put(self,key,val):
        if key in self.map:
            node=self.map[key]
            node.v=val
            self._remove(node); self._add_to_head(node)
            return
        if len(self.map)==self.cap:
            lru=self.tail.prev
            self._remove(lru)
            del self.map[lru.k]
        new=Node(key,val)
        self.map[key]=new
        self._add_to_head(new)
```

*Time*: `O(1)` per operation.  
*Space*: `O(capacity)`.

**Edge cases**  
- Capacity = 0 → all ops return/ignore.  
- Re‑inserting existing key updates value and recency.  
- `get` on missing key returns `None`.

**Optimize & communicate**  
If memory overhead of nodes is a concern, we could store keys in the dict and keep only values in list nodes, or use built‑in `OrderedDict`. In an interview I’d highlight that this design scales to millions of entries and discuss trade‑offs (e.g., using `collections.OrderedDict` for brevity vs custom node for clarity).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
