---
qid: vq_5da3a8f926__faang__local
question: How do I make a 3D or ND array?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 505
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:12:21-05:00'
sources: []
---

**Clarify**  
The interviewee wants to create a multi‑dimensional (3‑D or N‑D) numeric array in code. I’ll assume: *a programming language that supports arrays (e.g., Python/NumPy, C++ std::vector), the dimensions are known at runtime, and values will be initialized (zeros or random).*  

**Approach**  
1. **Choose a data structure** – contiguous block (`float*` in C/C++, `np.ndarray` in Python).  
2. **Compute total size** – product of all dimension lengths.  
3. **Allocate memory** – one‑dimensional buffer.  
4. **Index mapping** – convert multi‑index `(i,j,k,…)` to linear offset:  
   `offset = i*stride0 + j*stride1 + …`, where `stride_t = ∏_{s>t} dim_s`.  
5. **Provide helper functions** for element access and slicing if needed.  

**Depth (Python/NumPy example)**  
```python
import numpy as np

def make_nd_array(shape, dtype=float):
    """Create an N‑D array of zeros with given shape."""
    return np.zeros(shape, dtype=dtype)

# 3‑D example
arr = make_nd_array((4,5,6))
print(arr.shape)      # (4, 5, 6)
print(arr[2,1,3])     # element at indices
```
*Complexity*: O(∏dim) time to zero the buffer; O(1) access.  
*Trade‑offs*: Using NumPy gives vectorized ops and memory locality; a raw C array offers maximum speed but requires manual bounds checking.

**Edge cases**  
- Zero or negative dimensions → raise ValueError.  
- Extremely large total size → `MemoryError`.  
- Non‑integral indices → TypeError.  

**Optimize & Communicate**  
For performance‑critical code, precompute strides once and reuse them. In C++, use `std::vector<float>` with a custom accessor class. Explain that NumPy internally uses contiguous memory plus stride logic, which is why multi‑dim indexing is still O(1). Conclude by noting that the same pattern scales to any N, making the solution both simple and extensible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
