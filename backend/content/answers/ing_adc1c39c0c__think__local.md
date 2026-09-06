---
qid: ing_adc1c39c0c__think__local
question: 'Explain: schema side of things how we''re going — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 534
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:26:56-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
   - Confirm whether “schema side” means *data modeling* (tables, relationships) or *system design* (components).  
   - Assume a large‑scale parking garage system: cars enter/exit, spots are tracked, payments processed.  
   - Note constraints: high traffic, real‑time availability, integration with payment & notification services.

**2️⃣ Adopt a layered mental model**  
   1. **Domain entities** (Vehicle, Spot, Ticket, Payment).  
   2. **Relationships** (one vehicle per spot at a time, one ticket per entry).  
   3. **Business rules** (spot assignment policy, pricing tiers).  
   4. **Persistence patterns** (relational DB for transactions + in‑memory cache for availability).

**3️⃣ Step‑by‑step reasoning**  
   - Map each entity to a table: `vehicles(vin PK)`, `spots(id PK, level, status)`, `tickets(id PK, spot_id FK, vehicle_vin FK, entry_time, exit_time)`, `payments(tick_id FK, amount, status)`.  
   - Define foreign keys for referential integrity.  
   - Add indexes on `spots(status)` and `tickets(spot_id)` for fast lookup.  
   - Consider a composite key `(level, spot_number)` for uniqueness.  
   - Outline CRUD operations: create ticket → reserve spot; update ticket on exit → free spot; record payment.

**4️⃣ Avoid common pitfalls**  
   - Don’t ignore concurrency: two cars can hit the same spot if not locked.  
   - Avoid over‑normalization (e.g., splitting every small attribute into its own table).  
   - Remember to store timestamps in UTC and keep a time zone for display only.

**5️⃣ Sanity check & verbalize**  
   - Review that each entity has a clear purpose, relationships are one‑to‑many or many‑to‑one as needed.  
   - Speak out loud: “We have a `spots` table holding the current state; tickets link vehicles to spots; payments tie back to tickets.”  
   - Verify that the schema supports required queries (e.g., find all free spots on level 3 in under 50 ms).  

Follow this flow, and you’ll present a coherent, interview‑ready schema design for the parking garage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
