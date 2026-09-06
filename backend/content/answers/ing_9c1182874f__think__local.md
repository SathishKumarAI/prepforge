---
qid: ing_9c1182874f__think__local
question: 'Explain: Cache Invalidation — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 488
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:23:36-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - *What is “cache invalidation” in this context?* – We’re talking about keeping a read‑through or materialized cache consistent with an evolving data source.  
   - *What does CDC (Change Data Capture) mean?* – A mechanism that records every write to the underlying store so downstream consumers can react.  
   - *Assume we have a relational DB + Redis/Memcached as cache, and we want eventual consistency.*  

**2. Adopt a mental model / framework**  
   - Think of the system as three layers: **Producer (DB writes)** → **CDC pipeline (captures changes)** → **Consumer (cache updater)**.  
   - Use a *publish‑subscribe* pattern for CDC events, with a queue or log (Kafka, Debezium).  

**3. Step‑by‑step reasoning**  
   1. **Capture**: On each write, the DB emits an event containing primary key and new state.  
   2. **Publish**: The CDC engine writes this event to a topic.  
   3. **Consume**: A cache invalidator service subscribes, receives events in order.  
   4. **Invalidate / Update**: Depending on policy, it either deletes the key or refreshes the value in the cache.  
   5. **Idempotence & retries**: Ensure consuming logic is idempotent to handle replays.  
   6. **Monitoring**: Track lag between DB and cache to detect bottlenecks.  

**4. Common traps to avoid**  
   - *Assuming instant consistency*: CDC introduces latency; design for eventual consistency.  
   - *Ignoring schema changes*: If the event payload changes, consumers may break.  
   - *Over‑invalidating*: Deleting entire cache regions on every small change can hurt performance.  

**5. Sanity‑check & communicate**  
   - Verify that each write leads to exactly one cache action; no duplicates or missed events.  
   - Present the flow diagram: DB → CDC topic → Consumer → Cache, highlighting idempotence and monitoring hooks.  
   - Emphasize trade‑offs (latency vs consistency) when explaining design choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
