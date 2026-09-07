---
qid: vq_98566f2130__aws__local
question: When to do re-sampling?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 445
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:04:48-05:00'
sources: []
---

**Situation (S)**  
While building a fraud‑detector for an e‑commerce client, the training data was 97 % legitimate and only 3 % fraudulent. The model’s precision dropped to **0.42**, hurting customer trust.

**Task (T)**  
I had to decide when and how to re‑sample so the model could learn rare fraud patterns without sacrificing overall accuracy.

**Action (A)**  
1. **Dive Deep** into the data pipeline on **AWS Glue** and **S3** to quantify class imbalance and feature drift over time.  
2. Implemented an automated **SageMaker Processing job** that runs nightly, calculating the fraud rate every 30 days.  
3. When the fraud ratio fell below **1 %**, triggered a **SMOTE (Synthetic Minority Over-sampling Technique)** pipeline; otherwise used random under‑sampling of majority class.  
4. Deployed the re‑sampled datasets to **SageMaker Training** with an **XGBoost** estimator, monitoring ROC‑AUC on a hold‑out set.  
5. Rolled out models via **SageMaker Endpoint** behind an **Application Load Balancer** for 99.9 % availability.

**Result (R)**  
Within two weeks the fraud precision rose to **0.78** and recall from **0.31** to **0.58**, cutting false positives by **65 %** and saving the client ~$1.2M in manual review costs annually. The cost of the re‑sampling pipeline was <5 % of the overall ML spend.

> **Leadership Principles:** *Customer Obsession* – improving detection protects users; *Ownership* – automated end‑to‑end solution; *Dive Deep* – continuous monitoring and data analysis.  
> **Bar‑raiser cue:** Quantified impact, clear trade‑offs (sampling vs. cost), and learning loop that auto‑adjusts to drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
