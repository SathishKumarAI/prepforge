---
qid: ing_3885323adf__aws__local
question: 'Explain: Role-based access control — Designing an Authorization Model for
  an Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 508
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:32:36-05:00'
sources: []
---

**Situation & Task**  
I led the redesign of our ML‑platform’s security model at a Fortune‑500 fintech where every analyst, data scientist and devops engineer needed fine‑grained access to models, datasets and inference endpoints. The legacy “user‑role” list was brittle; any change required manual updates in IAM policies and triggered costly downtime.

**Action (Design)**  
I architected a **Role‑Based Access Control (RBAC) + Attribute‑Based Layer** using Cerbos for policy enforcement, coupled with AWS Cognito for identity federation.  

| Service | Purpose | Scalability & Cost |
|---------|---------|--------------------|
| **Cerbos** | Centralized policy engine; evaluates JSON policies at request time | Handles >10k concurrent requests per region; single‑instance pricing ~ $0.05/hr, negligible vs. IAM |
| **Cognito + SAML** | Federated login for corporate AD & Okta | Zero admin cost, auto‑scales with users |
| **Lambda + API Gateway** | Policy decision point (PDP) wrapper | Pay‑per‑invoke; 0.20 ms latency, < $1/mo |
| **DynamoDB** | Store policy metadata and audit logs | 99.999% availability, auto‑scale writes |

I defined **“data‑science”, “model‑ops” and “viewer”** roles, each with a Cerbos policy that referenced model tags (e.g., `confidential=true`). The PDP automatically refreshed policies every 5 minutes using CloudWatch Events.

**Result**  
- Reduced permission errors by **92%**, cutting support tickets from ~120/month to <10.  
- Cut IAM maintenance time by **70%**, freeing 1,200 engineer‑hours annually.  
- Achieved sub‑50 ms latency for policy checks under peak load (30k requests/sec).  

**Reflection**  
I learned that *ownership* means owning the entire security lifecycle, not just the code. By integrating Cerbos, we gained **auditability**, **policy versioning** and a single source of truth—key to scaling securely. The bar‑raiser will note my deep dive into policy semantics, measurable impact on ops cost, and proactive mitigation of future compliance risks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
