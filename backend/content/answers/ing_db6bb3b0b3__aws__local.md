---
qid: ing_db6bb3b0b3__aws__local
question: 'Explain: Showcase Knowledge Even if Interviewer Didn’t Ask For It'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 413
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:33:58-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
When I joined a fintech startup, the product team asked me to improve fraud detection accuracy for their credit‑card platform. They had only a small set of labeled transactions and wanted a quick pilot without disrupting production.

**Action (Dive Deep + Bias for Action)**  
I first performed an exploratory data analysis in **AWS Glue** to clean ~3 M raw logs, then built a feature store in **Amazon SageMaker Feature Store** so every model could consume consistent, up‑to‑date features. For the ML pipeline I used **SageMaker Pipelines**, orchestrating data ingestion (Glue), training (XGBoost on an m5.xlarge instance), and hyper‑parameter tuning (automatic) – all fully reproducible via CI/CD in **CodePipeline**.

To ensure low latency, I deployed the best model with **SageMaker Endpoints** behind a **Lambda@Edge** cache that routes 95 % of predictions to an edge endpoint (≤20 ms). The remaining 5 % hit the primary endpoint for model drift checks. I also set up **CloudWatch Alarms** and an automated retraining schedule triggered by concept‑drift metrics.

**Result (Deliver Results + Invent & Simplify)**  
Within two weeks of launch, fraud detection accuracy rose from **82 % to 94 %**, reducing false positives by **40 %** and saving the company ~$1.2 M annually in chargeback fees. The end‑to‑end pipeline cost < $200/month, and I reduced model latency by 70 % compared to the legacy batch system.

**Bar‑raiser Takeaway**  
I owned every layer—from data ingestion to edge inference—dove deep into AWS services for a scalable, cost‑effective solution, and quantified impact in clear business metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
