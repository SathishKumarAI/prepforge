---
qid: ing_b3dccc1170__faang__local
question: Why does scaled dot-product attention divide by √d_k?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 445
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:42:19-05:00'
sources: []
---

**Clarify**  
The question asks why the *scaled dot‑product attention* formula divides the raw dot product of queries and keys by \(\sqrt{d_k}\). We’re assuming the reader knows that \(Q,K,V\) are matrices of dimension \(d_k, d_v\), and that we want to compute a weighted sum of values.

**Approach**  
Explain the role of scaling: it keeps the softmax input in a numerically stable range so gradients don’t vanish or explode. Outline the derivation: raw dot product variance grows with \(d_k\); scaling normalises this, then discuss why \(\sqrt{d_k}\) (not \(d_k\)).

**Depth**  
For random vectors with unit‑variance components,  
\[
E[(q^\top k)^2] = d_k .
\]
Thus the standard deviation of \(q^\top k\) is \(\sqrt{d_k}\). Dividing by this value yields a distribution whose variance ≈ 1 regardless of feature size. Softmax behaves best when its inputs are roughly in \([-1,1]\); otherwise large values produce near‑one probabilities and tiny gradients (the “softmax saturation” problem). By scaling we preserve the relative similarities while preventing numerical overflow/underflow in the exponentials.

**Edge cases**  
If \(d_k=0\) or very small, division is unstable; in practice we use a small epsilon. For extremely high‑dimensional embeddings the benefit diminishes because the dot products already have moderate magnitude. Testing should verify that loss gradients remain non‑zero with and without scaling on synthetic data.

**Optimize & communicate**  
Mention alternatives (e.g., temperature tuning) and why \(\sqrt{d_k}\) is a principled default: it ties directly to variance, keeps training stable across layers, and is computationally cheap. Conclude by summarising the intuition: *scaling normalises similarity scores so that softmax behaves predictably regardless of embedding size*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
