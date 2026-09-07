---
qid: ing_88d73c5bd6__aws__local
question: ROC-AUC vs PR-AUC - what does each measure, and why does ROC-AUC look deceptively
  good on imbalanced data?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 452
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:33:41-05:00'
sources: []
---

**Answer (Amazon Way)**  

During a recent fraud‑detection sprint I led the model‑selection effort for an imbalanced click‑through dataset (1 % positives).  
*Situation:* We were choosing between ROC‑AUC and PR‑AUC to report model quality to stakeholders.  
*Task:* Explain what each metric captures, why ROC can be misleading on skewed data, and recommend a deployment strategy on AWS.  

**Metrics & Why ROC Fakes It Up**  
- **ROC‑AUC** plots *True Positive Rate* vs *False Positive Rate*. With 99 % negatives, even a model that flags almost all samples as positive still yields a low FPR, inflating the curve.  
- **PR‑AUC** focuses on *Precision* (positive predictive value) vs *Recall*, directly reflecting performance on the scarce positives—exactly what business cares about.

**Result** – After switching to PR‑AUC, our model’s 0.68 AUC dropped to 0.45 ROC, but precision at 80 % recall fell from 0.92 to 0.48—revealing a hidden error rate that drove the risk score threshold change and saved $2M in false alerts.

**AWS Design**  
- Store feature vectors in **Amazon S3**; train with **SageMaker** using `SMOTE` for class‑balance.  
- Deploy as a **Lambda** API behind an **API Gateway**, auto‑scaling via Lambda concurrency controls.  
- Monitor PR curves nightly with **CloudWatch Metrics** and trigger alerts when precision < 0.6.

**Leadership Principles Highlighted**  
- *Customer Obsession*: We chose the metric that mattered to fraud analysts.  
- *Dive Deep & Ownership*: I quantified the impact, surfaced the flaw in ROC, and owned the corrective pipeline.  

Bar‑raiser cues: clear ownership, deep metric understanding, data‑driven outcome, and a learning loop (we re‑evaluated after deployment).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
