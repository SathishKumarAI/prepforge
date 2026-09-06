---
qid: ing_ff4b9d2af9__think__local
question: 'Explain: Codifying the design of robust APIs — Designing robust and predictable
  APIs with idempotency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 425
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:51:53-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   * Define “robust” (resilient to misuse, clear error handling) and “predictable” (consistent behavior across calls).  
   * Assume a REST‑style API in a microservices context; idempotency applies to state‑changing operations.  

**2️⃣ Adopt a mental model: the request–response life cycle**  
   * Map each HTTP verb → operation type (read, create, update, delete).  
   * For state‑changing verbs (POST/PUT/PATCH/DELETE), decide which are idempotent by definition and which need explicit handling.  

**3️⃣ Step‑by‑step reasoning**  
   1. **Identify operations** that modify resources.  
   2. **Mark inherently idempotent ones**: `GET`, `PUT`, `DELETE`.  
   3. **Design POST/ PATCH to be idempotent** by requiring a client‑supplied idempotency key (e.g., header `Idempotency-Key`).  
   4. **Enforce uniqueness** of the key in a store with TTL; repeat requests return the same result.  
   5. **Document contract**: what status codes mean, how to retry, and error payloads.  

**4️⃣ Avoid common pitfalls**  
   * Don’t assume idempotency automatically from “PUT”; validate that updates are truly safe.  
   * Skip key validation logic; it becomes a source of bugs if omitted.  
   * Over‑expose internal implementation details in the API contract.  

**5️⃣ Sanity‑check & communicate**  
   * Run through edge cases: duplicate POST, network failure mid‑operation, concurrent updates.  
   * Present a concise cheat‑sheet to stakeholders: verb → idempotent? key needed? example request/response.  
   * Iterate with developers and QA to confirm the design holds under real traffic patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
