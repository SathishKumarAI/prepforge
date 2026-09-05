---
qid: ing_01c9a6e8ac__star__local
question: 'Explain: And then, I''ll report briefly review big'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 355
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:31:56-05:00'
sources: []
---

**Situation:**  
At my last company I was tasked with improving the accuracy of our fraud‑detection pipeline for online transactions. The existing model had an F1 score of 0.72 and we were losing roughly $2 M in false positives each month.

**Task:**  
I needed to redesign the evaluation strategy, select a better algorithm, and demonstrate measurable gains before deploying it live.

**Action:**  
First, I gathered a balanced training set (10% fraud) and split it into 80/20 train/test. I compared several classifiers—logistic regression, random forest, and XGBoost—using stratified k‑fold cross‑validation. For each model I plotted precision–recall curves to capture the trade‑off between catching fraud and minimizing false alarms. I then tuned hyperparameters with Optuna, targeting an area under the PR curve (AUPRC) > 0.85. Finally, I built a lightweight inference service in FastAPI, containerized it with Docker, and added an A/B test harness to compare live metrics.

**Result:**  
The XGBoost model achieved an AUPRC of 0.93, raising the F1 score to 0.84—an 18 % lift over the baseline. In production we cut false positives by 35 %, saving approximately $1.4 M annually. I learned that visualizing precision–recall curves and using AUPRC as a primary metric can dramatically change model selection, especially in highly imbalanced fraud scenarios.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
