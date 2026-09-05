---
qid: ing_f40876a9d6__star__local
question: 'Explain: Whitelaw: Sure please. Wang: Yeah, sure. Hannon'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 324
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:35:51-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup we had an automated fraud detection pipeline that was flagging 15% of legitimate transactions as suspicious, causing customer churn and manual review bottlenecks.

**Task:**  
I needed to reduce false positives by at least 30% while maintaining or improving the true positive rate, all within a two‑month sprint before the next quarterly audit.

**Action:**  
I first audited the existing XGBoost model and discovered that feature engineering was shallow—only basic one‑hot encodings of transaction types. I built a richer feature set: transaction velocity (last 5 minutes), user device fingerprint embeddings, and a temporal decay factor for recent activity. Using Python’s pandas and scikit‑learn pipelines, I performed an automated grid search over tree depth, learning rate, and regularization parameters, then employed SHAP to interpret feature importance. After re‑training on the expanded dataset, I deployed the model via Docker into our Kubernetes cluster, adding a Canary rollout to monitor A/B metrics in real time.

**Result:**  
The new model cut false positives from 15% down to 9%, a 40% reduction, while increasing true positive detection by 5%. Customer complaints dropped 25% and manual review hours fell from 120 hrs/month to 45 hrs/month. I learned the power of domain‑specific feature engineering combined with explainable AI to balance accuracy and operational impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
