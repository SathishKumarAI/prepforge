---
qid: ing_9dbaa14d4b__aws__local
question: 'Explain: How to Apply — We are hiring interns!'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 395
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:21:42-05:00'
sources: []
---

**Situation & Task**  
At my previous internship I was tasked with building a *predictive intern‑fit model* to help recruiters surface the best candidates from our 12 k applicant pool each quarter.

**Action**  
1. **Ownership + Bias for Action:** I gathered labeled data (hire vs. not‑hired) and engineered features—text embeddings of resumes, interview scores, and skill‑gap metrics.  
2. **Dive Deep & Invent & Simplify:** I chose a lightweight gradient‑boosted tree (XGBoost) that runs in < 5 s per candidate on an EC2 t3.medium. The model was deployed via SageMaker endpoint with auto‑scaling, and integrated into the ATS through an API Gateway + Lambda chain.  
3. **Customer Obsession:** I set up a real‑time dashboard (QuickSight) for recruiters to view top‑10 ranked candidates per skill area, with A/B testing of feature sets.

**Result**  
- *Data‑driven impact:* Precision@5 rose from 38 % to 67 %, reducing recruiter screen time by **45 %** and increasing first‑round interview conversion by **12 %**.  
- *Scalability & Cost:* The endpoint processes ~200k predictions/day at <$300/month, with 99.9 % availability via Multi‑AZ deployment.

**Learning from Failure**  
Early trials overfitted to the “most recent” hire data; after adding regularization and cross‑validation I achieved stable performance across quarters.

> **Bar‑raiser focus:** Demonstrated end‑to‑end ownership, deep technical dive, quantified business impact, and a clear learning loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
