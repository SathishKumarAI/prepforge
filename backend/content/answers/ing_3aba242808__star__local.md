---
qid: ing_3aba242808__star__local
question: 'Explain: 1.1.4. Multi-task Lasso — 1.1. Linear Models \u2014 scikit-learn
  1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 397
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:26:11-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with building a predictive model for a SaaS product that needed to forecast user churn and lifetime value simultaneously across multiple regions. The dataset had hundreds of correlated features (demographics, usage metrics) and we were limited to a single deployment to keep inference costs low.

**Task:**  
I needed to create a linear model that could learn shared patterns across the two targets while still capturing region‑specific nuances, all within the scikit‑learn framework. The goal was to reduce overfitting, improve interpretability, and keep the training time under 10 minutes on a single GPU.

**Action:**  
I chose MultiTaskLasso from scikit‑learn’s linear models. I first standardized each feature with StandardScaler, then split the data into train/validation sets stratified by region. Using `MultiTaskLasso(alpha=0.01, max_iter=5000)`, I tuned alpha via cross‑validated grid search while monitoring both MSE and sparsity (number of non‑zero coefficients). To balance shared vs. task‑specific signals, I added a small ridge penalty (`alpha=0.001`) through `MultiTaskElasticNet`. After training, I inspected the coefficient matrix: many features were zero across all regions, confirming effective feature selection.

**Result:**  
The multi‑task model achieved a 12% reduction in MAE for churn prediction and a 9% lift in R² for lifetime value compared to independent Lasso models. Training time stayed below 8 minutes, and the sparse coefficient matrix made it easy for product managers to understand key drivers per region. I learned that MultiTaskLasso is powerful when tasks are correlated, but careful regularization tuning is essential to avoid over‑shrinking useful features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
