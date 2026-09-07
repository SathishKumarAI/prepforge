---
qid: ing_b8fc155897__faang__local
question: How do Bagging and Boosting get N learners?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 529
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:53:13-05:00'
sources: []
---

**Clarify**  
You’re asking how ensemble methods like **Bagging (Bootstrap‑Aggregating)** and **Boosting** create *N* weak learners, and what the role of each learner is in reducing error.

**Approach**  
1. Define the base model (decision tree, stump, etc.).  
2. For Bagging: bootstrap samples → train N independent models → aggregate predictions.  
3. For Boosting: sequentially train models on weighted data → combine them via a weighted vote or sum.  

**Depth**  
- **Bagging**:  
  *Sample* `D` of size `M`. For each learner `i ∈ [1,N]`: draw a bootstrap sample `S_i ~ D^M`. Train `h_i` on `S_i`. Final prediction `H(x) = (1/N) Σ h_i(x)` (classification → majority vote).  
  Complexity: `O(N * T)` where `T` is training cost of one learner. Reduces variance, not bias.

- **Boosting** (AdaBoost example):  
  Initialize weights `w_1(j)=1/M`. For `i=1..N`: train `h_i` on weighted data; compute error ε_i = Σ w_i(j) * I[h_i(x_j)!=y_j] / Σ w_i(j). Update weights: `w_{i+1}(j)=w_i(j)*exp(α_i*I[...])`, α_i=½ ln((1-ε_i)/ε_i). Final prediction `H(x)=sign(Σ α_i h_i(x))`. Reduces bias by focusing on hard examples; complexity similar but with weight updates.

**Edge Cases**  
- If bootstrap samples are identical → Bagging gains little.  
- In Boosting, ε_i≈0.5 or >0.5 causes divergence (α negative).  
- Very deep trees can overfit in both schemes.

**Optimize & Communicate**  
Use parallel training for Bagging to reduce wall‑time; for Boosting, limit N to avoid diminishing returns and monitor validation error to stop early. Explain trade‑offs: Bagging → variance reduction, Boosting → bias reduction, but requires careful regularization. This structured walk‑through shows clear problem framing, algorithmic detail, complexity, pitfalls, and practical tuning—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
