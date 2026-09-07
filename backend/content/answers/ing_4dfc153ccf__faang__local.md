---
qid: ing_4dfc153ccf__faang__local
question: 'Explain: REST APIs (JSON based) — Restapis'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 602
total_tokens: 836
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:45:58-05:00'
sources: []
---

**Clarify**  
The interviewee asks to explain *REST APIs that use JSON*. I’ll confirm they want a high‑level overview of the architectural principles, how JSON fits in, and typical patterns for designing such endpoints.

---

### 1️⃣ Clarify
- **Scope:** RESTful web services exposing data via HTTP verbs (GET, POST, PUT/PATCH, DELETE).  
- **Format:** Payloads encoded as JSON (JavaScript Object Notation).  
- **Assumptions to confirm:** Do we need to cover authentication, versioning, pagination, or just the core concept?

---

### 2️⃣ Approach
1. Outline REST fundamentals: statelessness, resource identification via URIs, and CRUD semantics.  
2. Show how JSON is chosen for payloads (human‑readable, language‑agnostic, native to web browsers).  
3. Mention common response patterns (status codes, hypermedia links), error handling, and versioning strategies.

---

### 3️⃣ Depth
- **Resources & URIs:** `GET /users/123` → retrieve user; `POST /users` → create.  
- **Statelessness:** Each request contains all info; server doesn’t keep session state.  
- **HTTP verbs → CRUD:** GET=read, POST=create, PUT/PATCH=update, DELETE=remove.  
- **JSON payload example:**
  ```json
  {
    "id": 123,
    "name": "Alice",
    "email": "alice@example.com"
  }
  ```
- **Status codes:** 200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Internal Server Error.  
- **Pagination & filtering:** Query params like `?page=2&limit=50`.  
- **Hypermedia (HATEOAS):** Links in responses (`"links": [{"rel":"self","href":"/users/123"}]`).  
- **Versioning:** URI versioning (`/v1/users`) or header-based (`Accept: application/vnd.myapi.v2+json`).

---

### 4️⃣ Edge Cases
- **Large payloads** → streaming or chunked responses.  
- **Concurrent updates** → optimistic locking with ETag headers.  
- **Security:** enforce HTTPS, use OAuth/JWT tokens, sanitize inputs to avoid injection.

---

### 5️⃣ Optimize & Communicate
- Emphasize that JSON’s lightweight nature keeps bandwidth low; however, for binary data consider multipart or base64 encoding.  
- Highlight caching strategies (ETag, Last‑Modified) to reduce load.  
- Conclude by noting that a well‑designed REST/JSON API is platform‑agnostic, easy to test with tools like Postman, and scales horizontally because of statelessness.

*Total words: ~200*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
