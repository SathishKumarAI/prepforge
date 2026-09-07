---
qid: ing_49507a339d__faang__local
question: 'Explain: Resource Methods — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 522
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:34:31-05:00'
sources: []
---

**1️⃣ Clarify**  
The interviewer wants a concise explanation of *REST* and how it powers RESTful APIs, plus an overview of “resource methods” (HTTP verbs). I’ll assume they’re looking for the core principles, typical usage patterns, and a quick example.

**2️⃣ Approach**  
I’ll:  
- Restate the question.  
- Cover REST’s architectural constraints.  
- Map those to HTTP verbs (GET, POST, PUT, PATCH, DELETE).  
- Give a minimal URL‑resource mapping.  
- Mention status codes and statelessness.  

**3️⃣ Depth**  
REST = *Representational State Transfer*. It treats every entity as a **resource** identified by a URI. Clients manipulate resources via **HTTP verbs**:  

| Verb | Action | Typical Use |
|------|--------|-------------|
| `GET` | Retrieve representation | `/users/123` |
| `POST` | Create new resource | `/users` (body contains user data) |
| `PUT` | Replace entire resource | `/users/123` (full payload) |
| `PATCH` | Update part of a resource | `/users/123` (partial payload) |
| `DELETE` | Remove resource | `/users/123` |

RESTful services are **stateless**—each request carries all needed context. Responses include status codes (`200 OK`, `201 Created`, `404 Not Found`) and often a JSON body. Pagination, filtering, and HATEOAS (links in responses) are common extensions.

**4️⃣ Edge Cases**  
- Over‑using `PUT` for partial updates can be wasteful; prefer `PATCH`.  
- Idempotence: `POST` is non‑idempotent—multiple identical requests may create duplicates.  
- Large payloads might necessitate chunked transfer or pagination.  
- Proper error handling (e.g., `422 Unprocessable Entity`) ensures clients know why a request failed.

**5️⃣ Optimize & Communicate**  
I’d highlight that REST’s simplicity encourages cacheability, easy versioning via URI (`/v1/...`), and language‑agnostic consumption. If asked further, I’d discuss rate limiting or using GraphQL as an alternative when over-fetching is problematic. This structured walk‑through showcases clear communication, deep knowledge, and awareness of practical trade‑offs—exactly what FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
