---
qid: ing_8ade8497d2__faang__local
question: 'Explain: 1.1.2.4. Setting the regularization parameter: leave-one-out Cross-Validation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 522
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:06:46-05:00'
sources: []
---

**Clarify**  
We’re asked how to choose the regularization strength (λ) in a linear‑model setting using *leave‑one‑out cross‑validation* (LOOCV). Assume a convex loss (e.g., squared error), a fixed feature set, and that we can compute predictions for each held‑out sample.

**Approach**  
1. For every λ candidate, train the model on all but one data point.  
2. Predict the left‑out point, record its loss.  
3. Average the loss over all N folds → LOOCV error for that λ.  
4. Pick λ with minimal average error.

Because LOOCV uses nearly all data for training, it gives an almost unbiased estimate of test error, though at higher variance than k‑fold CV.

**Depth**  
- *Computation*: For linear ridge regression we can compute the LOOCV error in O(N) per λ using the hat matrix:  
  \[
  \hat{y}_i = y_i - \frac{e_i}{1-H_{ii}}
  \]
  where \(e_i\) is residual and \(H_{ii}\) diagonal of H. This reduces cost from O(N²).  
- *Complexity*: If we evaluate M λ values, naive training costs O(MN³); with the hat trick it’s O(MN²).  
- *Trade‑offs*: LOOCV uses more data per fold → lower bias but higher variance; computationally heavier than k‑fold CV.  

**Edge Cases**  
- Very small N (e.g., <10): LOOCV variance explodes; consider leave‑p‑out or nested CV.  
- Highly correlated features: λ selection may be unstable; regularization path methods (warm starts) help.  
- Non‑convex losses: LOOCV becomes intractable; use approximate cross‑validation.

**Optimize & Communicate**  
To reduce cost, we can use *approximate leave‑one‑out* formulas or *k‑fold CV* with k≈10 as a pragmatic compromise. I’d explain the bias–variance trade‑off, show the hat‑matrix shortcut for ridge, and outline how to validate the chosen λ on an independent hold‑out set before deployment. This demonstrates both rigorous understanding and practical engineering judgment—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
