---
qid: ing_502e53c6b0__faang__local
question: 'Explain: Best Practices for Designing a Pragmatic RESTful API'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 542
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:50:59-05:00'
sources: []
---

**1️⃣ Clarify**  
The interviewer wants you to outline *pragmatic* best practices for a REST API that is both production‑ready and easy to evolve.  
Assumptions: stateless HTTP/1.1, JSON payloads, versioning, security (OAuth2/JWT), and automated testing.

**2️⃣ Approach**  
- **Design first**: Resource modeling → nouns only, plural URIs.  
- **Versioning strategy**: URI (`/v1/...`) vs header (`Accept: application/vnd.company.v1+json`).  
- **HTTP verbs & status codes**: `GET`, `POST`, `PUT/PATCH`, `DELETE` with 200, 201, 204, 400, 401, 404, 422.  
- **Pagination / filtering**: query params (`page`, `limit`, `sort`).  
- **Error handling**: consistent JSON error schema + `X‑Request‑ID`.  
- **Security & rate limiting**: token auth, OAuth scopes, throttling.  
- **Documentation & testing**: OpenAPI spec, Swagger UI, contract tests.

**3️⃣ Depth**  
*Resource modeling*: Use hypermedia links (`_links`) only when needed; otherwise keep it lightweight.  
*Versioning*: Prefer header‑based to avoid breaking clients and allow parallel evolution.  
*Pagination*: Cursor‑based (`after`, `before`) for large datasets, offset for simplicity.  
*Error schema*: `{ "error": { "code": 1234, "message": "...", "details": [...] }}`.  
*Security*: Mutual TLS + JWT with short expiry; rotate keys via JWKS endpoint.  
*Testing*: End‑to‑end contract tests (e.g., Pact) + unit tests for each handler.

**4️⃣ Edge Cases**  
- Clients sending malformed JSON → 400 + helpful message.  
- Large payloads → chunked transfer, size limits.  
- Concurrent updates → optimistic locking (`ETag`/`If-Match`).  
- Deprecation: `Deprecation` header and graceful fallback.

**5️⃣ Optimize & Communicate**  
Explain trade‑offs (header vs URI versioning), justify pagination choice, highlight how hypermedia can be optional to keep APIs lean. Conclude with a quick demo of an OpenAPI snippet to show clarity. This structure demonstrates problem decomposition, technical depth, and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
