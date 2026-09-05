---
qid: vq_725eae1914__star__local
question: What are the disadvantages of reducing dimensionality?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 304
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:04:24-05:00'
sources: []
---

**Situation:**  
While working on a fraud‑detection model for a fintech client, the data science team was struggling with a 120‑dimensional feature set that caused long training times and overfitting.

**Task:**  
I had to reduce dimensionality to speed up training and improve generalization without sacrificing predictive power.

**Action:**  
I performed exploratory PCA to retain 95 % of variance, cutting the features from 120 to 25. I then trained a LightGBM model on both the full set and the reduced set, comparing cross‑validated AUCs. To quantify information loss, I plotted reconstruction error versus retained components and ran a SHAP analysis to see which original features were most impacted. I also experimented with autoencoder embeddings for comparison.

**Result:**  
Training time dropped from 8 minutes per epoch to under 1 minute, and inference latency fell by 70 %. However, the AUC decreased from 0.98 to 0.94—a measurable drop that highlighted the risk of discarding subtle but predictive signals. The exercise taught me to balance speed with accuracy, keeping a small validation set of discarded features to monitor for future drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
