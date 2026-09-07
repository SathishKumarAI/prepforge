---
qid: ing_687093cae5__aws__local
question: 'Explain: Replica Set — DevOps-SRE/2_ContainerOrchestration/Kubernates/Readme.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 469
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:20:24-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked with migrating a monolithic ML inference service to Kubernetes so that it could scale during traffic spikes and recover quickly from pod failures. The core requirement was *zero‑downtime* rollouts while keeping the request latency below 50 ms.

**Action**  
I introduced **ReplicaSets** as the foundational unit of control:

1. **Define a stable spec** – `spec.template` contains the container image, resource limits, and health probes.
2. **Set desired replicas** – start with 3 pods for baseline throughput; use Horizontal Pod Autoscaler (HPA) to scale up to 30 during peak traffic.
3. **Rolling updates** – enable `rollingUpdate` strategy with `maxUnavailable: 1` and `maxSurge: 1` so new pods replace old ones one at a time, preserving capacity.
4. **Self‑healing** – Kubernetes monitors liveness/readiness probes; any pod that fails is automatically terminated and replaced by the ReplicaSet controller.

I leveraged AWS EKS for managed control plane, Amazon ECR for image storage, and CloudWatch for metrics collection (CPU %, request latency). The deployment cost dropped 18 % by shifting from on‑demand to spot instances with a simple `nodeSelector` tag.  

**Result**  
Post‑migration we saw **99.9 % availability**, a **35 % reduction in average inference latency**, and a **40 % decrease in operational overhead** (no manual pod restarts). The team adopted this pattern for all new microservices, standardizing the “self‑healing” approach across the org.

> *Leadership Principles:*  
> - **Customer Obsession**: Delivered faster predictions to end users.  
> - **Ownership & Dive Deep**: Built a robust, observable pipeline that reduced MTTR from 12 h to <30 min.  

*Bar‑raiser focus*: clear ownership of the migration, deep dive into Kubernetes mechanics, quantifiable impact on uptime and cost, and lessons learned (e.g., tuning HPA thresholds).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
