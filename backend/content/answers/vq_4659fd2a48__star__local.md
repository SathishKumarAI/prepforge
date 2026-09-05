---
qid: vq_4659fd2a48__star__local
question: What are SVM's different Kernels?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 319
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:57:04-05:00'
sources: []
---

**Situation:** While leading a fraud‑detection project for a fintech startup, we noticed our logistic regression model was only catching 68% of fraudulent transactions, and the false‑positive rate was killing customer trust.

**Task:** I needed to build a more robust classifier that could capture non-linear relationships in the transaction data without blowing up training time or memory usage.

**Action:** I introduced Support Vector Machines with three kernel options: (1) **Linear**, for quick baseline comparison; (2) **Polynomial** (degree 3), to model interaction terms between features like transaction amount, time of day, and device type; and (3) **Radial Basis Function (RBF)**, which maps data into an infinite‑dimensional space to separate clusters that were otherwise overlapping. I tuned the RBF’s gamma and C hyperparameters using a grid search with cross‑validation, and used PCA beforehand to reduce dimensionality from 120 to 30 principal components, keeping training time under two minutes on our GPU cluster.

**Result:** The RBF‑SVM achieved a 92% detection rate while maintaining a false‑positive rate of 4%, a 28% improvement over the logistic model. I learned that selecting the right kernel and preprocessing steps can dramatically change performance—and that a quick linear check is always worth doing first to avoid unnecessary complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
