---
qid: ing_2417c938ed__fp__local
question: 'Explain: Paged Attention ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 501
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:22:28-05:00'
sources: []
---

### Paged Attention – the “chunk‑wise” matrix multiplication of modern LLMs

When a transformer processes a long sequence \(x\in \mathbb{R}^{L\times d}\), each token attends to every other, yielding an attention map \(A = \operatorname{softmax}(QK^\top / \sqrt d)\). The naïve computation costs \(\Theta(L^2d)\) time and \(\Theta(L^2)\) memory – infeasible for \(L\gg10^4\).

**Paged Attention** reorganises this product by slicing the key‑value tensor into *pages* of size \(P\ll L\). For each query page we compute
\[
Q_{\text{page}} K^\top_{\text{all pages}}
\]
but crucially, only one page of keys/values is resident in fast memory at a time. The operation becomes a sequence of independent GEMMs:
\[
A_{\text{page}} = \operatorname{softmax}\!\left(\frac{Q_{\text{page}} K^\top_{\text{all pages}}}{\sqrt d}\right).
\]
Because the GPU’s cache can hold a page, memory bandwidth is maximised while keeping peak RAM usage bounded to \(O(Pd + Ld)\). The mathematical equivalence follows from associativity of matrix multiplication and the fact that softmax is applied per query row—exactly the same as the full‑sequence attention.

**Why it works:**  
- **Linear algebraic decomposition**: we split a single large GEMM into many smaller, perfectly cache‑friendly GEMMs.  
- **No approximation**: every query still sees all keys; only the scheduling changes.  
- **GPU utilisation**: each page fits in shared memory, so kernel launch overhead is amortised over many tokens.

**Non‑obvious insight:**  
Paged Attention *implicitly enforces a form of locality‑of‑reference that mirrors how humans read*: we process chunks sequentially while still being able to reference earlier material. This hidden “chunked attention” reduces not just memory, but also the effective communication cost between CPU and GPU—often the real bottleneck in inference pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
