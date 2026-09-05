---
qid: ing_36ceb6a2b6__star__local
question: What Are Ridge Regression and Lasso Regression?
topic: Data Analytics
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 314
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:17:48-05:00'
sources: []
---

**Situation:**  
At my last role I was building a predictive model for churn in a telecom client’s dataset that had over 250 features—many of them highly correlated. The initial linear regression produced huge variance and the coefficients were unstable across cross‑validation folds.

**Task:**  
I needed to reduce multicollinearity, prevent overfitting, and keep the model interpretable enough for the business team to trust it, all while maintaining predictive performance under a 10% error margin.

**Action:**  
I first plotted the correlation matrix and noticed dozens of pairs with |r| > 0.8. I then implemented both Ridge (α = 1) and Lasso (λ tuned via grid search) using scikit‑learn, comparing RMSE on a held‑out test set. For Ridge I kept all variables but shrank coefficients; for Lasso I let the penalty zero out redundant features, ending up with only 42 predictors. I also plotted coefficient paths to ensure no feature was overly penalized.

**Result:**  
The best model (Lasso) achieved an RMSE of 0.19 versus 0.27 from plain regression—a 30% error reduction—while reducing the feature set by 80%. The business could now focus on a concise list of risk factors, and I learned that choosing between Ridge and Lasso hinges on whether you want to keep all variables or perform automatic variable selection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
