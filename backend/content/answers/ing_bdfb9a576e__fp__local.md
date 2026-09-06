---
qid: ing_bdfb9a576e__fp__local
question: 'Explain: Change data capture (CDC) — Open sourcing Brooklin: Near real-time
  data streaming at scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 354
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:47:31-05:00'
sources: []
---

**Change Data Capture (CDC)** is the problem of *observing* and *propagating* state changes in a source system as soon as they happen, without disturbing the original workload.  
At its core it’s an online *information‑flow* problem: every write to a database creates a new data version that must be made available downstream with minimal latency and bounded resource consumption.

**Why CDC works this way**

1. **Atomicity of change records** – A transaction boundary guarantees that downstream consumers see a consistent snapshot.  
2. **Incremental persistence** – Only the delta (insert, update, delete) is stored in a write‑ahead log, keeping throughput high and storage minimal.  
3. **Eventual consistency** – By replaying the log, any system can recover to the exact state at any point, satisfying fault tolerance.

**Brooklin** builds on these principles as an open‑source platform for *near real‑time* data streaming at scale:

- It taps into source logs (e.g., MySQL binlog, PostgreSQL WAL) and turns them into Kafka‑compatible events.  
- A distributed pull architecture keeps backpressure under control while still delivering sub‑second latency.  
- The pluggable connector model lets operators mix sources and sinks without rewriting pipelines.

**Non‑obvious insight**: CDC is not just about copying data; it’s a *causal trace* of computation. By exposing the exact sequence of operations, Brooklin enables downstream analytics to reason about *why* a value changed, turning pure data streams into actionable provenance that can be queried, audited, and replayed for debugging or compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
