---
qid: ing_efcc2ee641__fp__local
question: 'Explain: QK ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 431
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:29:04-05:00'
sources: []
---

**Paged Attention (Q × K = P)**  
At the heart of transformer inference is the soft‑max attention
\(A = \text{softmax}\!\bigl(\frac{Q K^\top}{\sqrt d}\bigr) V\).
For a 10 B‑parameter model, the full \(Q K^\top\) matrix would be terabytes,
yet during decoding only one token per batch is produced.  
The *paged* trick observes that each query vector interacts with **all** key
vectors from previous layers, but many of those keys are *static* across
generations. By partitioning the sequence into fixed‑size “pages” and
storing the pre‑computed \(K^\top V\) for each page in a compact buffer,
the attention reduces to

\[
A \approx Q\,(\underbrace{P}_{\text{page‑aggregated }K^\top V}) .
\]

Thus, instead of recomputing the full matrix every step, we multiply a
small \(Q\) by a pre‑cached **paged key–value tensor**.  
This is essentially *matrix factorization* where the low‑rank structure
comes from the temporal locality of language models.

**Non‑obvious insight:**  
Paged attention exploits the *information bottleneck* between past and
future tokens: the downstream loss depends only on a compressed summary
of earlier context. By caching \(K^\top V\) rather than raw keys, we
maintain the same predictive power while reducing memory bandwidth to
\(O(\text{batch}\times \text{page size})\). This aligns with the principle
that inference is a *read‑only* operation: once a page’s contribution
is computed, it can be reused indefinitely, turning what appears as a
quadratic bottleneck into linear‑time lookups.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
