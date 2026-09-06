---
qid: ing_826007a7b9__think__local
question: 'Explain: Matrix Calculation of Self-Attention — The Illustrated Transformer
  \u2013 Jay Alammar \u2013 Visualizing machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 213
output_tokens: 502
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:36:16-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- The user wants an explanation of *matrix‑calculation* in self‑attention (the “Illustrated Transformer” by Jay Alammar).  
- Assume they know basic linear algebra and attention notation but not the full matrix view.  
- State that we’ll focus on the core equations: queries, keys, values → dot‑product → softmax → weighted sum.

**2️⃣ Adopt a mental model**  
- Think of self‑attention as three parallel projections of the same token sequence into three spaces (Q, K, V).  
- Treat each projection as a matrix multiplication: \(Q = XW_Q\), \(K = XW_K\), \(V = XW_V\).  
- Visualise tokens as rows; columns are feature dimensions.  

**3️⃣ Step‑by‑step reasoning**  
1. Compute dot products between all Q–K pairs → a matrix of scores (size \(L\times L\)).  
2. Scale by \(\sqrt{d_k}\) to keep gradients stable.  
3. Apply softmax row‑wise → attention weights (probability distribution over tokens).  
4. Multiply these weights with V → weighted sum for each token, yielding the output matrix.  
5. Mention multi‑head: repeat with different \(W\) matrices and concatenate results.

**4️⃣ Avoid common traps**  
- Don’t conflate “query” with “key”; they’re distinct projections of the same input.  
- Remember softmax is applied per query (row), not globally.  
- Don’t forget scaling; without it, large dot‑products push softmax into saturation.  

**5️⃣ Sanity‑check & communicate**  
- Verify dimensions: if \(X\in\mathbb{R}^{L\times d_{model}}\) and \(W_Q\in\mathbb{R}^{d_{model}\times d_k}\), then \(Q\in\mathbb{R}^{L\times d_k}\).  
- Explain that the final output has the same shape as input, enabling residual connections.  
- Summarise in plain language: “Self‑attention lets each token look at every other token by scoring similarity and mixing their value vectors.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
