---
qid: ing_eb0d00bdbe__faang__local
question: 'Explain: What is feature scaling? Compare normalization and standardization,
  and tell me which models actually need it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 514
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:46:14-05:00'
sources: []
---

**Clarify**  
Feature scaling transforms raw numeric attributes so they lie on comparable scales.  
Assumptions: we’re dealing with continuous features; the model uses distance or gradient‑based updates; no categorical encoding needed.

**Approach**  
1. Define two common scalers – **normalization (min–max)** and **standardization (z‑score).**  
2. Contrast their math, ranges, and sensitivity to outliers.  
3. List models that rely on scaled inputs versus those that are invariant.  
4. Conclude with practical guidelines.

**Depth**  

|Scaler|Formula|Typical Range|Outlier Sensitivity|
|------|-------|-------------|-------------------|
|Min–max (normalization)|\(x'=\frac{x-\min}{\max-\min}\)|[0,1] or [-1,1]|High – shifts all values. |
|Z‑score (standardization)|\(x'=\frac{x-\mu}{\sigma}\)|Mean = 0, SD = 1|Low – robust to extreme values.|

**Models that benefit:**
- **Distance‑based:** KNN, SVM with RBF, k‑means clustering.  
- **Gradient‑descent optimizers:** Linear/logistic regression, neural nets, XGBoost (when using learning rate schedules).  

**Models that are scale‑invariant:**
- Tree‑based ensembles (Random Forest, Gradient Boosted Trees) – splits depend on order, not magnitude.  
- Naïve Bayes (assuming Gaussian features) – uses variance internally.

**Edge Cases**  
- **Outliers** break min–max; use robust scaler or clip before normalizing.  
- **Categorical variables** encoded as one‑hot should *not* be scaled.  
- When training data has different bounds than test data, fit scalers only on training set and apply the same parameters to test.

**Optimize & Communicate**  
Explain that we’ll first examine feature distributions (histograms, boxplots). If many models use gradient descent or distance metrics, we standardize; otherwise we skip scaling. Mention that for neural nets, batch‑norm layers can replace explicit scaling, but preprocessing still speeds convergence. Conclude by noting that improper scaling leads to slower learning or biased clusters—something FAANG teams routinely guard against with automated data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
