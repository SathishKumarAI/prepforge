---
qid: ing_bdfb9a576e__think__local
question: 'Explain: Change data capture (CDC) — Open sourcing Brooklin: Near real-time
  data streaming at scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 485
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:30:56-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - *What is CDC?* A technique that records only changes (inserts/updates/deletes) in a source database.  
   - *Why “near‑real‑time”?* Because it streams those changes as they happen, not via periodic bulk snapshots.  
   - *Assume the reader knows basic streaming concepts* (topics, partitions) but not the intricacies of open‑source brokers.

**2️⃣ Adopt a mental model: “CDC → Change → Stream → Consumer”**  
   - **Source DB** emits change events → **CDC connector** captures them → **Kafka topic** receives events → **Consumers** process or replay changes.  
   - Visualize each hop as a transformation layer (extract, encode, transport).

**3️⃣ Step‑by‑step reasoning**  
   1. **Detecting changes**: use database logs (binlog for MySQL, WAL for PostgreSQL) or triggers to capture DML operations.  
   2. **Normalizing events**: convert raw log entries into a common JSON schema (operation type + before/after image).  
   3. **Producing to Kafka**: each CDC connector publishes to a dedicated topic; partitions keep ordering per primary key.  
   4. **Scaling**: multiple consumer groups can read from the same topic for parallel processing or downstream systems.  
   5. **Fault tolerance**: offset commits and checkpointing ensure exactly‑once semantics.

**4️⃣ Common pitfalls to avoid**  
   - *Ignoring schema evolution*: a new column breaks consumers unless handled.  
   - *Assuming instant delivery*: network lag still exists; “near‑real” ≠ “instant”.  
   - *Underestimating storage*: Kafka topics can grow large if change volume is high.

**5️⃣ Sanity‑check & verbalize**  
   - Re‑state the flow in one sentence: “CDC connectors read database logs, translate them to structured events, publish those events to Kafka topics, and consumers downstream replay or act on them.”  
   - Verify that each component (source, connector, broker, consumer) has a clear responsibility and fault‑tolerance strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
