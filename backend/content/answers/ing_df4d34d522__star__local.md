---
qid: ing_df4d34d522__star__local
question: 'Explain: you do you run into this Tangled — The Many Meanings of Event-Driven
  Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 397
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:55:19-05:00'
sources: []
---

**Situation** – At my last company we were migrating a legacy monolith to micro‑services for the e‑commerce platform. The original system fired dozens of internal events (order_created, inventory_updated, shipment_scheduled) that everyone in the team assumed meant “state change”. During the migration I discovered that those same events were also being used as commands, queries and even audit logs – a classic tangled event‑driven architecture.

**Task** – My goal was to untangle the messaging layer so each event had a single responsibility, improve observability, and reduce coupling between services. We needed a clean definition of what counts as an event versus a command or query, and a migration plan that wouldn’t break existing consumers.

**Action** – I started by cataloguing every message in our broker (Kafka) with its payload schema, producer, and consumer list. Then I applied the “Event‑Sourcing” principle: renamed events to *domain changes* (e.g., OrderCreated), introduced separate command topics for intent (CreateOrderCommand), and added read‑model query endpoints. We used Confluent Schema Registry to enforce versioning and implemented a lightweight middleware that logged every event type with a correlation ID. I also wrote unit tests that simulated the old behavior to ensure backward compatibility.

**Result** – The new architecture reduced message size by 35 %, cut inter‑service latency from 120 ms to 45 ms, and eliminated accidental side‑effects from misused events. We gained clear ownership of each topic, which made onboarding new developers 40 % faster. I learned that the key to untangling event systems is rigorous classification + automated schema governance, not just adding more services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
