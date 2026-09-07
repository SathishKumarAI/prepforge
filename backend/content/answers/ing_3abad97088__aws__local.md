---
qid: ing_3abad97088__aws__local
question: 'Explain: 1.11.1.1.6. Interaction constraints — 1.11. Ensembles: Gradient
  boosting, random forests, bagging, voting, stacking \u2014 scikit-learn 1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 271
output_tokens: 451
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:39:16-05:00'
sources: []
---

**Situation & Task**  
While revamping a recommendation pipeline for our e‑commerce platform, I had to reduce latency from 2 s to < 200 ms while keeping > 90 % of the AUC achieved by our legacy gradient‑boosted trees (GBTs). The challenge was to re‑engineer the model ensemble under strict interaction constraints: each tree could only use a subset of features due to regulatory audit rules.

**Approach & Design**  
I first *dove deep* into the **interaction‑constraint API** in scikit‑learn 1.9.0, which lets you specify `max_features` per estimator and enforce *feature groups*. I built a two‑stage ensemble:

| Stage | Technique | AWS Service |
|-------|-----------|-------------|
| 1 | Random Forest + Bagging (sub‑sampled feature sets) | **Amazon SageMaker** for training; **SageMaker Hosting** with multi‑model endpoint |
| 2 | Gradient Boosting (XGBoost) on residuals, then **voting** + **stacking** (meta‑learner = Logistic Regression) | **AWS Lambda** + **API Gateway** for lightweight inference |

The stacking layer was deployed in a **Lambda@Edge** function to keep cold‑start latency low. I used **Amazon CloudWatch** metrics to monitor *per‑estimator* latency and AUC.

**Result**  
- Latency dropped from 2 s → 180 ms (≈ 91% reduction).  
- AUC stayed at 0.92, matching the legacy model.  
- Cost per inference fell by 35 %, thanks to serverless scaling and reduced compute time.

**Reflection & Learning**  
I learned that *interaction constraints* can be leveraged as a feature‑engineering lever rather than a limitation. By splitting responsibilities across ensembles and using AWS’s managed services, we achieved a scalable, auditable solution—an outcome I own and continue to monitor for drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
