---
qid: ing_4bedb94189__faang__local
question: 'Explain: Making 15 Different Linear Regression Models'
topic: Data Analytics
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 565
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:40:57-05:00'
sources: []
---

**Clarify**  
The interviewer wants to know how you would build *fifteen distinct* linear‑regression models on the same dataset (or related datasets).  
Assumptions:  
1. The data contain numeric predictors and a continuous target.  
2. All models must be valid, non‑overfit, and interpretable.  
3. You have access to standard ML libraries (scikit‑learn, statsmodels).

**Approach**  
1. **Feature engineering variations** – create different predictor sets (raw, log, interactions).  
2. **Regularization choices** – Lasso, Ridge, ElasticNet with varying alphas.  
3. **Model families** – ordinary least squares, weighted least squares, robust regression.  
4. **Cross‑validation schemes** – K‑fold, time‑series split, stratified on a key covariate.  
5. **Hyper‑parameter tuning** – grid search over polynomial degrees (1–3) and interaction inclusion.

**Depth**  
- *Model 1*: OLS with all raw features.  
- *Models 2–4*: OLS + log‑transformed predictors, squared terms, and interactions respectively.  
- *Models 5–7*: Ridge regression with alphas 0.01, 0.1, 1.  
- *Models 8–10*: Lasso with same alphas (sparsity).  
- *Model 11*: ElasticNet α=0.1, l1_ratio=0.5.  
- *Model 12*: Weighted least squares using inverse variance of residuals from Model 1.  
- *Model 13*: HuberRegressor (robust to outliers).  
- *Models 14–15*: PolynomialRegression (degree 2 & 3) with interaction terms, each tuned via cross‑validation.

Each model is evaluated by RMSE on a held‑out test set; coefficients and R² are inspected for interpretability.  

**Edge Cases**  
- Multicollinearity causing inflated variances in OLS → handled by Ridge/Lasso.  
- Heteroscedasticity → mitigated by weighted least squares.  
- Outliers skewing results → addressed with robust regression.

**Optimize & Communicate**  
Present a comparative table of metrics, highlight the best‑performing model and why (e.g., lowest RMSE + simplest). Discuss trade‑offs: more complex models may overfit; regularization balances bias–variance. Conclude by recommending the model that satisfies business constraints (interpretability vs predictive accuracy) and outlining next steps (deployment, monitoring).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
