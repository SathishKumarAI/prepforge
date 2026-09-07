---
qid: ing_aadbb79271__faang__local
question: 'Explain: Key ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 434
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:21:53-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise explanation of *Paged Attention* as used in **vLLM**, the open‑source library that accelerates large language models. I’ll assume you want: (1) what Paged Attention is, (2) why it matters, and (3) how vLLM implements it.

**Approach**  
1. Define standard attention cost.  
2. Show the memory bottleneck for long sequences.  
3. Explain paging into GPU memory.  
4. Highlight the key algorithmic tricks in vLLM.  

**Depth**  
Standard self‑attention scales as *O(L²·d)* (L = sequence length, d = hidden dim). For a 16 k token prompt this exceeds GPU VRAM. Paged Attention splits the key/value tensors into fixed‑size **pages** (e.g., 512 tokens) and keeps only the pages needed for the current query window in fast memory. vLLM pre‑allocates a pool of page buffers, swaps them in/out with zero‑copy `cudaMemcpyAsync`, and updates the attention matrix to reference these pages via index offsets. This reduces peak memory from *O(L²)* to *O(P·L)* where P ≪ L, enabling inference on 32k+ tokens without swapping to host RAM.

**Edge Cases**  
- Very short sequences: paging overhead outweighs benefit; vLLM falls back to full attention.  
- Sparse or irregular tokenization can misalign pages—vLLM pads to page boundaries.  
- GPU memory fragmentation may limit the number of simultaneous requests.

**Optimize & Communicate**  
Future improvements could use *tensor‑core* fused kernels for page lookups and adaptive page sizes based on model depth. I’d explain that Paged Attention is a practical, hardware‑aware optimization that trades a small extra indexing step for orders‑of‑magnitude VRAM savings—exactly the kind of system‑level thinking FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
