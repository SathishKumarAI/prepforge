---
qid: ing_8505c58a0a__faang__local
question: 'Explain: ago we''re familiar from doing that from — The Many Meanings of
  Event-Driven Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 603
total_tokens: 860
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:53:56-05:00'
sources: []
---

**Clarify**

The interviewer asks you to explain *“the many meanings of event‑driven architecture”* as discussed by Martin Fowler in GOTO 2017.  
Assumptions:  
- Audience knows basic OO/functional patterns but not the nuances of “events.”  
- We need to cover both *technical* and *business* interpretations, and why Fowler emphasizes the breadth.

**Approach**

1. Define an event generically.  
2. Enumerate the four canonical meanings Fowler lists.  
3. For each meaning show a concrete example (code or diagram).  
4. Contrast with “message‑driven” to highlight subtlety.  
5. Conclude with practical take‑aways for designing systems.

**Depth**

| Meaning | What it is | Typical use‑case | Example |
|---------|------------|------------------|---------|
| **Domain event** | A fact that happened in the domain (immutable, timestamped). | Capture business state changes for audit or CQRS. | `OrderPlaced(orderId, customerId, date)` |
| **Infrastructure event** | Trigger from system boundaries (e.g., file arrival, timer). | Decouple subsystems; orchestrate batch jobs. | FileWatcher emits `FileUploaded(filePath)` |
| **Application event** | Internal signals to coordinate components (no persistence). | In‑process decoupling of services or modules. | `UserLoggedIn(userId)` fired by Auth module |
| **Integration event** | Published to external partners, often via message bus. | Event sourcing / microservices interaction. | Kafka topic `payment.completed` |

Key technical points:  
- Events are *immutable* and *self‑contained*.  
- Consumers can be synchronous or asynchronous; design for at‑least‑once delivery if needed.  
- Use a schema registry to evolve event payloads safely.

**Edge Cases**

| Scenario | What could go wrong |
|----------|--------------------|
| Backward compatibility of events | Schema changes break consumers |
| High volume of integration events | Message bus overload, latency spikes |
| Mixing domain & infrastructure events in same topic | Confusing semantics, hard to filter |

Tests: unit tests for event creation, contract tests for message schemas, load tests on the broker.

**Optimize & Communicate**

- **Refactor**: Separate event definitions into a shared library to avoid duplication.  
- **Observability**: Tag each event with correlation IDs; instrument consumer latency.  
- **Narrative**: “When Fowler says ‘event‑driven,’ think of four layers—what happened, why it matters to the domain, how we react internally, and how we expose that fact externally.”  

This structure shows clear understanding, communicates trade‑offs, and aligns with FAANG expectations for concise, deep answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
