---
qid: ing_8170e11066__faang__local
question: What is AUC–ROC Curve? — Machine Learning Interview Questions and Answers
  - GeeksforGeeks
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 468
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:45:49-05:00'
sources: []
---

**Clarify**  
The interviewer asks for the *AUC‑ROC curve*—a performance metric for binary classifiers.  
Assumptions:  
1. We have a probabilistic or score‑based classifier that outputs a confidence value per instance.  
2. The dataset is labeled with two classes (positive/negative).  

**Approach**  
Explain ROC as the Receiver Operating Characteristic curve, plot of *True Positive Rate* vs *False Positive Rate* at varying thresholds. Then define AUC as the area under this curve, summarizing overall discriminative ability.

**Depth**  
- **TPR = TP/(TP+FN)** – proportion of positives correctly identified.  
- **FPR = FP/(FP+TN)** – proportion of negatives incorrectly labeled positive.  
To build ROC: sort predictions descending, sweep a threshold from +∞ to –∞, compute TPR and FPR at each step. Plotting these gives the ROC curve.  
AUC is ∫₀¹ TPR(FPR) dFPR; numerically approximated via trapezoidal rule or by counting rank‑based pairs (equivalent to Wilcoxon‑Mann‑Whitney U).  
Interpretation: AUC = 0.5 indicates random guessing; AUC = 1.0 means perfect discrimination.  

**Edge Cases**  
- Imbalanced classes: ROC remains unaffected, but precision–recall curves may be more informative.  
- No variance in predictions (e.g., all zeros): curve collapses to a point at (FPR=0,TPR=0).  
- Ties in scores: need deterministic tie‑breaking or interpolation.

**Optimize & Communicate**  
Highlight that computing AUC via pairwise ranking is O(n²) but can be reduced to O(n log n) with sorting. Mention the *“area under the convex hull”* trick for large datasets. Conclude by noting that while AUC is threshold‑independent, it may overestimate performance when operating points are concentrated in a specific region of the ROC space; thus complementing with precision–recall or calibration plots is prudent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
