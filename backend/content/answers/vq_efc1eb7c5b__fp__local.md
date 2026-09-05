---
qid: vq_efc1eb7c5b__fp__local
question: How do you reverse a string without using REVERSE (‘string’) ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 462
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:03:00-05:00'
sources: []
---

**From first principles**

A string `s` of length `n` is an array of symbols indexed \(0\ldots n-1\).  
Reversing means producing a new sequence \(s_{\text{rev}}\) where  
\(s_{\text{rev}}[i] = s[n-1-i]\).  
This mapping is bijective, so the operation is a permutation of indices.  

**Why it must work this way**

The only way to preserve all symbols and order them backwards is to read each symbol once from the end and write it once at the start; any other strategy would either drop or duplicate data, violating the definition of “reverse”.

**Algorithmic realization**

1. Allocate a result array `r` of length `n`.  
2. For each index `i` from `0` to `n-1`, set `r[i] = s[n‑1‑i]`.  
3. Return `r`.

This runs in \(O(n)\) time and uses \(O(n)\) extra space—optimal for a functional reverse.

**In‑place variant (constant space)**

Swap the first and last characters, then the second and second‑last, etc.:

```python
def reverse_in_place(s):
    chars = list(s)
    i, j = 0, len(chars)-1
    while i < j:
        chars[i], chars[j] = chars[j], chars[i]
        i += 1; j -= 1
    return ''.join(chars)
```

**Non‑obvious insight**

Reversing is equivalent to applying a *reflection* across the midpoint of the index set. Recognizing this symmetry lets you implement the operation with a single loop that simultaneously reads from one end and writes to the other, ensuring linear time without extra allocations if in-place modification is acceptable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
