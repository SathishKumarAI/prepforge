---
qid: ing_5e366f9e53__think__local
question: 'Explain: Deletes — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 470
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:13:28-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - *What exactly is “Deletes – CDC” in this context?* Assume we’re talking about capturing delete events from a source database (e.g., PostgreSQL, MySQL) and propagating them to downstream systems (data warehouse, search index).  
   - *What constraints matter?* Latency tolerance, consistency guarantees, volume of deletes, fault‑tolerance, schema evolution.  

**2️⃣ Mental model / framework**  
   - Treat CDC as a streaming pipeline: **Source → Capture → Transform → Sink**.  
   - Map delete semantics to “soft” vs “hard” deletes and how they affect downstream data models (e.g., tombstone markers).  

**3️⃣ Step‑by‑step reasoning**  
   1. Identify the source’s native change log (binlog, WAL, triggers).  
   2. Decide whether to capture *physical* delete rows or just a “tombstone” record.  
   3. Buffer events in a durable stream (Kafka, Pulsar) to decouple source load from consumer speed.  
   4. Apply idempotent transformations so replays don’t duplicate tombstones.  
   5. Deliver deletes to sinks: remove records in OLAP tables, mark as inactive in NoSQL, or purge index entries.  

**4️⃣ Common traps to avoid**  
   - *Assuming deletes are rare:* they can burst (e.g., batch clean‑ups).  
   - *Neglecting idempotency:* reprocessing a delete may corrupt state if not handled.  
   - *Ignoring schema changes:* a deleted column might be added back later, causing confusion.  

**5️⃣ Sanity‑check & verbalize**  
   - Verify that each component guarantees at‑least‑once delivery and eventual consistency.  
   - Run a test: delete a row → confirm tombstone appears in the stream → ensure downstream consumer removes it.  
   - Communicate clearly: “We capture deletes as tombstones, buffer them in Kafka for durability, and idempotently apply them to all downstream systems.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
