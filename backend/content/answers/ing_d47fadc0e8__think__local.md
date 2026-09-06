---
qid: ing_d47fadc0e8__think__local
question: Why Scale by Square Root of d_k? — Attention Mechanisms
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 501
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:57:37-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**  
- Identify the context: transformer attention uses queries \(Q\), keys \(K\) and values \(V\).  
- Assume we know the dimensionality of each vector is \(d_k\) (often equal to model depth).  
- The question asks *why* a scaling factor \(\frac{1}{\sqrt{d_k}}\) appears in the soft‑max input.

**2️⃣ Mental model / framework**  
- Think of attention as a dot‑product similarity: \(QK^T\).  
- Recall that for random vectors with independent entries, the dot product’s variance grows linearly with dimension.  
- Soft‑max is sensitive to large logits; if variances are high, gradients vanish.

**3️⃣ Step‑by‑step reasoning**  
1. Consider two random unit‑norm vectors of length \(d_k\).  
2. Their dot product expectation is 0 but variance ≈ \(d_k\).  
3. Without scaling, as \(d_k\) increases, the logits become more spread out → soft‑max outputs near 0 or 1 → gradients vanish.  
4. Dividing by \(\sqrt{d_k}\) normalizes the dot product’s standard deviation to ≈ 1 regardless of dimension.  
5. This keeps attention probabilities in a healthy range, stabilizing training.

**4️⃣ Common traps**  
- Mixing up scaling with normalization (e.g., batch norm).  
- Forgetting that the scaling is applied *before* soft‑max, not after.  
- Assuming it’s purely empirical; it has a clear variance‑control justification.

**5️⃣ Sanity check & verbalize**  
- Verify: If \(d_k=1\), factor = 1 (no change).  
- If \(d_k=1000\), raw dot products ≈ √1000≈32 → soft‑max saturates; scaling brings it back to ~1.  
- Explain that the goal is to keep gradients flowing, not to alter relative similarities.  

This reasoning pattern—identify the mathematical effect, link it to training dynamics, and confirm with edge cases—is reusable for many “why‑do‑we‑do‑this” questions in deep learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
