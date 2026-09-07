---
qid: ing_5f75475ac8__aws__local
question: You have 48 hours before a demo to a Fortune 500 executive team, using their
  data. What do you build and what do you deliberately cut?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 444
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:01:59-05:00'
sources: []
---

**Situation & Task (S)**  
I had a Fortune 500 executive deck in my hands and only 48 hours to deliver an AI demo that would impress them on data usage, speed, and ROI. The goal: show a working prototype that could be shipped to production with minimal re‑work.

**Action (A) – Build & Cut**  
*What I built:*  
- A **serverless inference pipeline** using Amazon SageMaker for model training, Lambda for orchestration, and API Gateway for the front‑end.  
- The model was a lightweight XGBoost regressor (≈ 30 M parameters) that predicts customer churn from their transactional logs.  
- I pulled raw data via Glue ETL into an S3 landing zone, then transformed it on Athena, storing the feature set in Redshift Spectrum for fast querying.

*What I cut:*  
- Dropped a complex deep‑learning architecture (CNN) because its 48 h training time would have stalled delivery.  
- Removed real‑time streaming from Kinesis; batch inference at 1‑hour intervals was sufficient to demonstrate ROI.  
- Skipped hyper‑parameter sweeps beyond a single grid search—speed > completeness in this sprint.

**Result (R)**  
The demo ran in < 5 min, achieved **87 % accuracy**, and projected a $2M lift in retention for the next fiscal year—data the executives could act on immediately. The architecture scales to 10× traffic with no redesign, costs <$0.02 per inference, and is fully managed.

**Leadership Principles & Bar‑raiser cues**  
- **Customer Obsession**: focused on metrics that matter to revenue.  
- **Ownership**: made trade‑offs openly, documented decisions for the team.  
- **Dive Deep**: quantified performance, cost, latency.  
- **Bias for Action**: delivered a production‑ready prototype in 48 h.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
