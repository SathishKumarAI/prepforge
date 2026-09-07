---
qid: ing_cf7d99ee92__aws__local
question: 'Explain: The Eight-Hour Onsite Project — Cursor Software Engineer Interview:
  Process, Questions, and Prep Guide (2026) | Interview Coder'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 534
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:09:57-05:00'
sources: []
---

**Answer (Amazon‑style)**  

**Situation / Task** – I was preparing a *Cursor* software‑engineer interview in 2026 where the core of the onsite assessment is an **eight‑hour project**: candidates must design, prototype, and demo a small ML‑driven feature (e.g., a recommendation engine) from scratch. The goal is to evaluate *Ownership*, *Customer Obsession*, and *Dive Deep*.

**Action** –  
1. **Scope & Specs** – I started by clarifying the problem statement: “Predict user click probability for 10 k items in real time, with ≤5 ms latency.”  
2. **Data Pipeline Design** – Chose **Amazon S3** + **AWS Glue** for ETL, **Amazon SageMaker** for training (using XGBoost), and **AWS Lambda** + **API Gateway** for inference.  
3. **Model & Feature Engineering** – Built a feature set of 30 sparse/user‑item interactions; used **FeatureStore** to cache embeddings, cutting inference cost by 40 %.  
4. **Scalability/Availability** – Deployed the endpoint behind an **Application Load Balancer** with *Auto Scaling* on **AWS Fargate*, ensuring 99.9 % availability and zero single‑point failure.  
5. **Cost & Trade‑offs** – Compared SageMaker vs. EC2; chose SageMaker for lower TCO ($0.12 / h vs $0.20 / h) while keeping model accuracy within 1.5 % of baseline.  

**Result** – The prototype achieved a **AUC of 0.87**, met the latency SLA, and cost <$200 /month for production. I documented assumptions, trade‑offs, and a rollback plan—demonstrating *Bias for Action* and *Deliver Results*.  

**Bar‑raiser cues** – Looked for:  
- Clear ownership of every component (data, model, infra).  
- Deep dive into AWS service selection with cost/latency trade‑offs.  
- Quantified impact (AUC, latency, cost).  
- Reflection on a failed prototype iteration and how it informed the final design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
