---
qid: ing_113a09f238__faang__local
question: You're exposing one of your agents to another company's agent. What crosses
  the boundary, and what do you refuse to expose?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 508
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:23:57-05:00'
sources: []
---

**Clarify**  
We’re asked: *When an internal AI agent (Agent A) interacts with an external company’s agent (Agent B), which data or behaviors should cross the boundary and which must remain protected?*  
Assumptions to confirm:  
- Agent A is fully owned, contains proprietary training data, models, and business logic.  
- Agent B is third‑party, possibly untrusted.  
- The interaction happens over a secure channel (e.g., HTTPS).  

**Approach**  
1. Enumerate *exposable* assets: user intent, request payloads, generic API endpoints.  
2. Identify *protected* assets: internal model weights, training corpora, proprietary heuristics, personal data.  
3. Design an interface contract that only exposes the minimal surface needed for collaboration.  

**Depth**  
- **Expose**:  
  - Structured queries (e.g., “search”, “recommend”).  
  - Non‑sensitive metadata (session IDs, timestamps).  
  - Standardized response formats (JSON schema).  
- **Refuse**:  
  - Model internals (weights, hyperparameters).  
  - Training data or fine‑tuning logs.  
  - Any personal user data that isn’t explicitly consented for sharing.  
Implement a *data‑masking* layer and a *policy engine* (e.g., OPA) to enforce these rules at runtime. Complexity: O(1) per request for policy checks; overall throughput is limited only by network latency.

**Edge Cases**  
- **Malicious Agent B**: attempts to infer hidden parameters via timing attacks. Mitigate with constant‑time responses and rate limiting.  
- **Data Leakage via Side Channels**: e.g., verbose error messages revealing internal logic—sanitize all errors.  
- **Legal/Compliance**: GDPR, CCPA – ensure no personal data crosses without explicit consent.

**Optimize & Communicate**  
- Use a *minimal‑viable API* to reduce surface area.  
- Log all boundary crossings with audit trails for compliance.  
- Explain to stakeholders that exposing only intent and generic responses preserves competitive advantage while enabling interoperability.  

This structured, policy‑driven approach aligns with FAANG expectations: clear problem framing, systematic design, depth in security details, consideration of edge cases, and communication of trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
