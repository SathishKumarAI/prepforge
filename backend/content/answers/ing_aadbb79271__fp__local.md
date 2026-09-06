---
qid: ing_aadbb79271__fp__local
question: 'Explain: Key ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 402
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:08:46-05:00'
sources: []
---

**Paged Attention – the core of vLLM’s memory‑efficient inference**

When a transformer processes an input of length *L*, every query token must attend to all *L* key/value vectors. Naïvely this costs *O(L²)* time and, more importantly for large models, *O(L·D)* memory (where *D* is hidden dimension). vLLM’s insight: a transformer’s self‑attention matrix is *sparse* in practice—each token only needs the most relevant keys. Instead of holding all *L·D* values in GPU RAM, we **partition** the key/value tensors into fixed‑size *pages* (e.g., 1 kB each) and keep only a small working set resident.

The algorithm treats attention as a **two‑stage kernel**:
1. **Page selection** – for every query we compute a cheap relevance score against a lightweight page‑level summary (e.g., mean of keys). This yields the top‑K pages per token.
2. **Fine‑grained attention** – only the selected pages are fetched into registers and processed, producing the final output.

Why this works: The *relevance score* is an unbiased estimator of true dot‑product importance; selecting top‑K pages preserves the dominant eigen‑components of the attention matrix (akin to low‑rank approximation). Consequently, we achieve a near‑optimal trade‑off between compute and memory without modifying the model weights.

**Non‑obvious insight:** The page‑level summary can be reused across tokens in the same batch because the relevance scores are *shift‑invariant*. This allows vLLM to precompute summaries once per sequence and reuse them for all queries, reducing overhead by an order of magnitude.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
