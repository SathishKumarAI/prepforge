---
qid: ing_db02af471b__star__local
question: 'Q: How do you ensure the *quality* of a synthetic dataset of 10 million
  rows?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 341
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:45:57-05:00'
sources: []
---

**Situation** – At my previous company we had to generate a synthetic customer transaction dataset of 10 million rows for fraud‑detection research. The original real data was heavily imbalanced (only 0.3% fraud) and contained sensitive fields, so we couldn’t use it directly.

**Task** – I needed to build a synthetic set that preserved key statistical properties—distribution of amounts, time patterns, and correlation between features—while guaranteeing privacy and realistic edge cases for the ML model.

**Action** – First, I ran exploratory data analysis in Python (pandas, seaborn) to capture marginal distributions and joint histograms. Then I used a conditional Wasserstein GAN with an auxiliary classifier to learn these relationships, training on 500 k real rows and applying differential privacy noise (ε=1). After generation, I performed sanity checks: Kolmogorov‑Smirnov tests for each feature, chi‑square for categorical pairings, and a hold‑out fraud rate comparison. Finally, I ran the downstream fraud model on both synthetic and a small real test set to ensure ROC‑AUC differences were <0.02.

**Result** – The synthetic dataset matched real statistics within 1% for most metrics, achieved an AUC of 0.92 versus 0.93 on real data, and reduced GDPR risk. I learned how to balance privacy guarantees with fidelity by iteratively validating against both statistical tests and end‑to‑end model performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
