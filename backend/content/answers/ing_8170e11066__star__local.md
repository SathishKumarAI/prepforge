---
qid: ing_8170e11066__star__local
question: What is AUC–ROC Curve? — Machine Learning Interview Questions and Answers
  - GeeksforGeeks
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 326
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:52:10-05:00'
sources: []
---

**Situation:**  
In my last role as a data scientist at a fintech startup, we were building a fraud‑detection model for credit card transactions. The business wanted to reduce false positives while keeping true fraud cases high.

**Task:**  
I needed to evaluate our binary classifier not just by accuracy but by how well it distinguished fraudulent from legitimate transactions across all thresholds—essentially determine the best trade‑off between sensitivity and specificity.

**Action:**  
I plotted the ROC curve: for each probability cutoff I computed the True Positive Rate (TPR) and False Positive Rate (FPR). Then I calculated the AUC (Area Under Curve) using scikit‑learn’s `roc_auc_score`. To improve it, I tuned hyperparameters with Bayesian optimization and added class‑weighting to counteract the 1% fraud imbalance. I also compared our model against a baseline logistic regression and visualized both ROC curves side by side.

**Result:**  
The final model achieved an AUC of **0.96**, up from 0.88 baseline, meaning we captured 96 % of the discriminatory power needed. This translated to a 35 % reduction in false positives while maintaining a 5 % higher true‑positive rate—directly improving customer satisfaction and reducing investigation costs. I learned that AUC–ROC is a robust metric for imbalanced problems and that visualizing the curve guides threshold selection for business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
