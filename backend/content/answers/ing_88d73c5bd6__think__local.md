---
qid: ing_88d73c5bd6__think__local
question: ROC-AUC vs PR-AUC - what does each measure, and why does ROC-AUC look deceptively
  good on imbalanced data?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 493
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:05:51-05:00'
sources: []
---

**1. Clarify the question & assumptions**  
   - Identify that *ROC‑AUC* (receiver operating characteristic area under curve) and *PR‑AUC* (precision–recall area under curve) are both performance metrics for binary classifiers.  
   - Assume we’re dealing with a highly imbalanced dataset where one class (e.g., positives) is rare.  

**2. Mental model / framework**  
   - Think of each metric as summarizing the trade‑off between two operating points: *false positive rate* vs. *true positive rate* for ROC, and *precision* vs. *recall* for PR.  
   - Remember that ROC uses **overall positives/negatives**, whereas PR focuses on the minority class’s precision.  

**3. Step‑by‑step reasoning**  
   1. Define TP, FP, FN, TN.  
   2. Explain how ROC curves plot TPR = TP/(TP+FN) against FPR = FP/(FP+TN).  
   3. Show that when negatives dominate, a small number of false positives barely changes FPR, so the curve can stay high even if precision is low.  
   4. Contrast with PR: Precision = TP/(TP+FP), which drops sharply with any FP in an imbalanced setting.  
   5. Conclude why ROC‑AUC may appear deceptively optimistic while PR‑AUC reveals poor minority‑class performance.  

**4. Common traps to avoid**  
   - Mixing up *precision* and *positive predictive value*.  
   - Assuming a high ROC‑AUC guarantees good recall for the minority class.  
   - Forgetting that PR‑AUC is sensitive to class imbalance; a random classifier’s baseline PR‑AUC equals prevalence, not 0.5.  

**5. Sanity check & verbal communication**  
   - Verify with toy examples (e.g., 1% positives) that ROC stays high while precision plummets.  
   - Communicate clearly: “ROC-AUC looks good because it dilutes the impact of false positives across many negatives; PR‑AUC directly penalizes those errors, giving a truer picture on imbalanced data.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
