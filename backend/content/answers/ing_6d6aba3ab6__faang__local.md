---
qid: ing_6d6aba3ab6__faang__local
question: 'Explain: How Change Data Capture Works — Change Data Capture: Key to Leverage
  Real-time Data'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 498
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:58:01-05:00'
sources: []
---

**Clarify**  
You’re asking how *Change Data Capture* (CDC) turns data modifications into a real‑time stream. I’ll assume we’re dealing with relational or NoSQL stores that expose logs (binlog, transaction log, CDC tables), and that downstream consumers need near‑instant updates.

**Approach**  
1. **Identify the source of truth** – capture the raw change events from the database’s write‑ahead log.  
2. **Normalize & enrich** – translate each low‑level event into a domain‑aware record (table, row, operation type).  
3. **Persist or stream** – push enriched records to a messaging layer (Kafka, Pulsar) or a change table for downstream jobs.  
4. **Consume & reconcile** – consumers process events idempotently and apply them to analytics stores or caches.

**Depth**  
- *Log‑based CDC* reads the transaction log sequentially, guaranteeing order per partition.  
- *Trigger‑based CDC* writes changes into a dedicated change table; easier on DB load but can miss deletes if not handled.  
- **Event schema** includes `key`, `operation` (INSERT/UPDATE/DELETE), `timestamp`, and optionally `before/after` snapshots.  
- **Idempotency & deduplication** are ensured by using unique event IDs or transaction IDs.  
- **Latency**: typically < 1 s from commit to consumer, bounded by log tailing speed.

**Edge Cases**  
- *Schema evolution*: handle added/dropped columns gracefully.  
- *Bulk loads*: may generate a flood of events; backpressure needed.  
- *Recovery*: on restart, resume from last processed LSN/offset.  
- *Deletes*: ensure downstream can interpret tombstone markers.

**Optimize & Communicate**  
- Use incremental snapshots to seed new consumers instead of replaying entire logs.  
- Partition CDC streams by key hash to parallelize consumption.  
- Monitor lag metrics; if lag > threshold, auto‑scale consumer instances.  
Explain trade‑offs: log‑based CDC is low‑latency but requires DB support; trigger‑based is simpler but heavier on the source. Conclude that a well‑designed CDC pipeline turns raw database changes into a reliable, real‑time data fabric for analytics and ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
