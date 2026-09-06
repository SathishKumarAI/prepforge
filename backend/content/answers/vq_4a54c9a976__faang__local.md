---
qid: vq_4a54c9a976__faang__local
question: Q20- When should you use classification over regression?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 410
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:09:10-05:00'
sources: []
---

**Clarify**  
The question asks when a model’s output should be discrete class labels versus continuous numeric values. I’ll assume we’re comparing supervised learning tasks where the target is either categorical or real‑valued, and that evaluation metrics (accuracy/F1 vs MSE/R²) are relevant.

**Approach**  
1. Identify the nature of the target variable.  
2. Examine business goals: decision thresholds, interpretability, cost of misprediction.  
3. Map to model type and loss function.  

**Depth**  
- **Classification** is appropriate when the outcome naturally falls into distinct categories (e.g., spam vs. ham, disease present/absent). Losses like cross‑entropy or hinge penalize incorrect class predictions; metrics such as accuracy, precision/recall, AUC guide tuning.  
- **Regression** fits when the target is continuous and we care about magnitude differences (e.g., house price, temperature). Mean squared error or MAE are used; R² or residual plots inform model fit.  
Use classification if a threshold exists that partitions the outcome into actionable bins, or if interpretability requires discrete decisions. Use regression when the exact value matters for planning or optimization.

**Edge Cases**  
- *Ordinal data*: could be treated as either; choose based on whether relative ordering or precise gaps are needed.  
- *Probabilistic outputs*: classification models can output probabilities that inform risk‑based thresholds, bridging the gap.  

**Optimize & Communicate**  
Explain the trade‑off: classification simplifies deployment and compliance (e.g., credit approvals), while regression offers finer granularity but may require more data to avoid overfitting. Conclude with a recommendation: start with exploratory analysis of target distribution; if it clusters around distinct modes, lean toward classification; otherwise, regression. This structured reasoning demonstrates clear problem understanding, technical depth, and practical decision‑making.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
