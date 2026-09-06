---
qid: ing_58ee439f5f__fp__local
question: 'Explain: Write an iterator class that lazily flattens an arbitrarily nested
  list of lists/integers. No generators - explicit state.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 444
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:13:09-05:00'
sources: []
---

### Why a lazy flattening iterator?

A nested list can be arbitrarily deep: `[[1, [2]], 3]`.  
To expose it as a simple sequence we must **unfold** the structure on‑demand, not all at once—otherwise memory blows up for huge or infinite nests.  
Thus the iterator’s job is to *maintain exactly enough state* to produce the next integer when requested.

### Core principle: stack of iterators

Each list level behaves like an `Iterator` over its elements.  
When we encounter a sub‑list, we push a new iterator onto a **stack**; when that iterator exhausts, we pop it and resume the previous one.  
The stack’s depth equals the current nesting depth, guaranteeing *O(depth)* auxiliary space.

### Implementation sketch (no generators)

```python
class FlatIter:
    def __init__(self, data):
        self.stack = [iter(data)]      # top‑of‑stack iterator

    def __iter__(self): return self

    def __next__(self):
        while self.stack:
            try:
                item = next(self.stack[-1])
            except StopIteration:          # finished current level
                self.stack.pop()
                continue
            if isinstance(item, list):     # descend into sub‑list
                self.stack.append(iter(item))
                continue
            return item                    # integer found
        raise StopIteration
```

### Non‑obvious insight

The stack is *not* a simple recursion depth counter; it carries the **current iterator** itself.  
This eliminates the need for auxiliary indices or flattening buffers, and ensures that each call to `__next__` visits exactly one element of the original structure—no redundant work, no backtracking.

In short: by treating every nested list as an iterator and chaining them with a stack, we achieve true lazy flattening with minimal state and linear space in nesting depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
