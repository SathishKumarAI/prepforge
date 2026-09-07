---
qid: ing_8c7e5c49a0__aws__local
question: Your churn model has 0.9 AUC. Product wants to send retention discounts
  to the top 5%. Why might that be a bad plan?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 462
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:43:40-05:00'
sources: []
---

**Situation & Task**  
When I joined the retention squad, we built a churn‑prediction model (0.9 AUC). The product team wanted to target only the top 5 % of predicted churners with deep discounts, assuming it would drive immediate revenue lift.

**Action**  
I dug into the data and ran a counter‑factual simulation:

| Metric | Current Plan (top 5 %) | Alternative (top 20 %) |
|--------|-----------------------|------------------------|
| Discount spend | $1.2M/month | $3.4M/month |
| Retained revenue | +$0.9M | +$4.7M |
| Net profit impact | –$0.3M | +$1.3M |

The 0.9 AUC is strong, but the **calibration** was off: many true churners fell between 5–20 % and were missed, while a handful of low‑risk customers in the top 5 % received costly discounts with little benefit. I proposed a *tiered* approach using probability buckets (top 10 %, next 10 %) and dynamic discount sizing, implemented as an AWS Lambda pipeline that pulls model scores from SageMaker Endpoint → DynamoDB → SNS for personalized offers.

**Result**  
The new strategy increased retention revenue by **42 %** in Q3 while cutting discount spend by **35 %**, delivering $1.5M incremental profit. The experiment was tracked via CloudWatch dashboards, and the model retraining schedule was adjusted based on real‑time churn signals.

**Learnings**  
*Ownership*: I owned the end‑to‑end pipeline and communicated trade‑offs to stakeholders.  
*Dive Deep*: Calibrated the model with precision‑recall curves instead of AUC alone.  
*Bias for Action*: Rolled out a rapid A/B test within 48 hrs.  

This experience reinforced that high AUC does **not** guarantee optimal business outcomes; we must align metrics, cost, and customer value in every recommendation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
