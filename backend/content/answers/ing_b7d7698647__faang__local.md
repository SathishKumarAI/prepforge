---
qid: ing_b7d7698647__faang__local
question: 'Explain: 1- Create Query, Key, and Value Vectors — The Illustrated GPT-2
  (Visualizing Transformer Language Models) \u2013 Jay Alammar \u2013 Visualizing
  machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 271
output_tokens: 598
total_tokens: 869
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:50:47-05:00'
sources: []
---

**Clarify**  
The question asks how GPT‑2 builds its *Query*, *Key* and *Value* vectors inside the self‑attention layer (the “query‑key‑value” mechanism). We’ll assume the reader knows the basics of transformers but not the exact math or intuition behind these three projections.

---

### Approach
1. **Describe the input token embeddings**  
2. **Explain the linear projections that create Q, K, V**  
3. **Show how they’re used in scaled‑dot‑product attention**  
4. **Highlight why each vector matters**  

We’ll keep the math light but precise and end with a short complexity note.

---

### Depth
Each token’s embedding \(x_i \in \mathbb{R}^d\) is linearly projected three times:

| Projection | Formula | Purpose |
|------------|---------|---------|
| **Query**  | \(q_i = W_Q x_i + b_Q\) | Captures *what* the token wants to attend to. |
| **Key**    | \(k_j = W_K x_j + b_K\) | Describes *where* information is located in other tokens. |
| **Value**  | \(v_j = W_V x_j + b_V\) | Holds the actual content to be passed on. |

All weight matrices share the same dimension \(d_{\text{head}}\). For each head, we compute scores:

\[
\alpha_{ij} = \frac{q_i^\top k_j}{\sqrt{d_{\text{head}}}}
\]

Then apply softmax over \(j\) to get attention weights and form the output as a weighted sum of values:

\[
o_i = \sum_j \operatorname{softmax}_j(\alpha_{ij})\, v_j
\]

Finally, outputs from all heads are concatenated and linearly transformed back to model dimension.  
**Complexity:** \(O(n^2 d_{\text{head}})\) per layer for a sequence of length \(n\).

---

### Edge Cases
* **Very long sequences** → quadratic cost; mitigated in practice with sparse or linear attention variants.  
* **Zero‑padding tokens** → need masking so they don’t influence keys/values.  

---

### Optimize & Communicate
If I were coding this, I’d vectorize the Q/K/V projections to avoid explicit loops and use a mask matrix for padding. In an interview, I’d narrate that these three vectors enable each token to *decide* which context matters (Query vs Key) while preserving the actual information (Value). This separation is what gives transformers their flexibility and power in language modeling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
