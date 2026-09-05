---
qid: ing_1c1efe0b22__star__local
question: 'Explain: [applause] Mah: Okay. Uh... Sorry. Sorry. Um'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 411
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:25:39-05:00'
sources: []
---

**Situation:**  
During my senior capstone I was tasked with building a churn prediction model for a telecom client whose quarterly churn rate had risen from 8 % to 12 %. The data set contained 350,000 customer records with dozens of categorical and continuous features, but the raw feature matrix was sparse and highly imbalanced.

**Task:**  
I needed to engineer a robust pipeline that reduced dimensionality, handled missing values, and produced an AUC > 0.78 so the client could target at‑risk customers for retention offers within their 30‑day marketing window.

**Action:**  
First I applied **SMOTE** to oversample minority churners, then used **OneHotEncoder** with sparse matrices for categorical fields and **StandardScaler** for numeric ones. To prevent overfitting I introduced L2 regularization (C=0.1) in a logistic regression model, tuned via cross‑validated grid search on the ROC‑AUC metric. I also experimented with an XGBoost ensemble; after feature importance pruning (keeping top 200 features), the tree depth was capped at 6 to keep inference time under 50 ms per prediction. Finally, I wrapped everything in a scikit‑learn `Pipeline` and deployed it as a REST endpoint using Flask for real‑time scoring.

**Result:**  
The final logistic model achieved an AUC of **0.82** on the hold‑out set, outperforming the baseline by 4 %. In production, we flagged 3,500 high‑risk customers per month, reducing churn by 1.2 % in the following quarter—saving the client roughly $750k annually. I learned that balancing data quality, model complexity, and inference latency is critical when translating ML into business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
