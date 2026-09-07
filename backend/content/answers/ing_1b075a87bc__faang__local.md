---
qid: ing_1b075a87bc__faang__local
question: 'Explain: HTTP Method Behavior — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 497
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:47:58-05:00'
sources: []
---

**1️⃣ Clarify**  
The interview asks how *idempotent* HTTP methods work and why that matters for system design.  
Assumptions: we’re talking about REST‑style APIs over HTTP/HTTPS, a distributed backend (microservices or monolith), and typical CRUD semantics.

**2️⃣ Approach**  
Explain the idempotency contract → identify which verbs are idempotent by definition (GET, PUT, DELETE) vs non‑idempotent (POST).  
Then map that to architectural patterns: use of *resource identifiers*, *safe* operations, retry logic, and eventual consistency.  
Finally discuss how we enforce or document this in the codebase.

**3️⃣ Depth**  
- **GET** – safe & idempotent; no state change.  
- **PUT** – replace a resource at a known URI; repeated calls produce the same state.  
- **DELETE** – removing an existing resource is idempotent (second delete sees “not found” but result remains).  
- **POST** – non‑idempotent: each call creates a new entity or triggers side effects.

In distributed systems we guarantee idempotency by using *unique request IDs* or *transactional outbox patterns*, so retries don’t duplicate work. We also expose an *Idempotency-Key* header for POST/PUT to dedupe on the server. Complexity: O(1) lookup of key → constant‑time idempotent handling.

**4️⃣ Edge Cases**  
- Partial updates (PATCH) can be idempotent if designed carefully; otherwise treat as non‑idempotent.  
- Deleting a resource that was already deleted should return 404 or 204 consistently.  
- Race conditions: two concurrent PUTs must resolve deterministically (e.g., last‑write wins vs versioning).  

**5️⃣ Optimize & Communicate**  
Highlight that idempotency simplifies client retry logic, reduces load on backends, and improves user experience under flaky networks. Explain trade‑offs: adding idempotency keys adds storage overhead but saves duplicate processing costs. Conclude with a design diagram or pseudocode snippet showing request key lookup → state check → action. This showcases clear reasoning, technical depth, and practical system insight—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
