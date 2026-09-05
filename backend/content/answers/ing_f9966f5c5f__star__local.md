---
qid: ing_f9966f5c5f__star__local
question: 'Explain: Python Code — Ridge and Lasso Regression in Python - Analytics
  Vidhya'
topic: Data Analytics
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 373
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:47:38-05:00'
sources: []
---

**Situation** – In a recent e‑commerce project I was tasked with predicting monthly sales for each product category. Our baseline linear model overfit the training data: a 0.75 R² on training but only 0.48 on the hold‑out set, and the coefficients were wildly varying.

**Task** – I needed to build a robust regression that reduced variance while keeping interpretability, so I decided to implement Ridge (L2) and Lasso (L1) regularization in Python, compare their performance, and choose the best hyperparameters.

**Action** – Using scikit‑learn, I prepared a feature matrix with one‑hot encoded categorical variables and standardized numeric features. Then I set up a `Pipeline` that chained `StandardScaler`, followed by either `RidgeCV` or `LassoCV`. I let each algorithm perform an internal 5‑fold cross‑validation over a grid of alpha values (10⁻⁴ to 10²). After fitting, I extracted the best alpha and coefficient sparsity for Lasso. I plotted the learning curves to ensure no underfitting.

**Result** – Ridge with α≈0.02 improved the hold‑out R² to 0.63 and reduced variance from 12% to 5%. Lasso with α≈0.1 cut the number of non‑zero coefficients from 48 to 17, giving a cleaner model while achieving an R² of 0.60. I learned that Ridge is preferable when all features are useful, whereas Lasso excels for feature selection—both can be tuned efficiently in scikit‑learn with cross‑validation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
