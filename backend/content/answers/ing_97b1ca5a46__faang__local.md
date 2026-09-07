---
qid: ing_97b1ca5a46__faang__local
question: 'Explain: Week 2: Regression with multiple input variables'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 466
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:37:30-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to explain how regression works when the response variable depends on *more than one* predictor (e.g., a house price depending on size, age, location). Clarify that we’re dealing with **multiple linear regression**, assuming linearity in parameters and independent errors.

**Approach**  
1. Write the model \(y = \beta_0 + \beta_1x_1 + … + \beta_px_p + ε\).  
2. Collect data into matrix form \(X\) (n×p+1, with a column of ones for intercept) and vector \(y\).  
3. Estimate coefficients by minimizing the sum‑of‑squares: \(\hat β = (X^TX)^{-1}X^Ty\).  
4. Discuss assumptions: linearity, homoscedasticity, no multicollinearity, normal errors.  
5. Evaluate fit with \(R^2\), adjusted \(R^2\), and residual plots.

**Depth**  
- *Matrix derivation*: Show that the OLS solution is the unique minimizer of \(\|y - Xβ\|_2^2\).  
- *Complexity*: Computing \((X^TX)^{-1}\) costs \(O(p^3)\), but with QR or SVD it’s numerically stable.  
- *Regularization*: Mention Ridge (\(λI\)) and Lasso (ℓ₁ penalty) to handle multicollinearity or feature selection.

**Edge Cases**  
- Singular \(X^TX\) when predictors are collinear → need dimensionality reduction or regularization.  
- Outliers inflating residuals → robust regression.  
- Non‑linear relationships → transform variables or use polynomial terms.

**Optimize & Communicate**  
Explain how to validate the model: k‑fold cross‑validation, checking for overfitting, and using validation metrics (MAE, RMSE). Conclude by stressing that multiple regression is a foundational tool; mastering its assumptions and diagnostics prepares you for more complex models in FAANG data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
