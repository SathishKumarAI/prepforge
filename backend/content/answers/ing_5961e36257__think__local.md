---
qid: ing_5961e36257__think__local
question: 'Explain: Room Type APIs (Admin) — Airbnb System Design - by Neo Kim and
  Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 469
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:54:19-05:00'
sources: []
---

**1. Clarify scope & assumptions**  
   * Identify what “Room Type APIs (Admin)” means in Airbnb’s context: endpoints that let admins create, read, update, or delete room types (e.g., entire home, private room).  
   * Assume a micro‑service architecture with REST/GraphQL, stateless servers, and eventual consistency.  

**2. Adopt a design framework**  
   * Use the classic **CRUD + Domain‑Driven Design** lens: map each API to a domain command or query.  
   * Apply the **Single Responsibility Principle**: keep business logic in services, persistence in repositories.  

**3. Step‑by‑step reasoning**  
   1. List required operations (POST /room-types, GET /room-types/{id}, PUT /room-types/{id}, DELETE /room-types/{id}).  
   2. Define request/response schemas and validation rules (e.g., unique name, allowed amenities).  
   3. Decide on authentication/authorization: admin role via JWT + RBAC.  
   4. Choose data store (relational for consistency, sharding by region).  
   5. Plan caching (Redis) for read‑heavy GETs and cache invalidation on writes.  
   6. Sketch eventual consistency: use event bus to propagate changes to listings.  

**4. Common traps to avoid**  
   * Mixing admin logic with user APIs—leads to duplicated code.  
   * Ignoring idempotency on PUT/DELETE; clients may retry on network hiccups.  
   * Over‑optimizing early: premature caching can mask schema changes.  

**5. Sanity‑check & verbalize**  
   * Verify that each endpoint meets security, performance, and reliability goals.  
   * Explain trade‑offs aloud (e.g., ACID vs. scalability).  
   * Rehearse the flow: “When an admin creates a room type, we validate → persist → publish event → update cache.”  

This structured approach keeps your explanation clear, covers all design dimensions, and helps others reproduce the reasoning process.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
