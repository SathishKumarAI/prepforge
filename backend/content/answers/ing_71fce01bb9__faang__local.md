---
qid: ing_71fce01bb9__faang__local
question: 'Explain: Enterprise-grade security and controls — Secure legal AI for the
  most sensitive matters | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 603
total_tokens: 843
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:08:41-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* A law firm needs an AI assistant that can handle highly confidential data (e.g., client secrets, privileged communications) while staying compliant with regulations such as GDPR, HIPAA, and the attorney‑client privilege.  
*Assumptions to confirm:*  
- The firm has on‑prem or hybrid infrastructure.  
- Data residency requirements are strict (e.g., EU data cannot leave the EU).  
- Auditors require immutable logs and audit trails.

**2️⃣ Approach**  
1. **Zero‑trust architecture** – every request must be authenticated, authorized, and encrypted.  
2. **Data‑level controls** – tag documents with sensitivity labels; enforce encryption at rest and in transit.  
3. **Model isolation** – run the LLM in a sandboxed container with limited network access; no outbound calls unless explicitly allowed.  
4. **Audit & compliance layer** – immutable logs, tamper‑evident storage, and regular penetration tests.

**3️⃣ Depth**  
- **Authentication/Authorization:** Use PKI or short‑lived JWTs tied to user roles; implement role‑based access control (RBAC) with least privilege.  
- **Encryption:** AES‑256 at rest, TLS 1.3 in transit; key management via HSM or cloud KMS with strict audit logs.  
- **Data Residency:** Deploy the model on a private VPC within the required jurisdiction; use geo‑redundant storage to avoid cross‑border data flows.  
- **Sandboxing:** Run inference inside OCI containers orchestrated by Kubernetes, with eBPF filters preventing syscalls that could exfiltrate data.  
- **Audit Trails:** Store logs in an append‑only ledger (e.g., AWS CloudTrail or GCP Cloud Audit Logs) and periodically verify integrity via hash chaining.

**4️⃣ Edge Cases**  
- *Model drift* leading to unintended data leakage → schedule regular retraining with sanitized datasets.  
- *Zero‑day container escape* → harden the host kernel, use seccomp profiles, and run privileged containers only for trusted services.  
- *Mislabeling sensitive docs* → implement automated NLP checks that flag high‑risk content before ingestion.

**5️⃣ Optimize & Communicate**  
- **Performance vs. Security:** Use hardware‑accelerated enclaves (e.g., Intel SGX) to accelerate inference while keeping data inside a trusted execution environment.  
- **Scalability:** Deploy autoscaling pods with strict admission controllers that enforce policy checks before scaling out.  
- **Narrative:** “We’ll treat every piece of legal data as if it were the most valuable asset, applying zero‑trust principles at every layer—identity, network, container, and audit—to guarantee that our AI never becomes a liability.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
