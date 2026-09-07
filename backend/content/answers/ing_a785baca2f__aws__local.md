---
qid: ing_a785baca2f__aws__local
question: 'Explain: Foundational Patterns — Top 10 Kubernetes Design Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 535
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:45:14-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
While migrating a data‑science platform from on‑prem to EKS, I noticed our ML pipelines stalled during model training and inference because of unpredictable pod scheduling and resource contention. The goal was to redesign the Kubernetes layer so that every experiment ran in isolation, scaled automatically, and cost‑controlled.

**Action (Dive Deep + Bias for Action)**  
I mapped the **Top 10 foundational patterns** into a production stack:

| Pattern | AWS Service(s) | Design |
|---------|----------------|--------|
| *Sidecar* | `AWS App Mesh` | Transparent telemetry and retries. |
| *Operator* | Custom CRDs + `Helm` | Declarative model lifecycle. |
| *StatefulSet with PVC* | EBS CSI driver | Persistent feature store. |
| *Horizontal Pod Autoscaler (HPA)* | `k8s HPA`, CloudWatch alarms | Scale per GPU/CPU load. |
| *Resource Quotas & Limit Ranges* | Namespace limits | Prevent runaway jobs. |
| *Service Mesh + Traffic Splitting* | App Mesh, AWS Load Balancer | Canary model rollouts. |
| *Job* | `k8s Jobs` | One‑time training runs. |
| *Ingress with TLS termination* | ALB Ingress Controller | Secure inference endpoints. |
| *ConfigMap & Secret Management* | SSM Parameter Store + KMS | Centralized configs. |
| *Custom Scheduler* | Node Affinity, taints/tolerations | GPU node isolation. |

I added **cost‑allocation tags** and a Lambda that auto‑terminates idle training nodes after 30 min.

**Result (Deliver Results)**  
- Reduced average job turnaround from **12 h to 3 h** (+75 %).  
- Cut infra spend by **$18k/month** through better node utilization.  
- Achieved 99.9 % uptime for inference endpoints; no SLA breaches in 6 months.

**Bar‑raiser insights**  
- Demonstrated *ownership* by owning the entire pipeline redesign.  
- Showed *depth* with concrete pattern mapping and service justification.  
- Quantified impact (time, cost) and reflected on a failed earlier attempt where we used plain Deployments—learned to enforce resource limits early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
