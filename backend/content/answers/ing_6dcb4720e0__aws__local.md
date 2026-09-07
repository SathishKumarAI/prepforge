---
qid: ing_6dcb4720e0__aws__local
question: 'Explain: Step 2 — How Password Managers Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 468
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:32:01-05:00'
sources: []
---

**Situation (S)**  
At my previous role I led a project to build an internal password‑manager service for the security team. The goal was to reduce credential leaks by 90 % while keeping user experience seamless.

**Task (T)**  
I had to design Step 2 of the flow: **securely storing and retrieving passwords** after the user authenticates with their MFA token.

**Action (A)**  
*Ownership & Dive Deep*: I mapped out the threat model, identified that we needed end‑to‑end encryption, key rotation, and audit logging.  
1. **Encryption** – Each password is encrypted client‑side with a 256‑bit AES key derived from the user’s master password via Argon2id (AWS KMS doesn’t support Argon2).  
2. **Key Management** – The derived key is wrapped with an asymmetric key pair stored in **AWS KMS** (RSA‑2048) so that only AWS can unwrap it when a session token is presented.  
3. **Storage & Retrieval** – Encrypted blobs are written to **Amazon DynamoDB** with a TTL of 30 days for automatic purge, and an **S3 bucket** (server‑side encryption SSE‑KMS) holds audit logs.  
4. **Scalability/Availability** – DynamoDB’s on‑demand mode gives 99.999% availability; S3 provides multi‑AZ durability.  
5. **Cost Trade‑off** – Using KMS for key wrapping keeps per‑request costs <$0.000001, far cheaper than a custom HSM solution.

**Result (R)**  
Within three months we saw credential‑leak incidents drop from 12/month to 1/month (92 % reduction). User adoption hit 4,500 active accounts with an average response time of <50 ms per lookup. The system also passed the quarterly penetration test with zero critical findings.

*Bar‑raiser cues*: I demonstrated clear ownership, deep technical design, measurable impact, and a post‑mortem that led to automated key rotation policies, turning a single failure into continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
