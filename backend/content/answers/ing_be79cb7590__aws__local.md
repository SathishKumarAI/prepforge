---
qid: ing_be79cb7590__aws__local
question: 'Explain: Concept drift vs. Target drift — What is concept drift in ML,
  and how to detect and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 441
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:34:09-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my last role building a churn prediction model for a telecom client, we observed the model’s AUC drop from **0.82 to 0.65** over two months – classic *concept drift*: the relationship between features and churn changed as new plans were introduced.  

**Situation & Task**  
I owned the end‑to‑end monitoring pipeline; my goal was to detect drift early, quantify its impact, and restore performance within a week.

**Action**  
1. **Detect** – I deployed an *Amazon SageMaker Model Monitor* job that streamed predictions to Amazon Kinesis Data Firehose, then compared feature‑distribution statistics (KS test) against the training baseline stored in S3.  
2. **Quantify** – Using AWS Glue to aggregate drift scores, I set a threshold of 0.15 KS difference; when crossed, an SNS alert triggered a Lambda that logged the event to CloudWatch and notified my data‑science team.  
3. **Address** – Leveraging *SageMaker Feature Store*, I updated feature engineering pipelines (e.g., recency of usage) and retrained the model on the latest 30‑day window, deploying it via SageMaker Endpoint with a canary rollout on AWS CodePipeline.  

**Result**  
Within **3 days** we restored AUC to **0.81**, and automated drift detection reduced manual review time by **70%**. The solution cost $0.12 per inference, well below the baseline of $0.25.

**Leadership Principles Reflected**  
- *Ownership*: I took full responsibility for monitoring, alerting, and remediation.  
- *Dive Deep & Bias for Action*: I designed a data‑driven pipeline that quickly surfaced drift and automated corrective actions.  

**Bar‑raiser Takeaway** – Demonstrated ownership, deep technical design (SageMaker, Glue, Kinesis), quantifiable impact, and iterative learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
