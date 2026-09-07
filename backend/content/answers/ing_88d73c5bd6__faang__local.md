---
qid: ing_88d73c5bd6__faang__local
question: ROC-AUC vs PR-AUC - what does each measure, and why does ROC-AUC look deceptively
  good on imbalanced data?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 500
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:02:25-05:00'
sources: []
---

**Clarify**  
We’re comparing two performance curves for binary classifiers: the Receiver‑Operating Characteristic (ROC) with its Area Under Curve (AUC‑ROC) and the Precision‑Recall curve with its Area Under Curve (AUC‑PR). The question asks *what each metric measures* and *why ROC‑AUC can be misleading on highly imbalanced data*.  
Assumptions to confirm: (1) labels are binary, (2) we’re interested in ranking quality rather than a fixed threshold, (3) the class distribution is skewed.

**Approach**  
1. Define TPR/FPR and Precision/Recall formally.  
2. Explain ROC‑AUC as probability that a randomly chosen positive ranks higher than a negative.  
3. Explain PR‑AUC as average precision across recall levels, directly tied to the proportion of positives.  
4. Discuss how class imbalance inflates FPR space for negatives, making ROC curves look optimistic.

**Depth**  
- **ROC‑AUC**: integrates TPR vs. FPR over all thresholds; insensitive to absolute positive/negative counts because FPR = FP / (FP + TN). With many negatives, a few false positives still give a small FPR, so the curve can rise steeply even if precision is poor.  
- **PR‑AUC**: integrates Precision vs. Recall; precision = TP / (TP + FP) directly penalizes false positives and reflects the positive class prevalence. On imbalanced data, PR‑AUC drops sharply if a model produces many FP, giving a realistic sense of utility.

**Edge cases**  
- Extremely rare positives (e.g., 1 %): ROC‑AUC may stay >0.9 while precision is <10 %.  
- Balanced data: both metrics converge and give similar insight.  
Test by generating synthetic datasets with varying class ratios and measuring both AUCs.

**Optimize & Communicate**  
Highlight that for imbalanced problems, PR‑AUC is the preferred metric because it reflects real-world cost of false positives. Explain to stakeholders how ROC can overstate performance and suggest reporting both metrics, but prioritizing PR‑AUC in decision‑making dashboards. This shows structured reasoning, depth, and clear communication—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
