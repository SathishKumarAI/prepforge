---
qid: ing_332e7010c8__faang__local
question: 'Explain: Discord Migrates Trillions of Messages from Cassandra to ScyllaDB
  - InfoQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 489
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:43:35-05:00'
sources: []
---

**Clarify**  
We’re asked to explain why Discord moved a *trillion‑plus* messages from **Apache Cassandra** to **ScyllaDB**, and what that migration implies for ML workloads (e.g., log analysis, recommendation pipelines). Key assumptions:  
- The data is write‑heavy, time‑series in nature.  
- Latency & throughput are critical for real‑time features.  
- They need a system that scales horizontally with minimal operational overhead.

**Approach**  
1. Compare Cassandra vs ScyllaDB on consistency, performance, and cost.  
2. Map Discord’s use‑case (chat logs) to these characteristics.  
3. Highlight migration steps: schema conversion, data export/import, validation, cut‑over strategy.  
4. Discuss downstream ML implications.

**Depth**  
- **Consistency & Latency:** ScyllaDB offers tunable consistency with lower read/write latency (~10 µs vs 100–200 µs in Cassandra).  
- **Throughput:** Uses C++ and native OS async I/O, yielding ~2× higher ops/sec per node.  
- **Operational Cost:** Auto‑tuning memory & CPU reduces manual tuning; fewer nodes needed for same capacity → lower cloud spend.  
- **Data Model Fit:** Both are wide‑column stores; only minor schema changes (e.g., adding composite keys).  
- **Migration Tooling:** `cassandra-scylla-migrate` can stream data with minimal downtime, preserving timestamps and ordering.  
- **ML Impact:** Faster reads mean lower latency for real‑time recommendation models; higher throughput supports larger batch jobs (log ingestion, feature extraction).

**Edge Cases**  
- *Data skew* during migration could stall nodes; mitigate by sharding key design.  
- *Consistency gaps*: ensure final‑write consistency mode matches production expectations.  
- *Backwards compatibility*: legacy clients must handle potential schema version differences.

**Optimize & Communicate**  
Explain that the trade‑off was higher upfront engineering effort for long‑term gains in latency, throughput, and cost—critical for Discord’s real‑time ML pipelines. Conclude with a concise recommendation: adopt ScyllaDB when write‑heavy workloads require sub‑millisecond latency and predictable scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
