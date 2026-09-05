---
qid: vq_7b227b3305__fp__local
question: Is it possible to utilize diag() to create a square matrix?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 434
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:42:30-05:00'
sources: []
---

In linear algebra the *diagonal* of an \(n\times n\) matrix contains all the entries that satisfy \(i=j\).  
The `diag` routine in NumPy/PyTorch is defined to **either** take a vector and return a square matrix whose diagonal equals that vector, or take a matrix and extract (or set) one of its diagonals.  

Why does this work?  
- A vector \(v=(v_0,\dots ,v_{n-1})\) can be seen as an \(n\times n\) tensor with zeros everywhere except the main diagonal: \((M_{ij}=v_i\,\delta_{ij})\).  
- `diag(v)` implements exactly this construction, yielding a matrix whose Frobenius norm is \(\|v\|_2\), and whose spectral properties are trivial (eigenvalues equal to the entries of \(v\)).  

Thus, to *create* a square matrix from scratch you simply call:

```python
import numpy as np
n = 5
A = np.diag(np.arange(1, n+1))   # [[1,0,…],[0,2,…],…]
```

Non‑obvious insight: `diag` returns a **view** of the original array when extracting a diagonal, but when constructing a matrix it allocates new memory. Therefore, if you need to repeatedly build identity-like matrices, use `np.eye(n)` which is more efficient than `np.diag(np.ones(n))`. This subtle difference matters in high‑performance settings where allocation cost dominates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
