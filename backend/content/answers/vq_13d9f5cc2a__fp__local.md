---
qid: vq_13d9f5cc2a__fp__local
question: What is the best way to add values to a Python array?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 522
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:23:46-05:00'
sources: []
---

### Adding to a Python list – the optimal strategy

The core problem is **dynamic storage**: you want an ordered collection that can grow as data arrives, yet still support fast random access.  
Python’s built‑in `list` implements a *dynamic array* (sometimes called a vector). Internally it keeps a contiguous block of memory and, when the block fills, allocates a larger one and copies the old elements over. The key is that the size grows by a *geometric factor* (≈ 1.125–1.5 per allocation). This guarantees **amortized O(1)** time for each `append` – you pay the copy cost rarely, so the average cost stays constant.

#### Why `append()` is best
```python
L = []
for x in iterable:
    L.append(x)      # O(1) amortized
```
- **Single‑pointer operation**: only a few machine instructions are executed.
- **Cache friendliness**: contiguous memory keeps cache lines full.
- **Thread‑safe** for CPython’s GIL (no explicit locking needed).

#### Alternatives and pitfalls

| Method | Complexity | Notes |
|--------|------------|-------|
| `L += [x]` | O(1) amortized | Same as `append`, but creates a temporary list if you write `+= [x, y]`. |
| `L.extend([x, y])` | O(k) where k is number of new items | Efficient for bulk inserts. |
| `array.array('i').append(x)` | Similar to list (but type‑restricted) | Use when memory footprint matters. |

#### Non‑obvious insight  
**The geometric growth factor balances two opposing costs:** keeping the array small wastes space; making it too large incurs frequent reallocations. The chosen factor is a *sweet spot* derived from minimizing the long‑term amortized cost, not just the worst case. This subtle trade‑off underlies why `append` feels instantaneous even for millions of elements.

In short: use `list.append()` (or `extend` for many items). It’s mathematically optimal for dynamic growth and practically fast.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
