---
qid: ing_e8b2e5c31f__think__local
question: 'Explain: Timestamp-Based CDC — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 410
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:23:44-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Confirm we’re discussing *timestamp‑based CDC* (vs key‑value or binlog approaches).  
   - Assume a relational DB with monotonically increasing timestamps, and that downstream consumers can tolerate eventual consistency.  

**2️⃣ Adopt a system‑design mental model**  
   - Treat CDC as an **event sourcing pipeline**: source → capture → transform → publish → consume.  
   - Map each component to familiar patterns (e.g., change log table, Kafka topic, schema registry).  

**3️⃣ Step‑by‑step reasoning**  
   1. *Capture*: Query the source for rows where `updated_at > last_seen`.  
   2. *Deduplication/ordering*: Sort by timestamp, handle ties with a secondary key (PK).  
   3. *Transformation*: Convert to an event envelope (op type, payload, metadata).  
   4. *Publish*: Push to a message broker; consider at‑least‑once vs exactly‑once guarantees.  
   5. *Consume*: Downstream services replay events into their own stores or caches.  

**4️⃣ Common pitfalls to avoid**  
   - Assuming timestamps are strictly increasing—clock skew can break ordering.  
   - Ignoring batch size: too large → backpressure; too small → overhead.  
   - Forgetting idempotency on consumers, leading to duplicates if a consumer restarts.  

**5️⃣ Sanity‑check & verbalize**  
   - Run through an example (e.g., user update) and trace it end‑to‑end.  
   - Verify that the pipeline can recover from failures: checkpoint `last_seen`, replay logic.  
   - Communicate the trade‑offs: simplicity vs latency, eventual consistency vs strict ordering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
