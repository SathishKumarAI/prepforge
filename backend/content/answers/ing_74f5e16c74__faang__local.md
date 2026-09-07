---
qid: ing_74f5e16c74__faang__local
question: 'Explain: Discord Migrates Trillions of Messages from Cassandra to ScyllaDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 457
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:16:35-05:00'
sources: []
---

**Clarify**  
We’re asked to explain why a platform that stores *trillions* of user‑generated messages would move from **Cassandra** (a wide‑column NoSQL store) to **ScyllaDB** (a Cassandra‑compatible, high‑performance alternative). Key assumptions:  
- Workload is write‑heavy, append‑only message streams.  
- Latency and throughput are mission critical for real‑time chat.  
- Data model remains columnar with a primary key of `(channel_id, timestamp)`.

**Approach**  
1. Identify pain points in Cassandra at this scale (CPU contention, GC pauses, storage inefficiency).  
2. Map ScyllaDB features that directly address those pain points.  
3. Illustrate the migration path: data export → schema preservation → bulk load → cut‑over.

**Depth**  
- **Performance**: ScyllaDB uses a lightweight, per‑thread architecture (no GC pauses) and vectorized I/O, delivering 5–10× higher throughput at similar latency for write‑heavy workloads.  
- **Storage efficiency**: Built‑in compression and automatic compaction reduce disk usage by ~30 %.  
- **Operational simplicity**: Auto‑sharding, tunable consistency via “Scylla’s built‑in repair”, and a CQL API identical to Cassandra mean minimal code changes.  
- **Cost**: Fewer nodes needed for the same capacity → lower hardware and maintenance costs.

**Edge cases**  
- Legacy data with very wide rows could still trigger compaction spikes; we’d test compaction settings on a subset before full rollout.  
- Mixed consistency levels may need re‑tuning to avoid stale reads during migration.

**Optimize & communicate**  
Explain the incremental migration strategy: run both systems in parallel, use “Cassandra‑to‑Scylla” CDC pipelines for near‑zero downtime, then switch traffic once latency targets are met. Highlight that this move preserves business logic while unlocking higher scalability and cost savings—exactly what a FAANG interview expects: clear reasoning, technical depth, and practical implementation details.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
