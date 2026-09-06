---
qid: ing_8108a34950__fp__local
question: 'Explain: How CDC Works — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 442
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:39:43-05:00'
sources: []
---

**Why CDC is Needed**

In a data‑centric system, downstream services (analytics, search indexes, replication clusters) must stay in sync with the source of truth without polling or full reloads. The *fundamental problem* is to observe state changes **in real time** while keeping overhead minimal and guaranteeing consistency.

**Core Idea**

Treat the database as a *stream of events*. Every mutation (INSERT, UPDATE, DELETE) emits an immutable record that describes:

1. **What changed** – old vs new values or delta.
2. **When it happened** – a monotonically increasing timestamp or log sequence number (LSN).
3. **Where it came from** – table name and primary key.

The database engine already logs these changes for durability (write‑ahead logs, redo/undo). CDC taps into that stream instead of re‑reading the whole table. The *key insight* is that a write‑log is an optimal representation: it’s linear, ordered, and already persisted before commit, guaranteeing no lost updates.

**Implementation Sketch**

```text
[Transaction Commit] → Log Entry (LSN) → CDC Service
CDC Service reads LSNs sequentially,
  buffers them, applies transformation,
  pushes to downstream (Kafka, REST, etc.).
```

Because the log is *ordered*, consumers can replay from any point, providing strong consistency guarantees and enabling exactly‑once semantics.

**Non‑obvious Insight**

Most people view CDC as a “copy‑and‑paste” of rows. The real power lies in **delta compression**: by emitting only changed columns (or even bitmaps), the bandwidth is reduced dramatically. Moreover, when combined with *event sourcing* principles, the same stream can serve both operational replication and audit trails—turning the database into a single source of truth for all downstream services.

---

**Bottom line:** CDC turns an existing write‑ahead log into a first‑class event stream, solving real‑time consistency with minimal overhead by leveraging the database’s own durability guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
