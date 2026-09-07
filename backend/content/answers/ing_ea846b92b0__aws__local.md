---
qid: ing_ea846b92b0__aws__local
question: You're building a multi-tenant agent platform. Tenants bring their own MCP
  servers and their own data. What isolates them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 606
total_tokens: 850
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:08:27-05:00'
sources: []
---

**Situation (S)**  
I was tasked with launching a multi‑tenant AI agent platform where each tenant supplied their own MCP servers and data. The risk was that a compromised tenant could jeopardize others or the core service.

**Task (T)**  
Design an isolation strategy that protects tenant data, meets compliance, scales to 10k concurrent tenants, and keeps operational costs under $0.03 per request.

**Action (A)**  

1. **Network Isolation** – Each tenant gets a dedicated VPC with a private subnet for their MCP, connected via Transit Gateway to the platform’s control plane.  
2. **Compute & Storage Separation** – Use ECS‑Fargate task definitions scoped by IAM role; data lives in encrypted S3 buckets per tenant (bucket policies + KMS keys).  
3. **Service Mesh & RBAC** – Deploy AWS App Mesh with per‑tenant sidecars, enforce mutual TLS and fine‑grained authorization via Envoy.  
4. **Observability & Billing** – Tag all resources with `TenantID`; CloudWatch metrics feed into a Lambda that aggregates usage, auto‑scales the control plane, and triggers cost alerts.

5. **Fail‑fast & Redundancy** – Each tenant’s MCP runs in an Availability Zone pair; health checks route traffic to healthy instances only.  

**Result (R)**  
Within 90 days we onboarded 1,200 tenants, each with isolated environments that passed independent penetration tests. Incident response time dropped from 4 hrs to <30 min, and the platform handled a peak of 25k concurrent requests at $0.025/request—below our target.  

---

### Leadership Principles Anchored  
- **Customer Obsession** – Built tenant‑centric isolation so their data never leaks.  
- **Ownership** – Took full responsibility for security, cost, and uptime across tenants.

### Bar‑raiser Takeaways  
- *Ownership*: Demonstrated end‑to‑end control over multi‑tenant architecture.  
- *Dive Deep*: Detailed design of VPCs, App Mesh policies, and KMS key rotation.  
- *Quantified Impact*: 90 % reduction in incident window; $0.005 savings per request.  
- *Learning from Failure*: After a mis‑configured bucket policy caused an accidental data bleed, we automated IAM drift detection to prevent recurrence.

**Key AWS Services**: VPC, Transit Gateway, ECS/Fargate, S3, KMS, Secrets Manager, App Mesh, CloudWatch, Lambda.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
