---
qid: ing_597bbd3955__faang__local
question: 'Explain: Uh oh! — SSTable compaction and compaction strategies \u00b7 scylladb/scylladb
  Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 599
total_tokens: 855
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:11:53-05:00'
sources: []
---

**1️⃣ Clarify**  
The interviewer asks you to explain *SSTable compaction* and the various *compaction strategies* used in ScyllaDB (and Cassandra).  
Assumptions:  
- You’re familiar with SSTables as immutable on‑disk files.  
- You know basic write path (MemTable → CommitLog → SSTable) and read path (Bloom filter + index).  
- The audience is technical but not necessarily a database intern.

**2️⃣ Approach**  
1. Define compaction’s purpose: merge overlapping SSTables, reclaim space, keep read performance high.  
2. List ScyllaDB’s built‑in strategies: **Size‑Tiered (STCS)**, **Leveled (LCS)**, **Time‑Window (TWCS)**, and the experimental **Forest‑GC**.  
3. For each, outline how it groups SSTables, triggers merges, and what trade‑offs arise.

**3️⃣ Depth**  
- *Size‑Tiered*: buckets by size; when a bucket overflows, all SSTables in that bucket are merged into one larger file. Simple, low CPU, but can produce many overlapping files → higher read amplification.  
- *Leveled*: fixed‑size levels (L0, L1…); each level holds non‑overlapping SSTables up to a target size. When a level overflows, a background merge pushes data down the hierarchy. Lower read amplification (~1–2), but heavier CPU and higher write latency.  
- *Time‑Window*: groups by time windows (e.g., 4 h). Ideal for write‑heavy, time‑series workloads; reduces compaction churn for recent data while older data can be compacted aggressively.  
- *Forest‑GC* (experimental): uses a forest of trees to schedule compactions based on hotness and size, aiming to reduce both CPU and I/O.

**4️⃣ Edge Cases**  
- Heavy read bursts → STCS may degrade due to many overlapping SSTables; switch to LCS or TWCS.  
- Large deletes or tombstones → need “tombstone‑aware” compactions to avoid write amplification.  
- Skewed data distribution → level sizes must be tuned; otherwise, one bucket can dominate I/O.

**5️⃣ Optimize & Communicate**  
Explain how you’d profile a cluster: monitor *compaction throughput*, *write latency*, and *read amplification*. Then adjust the strategy per workload: STCS for OLTP, LCS for OLAP, TWCS for time‑series. Conclude by noting that ScyllaDB’s compaction engine is fully concurrent (one thread per CPU core) and leverages vectorized I/O, giving it a performance edge over Cassandra.

*Word count: 216*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
