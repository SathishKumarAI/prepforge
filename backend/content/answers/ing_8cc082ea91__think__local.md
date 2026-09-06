---
qid: ing_8cc082ea91__think__local
question: 'Explain: Best Practices — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 507
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:22:18-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - *What is “best practice” here?*  We’re not writing code, just outlining design patterns.  
   - Assume a typical relational source (e.g., PostgreSQL), a downstream data warehouse or stream‑processing system, and that CDC must be reliable, low‑latency, and scalable.  
   - State constraints: no third‑party vendor lock‑in, minimal schema drift handling, and auditability.

**2️⃣ Adopt a mental model**  
   - Treat CDC as an **event‑driven pipeline**: source → capture → transport → enrichment → sink.  
   - Use the *Producer–Consumer* pattern with back‑pressure and idempotency guarantees.  
   - Map each component to known abstractions (log shipping, change logs, Kafka topics, stream processors).

**3️⃣ Step‑by‑step reasoning**  
   1. **Capture layer** – choose between physical log reading (e.g., PostgreSQL WAL), logical decoding, or application‑level triggers; weigh latency vs. complexity.  
   2. **Transformation & enrichment** – normalize timestamps, add event IDs, compute hashes for deduplication.  
   3. **Transport** – pick a durable broker (Kafka, Pulsar) that supports exactly‑once semantics and schema registry.  
   4. **Consumer side** – implement idempotent writes to downstream stores; use checkpoints or offsets for recovery.  
   5. **Monitoring & observability** – expose lag metrics, error rates, and audit trails.

**4️⃣ Common traps to avoid**  
   - *Assuming all sources support logical decoding*: many legacy DBs don’t.  
   - *Skipping schema evolution handling*: a new column breaks consumers if not managed.  
   - *Ignoring idempotency*: duplicate events can corrupt analytics.  
   - *Over‑optimizing for latency at the cost of durability*: leads to data loss on failure.

**5️⃣ Sanity‑check & communicate**  
   - Verify each link satisfies **ACID + eventual consistency** where needed.  
   - Walk through a sample transaction: insert → CDC event → broker offset → consumer writes → audit log.  
   - Explain trade‑offs aloud (e.g., WAL vs. triggers) and confirm the design meets latency, scalability, and reliability goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
