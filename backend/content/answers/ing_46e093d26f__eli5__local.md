---
qid: ing_46e093d26f__eli5__local
question: 'Explain: New Components for Offline Handling — Design WhatsApp | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 204
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:29:28-05:00'
sources: []
---

Imagine a town where people send postcards that can be read later if the recipient is away. In WhatsApp’s “offline handling” design, we add three helpers:

1. **Message Queue** – like a mailbox that holds each postcard until the receiver returns. It guarantees every message waits in line instead of disappearing.

2. **Store‑and‑Forward Service** – this is the town clerk who keeps the postcards safe on long‑term storage (cloud database) so they survive power cuts or phone crashes.

3. **Sync Scheduler** – think of a friendly postman who wakes up at set times to deliver all stored postcards to the receiver’s phone once it comes back online.

Together, these components make sure every chat message is reliably held and later delivered, just as a postcard stays safe in a mailbox until the recipient can read it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
