---
qid: ing_b000ab78f2__aws__local
question: 'Explain: Red flags interviewers watch for — Evaluation And Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 409
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:03:21-05:00'
sources: []
---

**Situation / Task**  
During my last role building a real‑time recommendation engine for an e‑commerce platform, the hiring manager asked me to explain the *red flags* interviewers look for when evaluating **evaluation and observability** in AI systems.

**Action (Amazon style)**  
I framed my answer around two Leadership Principles: **Customer Obsession** and **Dive Deep**.  

1. **Missing Ground‑Truth & Drift Signals** – Interviewers flag any model that is evaluated only on a static test set. I explained how we added *continuous labeling pipelines* (AWS SageMaker Ground Truth) to capture drift, feeding the data into an Athena query that auto‑alerts when AUC drops below 0.78.  
2. **No Observability of Inference Latency** – I described deploying Lambda behind API Gateway with CloudWatch metrics and a DynamoDB table for request/response traces. When latency spiked above 200 ms, the PagerDuty alert triggered a rollback to the previous model version in S3.  
3. **Lack of Explainability** – Interviewers dislike black‑box claims. I showed how we integrated SHAP visualizations into an AWS QuickSight dashboard, giving product managers instant insight into feature importance.

**Result**  
By instituting these checks, we reduced production errors by **35 %** and cut mean time to recovery from 18 h to **2 h**, directly improving the customer experience score (CSAT +0.12).

**Bar‑raiser cues I’d listen for** – evidence of ownership (owning the entire pipeline), depth (specific AWS services and metrics), quantified impact, and lessons learned from a prior drift incident that initially caused a 12 % revenue dip.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
