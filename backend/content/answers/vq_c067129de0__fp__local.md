---
qid: vq_c067129de0__fp__local
question: What is the best way to remove values from a Python array?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 426
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:54:24-05:00'
sources: []
---

**Why removing items matters**

An *array* (really a list) in CPython stores references contiguously in memory. Deleting an element forces every subsequent reference to shift left, which is \(O(n)\). If you delete many items, the cost multiplies; if you delete rarely, the overhead of copying each time dominates.

**Fundamental trade‑off**

You can either  
1. **Shift in place** – simple `del lst[i]` or `lst.pop(i)`; cheap for a few deletions but \(O(n)\) per operation.  
2. **Build a new array** – iterate once, collect the survivors (`[x for x in lst if cond(x)]`); one pass \(O(n)\), no intermediate shifts.

The optimal strategy is to choose the second when *k*, the number of deletions, is \(\Omega(1)\) but not negligible compared with `len(lst)`; otherwise shift in place.

**Practical rule**

```python
# Remove all elements that satisfy cond
lst[:] = [x for x in lst if not cond(x)]
```

* Why slice assignment? It keeps the same list object, preserving references elsewhere.  
* Complexity: one pass \(O(n)\), memory overhead only a temporary iterator and the new list (≈ size of survivors).  

**Non‑obvious insight**

If deletions are *random*, you can achieve expected linear time **without extra allocation** by using the “swap‑with‑last” trick:

```python
i = 0
while i < len(lst):
    if cond(lst[i]):
        lst[i] = lst.pop()          # move last element into slot
    else:
        i += 1
```

Each deletion costs amortized \(O(1)\) because you avoid shifting. It only works when the order of survivors is irrelevant—an often overlooked but powerful optimization in high‑volume data cleansing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
