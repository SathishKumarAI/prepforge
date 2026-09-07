---
qid: ing_42d3c0a909__faang__local
question: Explain the bias-variance tradeoff. How do you tell which one is hurting
  your model?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 377
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:19:30-05:00'
sources: []
---

**Clarify**  
The bias‑variance tradeoff balances two error sources in a learning algorithm: *bias* (systematic error from oversimplifying assumptions) and *variance* (sensitivity to training data noise). The question asks how we detect which component is hurting performance.

**Approach**  
1. Define training, validation, and test splits.  
2. Measure errors on each set while varying model complexity.  
3. Interpret trends: high training error → bias; large gap between training & validation → variance.

**Depth**  
- **Bias** manifests when both training and validation errors are high and close together. The model is too rigid (e.g., linear regression on a nonlinear problem).  
- **Variance** shows as low training error but much higher validation/test error, indicating overfitting to idiosyncrasies of the training set.  
Use learning curves: plot error vs. number of training examples; a steep drop in training error that flattens quickly signals high variance. Cross‑validation scores help quantify this gap.

**Edge Cases**  
- Noisy labels inflate both bias and variance; inspect data quality first.  
- Small datasets can give misleadingly low validation error if split poorly—use k‑fold CV.  
- Regularization (L1/L2) reduces variance but may increase bias; tune via grid search or Bayesian optimization.

**Optimize & Communicate**  
Explain that to improve: reduce bias with richer features or more flexible models, and reduce variance by collecting more data, simplifying the model, or adding regularization. Emphasize monitoring both training and validation errors during experimentation, presenting learning curves, and iteratively adjusting hyperparameters—this systematic feedback loop is what FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
