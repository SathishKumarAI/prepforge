---
qid: ing_badda665bd__think__local
question: 'Explain: public endpoints um that we''ve sort of — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 456
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:16:24-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - Identify what “public endpoints” means in this context (API surface exposed to users).  
   - Assume a typical parking‑garage system: cars enter, get a spot, pay, and exit.  
   - Decide on user roles (driver, admin, payment gateway) and the data each needs.

**2️⃣ Adopt a layered design framework**  
   - *Client layer*: mobile/web UI or IoT sensors.  
   - *API gateway / ingress*: handles routing, rate‑limiting, auth.  
   - *Service layer*: core parking logic (availability, reservations).  
   - *Persistence & caching*: database for spots, Redis for hot spot counts.

**3️⃣ Build the endpoint map step‑by‑step**  
   1. `POST /enter` – register arrival, return assigned spot and QR code.  
   2. `GET /spot/{id}` – query current status of a specific spot.  
   3. `PUT /reserve` – reserve ahead of time (requires auth).  
   4. `POST /pay` – process payment via external gateway; idempotent.  
   5. `DELETE /exit` – free the spot, log exit time.  
   6. `/admin/*` endpoints for maintenance (add/remove spots, view stats).

**4️⃣ Avoid common pitfalls**  
   - Don’t expose raw DB IDs or internal state; use opaque tokens.  
   - Forget idempotency on payment → duplicate charges.  
   - Over‑exposing admin routes → tighten auth scopes.

**5️⃣ Sanity‑check & verbalize**  
   - Walk through a driver’s journey: enter → spot allocation → pay → exit.  
   - Verify each step maps to an endpoint, has proper HTTP verb, status codes, and error handling.  
   - Communicate that the public API is minimal, secure, and follows REST principles while hiding internal complexity.

This structured approach lets you articulate a clear, scalable design for the parking‑garage system’s public-facing endpoints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
