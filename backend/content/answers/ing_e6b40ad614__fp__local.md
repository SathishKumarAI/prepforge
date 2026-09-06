---
qid: ing_e6b40ad614__fp__local
question: 'Explain: KV-cache memory math and paged attention'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 446
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:09:25-05:00'
sources: []
---

**KV‑cache & paged attention – a principled view**

When a transformer processes tokens sequentially, each layer computes key *K* and value *V* vectors for the current token:  
\(K_t = W_Kx_t,\; V_t = W_Vx_t\).  
Attention to past context requires dot‑products \(Q_sK_t^\top\) for all previous positions \(s<t\). Computing these on‑the‑fly would repeat the same matrix multiplications every step.  

The *KV‑cache* stores \(\{K_1,\dots,K_{t-1}\}\) and \(\{V_1,\dots,V_{t-1}\}\) in a contiguous buffer. For each new token, we only need to multiply \(Q_t\) by the cached keys once, then weight the cached values accordingly. This turns an **O(t d)** per‑step cost into **O(d)**, where *d* is hidden dimension.

**Paged attention** extends this idea geometrically: a long sequence can be partitioned into “pages” of size *p*. Each page’s keys/values are kept in separate memory banks. When the model attends to the *k* most relevant pages (e.g., via locality‑sensitive hashing or learned indices), it restricts dot‑products to those pages, reducing complexity from **O(t d)** to **O(k p d)** with negligible loss of expressivity.  

**Non‑obvious insight:** The cache is not merely a speed trick—it implements an *implicit low‑rank approximation* of the full attention matrix. By reusing fixed K/V rows, we enforce that past contributions lie in a subspace spanned by earlier tokens, which aligns with the observation that long‑range dependencies often have a compressed structure. This hidden geometry explains why KV‑caching and paging work so well even when memory is heavily constrained.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
