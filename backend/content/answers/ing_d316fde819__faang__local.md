---
qid: ing_d316fde819__faang__local
question: 'Explain: Service Management — Must Know System Design Building Blocks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 574
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:51:15-05:00'
sources: []
---

## Clarify  
You’re asking for the core building blocks a machine‑learning service should expose when it’s deployed at scale (e.g., in a cloud platform).  
Assumptions to confirm:  
1. **Model lifecycle** – training → packaging → serving.  
2. **Scale targets** – high request rates, low latency, multi‑tenant.  
3. **Observability & governance** – metrics, logging, versioning, A/B testing.

## Approach  
Outline a layered architecture:  
- **Ingestion / Feature Store** (real‑time vs batch).  
- **Model Registry & Packaging** (Docker/MLflow).  
- **Serving Layer** (REST/GRPC + model server like TensorFlow Serving or TorchServe).  
- **Orchestration & Scaling** (K8s + autoscaling, canary pipelines).  
- **Observability & Governance** (Prometheus metrics, OpenTelemetry tracing, RBAC).

## Depth  
| Component | Key Responsibilities | Typical Tech |
|-----------|----------------------|--------------|
| Feature Store | Persist and serve engineered features; version control | Feast, Tecton |
| Model Registry | Metadata, lineage, promotion workflow | MLflow, DVC |
| Serving Layer | Load‑balanced inference, batching, latency guarantees | TensorFlow Serving, Triton, TorchServe |
| Orchestrator | Deploy new versions, rollbacks, traffic splitting | K8s + ArgoCD/Flux |
| Observability | Latency, error rates, feature drift alerts | Prometheus, Grafana, OpenTelemetry |

Complexity:  
- **Latency** O(1) for inference if batching is disabled; otherwise amortized.  
- **Scalability** achieved via horizontal pod autoscaling + cache (Redis).  
- **Fault tolerance** through health checks and graceful degradation.

## Edge Cases  
- **Cold start** on new model → pre‑warm containers.  
- **Feature drift** → monitor feature distributions, trigger retraining.  
- **Version conflicts** in multi‑tenant deployments → enforce strict isolation via namespaces or sidecars.

## Optimize & Communicate  
1. **Reduce cold starts** with serverless containers (Knative).  
2. **Improve observability** by embedding OpenTelemetry tracing into the model code itself.  
3. **Explain trade‑offs**: e.g., batching reduces CPU usage but adds latency; choose based on SLA.

By presenting this structured view—clarify, plan, detail, test, and iterate—you demonstrate the signal interviewers look for: clear communication, deep technical insight, and a pragmatic approach to building production ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
