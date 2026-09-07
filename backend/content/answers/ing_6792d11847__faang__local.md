---
qid: ing_6792d11847__faang__local
question: Is accuracy always a good metric for classification performance?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 477
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:45:06-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re asking whether *accuracy*—the fraction of correct predictions—is universally the right yard‑stick for a classifier.  
Assumptions to verify:  
- What are the class distributions?  
- Are all errors equally costly (e.g., false positives vs. false negatives)?  
- Is the dataset balanced or skewed?  

**2️⃣ Approach**  
Explain that accuracy is simple but can be misleading when classes are imbalanced or when misclassification costs differ. Introduce alternative metrics: precision, recall, F1‑score, ROC‑AUC, PR‑AUC, and cost‑based measures.

**3️⃣ Depth**  
- **Balanced data & equal error cost** → accuracy ≈ fine.  
- **Imbalanced data** (e.g., 95% negative) → a model that always predicts the majority class can achieve 95 % accuracy yet be useless for detecting positives.  
- **Asymmetric costs**: In medical diagnosis, missing a disease (false negative) is far worse than a false alarm; recall or sensitivity becomes critical.  
- **Threshold‑dependent metrics**: ROC‑AUC evaluates performance across all decision thresholds, useful when the operating point isn’t fixed.

Show formulas briefly and discuss trade‑offs: precision ↔ recall vs. F1, AUC’s robustness to class imbalance but insensitivity to calibration.

**4️⃣ Edge Cases**  
- Extremely skewed classes (spam detection).  
- Multi‑class problems where one class dominates.  
- Situations with a cost matrix or varying prevalence over time.

Test by creating synthetic imbalanced datasets and measuring all metrics; observe how accuracy can stay high while F1 drops sharply.

**5️⃣ Optimize & Communicate**  
Conclude: Accuracy is *not* always appropriate. Choose the metric that aligns with business objectives and data characteristics. In interviews, emphasize understanding of when each metric shines, demonstrate the ability to justify a choice, and show awareness of how different metrics influence model selection and deployment.  

> **Bottom line:** Use accuracy only when classes are balanced and error costs equal; otherwise lean on precision/recall, F1, or AUC‑based measures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
