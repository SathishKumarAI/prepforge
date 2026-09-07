---
qid: ing_e1b274d11f__aws__local
question: Tell me about a time an AI feature failed in production. What happened and
  what did you change?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 395
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:49:49-05:00'
sources: []
---

**Situation / Task**  
While leading the AI‑driven recommendation engine for a large e‑commerce platform, our model started returning irrelevant items during peak shopping hours (Q4). The click‑through rate (CTR) dropped from 12 % to 3 %, and revenue per visitor fell by **18 %** in two days.

**Action**  
- *Ownership & Dive Deep*: I assembled a cross‑functional squad, logged all inference traffic with CloudWatch Logs, and replayed the failing requests on SageMaker locally.  
- *Root Cause*: The model had drifted because the training dataset hadn’t been updated for 6 months; new product categories were under‑represented.  
- *Solution*: Implemented an automated data pipeline (Glue + Lake Formation) to ingest fresh click logs every 12 h, retrain on SageMaker with a **continuous‑learning** workflow, and deploy via SageMaker Pipelines. Added a Canary deployment in API Gateway + Lambda to surface only the top 5 % of predictions for live traffic.  
- *Bias for Action*: Rolled out the new model within 48 h and set up CloudWatch Alarms to trigger an immediate rollback if CTR fell below 10 %.

**Result**  
CTR rebounded to **11.7 %** (99 % of baseline) within 24 h, restoring $1.2 M in lost revenue over the holiday period. The new pipeline cuts retraining time from 4 hrs to 30 min and reduces storage costs by 35 %.  

*What a bar‑raiser hears*: clear ownership, deep technical diagnosis, data‑driven impact, rapid corrective action, and continuous learning loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
