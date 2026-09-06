---
qid: ing_7552419f9a__think__local
question: 'Explain: Scheduling — SSTable compaction and compaction strategies \u00b7
  scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 210
output_tokens: 726
total_tokens: 936
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:47:25-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**

- *Audience*: People familiar with NoSQL databases but not deep into storage internals.  
- *Goal*: Explain why SSTable compaction matters, what strategies exist in ScyllaDB, and how they differ from other systems (e.g., Cassandra).  
- *Assumptions*: Readers know that data is written to memtables then flushed to immutable SSTables; they’re aware of eventual consistency.

**2️⃣ Mental model / framework**

Use a **pipeline analogy**:  

1. **Write path** – Memtable → Commit log → SSTable (immutable).  
2. **Read path** – Search multiple SSTables + memtable.  
3. **Maintenance path** – Compaction: merge, deduplicate, delete tombstones.  

Map each compaction strategy onto this pipeline, highlighting its impact on I/O, space usage, and latency.

**3️⃣ Step‑by‑step reasoning**

1. *Why compact?* Explain that without merging, the read path grows linearly with writes, leading to high latency and storage bloat.  
2. *Compaction types*:  
   - **Size‑Tiered (ST)** – Merge random SSTables of similar size; good for write‑heavy workloads, but can produce many overlapping files.  
   - **Leveled (LV)** – Organize into levels with bounded overlap; reduces read amplification but needs more I/O during compaction.  
   - **Time‑Window Compaction (TWC)** – Group by time windows; ideal for time‑series data.  
3. *ScyllaDB specifics*:  
   - Default is **Leveled** for most workloads, with tunable *level sizes* and *max tables per level*.  
   - Implements **“compaction strategies as plugins”**: you can plug in ST or TWC via the `sstable_compaction_strategy` option.  
4. *Scheduling*: Explain how ScyllaDB schedules compactions in a background thread pool, balancing CPU and I/O. Highlight the *priority queue* that favors “urgent” compactions (e.g., when disk space is low).  
5. *Tuning knobs*: List key parameters (`sstable_compaction_threshold`, `max_bytes_for_level_base`, etc.) and how they influence throughput vs latency.

**4️⃣ Common traps to avoid**

- **Confusing “compaction strategy” with “compression algorithm.”** Emphasize that strategies decide *which* SSTables to merge, while compression (e.g., LZ4) decides *how* data is stored.  
- **Assuming more compactions always help.** Explain diminishing returns and the risk of excessive I/O.  
- **Ignoring read amplification:** Highlight that Leveled reduces reads but can increase write cost.

**5️⃣ Sanity‑check & communication**

- Re‑state the core benefit: *“Compaction turns a chaotic set of SSTables into an organized, efficient storage layout.”*  
- Use a concrete example (e.g., after 10 writes you have 10 SSTables; compaction reduces this to 2).  
- End with a quick “What if” scenario: *“If your workload is write‑heavy but reads are rare, ST might be fine; if you need fast point queries, LV is better.”*  

This structured walk‑through lets the candidate articulate the concept clearly and adapt the explanation to different audiences.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
