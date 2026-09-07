---
qid: ing_58ee439f5f__faang__local
question: 'Explain: Write an iterator class that lazily flattens an arbitrarily nested
  list of lists/integers. No generators - explicit state.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 483
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:10:11-05:00'
sources: []
---

**Clarify**  
We need an `Iterator` that takes a nested list (e.g., `[1,[2,[3]],4]`) and yields integers one by one, flattening arbitrarily deep nesting. No generators; we must manage state explicitly.

Assumptions:  
- Elements are either `int` or `list`.  
- The input is well‑formed (no cycles).  

**Approach**  
Use an explicit stack of iterators. Push the iterator of the top‑level list onto the stack. Repeatedly pop from the current iterator; if the value is an int, return it. If it’s a list, push its iterator on top and continue. When an iterator exhausts, pop it.

**Depth (core)**  
```python
class NestedIterator:
    def __init__(self, nested_list):
        # stack holds tuples: (iterator, remaining elements)
        self.stack = [iter(nested_list)]

    def __next__(self):
        while self.stack:
            try:
                nxt = next(self.stack[-1])
            except StopIteration:
                self.stack.pop()
                continue

            if isinstance(nxt, int):
                return nxt
            # nested list: push its iterator
            self.stack.append(iter(nxt))
        raise StopIteration

    def __iter__(self):
        return self
```
Time complexity per `next()` is amortized **O(1)**; space complexity is O(depth) for the stack.

**Edge cases**  
- Empty lists → immediately pop.  
- Deep nesting (e.g., 10⁵ levels) could hit recursion limits if we used recursion, but our iterative stack avoids that.  
- Mixed types or unexpected objects raise `TypeError` (could be handled explicitly).

**Optimize & communicate**  
If the nested structure is static and many iterators are needed, pre‑flatten once for O(N) time/space trade‑off. In a streaming context, this lazy approach saves memory. I would explain the stack invariant and show how each `next()` call guarantees constant work on average, satisfying interviewers’ focus on clear reasoning and complexity analysis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
