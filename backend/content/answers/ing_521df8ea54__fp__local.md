---
qid: ing_521df8ea54__fp__local
question: 'Explain: TL;DR — Best Practices for Designing a Pragmatic RESTful API |
  Vinay Sahni'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 409
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:59:47-05:00'
sources: []
---

**TL;DR – Best Practices for a Pragmatic RESTful API**

1. **Model the domain, not the protocol**  
   Think of resources as *entities* (e.g., `Order`, `User`) and let HTTP verbs express actions on them (`GET /orders/12`). This keeps the API intuitive because clients naturally map CRUD to URI + verb.

2. **Use hypermedia (HATEOAS) sparingly**  
   Embed links only where they add value—e.g., a list of orders should include `self`, `next`, and `order/{id}`. Too much hypermedia burdens payloads; too little hampers discoverability.

3. **Version by media type, not URL**  
   Serve `/orders` with `Accept: application/vnd.company.v2+json`. Clients can upgrade independently, preserving backward compatibility without breaking existing URLs.

4. **Leverage HTTP status codes as first‑class semantics**  
   `201 Created` + `Location` header for new resources; `409 Conflict` when business rules fail; `422 Unprocessable Entity` for validation errors. This turns the protocol into a contract rather than an opaque “error” string.

5. **Keep payloads flat and filterable**  
   Expose query parameters (`?fields=id,name,price`) so clients receive only what they need—reducing bandwidth and coupling.

6. **Document with machine‑readable specs (OpenAPI/JSON‑Schema)**  
   Automate tests and client stubs from the spec; this ensures consistency between code and documentation.

**Non‑obvious insight:** *Rate limiting should be tied to resource state, not just request count.* If a client repeatedly updates the same order, throttle based on the number of modifications per resource rather than total requests. This protects data integrity while allowing legitimate bursts for distinct resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
