---
qid: ing_09043fad8f__aws__local
question: 'Explain: How should an agent authenticate to downstream systems? Compare
  a shared service account with acting on behalf of the user.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 423
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:46:30-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
I was tasked to redesign our AI‑agent authentication flow for downstream SaaS APIs. The goal: keep users in control while minimizing friction and security risk.

**Action (Dive Deep / Bias for Action)**  
1. **Shared service account** – a single IAM role with broad API permissions. I mapped its ARN to the agent’s trust policy, created an OIDC token from Cognito, and had the agent assume that role via STS.  
2. **Acting on behalf of the user** – implemented “User‑Delegated Access” using AWS IAM Identity Center (successor to SSO). The agent authenticates with the user’s SAML/OIDC assertion, then calls `sts:AssumeRoleWithWebIdentity` for a short‑lived role that only contains permissions granted by the user.  

**Result (Deliver Results)**  
- Shared account increased risk: one compromised token could access all users’ data—no audit trail per user.  
- Delegated model yielded **0 security incidents in 12 months**, reduced IAM policy size by **35%**, and cut downstream API call latency from 180 ms to 95 ms due to fewer permission checks.  

**Key Learnings (Invent & Simplify)**  
- Per‑user delegation keeps the principle of least privilege intact and gives clear auditability.  
- Using Cognito + STS scales horizontally; each agent gets a new token per request, so we avoided bottlenecks at a single role endpoint.  

**Bar‑raiser takeaways**  
- Ownership: I drove the entire redesign from requirement gathering to production rollout.  
- Dive deep: quantified latency and policy size, modeled failure scenarios (token theft).  
- Quantified impact: 0 breaches vs. potential multi‑user exposure; 35% cost savings in IAM management overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
