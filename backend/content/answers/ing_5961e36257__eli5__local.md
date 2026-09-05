---
qid: ing_5961e36257__eli5__local
question: 'Explain: Room Type APIs (Admin) — Airbnb System Design - by Neo Kim and
  Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 302
total_tokens: 468
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:58:11-05:00'
sources: []
---

Think of the Airbnb platform as a huge hotel chain that lets anyone list rooms, but only the “hotel managers” (the admins) can decide what kinds of rooms are available—studio, one‑bedroom, loft, etc.—and set their rules.

**Room‑type API** is the manager’s control panel. It lets them:

1. **Create a new room type** – add a label (“Suite”) and describe its features (beds, size, amenities).  
2. **Read or list all types** – see every room style in the system so they can audit or tweak it.  
3. **Update an existing type** – change a name or adjust the default price range.  
4. **Delete a type** – remove a category that is no longer offered.

Behind the scenes, the API talks to a database table called *RoomTypes*. Each record stores:

- `id` (unique key)  
- `name` (e.g., “Two‑bedroom”)  
- `description`  
- `default_price`  

When a user searches for listings, the system pulls this table to know which rooms belong to which type and applies the correct pricing rules. So, just like a hotel manager updates its catalog of room styles, the admin API lets Airbnb keep its inventory organized and up‑to‑date.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
