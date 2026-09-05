---
qid: ing_228fc1f060__fp__local
question: 'Explain: Don’t confuse Saga and CDC — Saga, CDC with Transactional Inbox/Outbox
  - DEV Community'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 350
total_tokens: 532
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:19:09-05:00'
sources: []
---

**Why the “Saga vs CDC” mix‑up matters**

In distributed systems the *fundamental problem* is guaranteeing that a multi‑service workflow either completes entirely or leaves no side effect—**atomicity across services**.  
A **Saga** solves this by decomposing the workflow into local transactions, each with an explicit compensating action. The Saga engine only needs to know *what* should happen next and *how to undo* what has already happened; it never inspects the data itself.

In contrast, **Change Data Capture (CDC)** is a *data‑centric* mechanism: it streams every row change from a database to downstream consumers. CDC tells you *that* something changed, not *why* or *what to do with it*. It is agnostic to business semantics and assumes the consumer will interpret the payload.

The **Transactional Inbox/Outbox** pattern sits between them. The inbox stores incoming events in a durable table; the outbox records outgoing events as part of the same transaction that mutates domain state. Both sides are *transactionally bound* to the domain model, so failure guarantees consistency without requiring compensations (as in Sagas).

**Key insight:**  
Sagas trade **compensation logic** for independence from data models; CDC trades **semantic control** for raw change visibility. The Inbox/Outbox pattern unifies them by keeping *events* and *state changes* in the same transaction, thus preserving atomicity without needing compensations or a separate CDC pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
