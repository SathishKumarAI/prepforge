---
qid: ing_6deb8f45f2__faang__local
question: 'Explain: Blue-Green — Kubernetes Deployment Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 493
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:59:17-05:00'
sources: []
---

**Blue‑Green in Kubernetes**

| Step | What to do | Why |
|------|------------|-----|
| **1️⃣ Clarify** | *Problem:* We want zero‑downtime rollout of a new app version on a cluster.  
*Assumptions:* Single service, can duplicate pods, traffic split via Ingress/Service, no stateful data race. | Establish scope & constraints before designing. |
| **2️⃣ Approach** | 1. Deploy *Blue* (current stable) and *Green* (new version) side‑by‑side. <br>2. Route all traffic to Blue using a Service or Ingress. <br>3. Run smoke tests on Green in isolation. <br>4. Switch routing to Green once healthy. <br>5. Decommission Blue after rollback window. | Keeps user traffic continuous and gives clear rollback path. |
| **3️⃣ Depth** | *Implementation:*<br>- Two Deployments (`app-blue`, `app-green`).<br>- One Service with selector pointing to current deployment.<br>- Ingress/ALB rules route based on hostname or header. <br>Health checks: readiness probes + manual smoke tests. <br>Rollback: simply point Service back to Blue; old pods stay until terminated by Deployment’s `revisionHistoryLimit`. | Complexity O(1) for routing, O(n) for pod scale‑up/down. |
| **4️⃣ Edge Cases** | • If Green fails → keep traffic on Blue.<br>• Persistent state must be shared (e.g., DB).<br>• Load balancer limits may need split‑traffic rules.<br>• Network policies could block Green pods initially. | Test with failing probes, mixed‑state scenarios, and network restrictions. |
| **5️⃣ Optimize & Communicate** | • Use *kustomize* or Helm to manage dual manifests. <br>• Automate switch via CI/CD (ArgoCD/Flux). <br>• Add canary traffic split before full cutover for safety.<br>Explain trade‑offs: extra resources vs zero downtime; simpler than rolling updates when stateful concerns dominate. | Clear narrative shows you balance reliability, resource usage, and automation—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
