---
qid: ing_d83333acac__faang__local
question: 'Explain: When to start using compacted tables — SSTable compaction and
  compaction strategies \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 544
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:02:25-05:00'
sources: []
---

**Clarify**  
You’re asking *when* and *why* you should enable SSTable compaction (compact‑table mode) in ScyllaDB, and which strategy (e.g., size‑tiered, time‑window, or custom) is appropriate for a given workload.

**Approach**  
1. Identify the write/read pattern: heavy writes + infrequent reads vs. read‑heavy workloads.  
2. Estimate key/value sizes and TTLs.  
3. Map these to compaction strategies that minimize I/O while keeping storage overhead low.

**Depth**  
- **Compact‑table mode** bundles many SSTables into a single large one, reducing read amplification for *hot* partitions but increasing write latency (because each write must rewrite the whole table).  
- Use it when:  
  - Your tables have *low cardinality* and *high hotness* (e.g., session state).  
  - Write amplification is acceptable because reads dominate.  
  - You need deterministic read performance for a small set of partitions.  
- **Compaction strategies**:  
  - *Size‑tiered*: best for write‑heavy workloads; merges SSTables by size, good when data distribution is uniform.  
  - *Time‑window*: ideal for time-series data with TTLs; merges by age to keep recent data in smaller tables.  
  - *Leveled*: low read amplification but higher write cost; suitable if you can tolerate more writes and need consistent latency.

**Edge Cases**  
- **Very large hot partitions**: compact‑table may become a bottleneck—consider horizontal scaling instead.  
- **Mixed workloads**: a single strategy may hurt one access pattern; use table‑level strategies or multi‑DC replication to isolate traffic.  
- **TTL drift**: if TTLs are irregular, time‑window compaction can leave stale data, leading to storage bloat.

**Optimize & Communicate**  
Start with the default size‑tiered strategy for most tables, then profile read/write amplification. If a table shows high read latency on hot keys, switch it to compact‑table mode and monitor write throughput. Explain that you’ll use Scylla’s `sstable_compaction` settings per keyspace/table, and validate via nodetool metrics before rolling out cluster‑wide. This iterative tuning balances cost vs. performance while keeping the system predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
