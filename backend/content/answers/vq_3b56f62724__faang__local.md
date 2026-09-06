---
qid: vq_3b56f62724__faang__local
question: What are the different masking techniques available ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 645
total_tokens: 876
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:06:25-05:00'
sources: []
---

**Clarify**  
You’re asking about *data‑masking*—the process of obfuscating sensitive fields (PII, PHI, credentials) before storage or transmission so that only authorized users can see the real values. I’ll assume we’re dealing with structured data in relational/NoSQL stores and need to support both static (at rest) and dynamic (in‑flight) masking.

**Approach**  
1. List common techniques: deterministic, probabilistic, format‑preserving, redaction, tokenization, encryption‑based, synthetic substitution, and nullification.  
2. Explain each with examples, use‑cases, and trade‑offs.  
3. Touch on implementation layers (DB engine, ETL pipeline, API gateway).  

**Depth**  

| Technique | How it works | Typical use | Pros / Cons |
|-----------|--------------|-------------|-------------|
| **Deterministic masking** | Same input → same masked output (e.g., hashing with salt). | De‑duplication, joins on masked keys. | Preserves equality; not reversible unless hash broken. |
| **Probabilistic masking** | Random value per row (no repeat). | Prevents frequency analysis. | Loses joinability; harder to reconcile with original data. |
| **Format‑preserving encryption (FPE)** | Encrypts but keeps length/type (e.g., credit card digits). | Regulatory compliance, downstream apps expect same format. | Requires FPE libraries; performance overhead. |
| **Redaction** | Strip or replace sensitive portions (e.g., `***-**-****`). | Quick visual privacy. | No reversible data; may leak patterns if not done carefully. |
| **Tokenization** | Replace with a surrogate token that maps via lookup table. | Billing systems, payment processors. | Lookup cost; token table must be secured. |
| **Encryption‑based masking** | Full encryption (AES/GCM) of the field. | Strongest confidentiality. | Requires key management; cannot search without decrypting. |
| **Synthetic substitution** | Replace with realistic but fake data (e.g., Faker library). | Analytics, testing. | May still reveal patterns if synthetic generation is weak. |
| **Nullification / Null masking** | Set field to `NULL` or a sentinel value. | When data is not needed for analysis. | Loses all utility of the field. |

**Edge Cases**  
- Mixed‑type columns (e.g., names + IDs).  
- Referential integrity: tokenization must keep foreign‑key relationships.  
- Performance spikes in large‑scale pipelines; test with burst loads.

**Optimize & Communicate**  
Start with deterministic masking for audit logs, then add FPE or encryption for compliance. Use a policy engine to apply rules per role. Explain trade‑offs to stakeholders: *“We’ll keep joinability by tokenizing customer IDs but encrypt SSNs to satisfy HIPAA.”* Keep the explanation concise and tie each technique back to business requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
