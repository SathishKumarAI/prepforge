---
qid: ing_45e2f76f28__faang__local
question: 'Explain: Self-Attention Process — The Illustrated GPT-2 (Visualizing Transformer
  Language Models) \u2013 Jay Alammar \u2013 Visualizing machine learning one concept
  at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 494
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:26:15-05:00'
sources: []
---

**Self‑Attention in GPT‑2 – A Structured Walkthrough**

| Step | What I’d say |
|------|--------------|
| **Clarify** | “You want to understand how the self‑attention layer inside a GPT‑2 transformer turns an input token sequence into contextual embeddings. We’ll assume the reader knows basic linear algebra and has seen a single Transformer block before.” |
| **Approach** | 1️⃣ Embed tokens → *X* (shape [L, d]) <br>2️⃣ Project to Q,K,V with learned matrices Wq,Wk,Wv <br>3️⃣ Compute scaled dot‑product scores S = QKᵀ / √dk <br>4️⃣ Apply softmax to get attention weights A <br>5️⃣ Weighted sum V: O = AV <br>6️⃣ Feed O through feed‑forward + residuals. |
| **Depth** | - *Q, K, V* capture “query”, “key”, and “value” roles; each token queries every other token. <br>- Softmax turns raw similarities into a probability distribution over positions, so the model can focus on relevant context (e.g., pronoun resolution). <br>- Scaling by √dk prevents large dot‑products from saturating softmax. <br>- Multi‑head attention splits d into h heads; each head learns different patterns (syntax vs semantics). Complexity per layer: O(L²·d) due to pairwise scores, but linear in L for sparse variants. |
| **Edge Cases** | - Very long sequences cause quadratic memory blow‑up → use caching or sparse attention.<br>- If Q≈0 for a token, its output becomes an average of V (no context). <br>- Attention weights can become uniform if keys are orthogonal – leads to “dead” heads; pruning mitigates this. |
| **Optimize & Communicate** | Highlight that GPT‑2’s 12 layers each have ~12 heads (d=768), so total parameters ≈ 345M. Mention improvements like rotary positional encodings or efficient attention variants for production. End by summarizing: “Self‑attention lets every token adaptively gather information from the entire sequence, turning a static embedding into a context‑sensitive representation that powers GPT‑2’s language understanding.” |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
