---
qid: ing_e8b2e5c31f__fp__local
question: 'Explain: Timestamp-Based CDC — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 388
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:13:36-05:00'
sources: []
---

**Timestamp‑Based CDC – a principled design**

The core problem is *to reproduce the evolution of a relational table in another system without full scans or intrusive triggers*.  
We model each row as a point in time–value space \((t, v)\).  The desired output stream must preserve the order and content of all updates: \(v_{i+1}\) cannot be emitted before \(v_i\).  This is exactly the definition of *causal consistency* in distributed systems.

A timestamp column supplies a total order on modifications.  
When a change occurs, we record its logical clock value (e.g., `updated_at`).  
The CDC worker periodically scans for rows whose timestamp exceeds the last emitted one.  
Because timestamps are monotonically increasing per row, this scan is **idempotent**: re‑running it does not duplicate work, and missing updates cannot be recovered later without a full resync.  

Why *must* we use timestamps?  
1. **No locking or triggers** – the database remains write‑throughput‑optimized.  
2. **Linearizability via time** – the consumer can reconstruct any snapshot by applying all events up to a target timestamp.  
3. **Fault tolerance** – on restart, we resume from the last processed timestamp, guaranteeing exactly‑once semantics.

*Non‑obvious insight*: timestamps are not just markers; they embed *causal dependency*.  If two rows share a foreign key, their timestamps naturally order referential updates, eliminating the need for complex join‑based change detection.  Thus, a simple column can encode a full partial order that suffices for both consistency and efficiency in CDC pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
