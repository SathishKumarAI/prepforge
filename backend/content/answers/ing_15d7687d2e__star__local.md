---
qid: ing_15d7687d2e__star__local
question: 'Explain: F2: Eval set becomes overfit — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 405
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:11:53-05:00'
sources: []
---

**Situation** – In the last quarter we launched a recommendation engine for our e‑commerce platform. The model was evaluated on a fixed hold‑out set that had been used to tune hyperparameters, and it scored an AUC of .94 during CI/CD runs.

**Task** – My job was to ensure that the automated “Eval Gated” pipeline in our CICD would only promote models that truly generalised, not just those that performed well on a stale eval set. The risk was that overfitting to this set would let bad models into production and hurt user experience.

**Action** – I redesigned the gating logic:  
1) Split the original hold‑out into an *eval* (70%) and a *validation* (30%) subset, shuffling each commit.  
2) Added a “drift” check that computed KS‑statistics between the eval distribution and the live traffic distribution every run.  
3) Implemented a rolling window of the last five commits; if any model’s eval AUC dropped below 0.92 or drift exceeded 0.05, the pipeline blocked promotion.  
4) Updated our CI dashboards to show per‑commit overfit scores so engineers could see why a gate failed.

**Result** – Within two release cycles we eliminated 87 % of false positives that had previously been promoted. Production click‑through rates improved by 3.5 %, and the new gating process reduced model rollback incidents from 4 to 0 in three months. I learned that dynamic, data‑driven gates are far more reliable than static eval sets in a fast‑moving ML pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
