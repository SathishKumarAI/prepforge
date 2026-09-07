---
qid: ing_319a94b1c3__aws__local
question: 'Explain: So I''m going to move these two — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 458
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:17:18-05:00'
sources: []
---

**Situation / Task**  
In my last role I was asked to migrate a legacy “Python Full‑Course” training platform (≈ 10 k students, 200 k lines of code) from on‑prem servers to AWS so that we could scale content delivery during peak enrollment periods and personalize lessons with ML.  

**Action**  
* **Ownership + Customer Obsession:** I mapped the learning journey and identified bottlenecks: slow video streaming (30 % latency spikes), stale recommendation engine, and no A/B testing for new modules.  
* **Dive Deep & Design:**  
  * Deployed the front‑end on **Amazon CloudFront** + **S3**, reducing average load time from 4.8 s to 1.2 s (≈ 75 % improvement).  
  * Migrated the Python runtime to **AWS Lambda@Edge** with **API Gateway** for serverless API calls, cutting infra cost by 40 %.  
  * Built a recommendation microservice on **Amazon SageMaker** using a pre‑trained XGBoost model (feature vector: user progress, quiz scores). The model achieved an AUC of 0.86 and boosted completion rate from 62 % to 78 % within two weeks.  
  * Implemented continuous training via **SageMaker Pipelines**, retraining weekly on new data, ensuring drift detection and automated rollback.  
* **Bias for Action & Deliver Results:** I cut deployment time from 2 weeks to 3 days by using IaC (Terraform) and CI/CD with CodePipeline.

**Result**  
- Overall student engagement up 32 %, course completion up 16 %.  
- Infrastructure cost fell 42 % YoY.  
- Learned that early integration of ML into the pipeline requires robust data pipelines; we added a dedicated **Glue** job to clean logs, which eliminated ~15 % false positives in our recommendation engine.

---

> **Bar‑raiser cues:** Ownership (led migration end‑to‑end), depth (architecture details & trade‑offs), quantified impact (metrics), learning from failure (data pipeline adjustments).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
