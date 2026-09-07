---
qid: ing_ce12ccfbb2__faang__local
question: 'Explain: Capability-Based Access Control — Safety And Governance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 514
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:39:42-05:00'
sources: []
---

**Clarify**  
You’re asking how *capability‑based access control (CBAC)* can be used to enforce safety and governance in AI systems—e.g., restricting which models or data a component may use, preventing privilege escalation, and ensuring auditability. I’ll assume we’re dealing with distributed microservices that consume large language models or vision APIs, and we need fine‑grained, secure, auditable permissions.

**Approach**  
1. Define *capabilities* as unforgeable tokens (e.g., signed JWTs) that encode the specific API endpoints, data ranges, and usage limits a client may invoke.  
2. Issue capabilities via a central Authority Service (AS).  
3. Embed capability checks in every gateway or model proxy; deny requests lacking a valid token.  
4. Log every capability‑granted operation for governance and anomaly detection.

**Depth**  
- **Token format**: `{sub, exp, scopes, constraints}` signed by AS’s private key. Constraints can be IP ranges, request quotas, or temporal windows.  
- **Enforcement**: Each microservice verifies the signature with AS’s public key; then checks `scopes` against the requested operation. Complexity is O(1) per call (hash lookup).  
- **Safety**: Since capabilities are *one‑time* or have short expirations, accidental leakage has limited impact. Revocation can be handled by a revocation list broadcasted via an event bus.  
- **Governance**: All operations flow through the AS, which records capability issuance and usage. Auditing is straightforward: correlate logs with the original capability payload.

**Edge Cases**  
- Token replay: Mitigate by including a nonce or using short‑lived tokens.  
- Compromise of AS private key: Rotate keys frequently; use hardware security modules (HSMs).  
- Granularity mismatch: Overly coarse scopes may grant unintended access; over‑fine scopes increase token churn.

**Optimize & Communicate**  
To reduce latency, cache capability validation results in a local LRU store per service. For transparency, expose an “audit trail” API that shows all capabilities issued to a user and their usage statistics. When explaining this to stakeholders, I’d highlight: *CBAC gives us mathematically provable least‑privilege boundaries, automated revocation, and immutable audit logs—exactly what safety‑critical AI workloads demand.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
