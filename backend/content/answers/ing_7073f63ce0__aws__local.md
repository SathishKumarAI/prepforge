---
qid: ing_7073f63ce0__aws__local
question: 'Explain: Kubernetes Service Types — Top 4 Kubernetes Service Types'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 438
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:39:30-05:00'
sources: []
---

**Situation & Task**  
I led a migration of our recommendation engine from on‑prem VMs to an Amazon EKS cluster. The team needed to expose the inference pods in four different ways (internal API, external REST, load‑balanced batch jobs, and cross‑cluster federation) while keeping latency < 50 ms and cost under $10K/month.

**Action**  
I mapped each requirement to a Kubernetes Service type:

| Service Type | Use case | AWS services used |
|--------------|----------|-------------------|
| **ClusterIP** | Internal microservice calls (recommendation ↔‑catalog) | EKS + VPC CNI |
| **NodePort** | Simple port forwarding for legacy batch workers | EKS, EC2 instances |
| **LoadBalancer** | Public REST API with auto‑scaling | ELB/ALB, IAM roles, S3 logs |
| **ExternalName** | Federation to a partner’s internal DNS (no proxy) | Route 53 alias + VPC peering |

I implemented health checks, autoscaling policies, and an ALB Ingress Controller. I also added CloudWatch metrics to track request latency and error rates.

**Result**  
Post‑migration, external API latency dropped from 120 ms to **42 ms**, throughput increased by 3×, and we reduced infra spend by **$1.8K/month** versus the legacy setup. The design also gave us a clear audit trail in CloudTrail for compliance.

---

### Leadership Principles  
- **Customer Obsession** – delivered a faster, cheaper service that met SLA expectations.  
- **Dive Deep & Ownership** – chose the right Service type per use case, tuned autoscaling, and monitored with CloudWatch.  

The bar‑raiser will note my end‑to‑end ownership, data‑driven impact, and the trade‑off decisions (e.g., using ExternalName to avoid unnecessary load balancers).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
