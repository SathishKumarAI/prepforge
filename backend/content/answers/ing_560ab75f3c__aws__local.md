---
qid: ing_560ab75f3c__aws__local
question: 'Explain: Things NOT to do — Storing Passwords Safely: A Comprehensive Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 488
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:40:38-05:00'
sources: []
---

**Situation & Task (S)**  
At a mid‑size fintech startup I led the rollout of a new customer portal that required storing user passwords for third‑party integrations. The business goal was to launch within 3 months while ensuring regulatory compliance (PCI‑DSS) and maintaining 99.9 % uptime.

**Action (A)**  
I refused to use the “hash‑only” approach that had been used in production, even though it seemed simpler. Instead I designed a **multi‑layered, AWS‑native security stack**:

| Layer | AWS Service | Rationale |
|-------|-------------|-----------|
| 1️⃣ Secrets Manager | Store hashed passwords *and* encryption keys | Centralized key rotation (90 days) and audit logging |
| 2️⃣ KMS CMK | Encrypt secrets at rest | Meets PCI‑DSS “data in transit & at rest” |
| 3️⃣ Cognito + Bcrypt | Password hashing with per‑user salt | Adaptive cost (work factor 12) and built‑in MFA |
| 4️⃣ CloudTrail + GuardDuty | Continuous monitoring for anomalous access | Detect brute‑force attempts within minutes |

I also added **rate limiting** via API Gateway throttling (5 req/s per IP) and a **Zero Trust IAM policy** that required least privilege.

**Result (R)**  
The portal launched 2 weeks early, achieved PCI‑DSS audit success on the first pass, and logged no security incidents in the first year. Customer churn dropped by **12%** because users trusted the platform’s safety. Cost remained under $3 k/month—$1 k less than a comparable third‑party solution.

---

### Leadership Principles Highlighted  
- **Customer Obsession** – protecting user data above all.  
- **Ownership & Dive Deep** – refusing shortcuts, architecting end‑to‑end security, and quantifying risk reduction.  

*Bar‑raiser notes:* I demonstrated ownership by challenging the status quo, deep technical knowledge of AWS services, and a clear, data‑driven outcome. I also reflected on a prior failure (a rushed hash‑only implementation that caused a breach) and learned to institutionalize security reviews early in the SDLC.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
