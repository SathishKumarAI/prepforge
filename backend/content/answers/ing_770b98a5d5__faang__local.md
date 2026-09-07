---
qid: ing_770b98a5d5__faang__local
question: 'Explain: HTTP API Codes — Rest'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 652
total_tokens: 882
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:20:46-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of HTTP status codes used in RESTful APIs and how they signal success or failure. I’ll assume the audience knows basic HTTP but not the conventions used by REST designers.

**Approach**  
1. Define the status‑code ranges (1xx–5xx).  
2. Highlight the most common “REST”‑specific codes: 200, 201, 204, 400, 401/403, 404, 409, 422, 500.  
3. Explain each code’s intent and typical response body.  
4. Mention idempotency and safe verbs.

**Depth**  
| Code | Meaning (REST) | Typical Use | Body Hint |
|------|----------------|-------------|-----------|
| **200 OK** | Successful GET/PUT/PATCH; returns representation. | `GET /users/1` | JSON user |
| **201 Created** | Resource created; Location header points to new URI. | `POST /posts` | JSON of new post, maybe ID |
| **204 No Content** | Success but no payload (e.g., DELETE). | `DELETE /items/5` | Empty body |
| **400 Bad Request** | Client error: malformed syntax or validation failure. | `POST /login` with missing field | Error details |
| **401 Unauthorized** | Authentication required; token missing/invalid. | Any protected endpoint without bearer token | Auth challenge |
| **403 Forbidden** | Authenticated but no permission. | Accessing admin route | Message |
| **404 Not Found** | Resource doesn’t exist (e.g., wrong ID). | `GET /orders/9999` | Error |
| **409 Conflict** | Duplicate resource or version conflict (optimistic locking). | `POST /users` with existing email | Details |
| **422 Unprocessable Entity** | Semantic validation errors. | `PATCH /profile` with bad data | Field‑level errors |
| **500 Internal Server Error** | Unexpected server failure; non‑recoverable. | Crash in business logic | Stack trace (dev) |

REST leverages these codes to make APIs self‑documenting and client‑friendly: a 201 tells the caller where the new resource lives, while 409 signals that they must resolve a conflict before retrying.

**Edge Cases**  
* Ambiguous 200 vs. 204 when body is empty.  
* 301/302 redirects can break RESTful idempotency if not handled.  
* Clients misinterpreting 404 as “delete‑already‑gone” vs. “resource never existed.”  

Testing: mock each status, verify client error handling and retry logic.

**Optimize & Communicate**  
Emphasize that choosing the right code reduces boilerplate error handling on clients, improves caching (e.g., 304 Not Modified), and aligns with HATEOAS principles. Conclude by noting that while REST encourages these conventions, real‑world APIs sometimes diverge; being explicit in documentation mitigates confusion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
