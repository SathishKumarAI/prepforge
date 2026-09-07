---
qid: ing_3608dfa1eb__faang__local
question: 'Explain: Behavioral Patterns — Top 10 Kubernetes Design Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 597
total_tokens: 831
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:49:43-05:00'
sources: []
---

**Clarify**  
You’re asking for the *top ten* design patterns that surface when building machine‑learning workloads on Kubernetes—patterns that solve common operational, scaling, and lifecycle problems.

**Approach**  
I’ll enumerate each pattern, explain its intent, typical use case, and a quick “how to” sketch. I’ll also note complexity trade‑offs so interviewers see my depth.

**Depth**

| # | Pattern | Intent | Typical Use | Quick Implementation |
|---|---------|--------|-------------|----------------------|
| 1 | **Model Serving with Ingress + Autoscaling** | Expose ML models, scale by traffic | REST/GRPC inference | Deploy model pod + Istio ingress; use HPA on CPU/memory |
| 2 | **Job Orchestration (Argo Workflows)** | Batch training pipelines | ETL → train → eval | Define DAG of containers; schedule with cronjob |
| 3 | **GPU Scheduler & Node Affinity** | Allocate GPU resources efficiently | Deep‑learning training | Annotate nodes (`nvidia.com/gpu`); use `nodeAffinity` |
| 4 | **StatefulSet + Persistent Volumes** | Maintain model checkpoints | Checkpointing, replay | Use SSD PVs; enable PVC reclamation policies |
| 5 | **Service Mesh for Observability** | Distributed tracing & metrics | Monitor inference latency | Install OpenTelemetry collector; inject sidecar |
| 6 | **Canary Deployments with Flagger** | Zero‑downtime model updates | A/B testing of new weights | Define `canary` resource, traffic split |
| 7 | **Feature Store Integration (KFServing)** | Centralized feature access | Online inference & batch | Deploy KFServing FeatureStore; query via REST |
| 8 | **Custom Resource Definitions (CRDs) for ML Ops** | Declarative ML lifecycle | Model versioning | Define `MLModel` CRD, controller reconciles |
| 9 | **Batch Prediction with Spark on Kubernetes** | Large‑scale inference | Predict millions of records | Deploy Spark operator; submit job via kubectl |
|10 | **Security Context & RBAC for Data Isolation** | Protect sensitive data | Multi‑tenant ML platform | Apply `securityContext` + fine‑grained RBAC |

**Edge Cases**  
- GPU contention on shared clusters.  
- PVC reclamation after pod deletion.  
- Latency spikes during canary rollout.

**Optimize & Communicate**  
I’d highlight that patterns are composable: e.g., a StatefulSet with GPU scheduler plus Service Mesh gives you scalable, observable training + inference. For interviewers I’d stress trade‑offs (e.g., HPA vs custom metrics) and mention monitoring hooks to validate each pattern’s effectiveness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
