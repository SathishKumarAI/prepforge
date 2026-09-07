---
qid: ing_7c0264c2ae__faang__local
question: 'Explain: Metrics: when accuracy lies — Ml And Dl Foundations'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 504
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:32:29-05:00'
sources: []
---

**Clarify**  
You’re asking how we decide whether *accuracy* is the right metric for a supervised ML/DL model and what “lies” in accuracy (i.e., when it can be misleading). I’ll assume binary or multi‑class classification tasks on tabular or image data, and that you care about predictive performance at inference time.

**Approach**  
1. Review the task’s business goal.  
2. Map the goal to an evaluation metric.  
3. Examine accuracy’s strengths/weaknesses in that context.  
4. Suggest alternatives if accuracy is unsuitable.

**Depth**  

| Scenario | Accuracy OK? | Why / Why not |
|----------|--------------|---------------|
| Balanced classes, symmetric cost of errors | ✔︎ | True positives + true negatives reflect overall correctness. |
| Imbalanced data (e.g., fraud detection) | ❌ | A model that always predicts majority class can achieve high accuracy while being useless. |
| Asymmetric costs (false negative > false positive) | ❌ | Accuracy ignores which error type is more costly; precision/recall or F1 better capture trade‑offs. |
| Multi‑class with hierarchical labels | ❌ | Flat accuracy treats all misclassifications equally; weighted metrics or top‑k accuracy help. |

*Accuracy* = (TP+TN)/(TP+FP+FN+TN). It’s simple, interpretable, and fast to compute, but it conflates different error types.

**Edge Cases**  
- **Perfectly random labels** → Accuracy ≈ class frequency; misleadingly high if classes are balanced.  
- **Adversarial examples** → Small perturbations can flip accuracy while leaving confidence unchanged.  
- **Temporal drift** → Accuracy measured on a past test set may inflate perceived performance.

**Optimize & Communicate**  
When accuracy is inadequate, recommend precision/recall, ROC‑AUC, or domain‑specific loss functions (e.g., weighted cross‑entropy). For deployment, monitor *calibration* and *prediction confidence* alongside chosen metric. Always tie the metric back to stakeholder impact: “We’ll use F1 because missing a fraud case costs $X more than a false alarm.” This demonstrates clear reasoning, trade‑off awareness, and alignment with business objectives—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
