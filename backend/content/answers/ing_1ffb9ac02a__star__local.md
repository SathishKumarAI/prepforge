---
qid: ing_1ffb9ac02a__star__local
question: 'Explain: Step2 - Create State Store — DevOps-SRE/2_ContainerOrchestration/Kubernates/Readme.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 275
output_tokens: 362
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:33:16-05:00'
sources: []
---

**Situation** – In the spring 2024 sprint we were moving our monolith to a micro‑service architecture on GKE. The new services needed a shared state store for session data and configuration flags, but we had no persistent backing yet.  

**Task** – Deploy a highly available Redis cluster that would serve as the state store for all services, ensuring sub‑millisecond latency under 5 kQPS and zero single points of failure.  

**Action** – I wrote a Helm chart that defined a StatefulSet with three replicas, a headless Service, and an associated PersistentVolumeClaim backed by a fast SSD class. The chart used the Bitnami Redis image, configured TLS encryption, and set `redis.conf` to enable AOF persistence for durability. I added liveness/readiness probes and auto‑scaling via the Kubernetes Operator. After CI/CD pipeline integration, we automated rollout with rolling updates and canary deployments.  

**Result** – The cluster reached 99.999% uptime in production, reduced session latency from 120 ms to 18 ms, and cut our data loss incidents to zero. I learned how to balance performance, durability, and operational simplicity when provisioning stateful services on Kubernetes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
