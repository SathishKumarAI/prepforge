---
qid: vq_64de8d0edb__faang__local
question: How will you balance/correct data that is unbalanced?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 595
total_tokens: 829
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:13:48-05:00'
sources: []
---

**Clarify**  
We’re given a supervised learning dataset where the class distribution is skewed (e.g., 95 % “negative”, 5 % “positive”). The goal is to train a model that performs well on minority classes without sacrificing overall accuracy.

Assumptions:  
- Labels are binary/multi‑class.  
- We can modify training data or loss, but not the underlying problem.  
- Evaluation metric may be accuracy, precision/recall, AUC, etc.

**Approach**  
1. **Quantify imbalance** (ratio, minority fraction).  
2. **Select a correction strategy**: resampling (over‑/under‑sampling), cost‑sensitive learning, or algorithmic modifications.  
3. **Validate** using cross‑validation with stratified folds and an appropriate metric.

**Depth**  

| Strategy | Implementation | Complexity | Trade‑offs |
|----------|----------------|------------|------------|
| **Random Over‑Sampling (ROS)** | Duplicate minority samples until balance. | O(n) memory; training time increases. | Risk of overfitting. |
| **SMOTE** | Generate synthetic points via nearest neighbors. | O(k n log n). | Adds noise if minority cluster is sparse. |
| **Random Under‑Sampling (RUS)** | Drop majority samples to match minority size. | O(n) time, reduced data. | Potential loss of useful information. |
| **Class‑Weighting** | Modify loss: `weight = total_samples / (num_classes * count_class)`. | No extra memory; just a scalar per class. | Requires algorithm support; may need careful tuning to avoid instability. |
| **Ensemble Methods** (e.g., BalancedBagging, EasyEnsemble) | Train multiple models on balanced subsets and aggregate. | Linear in number of models. | More compute but often yields robust performance. |

Typical workflow: start with class‑weighting for its simplicity; if still poor recall on minority, add SMOTE or an ensemble.

**Edge Cases**  
- Extremely small minority (≤ 10 samples): synthetic methods may produce unrealistic data.  
- Multi‑class with many rare classes: per‑class weighting can lead to exploding weights.  
- Imbalanced evaluation metric (e.g., AUC) may mask accuracy drop; always report multiple metrics.

**Optimize & Communicate**  
Iteratively monitor confusion matrix and ROC curves. If overfitting appears, switch from ROS to SMOTE or reduce synthetic samples. Explain that the chosen method balances bias‑variance trade‑off: weighting keeps data intact but biases learning; resampling changes data distribution but can introduce variance. Conclude by summarizing performance gains (e.g., recall ↑ 15%, F1 ↑ 12%) and any remaining limitations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
