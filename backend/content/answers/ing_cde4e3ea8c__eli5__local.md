---
qid: ing_cde4e3ea8c__eli5__local
question: 'Explain: A standard Alibaba coding round. Design a data structure for a
  fixed-capacity cache that supports get and put in O(1) and evicts the least-recently-used
  entry when full. Implement it in Python.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 511
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:01:37-05:00'
sources: []
---

Imagine you have a small desk drawer (the cache) that can hold only a few items. When you pull an item out (a *get*), it moves to the front of the drawer so you know it’s the most recent. When you add a new item (a *put*) and the drawer is full, the one at the back—the least‑recently used—gets pushed out.

In code we combine two tools:

1. **Dictionary** – gives instant lookup by key.
2. **Doubly linked list** – keeps items in order from most to least recent; moving a node to the front or deleting the tail is O(1).

Here’s a concise Python implementation:

```python
class Node:
    def __init__(self, k=None, v=None):
        self.k = k
        self.v = v
        self.prev = self.next = None

class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.map = {}                     # key → node
        self.head = Node()                # dummy head
        self.tail = Node()                # dummy tail
        self.head.next = self.tail
        self.tail.prev = self.head

    def _remove(self, n: Node):
        n.prev.next, n.next.prev = n.next, n.prev

    def _add_front(self, n: Node):
        n.next = self.head.next
        n.prev = self.head
        self.head.next.prev = n
        self.head.next = n

    def get(self, key: int) -> int:
        if key not in self.map:
            return -1
        node = self.map[key]
        self._remove(node)
        self._add_front(node)
        return node.v

    def put(self, key: int, value: int):
        if key in self.map:
            self._remove(self.map[key])
        elif len(self.map) == self.cap:
            lru = self.tail.prev
            self._remove(lru)
            del self.map[lru.k]
        node = Node(key, value)
        self.map[key] = node
        self._add_front(node)
```

The `get` and `put` operations both finish in constant time while the cache always evicts the least‑recently used item when it’s full.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
