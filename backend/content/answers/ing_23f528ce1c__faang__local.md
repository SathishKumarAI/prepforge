---
qid: ing_23f528ce1c__faang__local
question: 'Explain: Query ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 448
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:07:53-05:00'
sources: []
---

**Clarify**

*Problem:* We need to explain how *Paged‑Attention* in **vLLM** speeds up inference for very large language models.  
*Assumptions:* The model is a transformer with multi‑head self‑attention, the batch size is small (often 1–4), and GPU memory is limited relative to the context length.

---

**Approach**

1. Describe standard full‑attention: every token attends to all previous tokens → O(L²) compute & memory.  
2. Explain vLLM’s “paged” strategy: split the key/value tensors into fixed‑size pages that fit in GPU RAM.  
3. Show how the decoder reuses these pages across steps, only loading the next page when needed.

---

**Depth**

- **Memory layout:** keys/values are stored as *k × v* matrices of shape `(num_pages, page_size, hidden_dim)`.  
- **Attention computation:** for token `t` we query all pages whose indices ≤ `t`.  
- **Page caching:** once a page is loaded it stays in GPU memory; only the newest page is swapped out when the context grows beyond available RAM.  
- **Complexity:** compute remains O(L²) but with a lower constant factor because each page is processed as a contiguous block, enabling SIMD and reducing kernel launch overhead.  
- **Result:** up to 4–5× speedup for 8k‑token contexts on a single GPU.

---

**Edge Cases**

- *Very short sequences:* paging overhead outweighs benefits; fallback to full attention.  
- *Large batch size:* pages must be duplicated per batch or shared via tensor parallelism.  
- *Memory fragmentation:* careful page alignment is required.

---

**Optimize & Communicate**

I’d highlight that paged‑attention trades a small increase in algorithmic complexity for dramatic memory savings and kernel efficiency, making inference of trillion‑parameter models feasible on consumer GPUs. I would conclude by noting the importance of tuning `page_size` to the specific GPU architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
