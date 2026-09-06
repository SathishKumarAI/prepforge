---
qid: vq_9d760b61e3__faang__local
question: How to remove duplicates from an array of elemets?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 486
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:25:06-05:00'
sources: []
---

**Clarify**

> *Problem*: Given a list/array of elements (integers, strings, objects), return a new collection that contains each distinct element only once.  
> *Assumptions to confirm*:
> - Elements are hashable so we can use a set or dictionary.
> - Order is not required; if it is, specify whether stable order or sorted order is desired.

**Approach**

1. Iterate through the array once.
2. Use a hash‑based structure (`Set` in JavaScript/Java, `HashSet`/`unordered_set` in C++, `set` in Python) to track seen elements.
3. Append each element to an output list only if it hasn’t been seen before.

**Depth**

```python
def dedupe(arr):
    seen = set()
    out = []
    for x in arr:
        if x not in seen:
            seen.add(x)
            out.append(x)
    return out
```

*Complexity*:  
- Time – **O(n)**, one pass.  
- Space – **O(k)** where *k* is the number of unique elements (for the set and output).

If order matters but you want a stable ordering, the same algorithm preserves first occurrence order.

**Edge Cases**

| Input | Output | Notes |
|-------|--------|-------|
| `[]` | `[]` | No elements. |
| `[1,1,1]` | `[1]` | All duplicates removed. |
| `['a','b','a']` | `['a','b']` | Handles strings. |
| `[None, None]` | `[None]` | Works if language treats `None` as hashable. |

**Optimize & Communicate**

- For large streams, use a *Bloom filter* to reduce memory at the cost of false positives (acceptable in some analytics pipelines).  
- If input is already sorted, we can dedupe in‑place with **O(1)** extra space by scanning once and shifting unique elements forward.  
- Communicate clearly: “I’ll use a hash set for O(n) time; if order matters, I’ll keep the first occurrence.” This shows awareness of trade‑offs and keeps the interviewer engaged.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
