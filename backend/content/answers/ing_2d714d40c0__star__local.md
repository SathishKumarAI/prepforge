---
qid: ing_2d714d40c0__star__local
question: 'Explain: This will always have a higher probability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 408
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:59:06-05:00'
sources: []
---

**Situation** – I was working on a credit‑card fraud detection system at FinTechX where the dataset had only 0.5 % fraudulent transactions. The naïve “always predict not‑fraud” baseline achieved 99.5 % accuracy, so that class naturally had a higher probability in every prediction.

**Task** – My goal was to build a model that could detect fraud without sacrificing too much overall performance, proving that the minority class could still dominate the decision boundary when engineered correctly.

**Action** – I started by calculating class priors and then used SMOTE to oversample fraud examples while undersampling non‑fraud cases. Next, I trained an XGBoost classifier with a cost‑sensitive objective (higher penalty for false negatives). After cross‑validation, I tuned the decision threshold so that the precision‑recall trade‑off matched our risk appetite. Finally, I deployed the model and set up monitoring to capture any drift in class distribution.

**Result** – The fraud recall jumped from 12 % to 78 %, while overall accuracy dropped only to 97 %. We captured $1.2 M more fraudulent transactions in the first quarter. This taught me that a higher prior probability doesn’t mean you can ignore the minority class; with proper sampling, weighting, and thresholding, the model can still prioritize it effectively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
