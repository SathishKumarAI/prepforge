---
qid: ing_2aa2fbb1e7__faang__local
question: 'Explain: What you''re actually expected to know — Devops Platform Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 526
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:22:23-05:00'
sources: []
---

**Clarify**  
The interview asks for the skill set a *DevOps Platform Engineer* should possess when working with AI workloads (LLMs, inference pipelines, data‑engineering). I’ll assume the role sits at the intersection of cloud infra, CI/CD, and ML Ops—responsible for building reusable platforms that scale model training and serving.

**Approach**  
1. List core domains: cloud & networking, container orchestration, observability, security, automation, and AI‑specific tooling (GPU scheduling, data pipelines).  
2. Map each domain to concrete responsibilities.  
3. Highlight the AI nuance—model lifecycle, experiment tracking, versioned datasets, inference latency, cost‑control.

**Depth**  
- **Cloud & Networking:** Multi‑cloud or hybrid infra; VPCs, IAM, service meshes (Istio/Linkerd).  
- **Container Orchestration:** Kubernetes + GPU nodes, pod autoscaling, taints/tolerations for GPU affinity.  
- **CI/CD & GitOps:** ArgoCD/GitHub Actions pipelines that trigger model training jobs, push artifacts to artifact repos (Nexus/Harbor), and deploy to canary environments.  
- **Observability:** Prometheus + Grafana for resource usage; Jaeger for request tracing across inference services; ML‑specific metrics (throughput, latency, batch size).  
- **Security & Compliance:** Secrets management (Vault/K8s secrets), image scanning, data encryption at rest and in transit, GDPR/CCPA handling.  
- **AI Tooling:** Integration with ML frameworks (PyTorch/TensorFlow) via Docker images; use of model registries (MLflow, Weights & Biases); dataset versioning (Delta Lake).  
- **Cost Management:** Spot instance usage, autoscaling thresholds, cost dashboards; tagging for chargeback.

**Edge Cases**  
- Sudden GPU shortages → fallback to CPU inference.  
- Model drift → automated retraining triggers.  
- Multi‑tenant data isolation → namespace/quota enforcement.

**Optimize & Communicate**  
I’d suggest building a reusable “AI Platform Stack” (infrastructure as code + CI/CD templates) that can be forked per team, reducing onboarding time. During the interview I’ll narrate how each component plugs into the ML workflow, justify trade‑offs (e.g., Kubernetes vs serverless for inference), and demonstrate awareness of cost/latency/security balances—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
