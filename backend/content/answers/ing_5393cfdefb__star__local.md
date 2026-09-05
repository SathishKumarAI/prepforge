---
qid: ing_5393cfdefb__star__local
question: 'Explain: go back to the original source to — The Many Meanings of Event-Driven
  Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 403
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:15:14-05:00'
sources: []
---

**Situation**  
During a product‑launch sprint at my previous company, our sales team was frustrated that the inventory dashboard lagged behind real‑time purchases. The backlog had grown to 3 k tickets, and the release deadline for Q4 was in two weeks.

**Task**  
I needed to design an event‑driven system that would push stock changes instantly to every client interface while keeping data consistency across microservices—essentially turning our monolithic update loop into a real‑time event pipeline.

**Action**  
First, I revisited Martin Fowler’s “The Many Meanings of Event-Driven Architecture” to ground my design. I mapped the core concepts: *events* as immutable facts, *publishers* (the order service) and *subscribers* (inventory UI, analytics). I chose Kafka for the event bus because it guarantees ordering per topic and offers replayability for debugging. The publisher emitted a `StockChanged` event containing product ID, delta, timestamp, and correlation ID. Subscribers consumed only the events they cared about; inventory services updated a read‑only projection in PostgreSQL using Debezium to keep the materialized view consistent. I added idempotency keys so duplicate messages wouldn’t double‑decrement stock.

**Result**  
The new architecture cut dashboard latency from 5 minutes to under 200 ms for 95% of updates, slashed ticket volume by 70%, and allowed us to ship the release on schedule. I learned that a clear grasp of event semantics—when to publish versus when to consume—is crucial; Fowler’s framework helped me avoid common pitfalls like tight coupling or “event storms.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
