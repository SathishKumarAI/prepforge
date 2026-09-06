---
qid: vq_c019493ca6__faang__local
question: what is feature selection?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 526
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:31:20-05:00'
sources: []
---

**Clarify**  
Feature selection asks: *Which input attributes should we keep to build a predictive model?* I’d confirm whether the goal is for supervised learning (classification/regression), what performance metric matters (accuracy, AUC, RMSE), and if there are constraints like latency or regulatory auditability.

**Approach**  
1. **Define objective & constraints**  
   * Model type, evaluation metric, feature‑budget, domain rules.  
2. **Generate candidate features**  
   * Raw columns + engineered transforms (polynomials, interactions).  
3. **Filter irrelevant/duplicate attributes**  
   * Variance threshold, correlation matrix → remove near‑constant or highly correlated pairs.  
4. **Rank remaining features**  
   * Univariate tests (ANOVA, chi‑square), model‑based importance (Tree‑based SHAP, L1 regularization).  
5. **Iterate & validate**  
   * Recursive Feature Elimination (RFE) + cross‑validation to balance bias–variance trade‑off.

**Depth**  
- **Filter methods** are fast but ignore feature interactions.  
- **Wrapper methods** (e.g., RFE with a Gradient Boosting model) capture interactions but are O(n·m) in time, where *n* = features, *m* = iterations.  
- **Embedded methods** (L1‑penalized logistic regression) give both selection and training simultaneously; complexity is O(n·log m).  
Trade‑offs: speed vs. predictive gain; interpretability vs. performance.

**Edge Cases**  
- Highly correlated predictors → multicollinearity inflates variance.  
- Sparse high‑dimensional data (e.g., text TF‑IDF) → dimensionality reduction needed first.  
- Missing values → imputation may create artificial patterns; consider robust methods like CatBoost’s native handling.

**Optimize & Communicate**  
Start with a quick filter to drop obvious noise, then apply an embedded method for a baseline. If performance stalls, switch to RFE with a powerful learner and monitor validation curves. Document feature importance scores so stakeholders can audit the model. Present results in a concise slide: “We reduced 1,200 raw columns to 45 features, improving AUC from .78 to .82 while cutting inference time by 60 %.” This shows structured reasoning, technical depth, and business impact—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
