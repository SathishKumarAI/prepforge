---
qid: ing_502e53c6b0__fp__local
question: 'Explain: Best Practices for Designing a Pragmatic RESTful API'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 585
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:55:46-05:00'
sources: []
---

**Why a “pragmatic” REST API exists**

When you expose data as HTTP resources you solve *inter‑process communication* under the constraints of the web: statelessness, cacheability, and a fixed set of verbs (GET/POST/PUT/PATCH/DELETE).  
A pragmatic design balances these constraints with developer ergonomics; it turns the HTTP stack into an *optimization problem*: minimize round‑trips while keeping the contract stable.

---

### 1. Keep resources **hierarchical but flat**

```
/users/{id}/posts → /users/{userId}/posts
```

*Why?* A single level of nesting keeps URLs cacheable and avoids deep trees that explode with every new endpoint. Treat sub‑resources as independent entities; expose them at the top level if they are queried often.

### 2. Use **stateless verbs** + *semantic status codes*

| Verb | Intent | Status code |
|------|--------|-------------|
| GET  | Retrieve | 200 OK / 304 Not Modified |
| POST | Create | 201 Created (Location header) |
| PATCH| Partial update | 204 No Content |
| DELETE| Remove | 204 No Content |

*Why?* The status code becomes a cheap form of *information flow*: the client learns what happened without parsing bodies.

### 3. Version via **media type** (`Accept: application/vnd.myapi.v2+json`)

Avoid URL bumps; let clients negotiate. It lets you evolve the contract (new fields, deprecations) while keeping backward compatibility.

### 4. Hypermedia as the engine of change

Expose links (`self`, `next`, `prev`) in responses. The client learns *how to navigate* without hard‑coding URLs—an early step toward HATEOAS and self‑describing APIs.

---

#### Non‑obvious insight

> **The “GET → POST” pair is not a CRUD shortcut; it’s a contract of intent.**  
> GET must never alter state, while POST may be idempotent *or* non‑idempotent depending on the resource. By explicitly documenting this difference (e.g., `POST /orders` creates an order, but `POST /orders/{id}/cancel` is an action), you give clients a clear **semantic contract** that prevents accidental data loss.

---

In short:  
- Keep URLs shallow and cacheable.  
- Use verbs + status codes as the primary signal.  
- Negotiate media types for evolution.  
- Hypermedia for discoverability.  

These principles turn HTTP into an *optimization engine* that balances performance, clarity, and future‑proofing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
