---
qid: ing_07e96c4a54__star__local
question: 'Explain: Classic ML Engineer (MLE) — Ml Engineer Vs Ai Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 327
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:44:31-05:00'
sources: []
---

**Situation:** While leading the fraud‑detection pilot at FinTechCo, our model drifted after just three months; accuracy slipped from 92% to 78%, threatening a regulatory audit.

**Task:** I had to redesign the pipeline so that it could adapt in real time and prove its robustness to auditors, all within two weeks before the audit deadline.

**Action:** First, I mapped out the existing feature store (Kafka + Delta Lake) and identified the drift sources. As an ML Engineer, I engineered a lightweight online learning loop using Scikit‑Learn’s `partial_fit` on a streaming batch of labeled transactions, then wrapped it in Airflow for nightly retraining. To satisfy audit requirements, I switched from black‑box XGBoost to a transparent Gradient Boosting model (XGBRegressor) with SHAP explanations, and built an automated report generator in Jupyter that logged feature importance shifts. Meanwhile, I pitched this approach to the AI team, who suggested adding a lightweight transformer for sequence‑level pattern detection; we merged both models into a stacked ensemble.

**Result:** Accuracy rebounded to 91% by audit day, and the new pipeline cut manual retraining effort by 70%. The project earned us a “Best Use of ML” award, and I learned that the boundary between an MLE and an AI engineer is often about how far you push model complexity versus operational reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
