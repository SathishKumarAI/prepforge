---
qid: ing_9833b3311e__star__local
question: 'Explain: CDC vs Events vs Event Sourcing — Change Data Capture (CDC) |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 373
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:36:59-05:00'
sources: []
---

**Situation:**  
At my last company we were migrating a legacy order‑processing system into a microservices architecture. The new services needed real‑time visibility of every change in the orders table, but our existing ETL pipeline was batch‑oriented and caused a 30‑minute lag that broke downstream analytics.

**Task:**  
I had to choose between three data‑flow patterns—CDC, event streams, and full event sourcing—to expose order changes to services like inventory, billing, and reporting with minimal latency while keeping the system simple.

**Action:**  
I evaluated each approach: CDC (using Debezium on Kafka Connect) would simply stream row change events; an event stream model would let us publish domain events (OrderCreated, OrderShipped) directly from the service layer; full event sourcing would persist every state transition as a command and rebuild read models. I selected a hybrid CDC‑plus‑event pattern: Debezium captured low‑latency DML changes into Kafka topics, then a lightweight microservice transformed these change records into rich domain events enriched with business context (customer tier, promotion flags). The services subscribed to the event topics via Kafka Streams, enabling idempotent processing and eventual consistency.

**Result:**  
Latency dropped from 30 minutes to under 5 seconds. Inventory updates hit the warehouse system in real time, reducing stock‑outs by 18%. The architecture also allowed us to replay events for debugging without touching the database, a benefit we only realized after an unexpected rollback scenario. I learned that combining CDC with domain event enrichment gives you the speed of change capture and the semantic richness of event sourcing without its full complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
