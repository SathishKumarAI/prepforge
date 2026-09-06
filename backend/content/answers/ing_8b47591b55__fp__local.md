---
qid: ing_8b47591b55__fp__local
question: 'Explain: sequel to save the database after 2014 — UBER System design |
  OLA system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 357
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:00:56-05:00'
sources: []
---

**Why a “save‑the‑database” pattern emerged for Uber‑style services (post‑2014)**  

The core problem is *durability under extreme write traffic*. A ride‑sharing platform must persist every trip request, driver update, and pricing change in real time while keeping latency < 100 ms.  
If a single relational store (e.g., PostgreSQL) handled all writes, the write amplification would stall the system; if a NoSQL store (Cassandra) handled everything, it could not enforce strong consistency for critical aggregates (driver‑location, fare calculation).  

The solution is **dual‑write**: an *event log* (Kafka/Redpanda) receives every mutation as an immutable stream; two downstream sinks process the stream in parallel:

1. **Operational DB** – a fast key‑value store (Redis, RocksDB) for real‑time reads and leader election.
2. **Analytical DB** – a columnar warehouse (Druid, ClickHouse) for batch analytics.

The log guarantees *exactly‑once* persistence; replaying the stream restores any sink after failure, satisfying ACID at the application level without sacrificing latency.  

**Non‑obvious insight:** The event log is not just a buffer—it becomes the *single source of truth*. By treating writes as immutable events, Uber sidesteps the classic “read‑write” inconsistency problem; consistency is enforced by replay order rather than locks. This pattern, popularized after 2014, scales horizontally and provides disaster recovery with minimal operational overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
