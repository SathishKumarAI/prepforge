---
qid: ing_8003ca0fc7__faang__local
question: 'Explain: 1.2. Client-Server — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 531
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:42:52-05:00'
sources: []
---

**Clarify**  
The interview asks: *“Explain what a client‑server architecture is and, in that context, describe REST (and its API tutorial).”*  
Assumptions: we’re targeting developers who have seen HTTP, JSON, and simple CRUD services; the focus is on architectural principles rather than implementation details.

---

**Approach**  
1. Define client–server basics.  
2. Introduce REST as a style that fits this model.  
3. Walk through a quick REST‑API tutorial: resources, verbs, status codes, and statelessness.  

---

**Depth**  

| Layer | What it does | Why it matters |
|-------|--------------|----------------|
| **Client** | UI or service that consumes data | Drives UX; decouples from backend logic |
| **Server** | Hosts business logic, persists state | Scales horizontally; can be swapped without breaking clients |

REST (Representational State Transfer) is a *stateless* architectural style built on HTTP.  
- **Resources** are identified by URIs (`/users/123`).  
- **HTTP verbs** map to CRUD: `GET`, `POST`, `PUT/PATCH`, `DELETE`.  
- **Status codes** communicate outcome (200 OK, 201 Created, 404 Not Found).  
- **Representations** (JSON, XML) are payloads that the client consumes or sends.  

*Tutorial snippet:*  
```http
GET /books/42 HTTP/1.1
Host: api.example.com
Accept: application/json

# Response
HTTP/1.1 200 OK
Content-Type: application/json
{ "id":42, "title":"Clean Code", ... }
```

Because each request contains all needed info (stateless), servers can scale by adding replicas without session‑sharing overhead.

---

**Edge Cases**  
- **Large payloads:** use pagination or streaming.  
- **Security:** enforce HTTPS, OAuth scopes, input validation.  
- **Versioning:** `/v1/…` or custom headers to avoid breaking clients.

---

**Optimize & Communicate**  
Highlight trade‑offs: statelessness simplifies scaling but may increase bandwidth; caching (ETag, If‑Modified‑Since) mitigates that. Explain how you’d iterate on the API design—start with minimal endpoints, then add filters/relationships as needed. Conclude by stressing the importance of clear documentation (OpenAPI/Swagger) to keep clients in sync.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
