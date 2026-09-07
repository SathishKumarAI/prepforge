---
qid: ing_315dc25f69__faang__local
question: 'Explain: 10-100 employees — Tools for Shipping Code to Production'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 520
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:39:04-05:00'
sources: []
---

**Clarify**  
You’re asking what tooling a small team (≈ 10–100 people) needs to get ML code reliably into production. Key assumptions:  
1️⃣ Team owns end‑to‑end pipelines (data → model → API).  
2️⃣ Production requires high reliability, observability, and compliance with data‑privacy rules.

**Approach**  
1. **Data & feature management** – versioned datasets + a feature store.  
2. **Model training & experimentation** – reproducible environments, hyper‑search, A/B test harnesses.  
3. **Deployment pipeline** – CI/CD for notebooks/containers with automated tests and canary releases.  
4. **Observability & monitoring** – metrics (latency, drift), alerts, dashboards.  
5. **Governance & security** – access controls, audit logs, encryption.

**Depth**  
- *Feature Store*: e.g., Feast or Tecton; keeps a single source of truth for training and serving features, reducing data‑silo latency.  
- *Experimentation Platform*: MLflow + Optuna or Weights & Biases; track runs, hyperparameters, artifacts in a central repo.  
- *CI/CD*: GitHub Actions/Argo CD with Docker/Kubernetes; automated linting, unit tests, integration tests, and model quality checks (precision‑recall).  
- *Deployment*: Serve via TensorFlow Serving or TorchServe inside K8s; use Istio for traffic routing to enable canaries.  
- *Observability*: Prometheus + Grafana for latency/throughput; Evidently or EFK stack for logs; Drift detection with MLflow’s “model registry” metrics.  
- *Governance*: Role‑based access in Vault, data encryption at rest and transit, GDPR compliance hooks.

**Edge Cases**  
- Rapid schema changes → feature store migration scripts.  
- Model drift post‑deployment → automated retraining triggers.  
- Zero‑downtime upgrades → blue/green or rolling updates.  

**Optimize & Communicate**  
Iteratively add tooling where bottlenecks appear: start with GitHub + Docker, then integrate Feast and MLflow once experiments scale. Keep the pipeline lean—avoid monolithic pipelines; instead, modular services that can be swapped out as team grows. This structured stack balances reliability, speed, and compliance for a 10–100 person ML shop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
