---
qid: ing_4d219d4213__fp__local
question: 'Explain: Event-Driven Architecture — 6 Software Architectural Patterns
  You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 439
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:49:18-05:00'
sources: []
---

**Event‑driven architecture (EDA)** solves the *decoupling of producers and consumers* while preserving real‑time responsiveness.  
In EDA, **events** are immutable facts (“OrderCreated”, “PaymentFailed”). A producer emits an event; any number of independent consumers react without waiting for each other. This is a natural fit for distributed systems because it turns tight coupling into loose coupling, enabling horizontal scaling and fault isolation.

| Pattern | Core Idea | Why It Works |
|---------|-----------|--------------|
| **Event Bus** | A single publish/subscribe channel where events flow. | Guarantees at‑least‑once delivery; simple topology reduces routing overhead. |
| **Event Store / Log** | Append‑only ledger of all events (Kafka, Pulsar). | Provides auditability and replayability; a source of truth for eventual consistency. |
| **Command Query Responsibility Segregation (CQRS)** | Separate write (commands → events) from read models. | Allows independent scaling and optimization of reads vs writes, exploiting the immutability of events. |
| **Saga** | Long‑running transaction composed of compensating events. | Circumvents distributed ACID by chaining local actions; each step is a self‑contained event handler. |
| **Event Sourcing** | Persist state as a sequence of events rather than snapshots. | Enables precise reconstruction, debugging, and time travel; aligns with functional purity. |
| **Domain Events** | Domain model emits events on state changes. | Keeps business logic pure while still notifying infrastructure (e.g., UI, analytics). |

**Non‑obvious insight:** *Events are not just notifications—they are the canonical representation of change.* Because they capture a fact that “has happened”, any system can independently reconstruct its own view by replaying events, turning EDA into a natural form of distributed version control. This property underpins resilience: if a consumer crashes, it can re‑process the event log to recover without external coordination.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
