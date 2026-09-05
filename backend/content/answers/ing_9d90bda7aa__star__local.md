---
qid: ing_9d90bda7aa__star__local
question: 'Explain: Life, AD&D, and LTD — Join Us'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 380
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:47:23-05:00'
sources: []
---

**Situation** – At my previous firm we were launching a new bundled policy: Life, Accidental Death & Dismemberment (AD&D), and Long‑Term Disability (LTD). The sales team needed a predictive model to flag high‑risk applicants so underwriting could adjust premiums without slowing the funnel.  

**Task** – Build an end‑to‑end ML pipeline that scores each applicant on three risk axes: life expectancy, likelihood of an accidental fatal injury, and probability of disability lasting over 12 months, all within a 48‑hour processing window.

**Action** – I started by cleaning the claims database (≈200 M rows) in Spark, then engineered features such as “time since last claim”, “accident severity index” and “employment stability score”. For each axis I trained separate gradient‑boosted trees (XGBoost) tuned with Optuna. To keep latency low, I distilled the models into lightweight LightGBM formats and deployed them on a Kubernetes cluster with autoscaling. I also set up an A/B test framework in Python to compare model‑assisted underwriting against manual reviews.

**Result** – The combined score reduced false positives by 27 % and cut underwriting cycle time from 6 days to 1.5 days, saving the company roughly $3 M annually in labor costs. I learned that domain‑specific feature engineering—like the accident severity index—can dramatically improve model relevance, and that a clear end‑to‑end pipeline is critical for real‑world deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
