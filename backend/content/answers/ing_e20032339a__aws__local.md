---
qid: ing_e20032339a__aws__local
question: 'Explain: Recurring concept drift — What is concept drift in ML, and how
  to detect and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 393
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:50:27-05:00'
sources: []
---

**Answer (Amazon style)**  

*Leadership Principles:* **Ownership**, **Dive Deep**.  

**Situation / Task** – In a fraud‑detection model for an e‑commerce platform, the team noticed performance drop after the holiday season: precision fell from 94 % to 78 %.  
**Action** – I took ownership and built a *concept‑drift monitoring pipeline* in AWS.  
1. **Data collection:** Stream live transaction features into Kinesis Data Streams.  
2. **Feature drift detection:** Every hour, run a statistical test (Kolmogorov–Smirnov) on the distribution of each feature against its baseline stored in DynamoDB; flag > 0.05 KS statistic as drift.  
3. **Model drift detection:** Use an online AUC‑PR estimator via Amazon SageMaker Model Monitor, comparing real‑time predictions to ground truth from the fraud review queue.  
4. **Remediation loop:** When both feature and model drift exceed thresholds, trigger a Lambda that pulls the last 30 days of labeled data, retrains the XGBoost model in SageMaker, and deploys via SageMaker Endpoint with blue/green routing.  

**Result** – Within 48 h post‑deployment, precision rebounded to 93 % and recall to 91 %. The pipeline cost <$5/month, and we reduced manual label effort by 60 %.  
**Learnings** – Early drift alerts prevented a 20 % revenue loss; continuous monitoring became part of the model lifecycle.  

This showcases *ownership* (owning the whole loop), *dive deep* (statistical tests & AUC‑PR), and quantifiable impact—exact metrics, cost, and ROI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
