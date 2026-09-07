---
qid: ing_7424bf748e__faang__local
question: 'Explain: 100-1,000 employees — Tools for Shipping Code to Production'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 565
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:14:28-05:00'
sources: []
---

**Clarify**  
We need a stack that lets a small team (≈ 100–1 000 devs) ship ML models and data pipelines into production reliably, with minimal friction.  
Key assumptions:  
* Models are built in Python/ML frameworks (TensorFlow, PyTorch).  
* Deployment targets cloud‑native services (K8s, managed MLOps).  
* Teams use CI/CD for code and model artifacts; need versioning, reproducibility, monitoring.

**Approach**  

| Layer | Tool | Rationale |
|-------|------|-----------|
| **Data & Feature Store** | Feast / Lakehouse (Delta Lake) | Centralized, consistent feature access. |
| **Model Training & Experimentation** | MLflow + DVC | Track code, parameters, metrics; version data and models. |
| **Continuous Integration** | GitHub Actions / GitLab CI | Run unit tests, linting, training pipelines on pull‑request. |
| **Containerization** | Docker + BuildKit | Reproducible runtime images. |
| **Deployment** | Kubernetes + ArgoCD or Tekton | Declarative, can roll back; supports canary releases. |
| **Serving** | KFServing / TorchServe / TensorFlow Serving | Scalable inference endpoints with autoscaling. |
| **Monitoring & Logging** | Prometheus/Grafana + ELK stack + Sentry | Track latency, error rates, data drift. |
| **Governance** | Open Policy Agent (OPA) + Kubeflow Pipelines | Enforce access control and compliance. |

**Depth**  
MLflow’s `mlruns` store experiment metadata; DVC links datasets to git commits. ArgoCD watches a Git repo for Helm charts that deploy the Docker image to K8s, automatically rolling out new versions with zero downtime. Serving infra exposes HTTP/GRPC endpoints; Prometheus scrapes latency metrics; Grafana dashboards flag anomalies.

**Edge Cases**  
* Data drift: schedule periodic re‑evaluation pipelines.  
* Model size > 1 GB: use multi‑stage Docker builds and S3 object storage for weights.  
* Non‑Python models: wrap in a microservice container.  

**Optimize & Communicate**  
Start with a minimal viable stack (GitHub Actions + Docker + K8s + MLflow). Iterate by adding Feast for feature reuse, ArgoCD for GitOps, and monitoring once baseline is stable. Communicate progress via sprint demos and dashboards so stakeholders see measurable reliability gains. This modular approach scales from 100 to 1 000 engineers while keeping model ship‑time predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
