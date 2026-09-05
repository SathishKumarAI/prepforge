---
qid: ing_23f528ce1c__fp__local
question: 'Explain: Query ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 495
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:22:03-05:00'
sources: []
---

**Query‑parallel Paged Attention – the vLLM trick**

When a transformer processes a batch of *Q* queries against an ever‑growing key/value store (the past tokens), the naïve attention cost is  
\[
O(Q\,K\,D)
\]
where *K* is the number of stored keys and *D* the hidden size.  In large‑language models, *K* can reach millions, so this quadratic scaling kills GPU memory.

vLLM observes that for each query the dot products with all past keys are independent; only the **top‑k** (or softmax) results matter.  If we split the key/value matrix into *P* **pages**, each page contains a contiguous block of tokens.  Instead of broadcasting every query to every key, we let each query thread compute its dot products against one page at a time:

1. **Page‑wise reduction** – each GPU thread block loads a page (size ≈ 32–64 tokens) into shared memory and accumulates partial attention scores for all *Q* queries simultaneously.  
2. **Parallel aggregation** – after processing all pages, the partial results are summed to produce the final logits.

Mathematically this is equivalent to
\[
\text{softmax}\!\left(\frac{Q K^\top}{\sqrt{D}}\right)
=\sum_{\text{pages }p}\! \text{softmax}_p,
\]
because softmax over a concatenated set equals the weighted sum of per‑page softmaxes (the weights are the page‑wise exponentials).  

**Why it works:** The computation is *linear* in *K*, not quadratic, because each query accesses each key only once.  Memory locality improves cache hit rates; the shared memory holds a whole page, eliminating redundant global loads.

**Non‑obvious insight:** The trick relies on the **associativity of softmax’s exponentials**—the softmax over the union of pages can be reconstructed from per‑page softmaxes without recomputing cross‑page interactions.  This property is rarely exploited in standard transformer libraries, which treat attention as a monolithic matrix multiplication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
