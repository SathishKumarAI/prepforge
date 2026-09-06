---
qid: ing_b6f4053fd7__fp__local
question: 'Explain: Example: Choreography-based saga — Pattern: Saga'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 428
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:32:58-05:00'
sources: []
---

**Why a choreography‑based saga is needed**

When a business workflow spans many microservices, one operation may succeed while another fails.  
If we let each service simply “do its job” and ignore the rest, we risk leaving the system in an inconsistent state—some services have changed data, others haven’t.  
The fundamental problem is *distributed consistency without a global lock*. We must allow local progress yet guarantee that the whole workflow can be rolled back or compensated if any step fails.

**How choreography solves it**

Instead of a central orchestrator telling each service what to do, every participant publishes its own *event* (e.g., “OrderCreated”).  
Other services subscribe to those events and react: a payment service listens for “OrderCreated” and emits “PaymentProcessed”, while inventory listens for the same event and emits “StockReserved”.  
If any step fails, the failing service emits a compensating event (“CancelReservation”), which triggers reverse actions downstream.  

**Deeper principle**

This is an *event‑driven causal chain*—a directed acyclic graph of state changes that respects causality. It’s essentially a form of **causal consistency**: each node only reacts to events it depends on, so the system never needs to roll back global state, just locally compensate.

**Non‑obvious insight**

A choreography saga *implicitly enforces idempotence*. Because every step is triggered by an event, if an event is replayed (e.g., after a crash), the service can safely ignore duplicate work. This idempotency is not an added feature; it’s baked into the pattern because events are the sole source of truth.

> **In short:**  
> A choreography‑based saga uses published events to drive distributed transactions, ensuring local autonomy while guaranteeing global consistency through compensating actions and inherent idempotence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
