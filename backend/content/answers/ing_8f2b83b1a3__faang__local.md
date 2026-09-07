---
qid: ing_8f2b83b1a3__faang__local
question: 'Explain: Security Requirements — Enterprise Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 540
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:17:31-05:00'
sources: []
---

**Clarify**  
You’re asking for the *security requirements* that an enterprise must satisfy when building or deploying a Retrieval‑Augmented Generation (RAG) system. I’ll assume:  
1. The RAG is used in production, handling sensitive business data.  
2. Multiple stakeholders (engineering, legal, compliance) need visibility into risk controls.  

**Approach**  
I’ll list the key requirement categories, then drill into each:  
- Data confidentiality & integrity  
- Access control & identity management  
- Threat detection & monitoring  
- Compliance & auditability  

**Depth**  

| Requirement | What it means for RAG | Typical Controls |
|-------------|----------------------|------------------|
| **Confidentiality** | Protect query text, retrieved documents, and generated responses from eavesdropping. | TLS/SSL in transit; encryption‑at‑rest (AES‑256) for storage; token‑based secrets management for embeddings. |
| **Integrity** | Ensure no tampering with the knowledge base or model weights. | Hash‑signing of vector indices; immutable logs; secure boot for inference servers. |
| **Access Control** | Only authorized users/roles can query or modify the RAG pipeline. | RBAC + MFA, fine‑grained policy engine (OPA), API gateways with rate limits. |
| **Threat Detection** | Spot data exfiltration, model poisoning, or injection attacks. | Anomaly detectors on query patterns; watermarking of outputs; sandboxed inference nodes. |
| **Compliance & Auditability** | Meet GDPR, HIPAA, SOC‑2, etc. | Data residency controls, audit logs with tamper‑evidence, periodic penetration testing, data retention policies. |

**Edge Cases**  
- *Zero‑trust network*: if the vector store is exposed, enforce strict IP whitelisting and VPC peering.  
- *Model drift*: continuous monitoring of embedding quality; automated retraining triggers.  
- *Mis‑aligned outputs*: implement human‑in‑the‑loop reviews for high‑stakes decisions.

**Optimize & Communicate**  
Start with a minimal secure baseline (TLS + RBAC) then iterate: add threat detection layers, automate compliance checks via IaC, and instrument observability. When presenting to stakeholders, map each control back to the business risk it mitigates, showing clear ROI in reduced breach cost versus implementation effort. This structured narrative satisfies FAANG interviewers’ focus on clarity, depth, and practical trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
