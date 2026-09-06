---
qid: vq_579c17c62d__faang__local
question: How do you find the final integer in a NumPy array?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 490
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:11:22-05:00'
sources: []
---

**Clarify**

> “Find the final integer” → we need the last non‑zero element in a 1‑D `numpy.ndarray` of integers (e.g., `[0,2,5,0]` → answer `5`).  
> Confirm assumptions: array is 1‑D, contains at least one non‑zero, and “final” means the rightmost such element.

**Approach**

1. Reverse the array (`[::-1]`) to scan from the end.  
2. Find indices where values ≠ 0 using `np.nonzero`.  
3. Take the first index of this reversed view; map back to original index.  
4. Return that element.

**Depth**

```python
import numpy as np

def last_nonzero(arr: np.ndarray) -> int:
    rev = arr[::-1]                          # O(n)
    nz = np.nonzero(rev)[0]                  # indices of non‑zeros in reversed order
    if not nz.size:
        raise ValueError("Array contains no non‑zero integers")
    orig_idx = len(arr) - 1 - nz[0]          # map back to original index
    return int(arr[orig_idx])
```

*Complexity*: `O(n)` time, `O(1)` extra space (aside from the reversed view).  
*Trade‑off*: Reversing is cheap; could also use `np.argmax` on a boolean mask of non‑zeros and subtract 1.

**Edge Cases**

- All zeros → raise exception or return sentinel.  
- Empty array → error.  
- Single element arrays handled naturally.  

**Optimize & Communicate**

If performance matters, avoid slicing by iterating from the end in pure Python:  

```python
for i in range(len(arr)-1, -1, -1):
    if arr[i]:
        return int(arr[i])
```

This keeps memory usage minimal and is linear‑time.  
Explain to interviewers that we chose a vectorized solution first (cleaner, leverages NumPy), then provided an explicit loop for clarity and potential micro‑optimizations. This demonstrates structured reasoning, depth of implementation, and awareness of trade‑offs—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
