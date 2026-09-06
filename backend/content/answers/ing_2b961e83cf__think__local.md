---
qid: ing_2b961e83cf__think__local
question: 'Explain: Being a good distributed citizen — Designing robust and predictable
  APIs with idempotency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 408
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:33:00-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
*Ask what “distributed citizen” means in this context (a service that talks to others over a network). Assume we’re designing REST/HTTP APIs for micro‑services that must be fault‑tolerant and idempotent.  

**2️⃣ Adopt the “design‑first, then implement” mental model**  
Use the API‑design lifecycle: define resources → specify HTTP verbs & status codes → add idempotency keys & retry semantics → document contract with OpenAPI/GraphQL. Think in terms of *client‑side* expectations and *server‑side* guarantees.  

**3️⃣ Step‑by‑step reasoning**  
- **Identify actions that modify state** (POST, PUT, DELETE).  
- For each, decide if it can be made idempotent: e.g., use `PUT /orders/123` instead of `POST /orders`.  
- Add an `Idempotency-Key` header for non‑idempotent POSTs; store the key + result in a persistent map.  
- Return consistent status codes (`201 Created`, `200 OK`, `409 Conflict`).  
- Provide retry‑safe error handling (e.g., 5xx with no side‑effects).  

**4️⃣ Avoid common traps**  
- Don’t rely on client caching alone; enforce server‑side idempotency.  
- Beware of partial failures: make state changes atomic or use compensating actions.  
- Don’t over‑complicate the API with hidden state; keep the contract clear and versioned.  

**5️⃣ Sanity‑check & communicate**  
- Walk through a failure scenario (network drop, duplicate request).  
- Verify that the client sees the same result each time.  
- Explain to stakeholders how idempotency keys and consistent responses make services “robust” and “predictable.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
