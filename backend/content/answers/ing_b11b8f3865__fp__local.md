---
qid: ing_b11b8f3865__fp__local
question: 'Explain: Explain precision, recall, and F1. Give a concrete case where
  99% accuracy means the model is useless.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 501
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:20:57-05:00'
sources: []
---

**Why the usual “accuracy” metric can mislead**

Suppose a spam filter scores every email as *not‑spam*.  
If only 2 % of mail is actually spam, the model achieves 98 % accuracy—yet it fails at its very purpose: catching spam.  
Accuracy rewards the majority class; it does **not** penalize missing rare but critical positives.

---

### From the fundamental problem

We are asked to *detect* a particular event (spam, disease, fraud).  
Let  

- **True Positive (TP)** – correctly flagged event  
- **False Positive (FP)** – wrongly flagged non‑event  
- **False Negative (FN)** – missed event  

The cost of FN is usually far higher than FP.  Thus we need a metric that reflects *how many true events we actually recover* and *how many false alarms we produce*.

---

### Precision, Recall, F1

|Metric|Formula|Interpretation|
|------|-------|--------------|
|**Precision** | \( \displaystyle\frac{TP}{TP+FP}\) | Of the cases we flagged, how many were correct? (low FP → high precision) |
|**Recall** | \( \displaystyle\frac{TP}{TP+FN}\) | Of all real events, how many did we catch? (low FN → high recall) |
|**F1** | \( 2\,\frac{\text{Precision}\times\text{Recall}}{\text{Precision}+\text{Recall}}\) | Harmonic mean of precision and recall; balances the two. |

These arise from *information theory*: precision is the posterior probability that a flagged item truly belongs to the class, while recall is the sensitivity (true‑positive rate).  The F1 score is the maximum harmonic mean achievable under a fixed total number of positives, ensuring neither metric dominates.

---

### Non‑obvious insight

A model can have **high accuracy** yet *zero* recall if it simply predicts the majority class.  
Because precision and recall are *conditional* on the predicted positive set, they expose this failure.  Thus, in imbalanced problems, always report precision/recall (or AUC‑PR) rather than plain accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
