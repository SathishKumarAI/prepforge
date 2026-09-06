---
qid: ing_ca4592708c__fp__local
question: 'Explain: Multi-Query Attention (MQA) — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 686
total_tokens: 859
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:10:42-05:00'
sources: []
---

**Multi‑Query Attention (MQA)**  
*Why it exists:* In transformer decoders every token attends to all previous tokens with a *single* key/value pair per head. This is optimal for capturing context, but each head now carries its own key/value matrices, inflating memory and compute linearly with the number of heads \(H\). When we scale models (e.g., GPT‑4) to billions of parameters, this cost dominates.

**Fundamental derivation**

1. **Attention as a weighted sum:**  
   \[
   \mathbf{z}_i=\sum_{j=1}^{N}\alpha_{ij}\,\mathbf{v}_j,\qquad
   \alpha_{ij}=\frac{\exp(\mathbf{q}_i^\top\mathbf{k}_j/\sqrt d)}{\sum_\ell \exp(\mathbf{q}_i^\top\mathbf{k}_\ell/\sqrt d)}
   \]
   Each head learns its own projection matrices \(W^Q_h,W^K_h,W^V_h\).

2. **Observation:**  
   The *query* determines the weighting pattern; the *key/value* pair is shared across tokens of that head. If we separate the role of “which head” from the actual key/value content, we can reuse a single set of keys/values for all heads.

3. **MQA construction:**  
   - Keep \(H\) distinct query projections \(\{W^Q_h\}\).  
   - Use *one* shared key projection \(W^K\) and one shared value projection \(W^V\).  
   - For head \(h\), compute
     \[
     \mathbf{q}_{i,h}=x_i W^Q_h,\qquad
     \mathbf{k}_j=x_j W^K,\quad \mathbf{v}_j=x_j W^V,
     \]
     then apply the standard soft‑max weighting.

4. **Why it works:**  
   The shared keys/values provide a *common representation space* that all heads can query, while distinct queries allow each head to focus on different aspects (e.g., syntax vs. semantics). This matches the principle of *parameter sharing* in convolutional networks: reducing redundancy without sacrificing expressivity.

**Non‑obvious insight:**  
MQA implicitly enforces a *low‑rank structure* on the attention matrix across heads. Since all heads share keys/values, the cross‑head variation comes solely from query projections, which are linear transformations of the input. Consequently, the overall attention can be expressed as a sum of \(H\) rank‑\(d\) matrices sharing the same factorization in key/value space. This reduces the *effective dimensionality* of the model’s context representation, leading to better generalisation and faster inference—something most people miss when they only focus on memory savings.

**Takeaway:**  
MQA solves a scalability bottleneck by separating query diversity from key/value sharing, grounded in linear‑algebraic optimisation. It preserves expressive power while dramatically cutting parameters, making large‑scale transformers practical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
