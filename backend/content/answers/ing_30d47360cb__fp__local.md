---
qid: ing_30d47360cb__fp__local
question: 'Explain: Kimi K2 uses Multi-head Latent Attention (MLA). Explain what it
  does and how it compares to GQA for KV-cache reduction.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 511
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:48:51-05:00'
sources: []
---

**Multi‑Head Latent Attention (MLA)**  
At its core, a transformer’s attention layer rewrites each token as a weighted sum of *all* tokens in the sequence. The weights are produced by a dot‑product between query and key vectors, then softmaxed. In long contexts this quadratic cost is prohibitive. MLA tackles this by **projecting** the full context into a *latent space* where only a handful of “heads” (say 4–8) attend to compressed representations. Formally, if \(X\in\mathbb{R}^{L\times d}\) is the token matrix and \(P\in\mathbb{R}^{d\times k}\) is a learnable projector, we compute latent keys/values \(K'=KP,\;V'=VP\). Each head then attends to \(K'\) and aggregates \(V'\), producing outputs that are finally linearly transformed back into token space. Because the projection collapses dimensions, the softmax operates over \(k\ll L\) items per head, yielding an **\(O(kH)\)** cost instead of \(O(L^2)\).

**Comparison to GQA (Gated Query‑Attention)**  
GQA is a *gate‑based* strategy: it learns a binary mask that selects a subset of tokens to attend to, then performs full attention only on the selected set. This can reduce KV‑cache size if the gate is highly selective, but it still requires computing attention over all tokens once to decide which ones to keep—an \(O(L^2)\) pre‑step.

MLA avoids that extra pass entirely: the projection itself serves as a learned dimensionality reduction, obviating explicit gating. Consequently, MLA’s KV cache is smaller not because fewer tokens are stored but because each token’s key/value vectors are *already compressed*. In practice, this yields a **consistent 4–6× reduction** in KV memory while preserving model quality.

**Non‑obvious insight**  
The latent projector can be interpreted as a *learned positional encoding* for the attention heads. By tailoring \(P\) to the data distribution, MLA implicitly learns which token interactions are most informative, thus achieving compression without sacrificing expressivity—a principle that generalizes beyond transformers to any sequence model requiring scalable self‑attention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
