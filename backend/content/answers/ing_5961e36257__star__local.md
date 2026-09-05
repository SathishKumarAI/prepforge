---
qid: ing_5961e36257__star__local
question: 'Explain: Room Type APIs (Admin) — Airbnb System Design - by Neo Kim and
  Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 334
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:26:32-05:00'
sources: []
---

**Situation** – In my last role I was tasked with revamping the admin panel for a vacation‑rental marketplace, where hosts could list multiple room types per property (studio, one‑bedroom, entire home). The existing API was monolithic and caused slow response times during peak listing windows.

**Task** – Design a scalable “Room Type” micro‑service that allows admins to create, update, delete, and query room configurations while ensuring data consistency across listings, pricing, and availability calendars.

**Action** – I broke the service into four RESTful endpoints (POST/GET/PATCH/DELETE) with idempotent design. Using a CQRS pattern, the write side persisted in a sharded PostgreSQL cluster, whereas reads were served from a read‑replica cache layer via Redis. I added optimistic locking with version tokens to prevent race conditions when multiple admins edited the same room type concurrently. For bulk updates, I introduced an event‑driven pipeline (Kafka) that asynchronously updated search indices and booking calendars.

**Result** – The new API cut admin request latency from 350 ms to under 80 ms, even under a 4× traffic spike during peak seasons. Error rates dropped by 95%, and hosts reported a 20% faster time‑to‑publish for new room types. I learned that separating concerns with CQRS and caching can dramatically improve both developer experience and end‑user satisfaction in high‑volume marketplaces.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
