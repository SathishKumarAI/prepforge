---
qid: ing_cde4e3ea8c__fp__local
question: 'Explain: A standard Alibaba coding round. Design a data structure for a
  fixed-capacity cache that supports get and put in O(1) and evicts the least-recently-used
  entry when full. Implement it in Python.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 684
total_tokens: 889
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:18:17-05:00'
sources: []
---

**Why the problem demands a special structure**

We need *constant‑time* `get` and `put`, yet we must also know which entry was least recently used (LRU) so it can be removed when the cache is full.  
- A **hash map** gives \(O(1)\) lookup of values by key, but it has no ordering information.  
- An ordered container (e.g., a doubly‑linked list) keeps items in access order, yet locating an arbitrary key would be linear.

The insight: combine both structures so that each cache entry knows its own position in the usage order. When we `get` or `put`, we can instantly move the node to the “most recent” end of a doubly‑linked list and still retrieve it by key via the hash map. The least recently used item is always at the other end of that list, ready for eviction.

**Non‑obvious point:**  
The list nodes must store *references* back to their keys in the hash map; otherwise, after a deletion we would lose the mapping and could not free the key–value pair cleanly. This bidirectional link is what keeps the whole system \(O(1)\).

```python
class Node:
    __slots__ = ("k", "v", "prev", "next")
    def __init__(self, k=None, v=None):
        self.k, self.v = k, v
        self.prev = self.next = None

class LRUCache:
    def __init__(self, capacity: int):
        self.cap   = capacity
        self.map   = {}                     # key -> node
        # dummy head/tail to avoid edge checks
        self.head  = Node()
        self.tail  = Node()
        self.head.next = self.tail
        self.tail.prev = self.head

    def _move_to_front(self, node: Node):
        """Detach and re‑attach after head."""
        node.prev.next, node.next.prev = node.next, node.prev
        node.next, node.prev = self.head.next, self.head
        self.head.next.prev = node
        self.head.next = node

    def get(self, key: int) -> int:
        if key not in self.map:
            return -1
        n = self.map[key]
        self._move_to_front(n)
        return n.v

    def put(self, key: int, value: int):
        if key in self.map:
            n = self.map[key]
            n.v = value
            self._move_to_front(n)
            return
        # insert new node
        n = Node(key, value)
        self.map[key] = n
        self._move_to_front(n)

        if len(self.map) > self.cap:          # evict LRU
            lru = self.tail.prev
            lru.prev.next = self.tail
            self.tail.prev = lru.prev
            del self.map[lru.k]
```

The hash map supplies \(O(1)\) key lookup; the doubly‑linked list maintains recency order, and the two together satisfy all requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
