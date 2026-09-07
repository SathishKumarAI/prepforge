---
qid: ing_37d862411a__aws__local
question: 'Explain: Concept drift vs. Model drift — What is concept drift in ML, and
  how to detect and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 366
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:30:51-05:00'
sources: []
---

**Situation & Task**  
I led the fraud‑detection pipeline for a fintech app that processed ~2 M transactions/day. After six months, we saw a sharp drop in precision from **92 % to 78 %**, hurting customer trust and inflating false positives.

**Action – Detecting Concept Drift**  
1. **Feature drift monitoring**: I set up CloudWatch metrics on key input distributions (e.g., transaction amount, geolocation) using *AWS Lambda* to compute KS‑statistics nightly.  
2. **Model performance alerts**: Using *Amazon SageMaker Model Monitor*, we automatically compared current predictions against a rolling ground‑truth window and flagged when the F1‑score fell below 0.85.  
3. **Root‑cause analysis**: A custom Lambda invoked *AWS Glue* jobs to cluster anomalous samples, revealing a new merchant segment with higher fraud rates.

**Result**  
Within two weeks we retrained the model on the updated data set and deployed it via *SageMaker Endpoint*, restoring precision to 91 % and reducing false positives by **35 %**, saving ~$120k/month in manual review costs.  

**Leadership Principles Highlighted**  
- **Customer Obsession**: Actively protecting users from unnecessary friction.  
- **Dive Deep & Ownership**: Building end‑to‑end monitoring, taking full responsibility for the model lifecycle.  

**Bar‑raiser takeaways**  
- Demonstrated ownership by automating detection and remediation.  
- Quantified impact (precision improvement, cost savings).  
- Showed learning: adopted continuous monitoring to preempt future drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
