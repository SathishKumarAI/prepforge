---
qid: ing_fd94a2b7cf__faang__local
question: 'Explain: Idempotency — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 518
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:29:44-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of *idempotency* as it applies to APIs, why it matters for distributed systems, and how you would design an endpoint that guarantees idempotent behavior.

**Approach**  
1. Define “API” in the context of REST/HTTP services.  
2. Explain the idempotence property for HTTP verbs (GET, PUT, DELETE).  
3. Show a concrete example: creating a resource with POST vs. using PUT with an explicit ID.  
4. Discuss how to enforce idempotency—request IDs, server‑side state, retry logic.  

**Depth**  
- **API**: A contract exposing operations over HTTP/JSON that clients invoke; stateless by design but may maintain persistent state on the server.  
- **Idempotent verb**: Performing an operation once or many times has the same effect and return value (e.g., `PUT /users/123` with the same payload always sets user 123 to that state).  
- **Non‑idempotent**: `POST /orders` creates a new order each time. To make it idempotent, the client sends a unique *Idempotency-Key*; the server stores the result keyed by this ID and returns the cached response on duplicates.  
- **Implementation**: Store `(key → response)` in a fast store (Redis), enforce TTL, and guard against race conditions with optimistic locking. Complexity is O(1) per request, but you add storage and potential latency for key lookups.

**Edge Cases**  
- Duplicate keys across microservices—use namespaced IDs.  
- Long‑running operations—return an “accepted” status and poll instead of forcing idempotency.  
- Cache invalidation when underlying data changes.

**Optimize & Communicate**  
Highlight trade‑offs: extra storage vs. safety from accidental duplicates, and explain that idempotent APIs improve client reliability (e.g., network retries) without compromising correctness. End with a quick example of an endpoint signature (`PUT /resources/{id}`) and the use of `Idempotency-Key` header for POST scenarios. This demonstrates clear structure, depth, and practical design insight—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
