---
qid: ing_6792d11847__think__local
question: Is accuracy always a good metric for classification performance?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 369
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:53:41-05:00'
sources: []
---

**1️⃣ Clarify the question & assumptions**  
- *What is “accuracy”?* It’s \((TP+TN)/(TP+FP+FN+TN)\).  
- *When might it be misleading?* Think of class imbalance or different costs for errors.  
- Assume we’re comparing two classifiers on the same dataset.

**2️⃣ Adopt a mental model**  
Use the “evaluation‑metric fit” framework:  
1. **Data characteristics** (balance, noise).  
2. **Business objective** (false positives vs false negatives).  
3. **Metric properties** (sensitivity to class distribution, interpretability).

**3️⃣ Step‑by‑step reasoning**  
- If classes are balanced and costs equal → accuracy can be fine.  
- If one class dominates → a trivial majority predictor can score high yet be useless.  
- If misclassifications have asymmetric costs → we need precision/recall or cost‑based metrics.  
- In imbalanced medical diagnosis, use AUC‑ROC, F1, or PR curves instead.

**4️⃣ Common traps to avoid**  
- Assuming “higher accuracy = better” without checking class distribution.  
- Ignoring that a single metric can mask poor performance on minority classes.  
- Forgetting that metrics like precision/recall trade off against each other.

**5️⃣ Sanity‑check & communicate**  
- Plot confusion matrix and ROC curve to see if accuracy hides problems.  
- Explain: “Accuracy is fine when classes are balanced and errors equally costly, but for imbalanced data or asymmetric costs it can be deceptive.”  
- End with a recommendation: choose the metric that aligns with the problem’s goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
