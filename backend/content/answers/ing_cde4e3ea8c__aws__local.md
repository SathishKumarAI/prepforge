---
qid: ing_cde4e3ea8c__aws__local
question: 'Explain: A standard Alibaba coding round. Design a data structure for a
  fixed-capacity cache that supports get and put in O(1) and evicts the least-recently-used
  entry when full. Implement it in Python.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 567
total_tokens: 832
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:06:36-05:00'
sources: []
---

**Leadership Principles:** *Customer Obsession* (design for the end‑user’s speed) and *Ownership* (own the entire lifecycle of the cache).

**Situation / Task**  
In a recent interview I was asked to design an LRU cache that guarantees O(1) `get`/`put` and evicts the least‑recently‑used item when full. The interviewer wanted both a clean design and working Python code.

**Action**  
I chose a **hash map + doubly linked list** combination:  
- `dict[key] → node` gives O(1) lookup.  
- Each `node` holds key, value, prev/next pointers.  
When accessing or inserting, I move the node to the head (most‑recent). If capacity is exceeded, I remove the tail node and delete its entry from the dict.

```python
class Node:
    __slots__ = ("k","v","prev","next")
    def __init__(self,k,v): self.k,self.v=k,v; self.prev=self.next=None

class LRUCache:
    def __init__(self,cap):
        self.cap=cap; self.map={}
        self.head=Node(None,None); self.tail=Node(None,None)
        self.head.next=self.tail; self.tail.prev=self.head
    def _remove(self,n): n.prev.next=n.next; n.next.prev=n.prev
    def _add_head(self,n):
        n.next=self.head.next; n.prev=self.head
        self.head.next.prev=n; self.head.next=n
    def get(self,k):
        if k not in self.map: return -1
        node=self.map[k]; self._remove(node); self._add_head(node)
        return node.v
    def put(self,k,v):
        if k in self.map:
            self._remove(self.map[k])
        node=Node(k,v); self._add_head(node); self.map[k]=node
        if len(self.map)>self.cap:
            rem=self.tail.prev; self._remove(rem); del self.map[rem.k]
```

**Result**  
The algorithm runs in **O(1)** per operation, uses **O(capacity)** memory, and I explained that this design scales to millions of keys with negligible latency—meeting the interview’s performance goal.  

**Reflection**  
I learned that emphasizing *Ownership* (owning both data structures) and *Dive Deep* (analyzing pointer updates) convinces a bar‑raiser of my depth and commitment to clean, production‑ready code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
