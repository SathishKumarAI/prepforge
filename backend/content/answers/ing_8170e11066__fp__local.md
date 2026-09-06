---
qid: ing_8170e11066__fp__local
question: What is AUC–ROC Curve? — Machine Learning Interview Questions and Answers
  - GeeksforGeeks
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 395
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:40:28-05:00'
sources: []
---

**AUC‑ROC from the ground up**

Suppose a binary classifier outputs a score \(s(x)\) that ranks instances by “how likely” they belong to class 1.  
The **receiver operating characteristic (ROC)** plots the *true positive rate* (TPR = sensitivity) against the *false positive rate* (FPR = 1‑specificity) for every possible threshold on \(s\).  

Why this curve matters?  
- A perfect classifier places all positives above all negatives, yielding TPR = 1 when FPR = 0; the ROC passes through \((0,1)\).  
- Random guessing produces a diagonal line where TPR = FPR for every threshold.  
Thus the **area under the curve (AUC)** quantifies how well the ranking separates classes: it is exactly the probability that a randomly chosen positive has a higher score than a randomly chosen negative:
\[
\text{AUC} = \Pr[s(x^+) > s(x^-)] .
\]
This interpretation links AUC to **ranking‑based nonparametric statistics** (e.g., Wilcoxon rank‑sum) and shows that it is *threshold‑agnostic*: the classifier’s performance is evaluated over all operating points.

*Non‑obvious insight:*  
AUC equals 0.5 plus half the difference between the mean ranks of positives and negatives, so it can be computed directly from ranks without thresholding. This makes AUC robust to class imbalance: unlike accuracy or F1, it depends only on relative ordering, not absolute counts.  

Hence, AUC‑ROC is a principled, threshold‑free measure that captures the intrinsic discriminative power of a scoring model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
