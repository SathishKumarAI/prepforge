---
qid: ing_5bfbe429f4__faang__local
question: 'What is a Resource? — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 611
total_tokens: 847
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:17:13-05:00'
sources: []
---

**Clarify**  
The interviewer asks two related questions: *What is a “resource” in the context of web services?* and *What is REST (Representational State Transfer) and how does it shape API design?* I’ll assume we’re talking about HTTP‑based APIs, not internal messaging or gRPC.

---

**Approach**  
1. Define “resource” as an identifiable entity exposed by a service.  
2. Explain the REST architectural style: statelessness, client–server separation, cacheability, layered system, and uniform interface.  
3. Tie resources to HTTP verbs (GET, POST, PUT, DELETE).  
4. Highlight best‑practice patterns for naming, versioning, and error handling.

---

**Depth**

| Concept | Detail |
|---------|--------|
| **Resource** | Any object or concept that can be addressed by a URI – e.g., `/users/123`, `/orders/456/items`. It is *stateful* on the server but *stateless* from the client’s perspective. |
| **Uniform Interface** | 4 constraints: resource identification via URIs, manipulation through representations (JSON/XML), self‑descriptive messages, hypermedia as the engine of application state (HATEOAS). |
| **HTTP Verbs** | `GET` – read; `POST` – create; `PUT/PATCH` – update; `DELETE` – remove. Use plural nouns for collections (`/users`). |
| **Status Codes** | 200 OK, 201 Created, 204 No Content, 400 Bad Request, 404 Not Found, 409 Conflict, etc. |
| **Caching** | Cache‑control headers (`ETag`, `Last-Modified`) to reduce round trips. |
| **Versioning** | `/v1/users` or header-based versioning; keep URLs stable for backward compatibility. |

---

**Edge Cases**

* URI collisions (e.g., `/users/active`).  
* Deeply nested resources vs. flattened representations.  
* Idempotency of `PUT` vs. non‑idempotent `POST`.  
* Large payloads – consider pagination, streaming.

---

**Optimize & Communicate**

- Emphasize that a *resource* is the abstraction; REST is the set of constraints that make APIs discoverable and scalable.  
- Mention that while hypermedia (HATEOAS) isn’t mandatory for many services, it improves client autonomy.  
- Conclude with a quick example: `GET /orders/42` returns JSON; `POST /orders` creates one; `DELETE /orders/42/items/7` removes an item.

This structured answer showcases clear communication, technical depth, and awareness of real‑world pitfalls—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
