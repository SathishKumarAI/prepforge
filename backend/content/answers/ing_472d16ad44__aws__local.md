---
qid: ing_472d16ad44__aws__local
question: 'Explain: Stage 2 — How Google Authenticator Works'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 660
total_tokens: 891
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:06:40-05:00'
sources: []
---

**Situation (S)**  
I was tasked to redesign our mobile app’s two‑factor flow for a global user base that had been experiencing a 12 % drop in login success during peak hours. The requirement: replace the legacy SMS OTP with an authenticator‑style TOTP while keeping latency <200 ms and cost under $0.05 per auth.

**Task (T)**  
Implement a secure, scalable, and user‑friendly “Google Authenticator‑like” flow that can handle 1 M daily logins without provisioning a separate server cluster.

**Action (A)**  

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| 1. **TOTP generation & validation** | `AWS Cognito User Pools` + custom Lambda trigger | Cognito already supports TOTP; the trigger lets us enforce custom rate‑limiting and audit logs. |
| 2. **Secret provisioning** | Store in `Amazon DynamoDB` (encrypted at rest with KMS). Use a deterministic derivation (`PBKDF2`) to avoid storing plain secrets. | DynamoDB offers single‑digit ms latency, auto‑scaling, and 99.999% availability. |
| 3. **Audit & analytics** | Stream events to `Amazon EventBridge` → `AWS Lambda` → `Amazon Redshift`. | Enables real‑time monitoring of failed attempts (target <0.5 %) and root‑cause analysis. |
| 4. **Front‑end integration** | Generate QR code via a lightweight Lambda that pulls the secret from DynamoDB and returns an SVG. | Keeps the mobile app stateless; no heavy libraries on the device. |
| 5. **Security hardening** | Enable `AWS WAF` to block brute‑force patterns, use `AWS Shield Advanced` for DDoS protection. | Protects against credential stuffing attacks without adding latency. |

**Result (R)**  
- Login success rate increased from 88 % to 99.6 % during peak periods.  
- Latency averaged 120 ms per authentication request; cost < $0.02 per auth.  
- Zero incidents of OTP replay or interception reported in the first six months.

**Leadership Principles Highlighted**

*Customer Obsession* – I focused on reducing friction for users while tightening security, directly improving their experience.  
*Dive Deep & Ownership* – By selecting DynamoDB over a custom RDS cluster and integrating Cognito’s TOTP, I avoided unnecessary complexity, maintained full ownership of the solution, and quantified performance gains.

**Bar‑raiser Takeaway**  
I showcased deep technical knowledge (TOTP standards, AWS service trade‑offs), delivered measurable impact, and iterated on failures (initial high latency due to unused cache). This demonstrates ownership, depth, and a data‑driven mindset—key signals for an interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
