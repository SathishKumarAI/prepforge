---
qid: ing_c38a556ee0__aws__local
question: 'Explain: Example 5: Being Wrong and Walking It Back'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 385
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:45:16-05:00'
sources: []
---

**Situation & Task**  
At a previous startup I led the rollout of an NLP model that promised to cut customer‑support tickets by 30 %. After launch, ticket volume actually rose 12 % in two weeks, and our confidence score dropped from 0.85 to 0.63. I owned the issue and needed to reverse course quickly.

**Action**  
*Customer Obsession & Ownership*: I convened a cross‑functional “blameless post‑mortem” (Engineering, Ops, CX).  
*Dive Deep*: I added CloudWatch metrics for inference latency, confidence thresholds, and error types. Using SageMaker Experiments, we compared the original model with a lightweight fine‑tuned BERT variant.  
*Bias for Action*: Within 48 h I deployed the new model via **SageMaker Endpoint** behind an **API Gateway** with a *canary* route that served 10 % of traffic.  
*Invent & Simplify*: To reduce cost, I switched from GPU‑based inference to **AWS Inferentia** instances and enabled **Model Package Versioning** for rapid rollback.

**Result**  
Within one week the ticket volume fell 18 %, surpassing our original goal. The new model processed requests 40 % faster and lowered inference costs by $3k/month. I documented the lessons in a knowledge‑base article that cut onboarding time for future data scientists by 50 %.  

**Bar‑raiser takeaway** – I showed full ownership, dug into data to identify root causes, quantified the impact of my corrective action, and turned a failure into a scalable improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
