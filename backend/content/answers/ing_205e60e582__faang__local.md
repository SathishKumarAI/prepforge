---
qid: ing_205e60e582__faang__local
question: 'Explain: Merging partitions — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 516
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:59:58-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked how ScyllaDB merges SSTable partitions during compaction and what strategies it offers. I’ll assume we’re focusing on the *write‑heavy* use case where many small SSTables are produced and need to be merged efficiently, preserving read performance.

**2️⃣ Approach**  
1. Explain the background: data is written in memtables → flushed to immutable SSTables; compaction merges them.  
2. Describe Scylla’s **partition‑aware compaction** (SSTable compaction) – it groups SSTables by token ranges, then merges within each partition.  
3. List the main strategies: *Size‑Tiered*, *Leveled*, and *Time‑Window*.

**3️⃣ Depth**  
- **Size‑Tiered (default)**: Randomly picks 2–4 SSTables of similar size; merges them into one larger file. Simplicity → low CPU, but can produce many overlapping files causing read amplification.  
- **Leveled**: Organises SSTables in levels where each level is up to *k* times larger than the previous (k≈10). Guarantees at most one SSTable per key per level, reducing overlap and read latency. Requires more aggressive compaction but less garbage.  
- **Time‑Window**: Splits data by time windows; merges only SSTables within the same window. Useful for time‑series workloads where old data can be tombstoned or dropped.  

All strategies use *partition filtering* – only SSTables that contain the target token range are read, minimizing disk I/O.

**4️⃣ Edge Cases**  
- Extremely skewed key distribution → a single partition may dominate compaction, causing hot spots.  
- Heavy deletes → tombstone accumulation; Time‑Window helps but can be problematic if windows aren’t aligned with TTLs.  
- Large compactions can cause GC pauses; Leveled mitigates this by keeping compaction size bounded.

**5️⃣ Optimize & Communicate**  
When interviewing, I’d highlight that Scylla’s tunable strategies let operators trade off write amplification vs read latency. In practice, most workloads start with Size‑Tiered and migrate to Leveled once the cluster stabilises. I’d also mention how Scylla auto‑adjusts compaction threads based on node load, keeping CPU utilisation optimal while maintaining consistency guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
