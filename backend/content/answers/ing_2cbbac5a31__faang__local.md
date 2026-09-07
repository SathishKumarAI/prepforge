---
qid: ing_2cbbac5a31__faang__local
question: 'Explain: Q124: Three labs now gate their strongest cyber-capable models
  behind approval tiers with identity verification and hardware keys. You are shipping
  a dual-use capability in your own product. Design the access control.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 485
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:26:58-05:00'
sources: []
---

**Clarify**  
We’re building a dual‑use AI model that can be used for both benign tasks (e.g., language translation) and potentially malicious ones (e.g., phishing). The goal is to design an access control system that satisfies three tiers of approval: 1️⃣ Basic user, 2️⃣ Verified researcher, 3️⃣ High‑risk operator. I’ll assume we can issue hardware tokens, perform identity verification (KYC), and enforce per‑model usage quotas.

**Approach**  
1. **Tier definition & policy mapping** – define what each tier is allowed to do (e.g., basic users → inference only, researchers → fine‑tuning, operators → high‑volume generation).  
2. **Authentication layer** – OAuth 2.0 + JWT for software auth; TPM/SGX‑based attestation for hardware keys.  
3. **Authorization engine** – policy‑as‑code (OPA) that checks tier, request type, and usage limits before routing to the model.  
4. **Audit & monitoring** – log every inference, flag anomalies, and enforce rate‑limits per user/IP.

**Depth**  
- *Hardware key*: Each user receives a YubiKey‑style token; during session initiation the device signs a nonce, proving possession.  
- *Identity verification*: KYC via third‑party API; only verified accounts can request higher tiers.  
- *Model gate*: The inference endpoint checks JWT claims + hardware signature; if tier < required, reject with 403.  
- *Complexity*: Authentication O(1), authorization O(log n) on policy set, negligible latency (<5 ms).  

**Edge Cases**  
- Token theft → mitigate by binding token to device via TPM seal.  
- False negatives in KYC → provide manual appeal flow.  
- Over‑use bursts → burst‑control with sliding window.

**Optimize & Communicate**  
Explain that the system balances security (hardware attestation, strict policy) with usability (single sign‑on). Highlight how audit logs enable post‑incident forensics and continuous policy refinement. This structure demonstrates clear problem framing, a concrete technical plan, complexity awareness, and readiness for edge scenarios—exactly what FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
