---
qid: ing_228fc1f060__eli5__local
question: 'Explain: Don’t confuse Saga and CDC — Saga, CDC with Transactional Inbox/Outbox
  - DEV Community'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 277
total_tokens: 447
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:31:02-05:00'
sources: []
---

Imagine a busy restaurant where orders must reach the kitchen, be cooked, and then delivered to customers without missing a step.

**Saga** is like a maître‑d’ who keeps a running list of every order and its status. If one step fails (e.g., the grill is out), the maître‑d’ can roll back or compensate—cancelling the dish, refunding the customer—so everything stays consistent across the whole service.

**CDC (Change Data Capture)** is like a kitchen counter that instantly notes every change in the menu: new ingredients added, prices updated, or a dish removed. It streams these changes to other systems so they stay in sync, but it does not handle failures or compensations.

The **Transactional Inbox/Outbox** pattern is the order ticket system that guarantees each note (order or menu change) is stored once and delivered exactly once to downstream services—like ensuring every dish reaches the right table without duplication or loss. It couples the data change with a reliable message, bridging the gap between the database and external systems.

So: Saga = orchestrating multi‑step business processes; CDC = watching for data changes; Inbox/Outbox = guaranteeing safe delivery of those changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
