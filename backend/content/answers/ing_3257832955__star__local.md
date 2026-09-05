---
qid: ing_3257832955__star__local
question: 'Explain: Difference Between save and saveOrUpdate in Hibernate'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 335
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:09:14-05:00'
sources: []
---

**Situation** – In a recent e‑commerce microservice we were migrating the order persistence layer from raw JDBC to Hibernate. Our legacy code had a bulk import job that read CSVs of orders, sometimes inserting new records, sometimes updating existing ones if an order number already existed.

**Task** – I needed to decide whether to use `Session.save()` or `Session.saveOrUpdate()` for each order entity so the batch ran fast and stayed idempotent. The goal was a 30 % throughput increase without duplicating rows.

**Action** – I wrote a small benchmark: with `save()` I first checked `orderRepository.existsById(order.id)` to decide if I should call `update` or `save`. With `saveOrUpdate()`, I let Hibernate decide based on the entity’s identifier. I also enabled second‑level caching and turned off auto‑flush during the loop. The key difference: `save()` always issues an INSERT; it throws an exception if the PK exists. `saveOrUpdate()` checks the session cache – if the object is transient it inserts, otherwise it updates.

**Result** – Switching to `saveOrUpdate()` cut the batch time from 12 min to 8 min (≈33 % faster) and eliminated duplicate‑key errors. I learned that `saveOrUpdate()` is safer when you’re unsure of an entity’s state, but you must manage session scope carefully to avoid unnecessary SELECTs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
