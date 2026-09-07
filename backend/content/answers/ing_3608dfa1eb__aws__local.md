---
qid: ing_3608dfa1eb__aws__local
question: 'Explain: Behavioral Patterns — Top 10 Kubernetes Design Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 445
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:26:52-05:00'
sources: []
---

**Behavioral (STAR)**  
*Situation:* While leading a multi‑region SaaS platform, we needed to run ML workloads on Kubernetes without compromising SLAs.  
*Task:* Deliver a repeatable, cost‑efficient deployment strategy that scales with model traffic.  
*Action:* I applied the top 10 Kubernetes design patterns—**StatefulSets for data persistence**, **DaemonSets for node‑level monitoring**, **Jobs & CronJobs for batch inference**, **ReplicaSets + Horizontal Pod Autoscaler** for load balancing, **PodDisruptionBudgets** for high availability, **ConfigMaps/Secrets** for secure configuration, **Custom Resource Definitions (CRDs)** to model ML pipelines, **NetworkPolicies** for isolation, **Resource Quotas & Limits** for cost control, and **Service Mesh (AWS AppMesh)** for observability.  
*Result:* Deployment time dropped from 4 days to 3 hours; model latency improved by 35%; infra cost fell 22% YoY while maintaining a 99.95 % uptime.

**Technical Design**  
1️⃣ *StatefulSets + EBS*: Guarantees data persistence with IOPS‑optimized volumes (scales to 100 TB).  
2️⃣ *Horizontal Pod Autoscaler* + **Cluster Autoscaler**: Auto‑spins up GPU nodes, keeping cost per inference < $0.02.  
3️⃣ *CronJobs* for nightly retraining; uses S3 as artifact store.  
4️⃣ *CRDs* (MLJob) wrap TensorFlow training logic; validated via OpenAPI specs.  
5️⃣ *Service Mesh* provides distributed tracing (X‑Ray), enabling 99.9 % request success.  

**Bar‑raiser focus** – ownership of end‑to‑end ML lifecycle, deep dive into resource metrics, quantified cost & latency savings, and lessons from a failed autoscaler misconfiguration that taught us to enforce stricter validation on CRDs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
