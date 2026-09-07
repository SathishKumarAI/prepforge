---
qid: ing_3048859c1b__faang__local
question: 'Explain: 🛠️ DevOps / Platform Engineer → MLOps / AI Infrastructure Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 448
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:36:39-05:00'
sources: []
---

**Clarify**  
You’re asking how a *DevOps/Platform Engineer* evolves into an *MLOps/AI‑Infrastructure Engineer*.  
Assumptions: the candidate already builds CI/CD pipelines and manages cloud infra; we want to know what new responsibilities, skills, and mindset are required for ML workloads.  

**Approach**  
1. Map current DevOps duties (automation, monitoring, scaling).  
2. Identify ML‑specific needs (data pipelines, model training, inference serving).  
3. Show how the engineer extends tooling, governance, and observability to cover these new layers.  

**Depth**  
- **Data pipeline orchestration**: replace generic ETL with feature stores, versioned datasets, and data quality checks.  
- **Model lifecycle management**: implement reproducible training pipelines (e.g., MLflow), automated hyper‑parameter search, model registry, and A/B testing of serving endpoints.  
- **Inference infrastructure**: design GPU/TPU clusters, autoscaling inference services (KServe, TorchServe), low‑latency deployment with canary releases.  
- **Observability & governance**: add drift detection, performance monitoring, explainability dashboards, and compliance controls (GDPR, HIPAA).  
- **Toolchain expansion**: Kubernetes → Kubeflow / Airflow; CI/CD → GitOps + ArgoCD for model artifacts; monitoring → Prometheus + Grafana + OpenTelemetry with custom ML metrics.  

**Edge Cases**  
- Non‑deterministic training (random seeds, data shuffling).  
- Multi‑tenant inference with strict SLAs.  
- Data privacy constraints that block sharing raw data across clusters.  

**Optimize & Communicate**  
Explain trade‑offs: heavier GPU usage vs cost; batch vs real‑time inference; centralized vs federated learning. Narrate how you’d iterate: start with a minimal reproducible pipeline, add observability, then scale out. This demonstrates structured thinking, depth in ML tooling, and clear communication—key signals for FAANG MLOps roles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
