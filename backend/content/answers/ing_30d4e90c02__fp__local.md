---
qid: ing_30d4e90c02__fp__local
question: 'Explain: Sliding Window Attention (SWA) — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 523
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:48:52-05:00'
sources: []
---

**Sliding‑Window Attention (SWA): a locality‑aware transformer**

At its core, attention computes a weighted sum of all token embeddings:
\[
\mathbf{z}_i=\sum_{j=1}^{N}\alpha_{ij}\,\mathbf{h}_j ,\qquad
\alpha_{ij}=\frac{\exp(\langle \mathbf{q}_i,\mathbf{k}_j\rangle/\sqrt d)}{\sum_k \exp(\langle \mathbf{q}_i,\mathbf{k}_k\rangle/\sqrt d)} .
\]
The quadratic cost comes from the denominator, which requires a global softmax.  
If we only care about *local* interactions—common in vision or language with strong locality—we can replace the full softmax by a **sliding window** of width \(w\). For token \(i\), the attention scores are computed only for indices \(j \in [i-w/2,\, i+w/2]\). This turns the dense matrix into a banded one, reducing time from \(O(N^2)\) to \(O(Nw)\).

Why does this still work?  
1. **Optimization view**: SWA corresponds to solving a constrained version of the original attention objective where each query is only allowed to attend to a subset of keys. The resulting gradient updates are *local* but preserve the capacity to model long‑range dependencies via stacking multiple layers—each layer shifts the receptive field forward.
2. **Information‑theoretic view**: By restricting the support of \(\alpha_{ij}\), we implicitly impose an entropy constraint on the attention distribution, encouraging sharper, more interpretable local patterns while still enabling information flow through residual connections.
3. **Geometric view**: In Euclidean space, a windowed kernel approximates a *band‑limited* filter; SWA can be seen as applying a learnable band‑limited convolution in the embedding domain.

**Non‑obvious insight:**  
Because each token only attends to its neighbors, the *softmax denominator* becomes a small sum. This makes the attention **numerically stable** even with very large vocabularies or high‑dimensional embeddings—an issue that plagues full softmax due to exponentiation overflow. Thus SWA is not merely efficient; it also improves numerical robustness in practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
