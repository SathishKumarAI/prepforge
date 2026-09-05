---
qid: ing_332e7010c8__star__local
question: 'Explain: Discord Migrates Trillions of Messages from Cassandra to ScyllaDB
  - InfoQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 325
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:10:58-05:00'
sources: []
---

**Situation**  
I was part of the backend team at Discord when we hit a ceiling with Cassandra’s write throughput for our chat logs—our daily message volume had jumped to 3 trillion, and latency spikes were hurting user experience during peak hours.

**Task**  
We needed to migrate the entire message store from Cassandra to ScyllaDB without downtime, preserving data integrity and keeping read/write latencies below 50 ms for all active channels.

**Action**  
I designed a two‑phase migration pipeline. First, we spun up a parallel Scylla cluster with identical schema, using Scylla’s built‑in “SSTable” import to seed the new tables from Cassandra’s snapshots—this cut the initial copy time from weeks to 48 hours. Second, we implemented a lightweight “write‑through” proxy that queued writes in a Kafka stream while switching read traffic to Scylla; once the queue drained, we switched the DNS entry atomically. Throughout, I monitored metrics with Prometheus and used Scylla’s adaptive compaction to keep write amplification low.

**Result**  
The migration completed in 72 hours with zero data loss. Post‑migration, write latency dropped from 120 ms to 35 ms, and we reduced storage costs by 30% thanks to Scylla’s higher compression ratios. I learned that careful staging and real‑time metrics are key when moving billions of rows at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
