---
qid: ing_2bf7e8506b__think__local
question: 'Explain: Log-Based CDC — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 458
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:34:33-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - Identify whether the user wants a high‑level explanation or deep architectural detail.  
   - Assume they’re familiar with basic CDC concepts but need insight into *log‑based* approaches (e.g., database transaction logs, binary logs).  

**2. Choose a mental model / framework**  
   - Treat CDC as an **event sourcing pipeline**: source → log capture → transformation → sink.  
   - Map each phase to common system design patterns: *read‑through cache*, *producer–consumer queues*, and *stream processing*.

**3. Reason step‑by‑step toward the answer**  
   1. Explain why logs are ideal (low latency, replayability).  
   2. Describe how a log reader subscribes to the source’s binary log or WAL.  
   3. Show how events are parsed into *change records* (type, key, before/after values).  
   4. Discuss transformation layers (schema evolution, filtering).  
   5. Illustrate typical sinks: Kafka topics, change‑data tables, downstream services.  
   6. Touch on fault tolerance (offsets, checkpoints) and exactly‑once semantics.

**4. Common traps to avoid**  
   - Don’t conflate CDC with replication; emphasize *incremental* vs *full* sync.  
   - Avoid over‑promising consistency: log‑based CDC is usually eventual unless additional guarantees are added.  
   - Be careful not to assume every database exposes a readable log; mention connectors (Debezium, Maxwell).

**5. Sanity‑check & communicate out loud**  
   - Re‑state the core idea in one sentence (“Log‑based CDC streams low‑latency change events from a DB’s transaction log into downstream systems”).  
   - Ask if they need details on specific databases or connectors to tailor depth.  

Follow this checklist each time you explain a system design concept—clarify, model, step through, guard against misconceptions, and verify coherence before finalizing the response.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
