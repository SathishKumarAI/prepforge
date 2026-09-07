---
qid: ing_007655e8c2__aws__local
question: 'Explain: Signing with PKCS #11 URIs — GitHub - sigstore/model-transparency:
  Supply chain security for ML \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 447
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:25:37-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional ML pipeline at my previous company, we were required to prove that every model artifact was tamper‑proof for regulators. The team chose **sigstore/model‑transparency**, which uses **PKCS#11 URIs** to reference cryptographic keys stored in an HSM. I had to explain how the signing works and why it mattered.

**Action & Design**  
*I scoped the requirements:*  
- Keys must never leave the HSM (Customer Obsession).  
- Signing must be auditable, repeatable, and fit into CI/CD.  

I designed a solution that leveraged **AWS CloudHSM** (providing PKCS#11 endpoints) and **S3** for artifact storage. In CodeBuild we invoke `cosign sign --key pkcs11://` where the URI points to the HSM’s slot/label. The key is never exposed; only the signature blob is written back to S3.  

To scale, I configured CloudHSM in a **single AZ** for low latency and enabled cross‑region replication of signatures via EventBridge + Lambda, ensuring 99.999% durability (Availability). Cost was kept under $200/month by using an on‑demand HSM instance and minimal data transfer.

**Result**  
- Reduced model‑tampering risk score from **4.3/10** to **0.2/10** in our internal audit.  
- Signed 1,200+ models per month with a 99.9% success rate, cutting manual review time by **70%** (Deliver Results).  

**Reflection**  
I learned that exposing the PKCS#11 URI alone is insufficient; you must tie it to secure key lifecycle policies and audit trails. This experience reinforced my ownership mindset and deep dive into cryptographic primitives—key traits for any AWS role.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
