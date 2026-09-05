---
qid: ing_71e0ab568a__star__local
question: 'Explain: ⭐ Horizontal Pod Autoscaling (HPA) — DevOps-SRE/2_ContainerOrchestration/Kubernates/Readme.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 278
output_tokens: 321
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:14:55-05:00'
sources: []
---

**Situation:**  
At my previous role I was leading the migration of a legacy microservice to Kubernetes on GKE. The service had a sudden spike in traffic during a product launch—traffic jumped from ~300 QPS to over 4,000 QPS within two hours—and our fixed‑size deployment couldn’t keep up.

**Task:**  
I needed to implement an automatic scaling mechanism that would add or remove pods based on real‑time load while keeping CPU utilization around 60% and ensuring no service disruption during the spike.

**Action:**  
I introduced Horizontal Pod Autoscaler (HPA) with a target CPU utilization of 65%. I defined the min replicas as 3 and max as 20, wrote a custom metrics adapter to expose request‑per‑second data from Prometheus, and configured the HPA to react within 30‑second intervals. I also set up a readiness probe that checked the service’s health before new pods started receiving traffic, and added a pre‑warm strategy to avoid cold starts.

**Result:**  
During the launch peak, the cluster automatically scaled from 3 to 18 pods in under five minutes, keeping CPU at ~58% and latency below 120 ms. Overall cost was reduced by 35% compared to over‑provisioning, and we avoided any downtime. I learned that fine‑tuning HPA thresholds and integrating custom metrics are key to balancing performance and cost in production Kubernetes workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
