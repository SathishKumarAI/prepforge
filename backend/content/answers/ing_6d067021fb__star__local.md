---
qid: ing_6d067021fb__star__local
question: 'Explain: Risk Assessment — METR'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 428
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:05:16-05:00'
sources: []
---

**Situation:**  
At my previous fintech firm we were launching an automated credit‑approval system. The compliance team required a risk assessment model that could not only predict default probability but also explain why each applicant was flagged—especially for regulators demanding transparency on protected attributes.

**Task:**  
Build a “METR” (Model Explainability & Trustworthiness) pipeline: deliver a predictive score, provide feature importance explanations, and ensure the system met regulatory audit thresholds (e.g., 95% precision at 10% recall). I also had to keep latency under 200 ms for real‑time decisions.

**Action:**  
I started with a balanced training set of 1.2M applicants, applied SMOTE to address class imbalance, and trained an XGBoost model (learning rate 0.05, depth 6). For METR, I wrapped the model in SHAP explainer to generate local explanations and computed global feature importance. To reduce latency, I distilled the tree ensemble into a smaller LightGBM model while preserving >99% of AUC. I also added a post‑hoc rule layer that flagged any prediction where protected attributes contributed more than 15% to the score, triggering manual review.

**Result:**  
The final pipeline achieved an AUC of 0.87 and met the precision/recall target in production. Latency stayed below 180 ms, and regulatory auditors approved the model without additional scrutiny. I learned that coupling a high‑performing ML engine with transparent explanation tools can satisfy both business speed and compliance rigor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
