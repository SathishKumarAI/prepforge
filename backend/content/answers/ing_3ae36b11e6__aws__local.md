---
qid: ing_3ae36b11e6__aws__local
question: Your resume says ML Engineer and this role is titled AI Engineer. How do
  you see the difference, and where do you fit?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 405
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:39:37-05:00'
sources: []
---

**Answer (≈190 words)**  

When I read the job title “AI Engineer,” I immediately mapped it to *Customer Obsession* and *Invent & Simplify*. In my past role as an ML Engineer at **Acme Corp**, I built recommendation pipelines that increased user engagement by 27 % YoY. The AI role, however, is broader—encompassing end‑to‑end model lifecycle, real‑time inference, and cross‑domain data fusion.

**Situation/Task:** We needed a live churn prediction service for millions of customers, with < 200 ms latency.  
**Action:** I designed an **AWS SageMaker Pipelines + Lambda + API Gateway** stack: data ingestion via Kinesis → preprocessing in Glue → model training on SageMaker (using AutoML), deployment to SageMaker Hosting Services, and a Lambda layer that routes requests to the endpoint.  
**Result:** Latency dropped from 1.2 s to 180 ms, cost fell by 35 % through spot instances, and churn prediction accuracy improved from 78 % to 85 %.  

I bring *Ownership* by handling every layer—from data prep to monitoring—and *Dive Deep* through continuous A/B tests that reveal feature importance shifts. My experience aligns with the AI Engineer’s focus on scalable inference at AWS scale, and I’m excited to extend this to multimodal models (vision + NLP) using **SageMaker Neo** for edge deployment.  

Bar‑raisers will note my end‑to‑end ownership, quantifiable impact, deep technical trade‑offs, and lessons learned when a model drifted 12 % after a data source change—prompting automated retraining pipelines that eliminated manual intervention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
