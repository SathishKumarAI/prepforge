---
qid: ing_a394c8f294__faang__local
question: 'Explain: What is the difference between Bagging and Boosting? | Quantdare'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 495
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:05:15-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise comparison of **Bagging (Bootstrap Aggregating)** vs. **Boosting**, two ensemble learning techniques used to improve predictive performance.

**Approach**  
1. Define each method’s core idea.  
2. Highlight key operational differences: data sampling, model training order, weight handling, and error focus.  
3. Summarize typical use‑cases & trade‑offs (bias–variance, interpretability, sensitivity to noise).

**Depth**  
| Feature | Bagging | Boosting |
|---------|---------|----------|
| **Goal** | Reduce variance; make unstable learners more stable. | Reduce bias and variance by sequentially correcting mistakes. |
| **Data sampling** | Bootstrap (with‑replacement) subsets for each base learner, independent of others. | Same training set but reweight instances based on previous errors. |
| **Training order** | Parallel; all models are built independently. | Sequential; each learner depends on the previous ones. |
| **Weighting scheme** | Uniform voting (majority or average) across trees. | Weighted voting where later learners get higher influence, often via exponential loss. |
| **Typical base model** | Decision trees (Random Forest), SVMs. | Weak learners (shallow trees, stumps). |
| **Error handling** | Does not focus on hard cases; treats all samples equally. | Actively focuses on misclassified or high‑loss instances. |
| **Sensitivity to noise/outliers** | Low; averaging smooths out anomalies. | High; noisy labels can be over‑corrected, leading to overfitting. |

**Edge Cases**  
- Bagging may underperform when base learners are already stable (e.g., linear models).  
- Boosting can overfit on small datasets or with too many rounds unless regularized.

**Optimize & Communicate**  
For a production system: start with **Random Forest** (bagging) for robustness and speed; switch to **Gradient Boosted Trees** (XGBoost, LightGBM) when you need higher accuracy and can tolerate longer training times. Emphasize that the choice hinges on dataset size, noise level, and interpretability requirements—key points any FAANG interviewer will appreciate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
