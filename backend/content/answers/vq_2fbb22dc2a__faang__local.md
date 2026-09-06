---
qid: vq_2fbb22dc2a__faang__local
question: What is an Orthogonal Matrix?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 499
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:04:37-05:00'
sources: []
---

**Orthogonal Matrix – Quick‑fire FAANG Response**

| Section | Key Points |
|---------|------------|
| **Clarify** | *Problem:* Define an orthogonal matrix and explain its core properties. <br>*Assumptions to confirm:* We’re working over ℝ, not complex numbers; “orthogonal” refers to columns (or rows) being pairwise perpendicular and unit‑length. |
| **Approach** | 1. State the formal definition. <br>2. List equivalent characterizations (inverse equals transpose). <br>3. Mention preservation of dot products & lengths. |
| **Depth** | An \(n\times n\) real matrix \(Q\) is orthogonal iff \(Q^T Q = I_n\). Equivalently, its columns \(\{q_i\}\) satisfy \(q_i^T q_j = \delta_{ij}\). Hence \(Q^{-1}=Q^T\). Orthogonality guarantees that for any vector \(x\), \(\|Qx\|_2=\|x\|_2\); it preserves Euclidean norms and angles. This property underpins rotations, reflections, and other rigid transformations in ML (e.g., whitening, PCA rotation). |
| **Edge Cases** | *Singular matrices* can’t be orthogonal because \(Q^T Q = I\) implies \(\det(Q)=±1\neq0\). For complex numbers the analogue is a unitary matrix (\(U^\dagger U=I\)). Numerical instability: finite‑precision arithmetic may violate exact orthogonality; re‑orthogonalization (e.g., Gram–Schmidt) is often used. |
| **Optimize & Communicate** | In practice, store only one triangular factor of an orthogonal matrix (Householder reflectors) to save memory and enable fast matrix‑vector products in high‑dimensional ML pipelines. Explain that this keeps the cost \(O(n^2)\) for multiplication while preserving exact orthogonality theoretically. |

> **Takeaway:** Orthogonal matrices are linear maps that rotate/reflection vectors without stretching them—exactly what we need when we want to preserve geometry (e.g., in embeddings, dimensionality reduction, or weight initialization).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
