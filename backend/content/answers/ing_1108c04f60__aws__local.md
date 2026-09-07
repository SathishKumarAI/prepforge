---
qid: ing_1108c04f60__aws__local
question: 'Explain: How to detect concept drift — What is concept drift in ML, and
  how to detect and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 539
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:04:08-05:00'
sources: []
---

**Situation / Task**  
At my previous company we built a churn‑prediction model for a SaaS product that served 2 M users. Six months after launch the precision dropped from **0.82 to 0.57**, which meant we were flagging many non‑churners and missing true churners—classic *concept drift*. I owned the remediation effort.

**Action**  
1. **Define drift** – The relationship between input features (usage, support tickets) and target (actual churn) changed because our pricing tiers evolved.  
2. **Detection pipeline**  
   - Set up a daily batch job in **AWS Glue** that pulls model predictions and true labels from Redshift into an S3 bucket.  
   - Use **Amazon SageMaker Feature Store** to store feature distributions over time.  
   - Run the *Population Stability Index (PSI)* on key features and the *Kolmogorov–Smirnov* test on target distribution. A PSI > 0.25 or KS p‑value < 0.01 triggers an alert in **Amazon CloudWatch**.  
3. **Root‑cause analysis** – Query Feature Store with Athena, plot feature drift trends; we saw a spike in “new plan adoption” after the 2024 pricing change.  
4. **Remediation** – Retrain the model weekly on a sliding window of the last 90 days using SageMaker Pipelines, and add an *online* feature for “plan tier” to capture the new signal.  
5. **Monitoring & rollback** – Deploy via **SageMaker Endpoint** with A/B testing; if precision falls below 0.75 we automatically roll back to the previous model.

**Result**  
- Precision recovered to **0.81 within two weeks** and stayed above 0.80 for 12 months.  
- Cost increased by only **3 %** (extra training hours) while latency remained < 50 ms per inference.  
- The drift‑detection alerting reduced manual investigation time from 2 days to 4 hours.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Ensured predictions stayed accurate for users, preventing unnecessary churn warnings.  
- **Ownership / Dive Deep** – Built a self‑service pipeline that automatically surfaced drift and guided corrective action.  

Bar‑raisers will note my end‑to‑end ownership, the data‑driven metrics (PSI, precision), and the lesson: always instrument models for drift rather than react after performance degrades.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
