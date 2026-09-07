---
qid: ing_158729f603__faang__local
question: 'Explain: REST APIs — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 510
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:33:09-05:00'
sources: []
---

**Clarify**  
We’re asked to design a **RESTful API** that powers a TinyURL‑style URL shortener: given a long URL, return a compact token; later, resolve the token back to the original URL and redirect the user. I’d confirm whether we need analytics (click counts), custom aliases, rate limiting, or multi‑tenant support.

**Approach**  
1. **Endpoints**  
   - `POST /shorten` – body: `{ "url": "<long>", "customAlias?" }` → returns `{ "id": "<token>" }`.  
   - `GET /{id}` – redirects to the long URL (HTTP 302).  
2. **Data Model** – a table (`id PK`, `original_url`, `created_at`, optional `clicks`).  
3. **Token Generation** – base‑62 incremental counter or hash‑based deterministic ID; ensure uniqueness and collision safety.  
4. **Storage & Cache** – primary DB (e.g., PostgreSQL) + in‑memory cache (Redis) for fast lookups.  
5. **Security & Rate Limiting** – API key auth, per‑IP request caps, input validation.

**Depth**  
- *Complexity*: `POST` is O(1) write; `GET` is O(1) read with cache hit, otherwise DB lookup.  
- *Scalability*: Horizontal scaling via stateless services and sharded Redis.  
- *Fault Tolerance*: Replicated DB, retry on transient failures, circuit breaker for external calls.

**Edge Cases**  
- Duplicate URLs → return same token (idempotent).  
- Invalid URLs → 400 Bad Request.  
- Custom alias collision → 409 Conflict.  
- Token not found → 404 Not Found.  
- Exceeding rate limit → 429 Too Many Requests.

**Optimize & Communicate**  
We could add click analytics, TTL for short links, and support for vanity domains. In discussion I’d highlight trade‑offs: deterministic hashing reduces DB writes but may expose patterns; random tokens improve security but require collision handling. The key is a clean REST interface, solid data model, caching strategy, and clear error semantics—exactly what FAANG interviewers look for in a well‑structured solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
