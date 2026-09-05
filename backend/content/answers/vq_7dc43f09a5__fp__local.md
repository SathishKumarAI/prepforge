---
qid: vq_7dc43f09a5__fp__local
question: What are negative indexes and why are they used?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 353
total_tokens: 522
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:43:01-05:00'
sources: []
---

In Python lists (and other sequence types) the fundamental problem is to locate an element when you only know **how many steps** from one end you need to move.  
If we label positions *0 … n‑1*, a positive index *i* means “step *i* from the left”.  But once you’re at the right side, it’s often more convenient to count backwards: “three places before the last element”.  That counting direction is what negative indexes encode.

Formally, for an object of length *n* we define

```
index(i) = i           if i ≥ 0
index(i) = n + i       if i < 0
```

This mapping preserves the linear order and guarantees a bijection between all integers and positions in the sequence.  It is the simplest, most efficient (O(1)) way to support both forward and reverse traversal without storing two separate pointers or performing extra arithmetic on each access.

The deeper principle at work is **index normalization**: any integer can be translated into a canonical “offset from the start” by adding *n* when negative.  This mirrors modular arithmetic, where we wrap around a circle; here we wrap around an open interval.

A non‑obvious insight: negative indexes are not just syntactic sugar for `len(seq)+i`; they enable lazy evaluation of slices (`seq[-k:]`) without recomputing the length each time.  Python caches `len(seq)` during slicing, so the cost is constant and independent of sequence size, making reverse slices as cheap as forward ones.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
