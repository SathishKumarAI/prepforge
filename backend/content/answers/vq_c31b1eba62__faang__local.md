---
qid: vq_c31b1eba62__faang__local
question: Are there compliance requirements?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 422
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:32:08-05:00'
sources: []
---

**Clarify**  
The interviewer asks whether data‑engineering pipelines must adhere to *compliance* rules. I’ll confirm the scope:  
- What regulations apply (GDPR, CCPA, HIPAA, PCI‑DSS)?  
- Which data types are in play (personal, financial, health)?  
- Where is the data stored/processed (on‑prem vs. cloud, region)?

**Approach**  
1. Identify applicable laws and industry standards.  
2. Map each pipeline component to compliance controls: ingestion, storage, transformation, access, retention, deletion.  
3. Embed auditability: metadata lineage, logs, role‑based access control (RBAC).  
4. Implement data‑at‑rest/in‑transit encryption, tokenization for sensitive fields.  
5. Set up automated alerts for policy violations and periodic audits.

**Depth**  
- *GDPR*: enforce “data minimisation” and “right to be forgotten”; use consent flags in metadata; enable per‑record deletion.  
- *HIPAA*: require HIPAA‑compliant cloud services, encryption (AES‑256), audit trails, and Business Associate Agreements (BAAs).  
- *PCI‑DSS*: segregate cardholder data onto isolated VPCs, enforce strong authentication, and perform quarterly vulnerability scans.

**Edge Cases**  
- Data moving across borders: ensure legal transfer mechanisms (Standard Contractual Clauses).  
- Legacy systems lacking lineage: risk of non‑compliance; need to instrument retroactively.  
- Real‑time streaming: must handle backpressure without violating retention policies.

**Optimize & Communicate**  
Explain that a *policy‑as‑code* framework (e.g., Open Policy Agent) centralises rules, scales with data volume, and reduces manual audit effort. Summarise how this systematic compliance posture not only mitigates legal risk but also builds trust with customers and partners.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
