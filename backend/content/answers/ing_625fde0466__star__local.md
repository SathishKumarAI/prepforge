---
qid: ing_625fde0466__star__local
question: 'Explain: DevOps versus MLOps — MLOps: Continuous delivery and automation
  pipelines in machine learning \u00a0|\u00a0 Cloud Architecture Center \u00a0|\u00a0
  Google Cloud Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 273
output_tokens: 315
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:44:49-05:00'
sources: []
---

**Situation:**  
In my last role I was leading a fraud‑detection model that needed to be deployed across our payment platform. The existing pipeline was manual: data scientists trained locally, exported the model, and engineers manually pushed it into production on a Kubernetes cluster. Every change required a week of coordination and risked downtime.

**Task:**  
I had to shift from a classic DevOps mindset—focused on application deployment—to an MLOps approach that automates training, testing, and delivery of machine‑learning artifacts while maintaining model governance and reproducibility.

**Action:**  
First, I introduced CI/CD with GitHub Actions, adding unit tests for data preprocessing and integration tests against a staging dataset. Then I containerized the training job using Docker and orchestrated it in Kubeflow Pipelines, which managed hyperparameter sweeps on GCP’s AI Platform Training. For model versioning I used MLflow to log metrics (AUC, precision) and artifacts (pickle files). Finally, I set up a promotion gate that required a 0.5% lift in AUC before the model could be automatically rolled out to production via ArgoCD.

**Result:**  
Deployment time dropped from seven days to two hours per iteration, allowing us to push updates twice a week and reduce fraud losses by 12%. I learned that MLOps is not just tooling but embedding data‑centric quality gates into every step of the CI/CD cycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
