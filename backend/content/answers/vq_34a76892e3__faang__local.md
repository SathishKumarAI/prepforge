---
qid: vq_34a76892e3__faang__local
question: How do you reve rse a li st?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 395
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:05:27-05:00'
sources: []
---

**Clarify**  
You want to reverse the order of elements in a Python list *in place* (or return a new reversed list). Clarify whether the original list must remain unchanged or can be mutated, and if you need an iterator or a slice.

**Approach**  
1. Decide on “in‑place” vs. “new list.”  
2. For in‑place: swap symmetric elements until the middle.  
3. For new list: use slicing `[::-1]` or `reversed()` then `list()`.  

**Depth**  
*In‑place (O(1) extra space, O(n) time):*
```python
def reverse_in_place(lst):
    i, j = 0, len(lst)-1
    while i < j:
        lst[i], lst[j] = lst[j], lst[i]
        i += 1; j -= 1
```
*New list (O(n) space):*
```python
def reversed_list(lst):
    return lst[::-1]          # or list(reversed(lst))
```
Both preserve element order and type. The slice version is concise but allocates a new list.

**Edge Cases**  
- Empty list → returns empty.  
- Single‑element list → unchanged.  
- Mutable elements stay referenced, not deep‑copied.  
- For immutable types (e.g., tuples), use `tuple(reversed(...))`.

**Optimize & Communicate**  
Explain that the slice method is faster in CPython due to C implementation; however, if memory is critical, prefer the in‑place swap. Mention that for very large lists, you might want to chunk or stream processing. Conclude by summarizing time/space trade‑offs and confirming assumptions with the interviewer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
