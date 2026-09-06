---
qid: ing_7cc61b7eef__fp__local
question: 'Explain: Inputs ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 426
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:30:40-05:00'
sources: []
---

**Paged attention – the core of vLLM’s speedup**

When a transformer processes a long sequence \(x_{1:N}\), each token attends to all others:  
\[
\text{Attention}(q_i,k_j) = \frac{\exp(q_i^\top k_j / \sqrt{d})}{\sum_{\ell=1}^N \exp(q_i^\top k_\ell/\sqrt{d})}.
\]
For a single forward pass this is \(O(N^2)\) in time and memory, because every query must compare against all keys.  
vLLM’s *paged attention* observes that inference typically runs on **fixed‑size “pages”** of tokens (e.g., 512 or 2048). Once a page is loaded into GPU memory, it can be reused for many consecutive queries; the expensive part is the matrix multiplication \(QK^\top\), which is dominated by the **kernel launch cost and bandwidth** rather than raw arithmetic.

The method partitions the key/value tensors into pages, stores them in **fast on‑device memory**, and reuses each page across all heads and layers. The algorithmic complexity becomes  
\[
O\!\left(\frac{N}{P}\cdot P^2\right)=O(NP),
\]
where \(P\) is the page size. Since \(P \ll N\), this linear scaling replaces the quadratic blow‑up.

**Deeper principle:** it trades **temporal locality for spatial reuse**, a classic cache optimization mapped to GPU memory hierarchy.  
A non‑obvious insight: *the bottleneck shifts from compute to memory bandwidth*. By keeping keys/values resident in L1/L2 caches, vLLM turns the softmax’s denominator into an inexpensive local reduction, enabling 10× faster inference on long sequences without altering model weights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
