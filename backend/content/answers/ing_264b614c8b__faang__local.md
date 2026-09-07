---
qid: ing_264b614c8b__faang__local
question: 'Explain: Classification/Extraction: ROC, PR, class distributions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 513
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:12:48-05:00'
sources: []
---

**Clarify**  
You’re asking how to evaluate a binary classifier when the data is imbalanced and what “class distribution” means in that context. I’ll assume we have a model producing probabilities or scores for two classes (positive/negative) and we want to summarize its performance.

**Approach**  
1. Define class imbalance: ratio of positives to negatives.  
2. Explain ROC & PR curves, their axes, and why each is useful.  
3. Relate metrics (AUC‑ROC, AUC‑PR, accuracy) to the underlying distribution.  

**Depth**  

| Metric | What it measures | Why it matters with imbalance |
|--------|------------------|--------------------------------|
| **Accuracy** | (TP+TN)/N | Inflated by majority class; misleading when positives are rare. |
| **ROC Curve** | TPR vs FPR at thresholds | FPR = FP/(FP+TN); insensitive to class priors, good for *rank* performance. |
| **AUC‑ROC** | Area under ROC | 0.5 random, 1 perfect; comparable across datasets but can overestimate performance when positives are scarce. |
| **Precision–Recall (PR) Curve** | Precision vs Recall | Precision = TP/(TP+FP); heavily penalizes false positives—critical when positives cost more. |
| **AUC‑PR** | Area under PR | Reflects both class imbalance and classifier quality; a higher baseline equals the positive prevalence. |

Class distribution simply means the proportion \(p = \frac{N_{pos}}{N}\). It sets the *baseline* for precision (equal to p) and influences which curve is more informative.

**Edge Cases**  
- Extreme imbalance (p < 0.01): ROC may look great while PR collapses; always inspect PR.  
- Threshold selection: choose operating point based on cost of FP vs FN, not just AUC.  
- Multi‑class extension: macro/micro averaging for ROC/PR.

**Optimize & Communicate**  
I’d first plot both ROC and PR to surface discrepancies, then pick the metric aligned with business goals (e.g., recall if missing a positive is costly). Finally, I’d report both AUCs and explain how class distribution affects interpretation. This shows structured thinking, depth in metrics, and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
