---
qid: ing_9b1c6b9e08__fp__local
question: 'Explain: Replication Between Services — Change Data Capture (CDC) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 470
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:35:24-05:00'
sources: []
---

**Why do we need CDC‑based replication?**  
In a microservice world each service owns its data. When another service needs a *read‑only* view of that data it must be kept in sync without violating the *single source of truth*. Pulling the whole table or polling for changes is wasteful and introduces stale reads; pushing every write through an API adds latency and coupling.

**The underlying principle – locality of reference + causal ordering.**  
Changes are local events (insert, update, delete) that can be represented as a stream of *events* ordered by a monotonically increasing timestamp or log sequence number. If every service consumes this stream in order, it can reconstruct the target state locally while never needing to read from the source again.

**How CDC implements this principle**

| Step | What happens | Why it works |
|------|--------------|--------------|
| 1️⃣ Capture | A database writes a row‑level change to its transaction log (e.g., MySQL binlog, PostgreSQL WAL). | The log is already ordered by commit time; no extra work. |
| 2️⃣ Publish | An agent tails the log and emits *Change Events* into a broker (Kafka, Pulsar). | Guarantees at‑least‑once delivery while preserving order per partition. |
| 3️⃣ Subscribe | Target services consume the stream, apply the event to their local store. | Each service’s state is a deterministic function of the events; no need for external coordination. |

**Non‑obvious insight:**  
*CDC is not just replication—it is a **causal map***. Because each event carries its own causal metadata (e.g., transaction ID, commit timestamp), downstream services can safely replay or roll back changes, enabling *time‑travel queries* and *exactly‑once semantics* without central locking.

**Bottom line:**  
CDC turns a write‑heavy database into an append‑only log that all services can read from. It decouples data ownership from consumption, preserves ordering for consistency, and opens doors to advanced analytics (audit trails, temporal queries) that would be impossible with simple polling or direct joins.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
