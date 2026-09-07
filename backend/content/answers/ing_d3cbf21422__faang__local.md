---
qid: ing_d3cbf21422__faang__local
question: 'Explain: Integrates easily into your environment — The five laws of cloud-native
  authorization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 490
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:52:49-05:00'
sources: []
---

**Clarify**  
The interview asks for an explanation of the *five laws of cloud‑native authorization* and why they make integration smooth in a modern infrastructure (K8s, microservices, CI/CD). I’ll assume the audience knows basic IAM concepts but not this specific framework.

**Approach**  
1. List each law succinctly.  
2. Explain how it maps to tooling or patterns you’d see in production.  
3. Highlight integration benefits.  

**Depth**  
| Law | Essence | Cloud‑Native Fit |
|-----|---------|------------------|
| **Least Privilege** | Grant only what is needed for a task. | Kubernetes RBAC, Istio mTLS policies limit scopes per pod/service. |
| **Separation of Duties** | Split responsibilities (e.g., admin vs. dev). | Use distinct service accounts, Terraform workspaces; CI pipelines run under limited‑scope roles. |
| **Defense in Depth** | Layered controls: network, identity, policy. | Combine VPC firewall rules, pod security policies, and Open Policy Agent for runtime checks. |
| **Audit & Visibility** | Every auth event is logged. | Cloud Audit Logs, Fluentd to ELK/Datadog; Kubernetes audit API captures admission reviews. |
| **Dynamic Trust** | Revoke or rotate credentials automatically. | Use short‑lived OIDC tokens, Kubernetes ServiceAccount tokens, automated key rotation via Vault/K8s secrets. |

These laws align with native primitives: **RBAC**, **ServiceAccounts**, **NetworkPolicies**, **OPA**, and **Vault/K8s Secrets**, making onboarding a new service as simple as applying a Helm chart.

**Edge Cases**  
- Legacy monoliths lacking fine‑grained RBAC → require proxying or sidecar.  
- High‑frequency token rotation may hit rate limits → implement caching.  
- Audit lag in distributed logs can obscure real‑time compliance checks.

**Optimize & Communicate**  
I’d emphasize that adopting these laws reduces attack surface, simplifies compliance, and lets teams iterate quickly—key for a FAANG environment where velocity and security must coexist. I’d close by noting we can instrument metrics to prove policy adherence during reviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
