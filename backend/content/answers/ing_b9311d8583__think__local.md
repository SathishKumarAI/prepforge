---
qid: ing_b9311d8583__think__local
question: 'Explain: Event Sourcing — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 507
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:10:26-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - Confirm the audience (interviewee vs learner).  
   - Assume they know basic pub/sub and event‑driven concepts but not how to design a system that uses both.  
   - State that we’ll focus on high‑level architecture, trade‑offs, and key components.

**2️⃣ Adopt a layered mental model**  
   - **Domain layer**: business entities & invariants.  
   - **Event store layer**: immutable log of domain events (CQRS).  
   - **Pub/Sub layer**: message broker delivering events to subscribers.  
   - **Read side / projection layer**: materialised views for queries.

**3️⃣ Step‑by‑step reasoning**  
   1. Identify what must be event‑sourced (e.g., orders, inventory).  
   2. Define a clear event schema and versioning strategy.  
   3. Choose an event store (append‑only DB, Kafka topic, etc.).  
   4. Decide on the pub/sub broker (Kafka, RabbitMQ, Pulsar) and partitioning scheme.  
   5. Outline how producers write events to the store and publish to topics.  
   6. Show consumer patterns: single subscriber for projections, multiple for micro‑services.  
   7. Discuss idempotency, ordering guarantees, and replay logic.  
   8. Address scaling (sharding, consumer groups) and durability (replication).  
   9. Tie back to CQRS: write side uses events; read side is a query service.

**4️⃣ Avoid common traps**  
   - Don’t mix event sourcing with transactional databases without clear boundaries.  
   - Beware of “event storms” from poorly designed aggregates.  
   - Ignore the cost of replaying large histories.  
   - Forget to version events or handle schema evolution.

**5️⃣ Sanity‑check & verbalise**  
   - Run through a concrete use‑case (e.g., placing an order).  
   - Ask “What happens if a consumer fails?” → explain retry/offset commit.  
   - Summarise key benefits: auditability, scalability, loose coupling, and eventual consistency.  

This structured walkthrough lets the candidate articulate the design clearly while highlighting trade‑offs and best practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
