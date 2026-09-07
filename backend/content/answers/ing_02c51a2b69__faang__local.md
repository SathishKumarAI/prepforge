---
qid: ing_02c51a2b69__faang__local
question: 'Explain: Multi-Service Deployment — Deployment Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 476
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:50:27-05:00'
sources: []
---

**Clarify**  
We’re asked to describe *multi‑service deployment* strategies in ML, i.e., how we package and roll out several interdependent model services (e.g., feature extractor, inference API, monitoring) while keeping reliability, observability, and scalability high. Key assumptions: all services share a common infra layer (K8s/managed), network latency matters, and we want zero‑downtime updates.

**Approach**  
1. **Service isolation** – each model runs in its own container/service.  
2. **Versioning & Canary** – deploy new model versions alongside the old one, route a small traffic slice to the canary.  
3. **Blue/Green or Rolling** – replace pods gradually after health checks pass.  
4. **Feature flags / API gateways** – switch between services without redeploying clients.  
5. **Observability & rollback** – metrics, logs, and automated rollback if error thresholds hit.

**Depth**  
- *Containers + Kubernetes*: Pod replicas per model; use Deployment objects with `strategy: RollingUpdate`.  
- *Service Mesh (Istio/Linkerd)*: Enables traffic mirroring for canaries, retries, circuit breaking.  
- *CI/CD Pipelines*: Build image → push to registry → Helm/Kustomize apply → automated tests.  
- *Observability stack*: Prometheus + Grafana for latency & error rate; ELK for logs; SLO metrics trigger auto‑rollback via Argo Rollouts or Flagger.  
Complexity: O(n) pods per model, linear in traffic split; cost scales with replicas.

**Edge Cases**  
- Dependent models failing → orchestrate partial rollbacks.  
- Sudden traffic spikes on new version → autoscaling lag.  
- Data drift causing performance drop before canary threshold triggers.

**Optimize & Communicate**  
Explain trade‑offs: tighter isolation increases overhead but improves fault containment; blue/green offers clean rollback but needs double resources. Emphasize that the goal is *continuous delivery* with minimal disruption, leveraging observability to make data‑driven decisions during rollout. This structured narrative shows clarity, depth, and an engineering mindset that FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
