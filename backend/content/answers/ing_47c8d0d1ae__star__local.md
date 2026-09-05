---
qid: ing_47c8d0d1ae__star__local
question: 'Explain: Recruiter screen — Sierra Agent Engineer Interview Guide | Sample
  Questions (2026) - Exponent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 333
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:52:06-05:00'
sources: []
---

**Situation:**  
During my second year at a fintech startup, we were rolling out a real‑time fraud detection system for credit card transactions. Our existing rule‑based engine was flagging 12% of legitimate purchases as suspicious, causing customer churn.

**Task:**  
I was tasked with designing and deploying an ML model that could reduce false positives by at least 30% while maintaining the same true positive rate, all within a 6‑week sprint.

**Action:**  
First, I collected 1.2 million labeled transaction records and engineered features such as time‑of‑day patterns, device fingerprint entropy, and dynamic velocity limits. I chose a LightGBM classifier for its speed and interpretability, then tuned hyperparameters with Optuna to balance recall against precision. To address class imbalance, I applied SMOTE + cost‑sensitive weighting. For deployment, I containerized the model with Docker, added an A/B testing endpoint in our Go microservice, and set up a CI/CD pipeline that ran unit tests, retraining scripts, and a performance monitor.

**Result:**  
After launch, false positives dropped from 12% to 7%, a 41% reduction, while true positive rate stayed at 98.5%. The system processed 500 k transactions per hour with latency <15 ms. I learned that feature engineering and careful hyperparameter search often outperform complex architectures, and that end‑to‑end automation is critical for reliable ML ops in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
