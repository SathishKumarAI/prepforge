---
qid: vq_9f9fad08c1__faang__local
question: What is one-dimensional indexing?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 454
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:25:31-05:00'
sources: []
---

**Clarify**  
The interview asks about *one‑dimensional indexing* in the context of AI data structures (e.g., tensors, vectors). I’ll assume they mean the method of accessing elements along a single axis—mapping a scalar index to an element in a 1‑D array or flattened multi‑dimensional tensor.

**Approach**  
1. Define what “indexing” means for arrays/tensors.  
2. Explain how a 1‑D index works versus higher‑dimensional indices.  
3. Relate it to AI workloads (embedding lookup, batch processing).  

**Depth**  
In Python/NumPy or PyTorch, an array `A` of shape `(n,)` stores elements contiguously in memory. The one‑dimensional index `i` simply returns the element at offset `i`, i.e., `A[i]`. For a multi‑dimensional tensor flattened into 1‑D (row‑major order), the mapping is  
```
offset = i0 * stride0 + i1 * stride1 + … + ik * stridek
```  
When `k=0` (purely 1‑D), `stride0 = 1`, so `offset = i`. In AI, this is used for embedding lookups (`embedding[i]`) or selecting a single feature from a flattened layer. Complexity: O(1) time, O(1) space; no traversal needed.

**Edge Cases**  
- Negative indices (wrap around).  
- Index out of bounds → raises exception or triggers error handling.  
- Sparse tensors may use hash maps instead of dense arrays.

**Optimize & Communicate**  
Highlight that 1‑D indexing is the backbone for efficient GPU kernels: contiguous memory ensures coalesced access, leading to faster throughput in training loops. If asked to extend, discuss vectorized batch indexing (`A[[i,j,k]]`) and its trade‑offs (temporary copies vs. views). This demonstrates clear reasoning, depth, and an eye toward performance—exactly what FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
