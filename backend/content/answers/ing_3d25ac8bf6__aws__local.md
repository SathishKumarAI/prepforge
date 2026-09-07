---
qid: ing_3d25ac8bf6__aws__local
question: 'Explain: kubectl drain — DevOps-SRE/2_ContainerOrchestration/Kubernates/Readme.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 422
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:43:55-05:00'
sources: []
---

**Question:** Explain `kubectl drain` and its role in a production Kubernetes rollout.

**Answer (Amazon style)**  

> **Situation:** In our 12‑node EKS cluster we needed zero‑downtime deployment of the new “payment‑processor” microservice.  
> **Task:** Ensure all pods were evicted safely, no data loss, and the nodes could be upgraded to a newer AMI without impacting SLA.  
> **Action:**  
> * Ran `kubectl drain <node> --ignore-daemonsets --delete-local-data` which:  
>   - Gracefully cordoned the node (no new pods).  
>   - Evicted all non‑daemonset workloads by deleting their ReplicaSets/Deployments, letting controller replicas shift to healthy nodes.  
>   - Deleted local data so stateful sets could restart elsewhere.  
> * Configured a **pre‑hook** script that checked pod readiness probes and logged evictions to CloudWatch Logs for auditability.  
> * Used **AWS Fargate** for stateless pods to avoid node‑level eviction overhead, reducing cost by 18% (no over‑provisioned EC2 capacity).  
> **Result:** Node upgrade completed in <4 min with a 99.999% availability metric; customer transactions were processed without interruption. Post‑drain, the cluster maintained 200% spare CPU/Memory for burst traffic, proving scalability and cost‑efficiency.

**Leadership Principles Highlighted**

- *Customer Obsession:* Zero‑downtime ensured uninterrupted user experience.  
- *Ownership:* I wrote custom pre/post hooks, monitored evictions, and validated SLA compliance.  

**Bar‑raiser cues:** Look for ownership of the full lifecycle (cordoning → eviction → validation), deep dive into how eviction affects workloads, quantified impact on uptime/cost, and lessons learned from a failed drain (e.g., missing `--ignore-daemonsets` leading to orphaned DaemonSet pods).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
