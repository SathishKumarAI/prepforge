---
qid: ing_22a0575912__aws__local
question: 'Explain: Secrets — DevOps-SRE/2_ContainerOrchestration/Kubernates/Secrets.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 370
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:44:54-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous role I led a migration of our on‑prem CI/CD pipeline to EKS. One blocker was securing environment variables and certificates across dozens of microservices without leaking them in logs or code repos.

**Action (A)**  
I adopted **Kubernetes Secrets** combined with **AWS Secrets Manager** for rotation, and wrapped everything in an IaC stack (Terraform + Helm). I:
1. Mapped each service’s secrets to a dedicated namespace‑scoped secret object.
2. Enabled `secrets-store-csi-driver` so pods fetched secrets at runtime from Secrets Manager, eliminating the need to store them in etcd.
3. Configured RBAC so only the pod’s ServiceAccount could read its secret, and set `imagePullSecrets` for private registries.
4. Added automated rotation: a Lambda triggered by Secrets Manager’s change event updated the Kubernetes Secret via API Gateway + IAM role.

**Result (R)**  
- Reduced accidental exposure incidents from **3 per quarter to 0**.  
- Cut manual secret‑management effort by **70%**, freeing 15 FTE hours monthly.  
- Maintained < 1 ms latency for secret retrieval, keeping pod start times within SLA.  

**Learning & Ownership**  
I documented the entire flow in a knowledge base and conducted a “post‑mortem” on an earlier accidental leak; we added a pre‑commit hook that scans YAMLs for plaintext secrets. This demonstrates **Customer Obsession** (protecting data) and **Ownership** (owning end‑to‑end security).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
