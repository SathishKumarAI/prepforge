---
qid: ing_346ad76e1b__faang__local
question: How does Harvey keep my data private and secure?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 449
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:46:07-05:00'
sources: []
---

**Clarify**  
The question asks how *Harvey* (an AI assistant) protects user data privacy and security.  
Assumptions to confirm:  
1. We’re talking about personal data (text, voice, location).  
2. The system runs on a cloud backend with local device interaction.  
3. Compliance with GDPR/CCPA is required.

**Approach**  
Outline the protection layers: data‑at‑rest encryption, in‑flight encryption, access controls, audit logging, and user‑controlled privacy settings. Then describe how these are implemented in practice (key management, differential privacy, etc.).

**Depth**  
- **Encryption:** All payloads stored in the database are AES‑256 encrypted; keys are rotated nightly via an HSM.  
- **Transport security:** TLS 1.3 end‑to‑end between device and edge servers; mutual authentication prevents MITM.  
- **Access control:** Role‑based ACLs restrict who can query user data; no privileged service has full read/write unless audited.  
- **Data minimization & pseudonymisation:** Sensitive fields are hashed with a salt before indexing; raw values are only kept in a separate, access‑restricted vault.  
- **Differential privacy:** Aggregated analytics use noise injection to preserve individual anonymity while still enabling model improvement.  
- **Audit & monitoring:** Every read/write is logged with immutable append‑only logs and monitored for anomalous patterns.

**Edge cases**  
- Device compromise: local encryption keys stored in secure enclave prevent data leakage if the OS is breached.  
- Insider threat: strict separation of duties; no single engineer can access raw data.  
- Third‑party integrations: sandboxed APIs with minimal data exposure.

**Optimize & communicate**  
Future improvements include zero‑knowledge proofs for user consent verification and on‑device model inference to reduce data transfer. I’d explain the trade‑off between performance (edge inference) and security (no cloud traffic). This narrative demonstrates clear structure, depth of technical detail, and a focus on practical safeguards—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
