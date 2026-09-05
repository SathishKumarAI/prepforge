---
qid: ing_687093cae5__star__local
question: 'Explain: Replica Set — DevOps-SRE/2_ContainerOrchestration/Kubernates/Readme.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 271
output_tokens: 293
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:56:13-05:00'
sources: []
---

**Situation:** While leading a migration of our legacy monolith to microservices, we had to guarantee zero downtime for the new API gateway during rollout. The team was using Docker Compose locally but needed production‑grade scaling on GKE.

**Task:** I had to design a Kubernetes deployment that could handle sudden traffic spikes and provide automatic self‑healing without manual intervention.

**Action:** I introduced a **ReplicaSet** as the backbone of our deployment strategy. First, I defined a Deployment YAML with `replicas: 3` to maintain three pod copies. The ReplicaSet controller then watched the desired state, ensuring that if any pod failed or was evicted, it instantly spun up a new one from the same container image (`myorg/api-gateway:v2`). I also configured liveness/readiness probes so the ReplicaSet would only consider pods healthy before routing traffic to them. To test resilience, I deliberately killed a pod; the ReplicaSet recreated it within seconds, keeping our 99.9% SLA intact.

**Result:** Post‑deployment, we saw a 40 % reduction in mean time to recovery (MTTR) and maintained 100 % uptime during the first month of traffic spikes. The exercise reinforced that a properly configured ReplicaSet is essential for robust, self‑healing services in Kubernetes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
