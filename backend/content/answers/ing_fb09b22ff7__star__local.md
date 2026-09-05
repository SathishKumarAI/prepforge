---
qid: ing_fb09b22ff7__star__local
question: 'Explain: Recently asked questions — Meta Machine Learning Engineer (MLE)
  Interview Guide | Sample Questions (2026) - Exponent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 307
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:50:52-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, our fraud detection model’s recall dropped from 92% to 78% after a new payment gateway was integrated. The engineering team needed a quick fix before the next quarterly audit.

**Task:**  
I had to identify the root cause, rebuild the model pipeline, and restore at least 90% recall within two weeks while keeping latency under 50 ms per transaction.

**Action:**  
First, I ran an ablation study on feature importance using SHAP values; we discovered that the new gateway’s “merchant category code” field was missing for 35% of transactions. I engineered a probabilistic imputation scheme that leveraged correlated fields (e.g., geographic region, transaction amount). Next, I switched from a single‑layer logistic regression to an XGBoost ensemble with early stopping and tuned the max depth to balance bias–variance trade‑offs. To meet latency constraints, I deployed the model on NVIDIA A100 GPUs using ONNX Runtime and added a fallback rule‑based classifier for outliers.

**Result:**  
Recall rose back to 91% within ten days, precision improved from 85% to 88%, and average inference time stayed at 45 ms. The exercise taught me that feature engineering can outweigh algorithmic complexity when latency is critical, and the importance of continuous monitoring after system changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
