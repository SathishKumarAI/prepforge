---
qid: ing_244fd6be85__think__local
question: 'Explain: Hotel APIs (Admin) — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 469
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:04:54-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   * Identify the “Hotel APIs (Admin)” component of the Airbnb‑style system: which admin functions (listing CRUD, pricing, availability) are relevant.  
   * Assume a microservice architecture, REST/GraphQL endpoints, and typical constraints (high traffic, data consistency, multi‑tenant).  

**2️⃣ Adopt a design framework**  
   * Use the **“Identify entities → Define responsibilities → Sketch API contracts → Consider scaling & consistency”** pattern.  
   * Map to common SaaS patterns: versioned APIs, authentication/authorization, rate limiting, idempotency.

**3️⃣ Step‑by‑step reasoning**  
   1. List core admin actions (create/edit/delete listing, set pricing calendar, manage photos).  
   2. For each action, decide on HTTP verb + URI shape, payload structure, and response format.  
   3. Determine data models: `Hotel`, `Room`, `AvailabilityPeriod`, `PriceRule`.  
   4. Think about state transitions (e.g., “draft → published”) and how they affect read APIs.  
   5. Add cross‑cutting concerns: audit logs, notifications, cache invalidation.  

**4️⃣ Watch out for common pitfalls**  
   * Mixing data and behavior in the same endpoint (over‑loading URLs).  
   * Ignoring idempotency on POST/PUT that can cause duplicate listings.  
   * Forgetting tenant isolation—one admin should never see another’s data.  
   * Not accounting for eventual consistency when updating availability across multiple nodes.

**5️⃣ Sanity check & verbalize**  
   * Run a quick “does this handle 1 M requests/day?” test: estimate throughput, pick appropriate load‑balancing and caching strategies.  
   * Explain to a peer: “We expose `/admin/hotels` for CRUD, use PATCH for partial updates, enforce RBAC with JWT scopes, and emit events on changes so other services stay in sync.”  

Follow this loop whenever you need to design or explain an admin‑side API in a large system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
