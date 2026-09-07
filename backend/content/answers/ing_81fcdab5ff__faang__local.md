---
qid: ing_81fcdab5ff__faang__local
question: 'Explain: About this document — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 527
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:46:59-05:00'
sources: []
---

**Clarify**  
You’re asking about *SSTable compaction* in ScyllaDB—how data stored in immutable SSTables is merged or removed over time to keep read/write performance optimal. I’ll assume you want an overview of the mechanics and why different strategies exist.

**Approach**  
1. Define what an SSTable is (immutable, sorted key‑value files).  
2. Explain why compaction is needed (garbage collection, range merging, size balancing).  
3. Describe the main algorithms (Size‑Tiered, Leveled, Time‑Window).  
4. Highlight trade‑offs: write amplification vs read latency.  
5. Touch on how ScyllaDB’s implementation differs from Cassandra.

**Depth**  
- **SSTable basics**: Each SSTable is a sorted list of rows; updates/deletes create new SSTables while old ones become “tombstoned.”  
- **Compaction purpose**: remove obsolete data, merge overlapping ranges, keep file count low.  
- **Size‑Tiered (ST)**: merges all SSTables of the same size class → high write amplification, low read cost.  
- **Leveled (L0–Ln)**: each level holds a bounded number of non‑overlapping SSTables; merges are targeted → lower read latency but more CPU/memory during compaction.  
- **Time‑Window**: groups by time intervals; good for write‑heavy workloads with temporal locality.  
- ScyllaDB uses *hybrid* compaction (ST + LSM) and a *priority queue* scheduler to avoid hot spots, plus aggressive memory‑mapped I/O.

**Edge Cases**  
- **Heavy writes** → ST can balloon SSTable count; LSM mitigates.  
- **Large deletes/tombstones** → risk of “tombstone explosion”; use compaction thresholds.  
- **Skewed key distribution** → uneven level sizes; requires dynamic leveling.

**Optimize & Communicate**  
I’d emphasize that choosing a strategy is workload‑dependent: write‑intensive analytics favor ST, OLTP favors LSM. In production, ScyllaDB exposes tunable parameters (e.g., `sstables_per_tombstone_warn_threshold`) so you can shift the balance while monitoring latency and disk usage. This shows I understand both theory and practical tuning—key for a FAANG data‑engineering role.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
