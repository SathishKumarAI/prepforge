---
qid: ing_a097150d83__faang__local
question: When is Data High Dimensional and Why Might That Be a Problem?
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 526
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:57:46-05:00'
sources: []
---

**Clarify**  
The question asks when the dimensionality of a dataset becomes “high” and why that poses problems.  
*Assumptions:* we’re talking about tabular data, not images or text; features are independent attributes; we care about learning algorithms that scale with feature count.

---

**Approach**  
1. Define a threshold for “high‑dimensionality.”  
2. List the classic consequences: curse of dimensionality, overfitting, computational cost.  
3. Illustrate each with short examples or math.  

---

**Depth**  
*When is data high‑dimensional?*  
- Roughly when the number of features \(p\) approaches or exceeds the sample size \(n\), i.e., \(p \gtrsim n/10\).  
- Practically, any situation where \(p > 1000\) for typical ML models is considered high‑dimensional.

*Why it hurts:*  

| Problem | Reason |
|---------|--------|
| **Curse of Dimensionality** | Distances become less informative; nearest‑neighbour density estimates collapse. |
| **Overfitting** | With many parameters, a model can perfectly fit noise (e.g., \(p>n\) → infinite solutions). |
| **Sparsity & Irrelevance** | Most features carry little signal; irrelevant ones add variance. |
| **Computational Cost** | Training time and memory grow at least linearly with \(p\); kernel methods become quadratic or cubic in \(p\). |

---

**Edge Cases**  
- Sparse data: many zeros can mitigate some issues (e.g., linear models).  
- Structured features (images, graphs): dimensionality is high but spatial correlations help.  
- Regularized models (lasso, ridge) can still work if properly tuned.

---

**Optimize & Communicate**  
1. **Feature selection / extraction** (PCA, autoencoders) reduces \(p\).  
2. **Regularization** controls variance.  
3. **Dimensionality‑aware algorithms** (tree ensembles, kernel approximations) scale better.  

When explaining to interviewers, I’d emphasize the intuition (“more columns ≠ more information”) and back it with the table of concrete impacts. This shows clear problem framing, a systematic solution path, and awareness of practical trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
