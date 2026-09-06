---
qid: ing_bb2e985d68__think__local
question: 'Explain: Return the Right Status Code — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 384
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:17:54-05:00'
sources: []
---

**1️⃣ Clarify the goal and assumptions**  
- Identify what “right status code” means for a webhook: success (2xx), client error (4xx), server error (5xx).  
- Assume the system receives HTTP POSTs from external services, validates payloads, processes them, and may need to retry on failure.  

**2️⃣ Adopt a layered mental model**  
- *Transport layer*: HTTP semantics.  
- *Business logic*: Validation, business rules, persistence.  
- *Error handling*: Map internal errors to appropriate status codes.  

**3️⃣ Step‑by‑step reasoning**  
1. Validate the request (e.g., signature, schema). → 400 if malformed or unauthorized.  
2. Attempt processing.  
   - If domain logic fails (duplicate event, out‑of‑order), return 409 or 422.  
   - If external dependencies fail transiently, respond with 503 to trigger retry.  
3. On success, persist and acknowledge → 200 OK or 201 Created.  
4. Log all outcomes for observability.  

**4️⃣ Avoid common pitfalls**  
- Don’t use 200 for “event ignored”; that masks idempotency issues.  
- Never return 5xx for client‑side problems; external services will retry unnecessarily.  
- Remember not to expose internal error details in the response body.  

**5️⃣ Sanity‑check & verbalize**  
- Walk through a few edge cases (duplicate, throttled, malformed).  
- Confirm that each maps to an appropriate status code and that downstream systems interpret it correctly.  
- Communicate the mapping table clearly in design docs so developers know which codes to expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
