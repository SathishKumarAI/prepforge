---
qid: ing_770b98a5d5__fp__local
question: 'Explain: HTTP API Codes — Rest'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 401
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:17:42-05:00'
sources: []
---

**Why HTTP status codes matter in REST**

REST is a *stateless* architectural style that treats every request as an operation on a *resource*.  
The client does not keep any session state; the server must therefore communicate the **result of that operation** unambiguously.  
A status code is the minimal, language‑agnostic “signal” that tells the client:  

1. **Success vs. failure** – 2xx vs. 4xx/5xx.  
2. **Nature of the outcome** – `200 OK` (generic success), `201 Created` (resource created), `204 No Content` (operation succeeded but no body).  
3. **Error context** – `400 Bad Request` (syntax wrong), `404 Not Found` (no such URI), `409 Conflict` (state conflict, e.g., concurrent updates), `422 Unprocessable Entity` (semantic validation failure).

These codes stem from *information theory*: a small set of symbols conveys the full semantics of an HTTP transaction, keeping bandwidth low and parsing trivial.  

**Non‑obvious insight:**  
The distinction between **409 Conflict** and **422 Unprocessable Entity** is subtle yet powerful. A 409 indicates that the request conflicts with the current state of the target resource (e.g., two clients attempting to set a unique field simultaneously). It invites the client to retry after reconciling state, whereas 422 signals that the payload itself violates business rules and should be corrected before re‑submitting. Treating them separately lets APIs provide precise feedback without extra headers or bodies—an elegant use of the status code space.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
