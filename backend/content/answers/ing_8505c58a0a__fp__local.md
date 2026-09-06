---
qid: ing_8505c58a0a__fp__local
question: 'Explain: ago we''re familiar from doing that from — The Many Meanings of
  Event-Driven Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 323
total_tokens: 517
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:48:00-05:00'
sources: []
---

**Event‑driven architecture (EDA)** is a communication pattern that solves the *decoupling* problem between producers and consumers of data.  
When an application component performs an operation it publishes an **event**—a lightweight, immutable record describing what happened (e.g., `OrderCreated`). Other components subscribe to that event type and react accordingly, without knowing who produced it or how they will be used.

Why this must work that way:  

1. **Causality as a first‑class abstraction** – By treating state changes as first‑class objects we can replay, audit, or replay the system’s history simply by re‑emitting events.  
2. **Loose coupling and scalability** – Producers do not wait for consumers; they merely append to an event stream. Consumers scale independently, even processing in parallel or out‑of‑order, because the event itself contains all necessary context.  
3. **Event sourcing & CQRS synergy** – Persisting every change as an event turns the event log into a canonical source of truth. Reads can be served from projections built by consuming those events, giving optimal read performance without sacrificing consistency.

**Non‑obvious insight:** *The ordering guarantees are local to each event type.* In practice, EDA systems often ignore global order and rely on idempotent handlers. This allows multiple independent streams (e.g., `OrderCreated`, `PaymentReceived`) to be processed in parallel, drastically improving throughput while still preserving eventual consistency across aggregates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
