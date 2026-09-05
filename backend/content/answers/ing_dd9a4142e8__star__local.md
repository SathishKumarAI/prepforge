---
qid: ing_dd9a4142e8__star__local
question: 'Explain: FAANG Must Do Problems — Faang Coding Interview Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 347
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:51:23-05:00'
sources: []
---

**Situation:**  
During my senior year I was preparing for a data‑science role at a FAANG company. My mentor warned that the interview would focus on classic “must‑do” ML problems—binary classification, clustering, recommendation systems—so I chose to tackle a Kaggle competition that mimicked a real‑world fraud detection dataset.

**Task:**  
I needed to build a model that achieved >95 % AUC while keeping inference latency under 50 ms for deployment on a mobile edge device. The data were highly imbalanced (1:200 fraud vs. legit) and had noisy categorical features.

**Action:**  
First, I applied SMOTE + class‑weighting to balance the training set, then engineered interaction terms between transaction amount and time of day using one‑hot encoding. For modeling, I compared XGBoost, LightGBM, and a shallow neural net; I used early stopping on a validation split to avoid overfitting. To meet latency, I distilled the best ensemble into a single tree model with 200 leaves, then pruned it in C++ for deployment. I also profiled the inference pipeline with PyTorch’s JIT to ensure sub‑50 ms runtime.

**Result:**  
The distilled LightGBM model achieved 96.2 % AUC on holdout data and ran at 42 ms per prediction, meeting both accuracy and speed targets. I learned that balancing class distribution and aggressively pruning models are key trade‑offs in production ML, skills directly transferable to any FAANG interview scenario.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
