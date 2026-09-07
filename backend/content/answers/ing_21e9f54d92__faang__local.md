---
qid: ing_21e9f54d92__faang__local
question: 'Explain: Methods and Status Codes — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 648
total_tokens: 884
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:03:27-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the core HTTP/HTTPS **methods** (verbs) and **status‑code families**, and how they fit into a typical web‑service architecture. I’ll assume we’re designing a RESTful API that must be scalable, secure, and observable.

**Approach**  
1. List standard verbs with semantics.  
2. Group status codes by 1xx–5xx ranges and key examples.  
3. Show how each maps to common design patterns (CRUD, idempotency, caching).  
4. Highlight security & observability concerns.

**Depth**

| Method | Semantics | Typical CRUD mapping |
|--------|-----------|----------------------|
| **GET** | Read, safe, cacheable | Retrieve |
| **POST** | Create or trigger action | Create (non‑idempotent) |
| **PUT** | Replace/overwrite entire resource | Update (idempotent) |
| **PATCH** | Partial update | Update (partial) |
| **DELETE** | Remove resource | Delete |
| **HEAD** | Same as GET, no body | Metadata fetch |
| **OPTIONS** | Discover capabilities | CORS preflight / introspection |

Status‑code families:

- **1xx** – Informational (e.g., 100 Continue for large uploads).  
- **2xx** – Success: 200 OK, 201 Created, 204 No Content.  
- **3xx** – Redirection: 301/302 for moved resources; useful in CDN cache invalidation.  
- **4xx** – Client error: 400 Bad Request (validation), 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict (optimistic concurrency).  
- **5xx** – Server error: 500 Internal, 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout.

Design notes:  
* Use idempotent verbs for safe retry; expose ETags for conditional GET/PUT.  
* Leverage `Location` header on 201 to point clients to the new URI.  
* For large payloads, combine POST with 100 Continue and chunked transfer encoding.  

**Edge Cases**

- **Overloading POST**: when a client sends a POST that could be interpreted as idempotent—use explicit `Idempotency-Key`.  
- **Large responses**: consider 206 Partial Content for range requests.  
- **Missing resources**: 410 Gone vs. 404 Not Found; choose based on business logic.

**Optimize & Communicate**

*Explain the trade‑offs*: e.g., PUT requires full payload → higher bandwidth, but guarantees state consistency; PATCH reduces traffic at the cost of more complex merge logic.  
*Observability*: log status codes per endpoint; use metrics to surface 5xx spikes and auto‑scale.  

This structured view shows clear mapping from HTTP primitives to scalable system design, satisfying FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
