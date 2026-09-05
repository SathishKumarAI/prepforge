---
qid: ing_61e66fcb7f__star__local
question: 'Explain: MLOps Questions (2025-2026) — Ml Interview Prep'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 328
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:43:58-05:00'
sources: []
---

**Situation** – When I joined the fintech startup last year, our credit‑risk model was hitting a 12% error rate after deployment, and every new data batch required a manual retrain pipeline that took two hours to finish.  

**Task** – I had to build an automated MLOps workflow that reduced retraining time to under five minutes, kept the model’s accuracy above 95%, and gave us real‑time monitoring for drift.

**Action** – First, I containerized the training code with Docker and set up a CI/CD pipeline in GitHub Actions. Using Kubeflow Pipelines, I defined reproducible steps: data extraction from Kafka, preprocessing in Pandas, model training in Scikit‑Learn, and evaluation against a validation split. I added a Canary deployment strategy on Kubernetes so that only 10% of traffic hit the new model until metrics confirmed stability. For drift detection, I implemented an Evidently AI dashboard that sends alerts when feature distributions shift beyond a threshold. Finally, I automated rollback scripts in case the new model’s F1 score dropped below 0.92.

**Result** – Retraining time fell from two hours to under five minutes, and the live error rate dropped to 3%. The deployment pipeline now runs on every nightly data refresh without manual intervention. I learned that investing early in CI/CD + Kubernetes for ML not only speeds iteration but also builds confidence in model reliability at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
