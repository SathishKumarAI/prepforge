---
qid: ing_7b089a98d4__faang__local
question: 'Explain: System Design - Tech Stack — Hld System Designs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 657
total_tokens: 892
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:30:20-05:00'
sources: []
---

**Clarify**

The interviewer asks for a high‑level design of the *Tech Stack* layer in an ML system—i.e., how we choose, version, and orchestrate the libraries, frameworks, runtimes, and infra that run model training, serving, and monitoring.

Assumptions to confirm:
- Scale: batch jobs + real‑time inference (10k RPS).
- Team: data scientists + ops.
- Budget: hybrid cloud/on‑prem.
- Constraints: reproducibility, low latency, compliance.

**Approach**

1. **Requirements matrix** – compute, storage, latency, governance, cost.  
2. **Layered stack** – Data → Feature Store → Training → Serving → Observability.  
3. **Tool selection grid** – map each layer to open‑source/managed options (PyTorch, TensorFlow, MLflow, Kubernetes, Istio).  
4. **Versioning & CI/CD pipeline** – Git, DVC, ArgoCD.  
5. **Observability hooks** – Prometheus, Grafana, Sentry.

**Depth**

| Layer | Responsibility | Selected Tech | Rationale |
|-------|----------------|---------------|-----------|
| **Compute** | Training & inference | NVIDIA A100 + GCP‑TPU | GPU/TPU accelerate deep nets; autoscaling via GKE. |
| **Runtime** | Execution environment | Docker + Kubernetes (K8s) | Containerization ensures reproducibility; K8s handles scaling and fault tolerance. |
| **Model Registry** | Versioning & metadata | MLflow Model Registry | Open‑source, integrates with pipelines, supports stage promotion. |
| **Feature Store** | Feature retrieval | Feast (open‑source) | Unified online/offline store, reduces data duplication. |
| **Serving** | Low‑latency inference | TensorFlow Serving + Envoy | Dedicated inference server, service mesh for routing & retries. |
| **Observability** | Metrics & logs | Prometheus/Grafana + Loki | Native K8s integration; dashboards per model. |
| **CI/CD** | Pipeline automation | ArgoCD + GitOps | Declarative deployments, rollback on failure. |

Complexity: O(n) for data ingestion; inference latency ~10 ms due to dedicated GPU pods. Trade‑offs: managed services (Vertex AI) cut ops overhead but lock‑in; open‑source stack gives flexibility at ops cost.

**Edge Cases**

- Model drift → auto retrain trigger via drift metrics.  
- Sudden traffic spike → horizontal pod autoscaler + pre‑warm cache.  
- Data schema change → Feast schema versioning prevents breakage.  
- Security breach → IAM roles, network policies in K8s.

**Optimize & Communicate**

I’d iterate by profiling bottlenecks (CPU vs GPU), then shift to TPU or quantized models. I’d also propose a “canary” rollout for new model versions to catch latency regressions early. In discussion, emphasize that each layer’s choice directly impacts reproducibility, cost, and compliance—key metrics in a FAANG environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
