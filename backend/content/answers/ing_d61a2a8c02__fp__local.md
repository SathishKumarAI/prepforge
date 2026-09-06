---
qid: ing_d61a2a8c02__fp__local
question: 'Explain: driven we''ve got an idea of where — The Many Meanings of Event-Driven
  Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 403
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:35:11-05:00'
sources: []
---

**Event‑driven architecture (EDA)** starts from a simple optimization: *decouple* the production of information from its consumption so that each can evolve independently.  
In practice an **event** is a first‑class object—an immutable snapshot (`{type, payload, timestamp}`) that records a change of state or a request to act. Producers emit events; consumers subscribe and react, possibly producing more events. Because the producer never needs to know who will consume the event, the system scales horizontally: new listeners can be added without touching legacy code, and failure in one consumer does not cascade.

Fowler’s “many meanings” arise from how *events* are interpreted:

| Meaning | What it solves | Typical pattern |
|---------|----------------|-----------------|
| **Domain events** | Capture business facts that other bounded contexts need. | Publish‑subscribe on a message bus. |
| **Integration events** | Expose state changes to external partners. | Event sourcing + API gateway. |
| **System events** | Trigger internal housekeeping (e.g., cache invalidation). | In‑memory pub/sub or queue. |

The deeper principle is that an event is *information* with a *semantic cost*. By making it immutable and timestamped we preserve causality, enabling eventual consistency without tight locks—an application of **causal ordering** from distributed systems theory.

**Non‑obvious insight:**  
Many designers treat events as “messages”; the subtlety is that an event is *observable* rather than *imperative*. This shifts responsibility from “tell me what to do” to “tell me what happened”, allowing listeners to choose their own reaction, even retroactively. The architecture then becomes a *temporal graph* of state changes rather than a rigid call chain—an elegant solution for dynamic, evolving business domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
