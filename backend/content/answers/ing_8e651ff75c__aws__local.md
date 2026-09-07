---
qid: ing_8e651ff75c__aws__local
question: 'Explain: Higher-Level Patterns — Top 10 Kubernetes Design Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 514
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:47:57-05:00'
sources: []
---

**Situation & Task**  
At a startup scaling its ML inference pipeline, I was asked to refactor the Kubernetes deployment so it could serve > 10 k requests/sec while keeping cost < $5k/month.  

**Action** – *Dive Deep + Invent & Simplify*  
I mapped our workloads onto **10 key K8s patterns** that Amazon uses for high‑performance ML services:

| Pattern | Purpose | AWS Service(s) |
|---------|--------|----------------|
| 1️⃣ **StatefulSet with Persistent Volumes** | Durable model storage | EBS, FSx for Lustre |
| 2️⃣ **DaemonSet for GPU nodes** | Dedicated GPU workers | EC2 G4/G5 instances |
| 3️⃣ **Horizontal Pod Autoscaler (HPA)** | Scale by inference latency | CloudWatch metrics |
| 4️⃣ **Cluster Autoscaler** | Auto‑scale node pool | EKS, Spot Instances |
| 5️⃣ **Service Mesh (Istio/Linkerd)** | Traffic routing & observability | App Mesh |
| 6️⃣ **Canary Rollouts** | Zero‑downtime updates | ArgoCD, Kustomize |
| 7️⃣ **Custom Resource Definitions (CRDs)** | ML model lifecycle ops | EKS API server |
| 8️⃣ **Sidecar Pattern** | Logging/metrics collection | Fluentd, Prometheus |
| 9️⃣ **Operator Pattern** | Declarative infra for training jobs | Kubeflow Operator |
| 🔟 **Namespace Quotas & RBAC** | Multi‑tenant isolation | Kubernetes RBAC |

I tuned HPA thresholds to 75 % CPU and 200 ms latency, added Spot Instances via *Cluster Autoscaler*, and replaced on‑prem EBS with FSx for Lustre to cut I/O bottlenecks.  

**Result** – *Deliver Results*  
- **Throughput ↑ 350 %**, latency ↓ 40 %.  
- **Cost ↓ 60 %** (from $13k to $5k/month).  
- Zero incidents in 6‑month monitoring period.  

**Learnings** – Ownership: I drove the end‑to‑end redesign, iterated on metrics, and documented “pattern‑based” Terraform modules for future teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
