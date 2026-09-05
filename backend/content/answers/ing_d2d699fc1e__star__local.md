---
qid: ing_d2d699fc1e__star__local
question: What is Cross-Validation? — Machine Learning Interview Questions and Answers
  - GeeksforGeeks
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 368
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:31:11-05:00'
sources: []
---

**Situation** – In my last role, we were building a fraud‑detection model for a payment platform. The production dataset was highly imbalanced (only 2% fraudulent transactions) and the previous pipeline had been tuned on a single train/test split, giving us an overly optimistic 92% accuracy that dropped to 78% once deployed.

**Task** – I needed to redesign the validation strategy so we could reliably estimate model performance and avoid overfitting, especially given the skewed class distribution and limited data.

**Action** – I implemented stratified k‑fold cross‑validation (k=5) using scikit‑learn. For each fold, I performed feature engineering, applied SMOTE only on the training portion to balance classes, trained a gradient‑boosting model, and recorded metrics: precision, recall, F1, and ROC‑AUC. I also compared results with Leave‑One‑Group-Out CV based on transaction dates to mimic future deployment scenarios. The process was automated in Airflow, ensuring each fold ran in parallel on our Spark cluster, cutting total validation time from 3 hrs to 45 min.

**Result** – The cross‑validated F1 score stabilized around 0.82 (vs. 0.78 in production), and the ROC‑AUC improved from 0.91 to 0.94. We deployed a model with confidence intervals for each metric, which reduced false positives by 18% and increased revenue capture by ~$250k annually. I learned that careful CV design is essential when dealing with class imbalance and limited data, and that automation + parallelism can make rigorous validation production‑ready.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
