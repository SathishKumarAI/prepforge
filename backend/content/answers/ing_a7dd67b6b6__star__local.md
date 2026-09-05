---
qid: ing_a7dd67b6b6__star__local
question: 'Explain: Trees and Graphs — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 302
total_tokens: 539
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:08:42-05:00'
sources: []
---

**Situation:**  
During my senior thesis at university we were tasked with predicting customer churn for a telecom client. The dataset had over 500 features, many of which were categorical and highly correlated. Our deadline was two months before the client’s quarterly review.

**Task:**  
I needed to build an interpretable model that could capture non‑linear interactions while handling sparse high‑dimensional data, and deliver it in a production‑ready Python package.

**Action:**  
I chose Gradient Boosted Decision Trees (XGBoost) as the core learner because trees naturally handle categorical splits and missing values. To exploit graph structure among features (e.g., device type → plan → usage pattern), I constructed a feature interaction graph and used Graph Neural Networks to generate embeddings for each node. These embeddings were concatenated with the raw features and fed into the XGBoost model. I tuned hyperparameters via Bayesian optimization, performed cross‑validation, and pruned trees to avoid overfitting. The final pipeline was wrapped in a Docker container and deployed on AWS SageMaker.

**Result:**  
The combined tree + graph approach achieved an AUC of 0.87, beating the baseline logistic regression (0.78) by 9 percentage points and reducing churn prediction error by 32%. I learned how to blend interpretability with deep feature learning, and that a hybrid architecture can outperform pure models on structured data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
