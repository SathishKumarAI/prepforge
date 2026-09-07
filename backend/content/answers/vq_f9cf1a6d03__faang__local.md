---
qid: vq_f9cf1a6d03__faang__local
question: Q19- How would you handle an imbalanced dataset?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 490
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:43:18-05:00'
sources: []
---

**Clarify**  
The question asks how to tackle a classification problem where class frequencies are heavily skewed (e.g., fraud detection, disease diagnosis). I’ll assume we’re working with supervised learning, have labeled data, and can evaluate using metrics that reflect minority‑class performance.

**Approach**  
1. **Understand the imbalance** – compute class ratios, examine cost of misclassification.  
2. **Resample the data** – either oversample the minority (SMOTE, ADASYN) or undersample the majority (random, Tomek links).  
3. **Adjust model bias** – use algorithms that allow class‑weighting or penalty terms (e.g., `class_weight='balanced'` in scikit‑learn).  
4. **Choose appropriate metrics** – ROC‑AUC, PR‑curve, F1, MCC instead of plain accuracy.  
5. **Validate carefully** – use stratified k‑fold CV to preserve class proportions.

**Depth**  
- *Oversampling*: SMOTE generates synthetic minority samples by interpolating between nearest neighbors; it reduces overfitting compared to naive duplication.  
- *Undersampling*: Random undersampling can discard useful majority data; more sophisticated methods (NearMiss, ClusterCentroids) keep informative points.  
- *Cost‑sensitive learning*: Boosting algorithms like XGBoost accept `scale_pos_weight`, directly penalizing minority errors.  
Complexity: resampling adds O(n log n) for nearest‑neighbor operations; class‑weighting keeps training time unchanged.

**Edge Cases**  
- Extremely sparse minority (≤10 samples): SMOTE may create noisy points; consider anomaly detection instead.  
- Multi‑class imbalance: extend weights per class, or use one‑vs‑rest with resampling.  
- Imbalanced labels but balanced feature space: avoid oversampling if it introduces unrealistic feature combinations.

**Optimize & Communicate**  
Start simple (class weighting), evaluate PR‑AUC; if still poor, add SMOTE + cross‑validation. Explain trade‑offs: oversampling boosts recall but may hurt precision; undersampling speeds training but risks losing signal. Conclude with a recommendation to iterate, monitor validation curves, and align the chosen strategy with business impact (e.g., cost of false negatives).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
