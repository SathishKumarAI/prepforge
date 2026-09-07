---
qid: ing_e77ed157c0__faang__local
question: 'Explain: 1.1.3.2.2. Information-criteria based model selection'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 602
total_tokens: 844
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:38:22-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *information‑criterion (IC) based model selection*—the statistical tools that trade off goodness‑of‑fit against model complexity (e.g., AIC, BIC). I’ll assume the audience knows basic likelihood theory but not the derivation or practical pitfalls.

---

### 1. Approach  
1. Define the problem: choosing among nested/non‑nested models with different numbers of parameters.  
2. Introduce the general form \(IC = -2\log L + k \cdot c(n)\).  
3. Explain each component (likelihood, penalty term) and how it embodies Occam’s razor.  
4. Contrast AIC vs BIC: penalty growth, asymptotic properties.  
5. Discuss implementation: computing likelihood, selecting \(k\), handling non‑MLE cases.

---

### 2. Depth  
- **Likelihood** \(\log L(\hat{\theta})\) quantifies fit; higher means better.  
- **Penalty** \(k\cdot c(n)\) discourages overfitting:  
  - *AIC*: \(c(n)=1\); asymptotically unbiased estimate of Kullback–Leibler divergence.  
  - *BIC* (Schwarz): \(c(n)=\log n\); consistent—chooses the true model if it exists, as \(n\to\infty\).  
- **Model selection rule**: pick model with smallest IC.  
- **Complexity metric**: \(k\) counts free parameters; in GLMs, includes intercepts, slopes, dispersion.  
- **Extensions**: corrected AIC (AICc) for small samples, cross‑validated ICs.

---

### 3. Edge Cases  
- **Small sample sizes**: AIC overfits; use AICc.  
- **Non‑identifiable parameters**: likelihood plateau → IC unreliable.  
- **Model misspecification**: both AIC/BIC may select wrong model; consider robust criteria (e.g., WAIC, LOO).  
- **High‑dimensional data**: \(k\) comparable to \(n\); penalties blow up—regularization needed.

---

### 4. Optimize & Communicate  
- Emphasize that ICs are *heuristics*, not guarantees; validate with residual diagnostics or cross‑validation.  
- For large‑scale ML pipelines, precompute \(-2\log L\) efficiently (e.g., log‑likelihood in batches).  
- When communicating results: show IC values side by side, explain the trade‑off visually (parsimony vs fit), and state assumptions clearly.

**Word count:** ~210.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
