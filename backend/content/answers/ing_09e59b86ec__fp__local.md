---
qid: ing_09e59b86ec__fp__local
question: 'Explain: 5.6 Archiving Old Data — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 711
total_tokens: 893
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:26:50-05:00'
sources: []
---

**Why an “archive‑notification” system is needed**

When a database holds years of logs or sensor readings, the *cost* (storage, backup time, query latency) grows linearly with size while the *utility* of the newest rows dominates application performance.  
Archiving removes stale data from the hot tier, but if clients are unaware they may keep reading dead rows or retry failed deletes. A lightweight notification service tells downstream consumers that a chunk is safe to drop.

---

### Core design goals

| Goal | Why it matters |
|------|----------------|
| **Low latency** (≤ 50 ms) | Consumers must act immediately on the “archived” event; otherwise stale data remains in caches. |
| **Eventual consistency** | The archive job may finish after the notification is sent; we tolerate a brief window where the consumer still sees old data. |
| **Scalability** (tens of thousands of shards) | Each shard can be archived independently; notifications must propagate to all replicas that might serve it. |
| **Idempotence & replay** | Deletions are idempotent; consumers may re‑process a message if they missed it the first time. |

---

### Architecture

1. **Archive Coordinator**  
   *Runs as a scheduled job* (e.g., nightly). For each partition `P`:
   - Compute retention window (`now – Ndays`).  
   - Issue a `DELETE FROM P WHERE ts < cutoff`.  
   - Once deletion completes, emit an event:  
     ```json
     { "partition": "P", "cutoff": 2025‑01‑15T00:00Z, "ts": now }
     ```

2. **Event Bus** (Kafka / Pulsar)  
   *Durable, ordered stream* ensures every consumer receives the message at least once and in partition order.

3. **Consumer Subsystems**  
   - **Cache Evictor** – subscribes to the topic; on receipt it flushes any cached rows with `ts < cutoff`.  
   - **Query Router** – rewrites queries to skip archived partitions; if a query touches an old partition, the router returns “not found” or redirects to archive storage.  
   - **Backup Service** – writes the deleted data snapshot to cold storage before deletion (optional).

4. **Monitoring & Re‑processing**  
   - Each consumer publishes acknowledgment offsets.  
   - A controller replays missed messages from the event bus on failure.

---

### Deeper principle

This system is an instance of **“eventual consistency via publish‑subscribe”**, a pattern that converts a batch mutation (deletion) into a fine‑grained, observable state change. By decoupling the heavy delete operation from lightweight consumers, we keep the hot tier responsive while preserving auditability.

---

### Non‑obvious insight

**The “cutoff timestamp” itself is the key to idempotence.**  
Instead of sending “delete partition P”, we send “all rows older than T are gone.” Any consumer can safely ignore a message if its local data’s minimum timestamp is already ≥ T, and it can replay the same message later without harm. This removes the need for per‑row deletion logs and dramatically reduces state that must be stored in consumers.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
