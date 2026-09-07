---
qid: vq_304f23c748__aws__local
question: Q24- How would you evaluate a logistic regression model?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 676
total_tokens: 908
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:45:49-05:00'
sources: []
---

**Situation / Task**

I was leading the fraud‑detection pipeline for a fintech startup that had just migrated to **Amazon SageMaker**. The business required a reliable binary classifier (fraud vs. legitimate) with an error budget of 0.5 % false positives and < 1 % false negatives, while keeping inference latency under 50 ms.

**Action**

* **Data‑driven feature engineering & sampling** – I used SageMaker Feature Store to pull the last 3 months of transaction data, applied SMOTE in Glue ETL jobs to balance classes (≈ 95 % legitimate, 5 % fraud).  
* **Model evaluation pipeline** – In a Jupyter notebook on SageMaker Studio, I implemented a **k‑fold cross‑validation (k=5)** with stratified splits. For each fold I computed:
  * ROC‑AUC
  * Precision‑Recall AUC (critical for imbalanced data)
  * Confusion matrix → FP & FN counts
* **Threshold tuning** – Using the `optimize_threshold` utility from `scikit‑learn`, I searched thresholds that met the business constraints. The optimal threshold gave:
  * **Precision = 98.7 %**, **Recall = 99.4 %**
  * **False‑positive rate = 0.48 %**, **False‑negative rate = 0.56 %** (within budget)
* **Model explainability** – I leveraged SageMaker Clarify to compute SHAP values, ensuring the top features were business‑relevant and no bias was introduced.
* **Deployment & monitoring** – Deployed the model as a SageMaker Endpoint with autoscaling; set up CloudWatch metrics for latency, error rate, and a daily retraining schedule triggered by drift detection.

**Result**

The new logistic regression pipeline reduced fraud losses by **32 %** YoY while maintaining latency below 45 ms. The model’s performance was audited quarterly, and the deployment cost dropped by **$1.8K/month** compared to the previous on‑prem solution.

---

### Leadership Principles Highlighted

| Principle | How it Shines |
|-----------|---------------|
| **Ownership** | Took full responsibility from data prep to production monitoring; set up automated retraining. |
| **Dive Deep** | Performed detailed cross‑validation, threshold optimization, and SHAP analysis to surface root causes of errors. |
| **Bias for Action** | Rolled out the model within 3 weeks, iterating quickly on feedback loops. |
| **Deliver Results** | Achieved measurable cost savings and fraud reduction while meeting strict SLAs. |

> **Bar‑raiser cue:** I expect you to show *quantified impact*, a *deep technical rationale* (why ROC‑AUC vs. PR‑AUC), and *learning from failures* (e.g., handling class imbalance, monitoring drift).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
