---
qid: ing_80bb3492a1__think__local
question: 'Explain: Verify Before Parsing Business Data — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 426
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:30:16-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
   - *What is “verify before parsing” exactly?* Assume it means validating a webhook payload (signature, schema, auth) before any business logic consumes it.  
   - *Which layers are involved?* API gateway → validation service → parser → domain logic.  
   - *Assume stateless services and eventual consistency.*  

**2️⃣ Adopt a layered mental model**  
   - **Ingress layer:** receives raw HTTP POST, logs request.  
   - **Validation layer:** cryptographic signature check, rate‑limit, content‑type, schema (JSON‑Schema/Protobuf).  
   - **Parsing layer:** deserialise into typed objects only after validation passes.  
   - **Business layer:** processes the parsed data.  

**3️⃣ Step‑by‑step reasoning**  
   1. Receive webhook → store raw payload for audit.  
   2. Run cryptographic check (HMAC, RSA) to confirm origin.  
   3. Enforce rate limits and deduplication early.  
   4. Validate JSON schema; if failure, return 400/422.  
   5. Only then deserialize into domain model.  
   6. Pass the typed object downstream.  

**4️⃣ Common traps to avoid**  
   - *Parsing before validation:* leaks sensitive data or allows malformed payloads.  
   - *Over‑aggressive validation:* blocking legitimate edge cases (e.g., missing optional fields).  
   - *Stateful signature checks:* breaking horizontal scaling.  

**5️⃣ Sanity‑check & communicate**  
   - Verify that each failure path returns the correct HTTP status and minimal error body.  
   - Explain the benefit: protects downstream services, improves observability, keeps parsing logic clean.  
   - Emphasise that this pattern scales because validation is stateless and can be cached or delegated to an API gateway.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
