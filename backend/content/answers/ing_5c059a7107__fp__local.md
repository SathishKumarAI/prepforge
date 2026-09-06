---
qid: ing_5c059a7107__fp__local
question: You have 10M unlabelled examples and budget for 20k labels. How do you spend
  it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 440
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:19:46-05:00'
sources: []
---

**Optimal labeling with 20 k out of 10 M**

1. **Define the objective first** – we want a model that maximises predictive accuracy under a fixed annotation cost.  
2. **Model‑agnostic uncertainty sampling**: train an initial weak learner on a tiny random seed (≈1 k). Use its posterior entropy or margin to rank all 10 M points; pick the top 20 k with highest uncertainty.  
3. **Stratify by density** – run k‑means (or a scalable sketch) on embeddings, then sample proportionally from each cluster so that both dense and sparse regions are represented.  
4. **Iterative refinement**: after each round of labeling (≈5 k), retrain, recompute uncertainty, and resample the remaining budget. Stop when marginal gain falls below a threshold.  
5. **Self‑training backup** – use confident predictions on unlabeled data to generate pseudo‑labels; this augments the labeled set without extra cost.

**Why it works**  
Uncertainty points lie near the decision boundary where model error is greatest; labeling them reduces expected risk most efficiently (information‑theoretic principle). Stratification guarantees coverage of low‑density, high‑variance areas that would otherwise be missed. The iterative loop implements a greedy approximation to optimal Bayesian experimental design.

**Non‑obvious insight**  
The *most valuable* labels are not the ones with highest entropy alone; they are those that lie in **low‑density yet uncertain regions**. These points are both rare (high information content) and on the boundary, so annotating them gives a disproportionate boost to generalisation, especially for tail classes or outliers that random sampling would miss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
