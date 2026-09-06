---
qid: ing_720302317a__fp__local
question: 'Explain: How SSO Works — What is SSO (Single Sign-On)?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 370
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:06:55-05:00'
sources: []
---

**Why do we need SSO?**  
Every web service that stores user data must verify identity before granting access. The naïve approach—re‑entering credentials on each site—creates a *security* problem (many weak passwords) and a *usability* one (user fatigue). In distributed systems the core constraint is **privacy‑preserving authentication**: we want to prove “I am user X” without revealing X’s password or exposing it to every service.

**The principle of delegation** solves this.  
1. **Central authority (Identity Provider, IdP)** stores the secret once and issues a short‑lived token (e.g., JWT).  
2. **Service providers (SPs)** accept that token as proof of identity.  
3. The user authenticates only to the IdP; thereafter all SPs rely on the signed claim.

Mathematically, this is an instance of *cryptographic reduction*: a hard problem (password guessing) is reduced to verifying a digital signature, which is computationally cheap for SPs yet infeasible for attackers without the IdP’s private key. The token’s short validity period bounds the exposure window, aligning with the principle of least privilege.

**Non‑obvious insight:**  
Many think SSO merely “skips logins.” In fact, it enforces a *single source of truth* that turns authentication into a *trust chain*. Because every SP validates the same signed claim, we can detect token replay or compromise by monitoring the IdP’s audit logs—turning authentication into an observable event rather than a silent check. This observability is what makes enterprise SSO scalable and auditable, beyond simple convenience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
