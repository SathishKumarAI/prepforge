---
qid: ing_4f548bfe7e__think__local
question: 'Explain: Request Headers — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 431
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:16:37-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - *What is a webhook?* A server‑to‑server HTTP callback triggered by an event.  
   - *Why request headers matter?* They convey authentication, content type, idempotency, etc., which are critical for reliable integration.  
   - Assume the audience knows basic REST but not the security/consistency nuances.

**2. Adopt a design‑thinking framework**  
   - *Goal → Problem → Constraints → Solution → Trade‑offs.*  
   - Map each header to one of these pillars: e.g., `Authorization` solves “who am I?” (goal), `Idempotency-Key` addresses “duplicate calls” (constraint).

**3. Step‑by‑step reasoning**  
   1. List mandatory headers (`Content-Type`, `Accept`).  
   2. Add authentication headers (`Bearer token`, `HMAC`).  
   3. Introduce idempotency (`Idempotency-Key`) and retry safety (`Retry-After`).  
   4. Consider observability (`X-Request-ID`, `User-Agent`).  
   5. Discuss how each header interacts with the webhook’s lifecycle (creation, delivery, acknowledgment).  

**4. Avoid common traps**  
   - *Assuming all clients support every header.* Provide fallbacks or negotiation.  
   - *Over‑loading headers for data that belongs in the body.* Keep metadata in headers, payload in JSON/XML.  
   - *Neglecting rate‑limit and back‑off headers (`X-RateLimit-*`).*  

**5. Sanity‑check & articulate**  
   - Verify each header serves a distinct purpose and does not duplicate another’s function.  
   - Explain trade‑offs: e.g., HMAC requires shared secret management; OAuth2 simplifies token rotation but adds latency.  
   - Conclude with a concise checklist for designers to reference when building or consuming webhook endpoints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
