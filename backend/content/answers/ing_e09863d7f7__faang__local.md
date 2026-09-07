---
qid: ing_e09863d7f7__faang__local
question: 'Explain: Self-attention in one screen — Llm Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 518
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:21:32-05:00'
sources: []
---

**Self‑attention (one‑screen overview)**  
*Context*: In a language model, every token must weigh the influence of all other tokens in the same sequence.

| Stage | What happens | Why it matters |
|-------|--------------|----------------|
| **1️⃣ Query/Key/Value projections** | Each token \(x_i\) is linearly transformed to three vectors: \(q_i = W_Qx_i,\; k_i=W_Kx_i,\; v_i=W_Vx_i\). | Enables the model to learn *different* roles for a token in comparing (query), being compared (key), and providing content (value). |
| **2️⃣ Similarity scoring** | Compute dot‑product \(s_{ij}=q_i^\top k_j / \sqrt{d_k}\) for all token pairs. Scale by \(\sqrt{d_k}\) to keep gradients stable. | Gives a raw relevance score between each pair of tokens. |
| **3️⃣ Normalization (softmax)** | Convert scores into probabilities \(a_{ij}=\text{softmax}_j(s_{ij})\). | Ensures weights sum to 1, turning similarities into a weighted “attention” distribution. |
| **4️⃣ Weighted aggregation** | For each token, output \(o_i = \sum_j a_{ij}\, v_j\). | The token’s representation becomes a context‑aware mixture of all values, letting it attend selectively to the most relevant words. |
| **5️⃣ Multi‑head & residuals** | Repeat steps 1–4 with several heads (different \(W_Q,W_K,W_V\)), then concatenate and add a skip connection + layer norm. | Captures diverse relational patterns and stabilizes training. |

**Complexity**: Naïvely \(O(n^2d)\) for sequence length \(n\), depth \(d\). Practical models use optimizations (e.g., sparse attention, linearized kernels) to reduce cost.

**Edge cases**  
- Very long sequences → quadratic blow‑up; mitigated by windowed or hierarchical attention.  
- Masking in autoregressive settings ensures future tokens don’t influence past ones.  

**Takeaway**  
Self‑attention lets every token dynamically “look” at all others, producing rich, context‑sensitive embeddings that are the backbone of modern LLMs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
