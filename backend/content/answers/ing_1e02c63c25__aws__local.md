---
qid: ing_1e02c63c25__aws__local
question: 'Explain: Right now it''s more like 70 or — Building Software Systems At
  Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 424
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:34:34-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous role I led a team that built a recommendation engine for a SaaS platform with 1 M daily active users. The existing model served 70 % of the traffic correctly, but we needed to lift that to >95 % while keeping inference latency <30 ms.

**Action (A)**  
I re‑architected the pipeline using **Amazon SageMaker** for training and **AWS Lambda + API Gateway** for low‑latency serving. To reduce data drift I added a daily “data‑quality” job on **AWS Glue** that surfaced outliers to our monitoring stack (**CloudWatch, Athena, QuickSight**). For cost control we switched from on‑prem GPU nodes to **SageMaker Managed Spot Training**, cutting compute spend by 40 %. I also implemented an A/B testing framework in **Amazon SageMaker Experiments** so every new model version could be rolled out to 5 % of traffic before full deployment.

**Result (R)**  
Within three months we achieved a **97 % recommendation accuracy** and cut inference latency from 60 ms to 22 ms. The cost savings translated into an annual budget reduction of $300K, while the improved user engagement lifted monthly revenue by **12 %**.

---

### Leadership Principles Highlighted
- **Ownership** – Took end‑to‑end responsibility for the recommendation stack and its business impact.  
- **Dive Deep & Deliver Results** – Analyzed every metric (latency, accuracy, cost) to inform design choices and validate outcomes.

### What a Bar‑Raiser Sees
- Concrete ownership of metrics and learning from failed experiments (e.g., initial spot‑training misconfig).  
- Depth in AWS service selection and trade‑offs (cost vs. latency).  
- Quantified business impact tied directly to user engagement and revenue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
