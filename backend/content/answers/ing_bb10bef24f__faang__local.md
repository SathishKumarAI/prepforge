---
qid: ing_bb10bef24f__faang__local
question: 'Explain: CDC Approaches — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 514
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:57:50-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *Change‑Data‑Capture* (CDC) in a system‑design context: how do we detect, record, and propagate changes from a source database so downstream analytics or services stay up‑to‑date? Key assumptions: the source is relational (or any transactional store), latency tolerance is low, and the system must handle high write volumes without blocking OLTP.

**Approach**  
1. **Capture** – read change events at the data‑layer. Options:  
   * Transaction log tailing (e.g., MySQL binlog, PostgreSQL WAL).  
   * Triggers or CDC tables that record DML rows.  
2. **Normalize & Enrich** – transform raw log tuples into a canonical event schema (timestamp, operation type, PKs, new/old values).  
3. **Distribute** – publish to a durable stream (Kafka, Pulsar) so consumers can read asynchronously.  
4. **Consume & Apply** – downstream systems (data lake, search index, cache) subscribe and apply changes idempotently.

**Depth**  
- *Log‑based CDC* is preferred for minimal overhead: the database writes once; we just stream the log.  
- Use a *checkpointing* mechanism to resume after failures.  
- For multi‑region consistency, add a *global transaction ID* or use a distributed lock (e.g., ZooKeeper).  
- Complexity: O(1) per write for capture, linear in fan‑out for consumers. Trade‑off is that log parsing can become a bottleneck under extreme write spikes; mitigated by scaling consumer partitions.

**Edge Cases**  
- Schema evolution: handle added/dropped columns via schema registry.  
- Bulk loads or snapshots may bypass logs; trigger manual snapshot CDC.  
- Out‑of‑order events: enforce ordering per partition key.  
- Failure to process an event: idempotent consumers prevent duplicates.

**Optimize & Communicate**  
Improvements: switch from triggers (heavy) to log tailing; use compression for the stream; backpressure handling with consumer lag metrics. When interviewing, I’d explain the trade‑offs between *low latency vs. write amplification*, justify log‑based CDC, and outline monitoring (lag, error rates). This showcases structured reasoning, technical depth, and practical system‑design judgment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
