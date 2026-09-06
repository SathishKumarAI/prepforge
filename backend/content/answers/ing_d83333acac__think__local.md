---
qid: ing_d83333acac__think__local
question: 'Explain: When to start using compacted tables — SSTable compaction and
  compaction strategies \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 216
output_tokens: 655
total_tokens: 871
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:13:06-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**

- *What is a “compacted table” in this context?*  
  It refers to the result of **SSTable compaction** in ScyllaDB, where multiple SSTables are merged into fewer larger ones.
- *Assume the reader knows basic ScyllaDB architecture (CQL, LSM‑tree).*
- *Goal:* explain when to trigger compaction and which strategies exist.

---

**2️⃣ Adopt a mental model**

Treat ScyllaDB as an **LSM‑tree**:

| Stage | Data format | Lifecycle |
|-------|-------------|-----------|
| Write path | Memtable → Flush → SSTable | New writes become new SSTables |
| Read path | Merge‑index + Bloom filter + LSM merge | Reads probe latest SSTable first |
| Compaction | Merge multiple SSTables into one | Reduces read amplification & disk space |

Compaction is the maintenance operation that keeps the tree balanced.

---

**3️⃣ Step‑by‑step reasoning**

1. **Identify triggers:**
   - *Time‑based:* every X minutes/hours.
   - *Size‑based:* when number of SSTables > N or total size > threshold.
   - *Workload‑based:* high read/write churn, many tombstones.

2. **Choose a strategy:**
   - **Size‑Tiered (default):** merges SSTables of similar sizes; good for write‑heavy workloads.
   - **Time‑Window:** groups by timestamp ranges; suits time‑series data with predictable retention.
   - **Leveled:** keeps SSTable sizes roughly constant per level; reduces read amplification, better for read‑heavy use cases.

3. **Set parameters:**
   - `compaction_throughput_mb_per_sec` (overall speed).
   - `sstables_to_compact` (batch size).
   - Level‑specific thresholds (`max_sstable_size`, `target_level_size_factor`).

4. **Monitor & iterate:**
   - Use `nodetool compactionstats` and Scylla monitoring metrics.
   - Adjust based on GC churn, read latency, disk usage.

---

**4️⃣ Common pitfalls**

- *Over‑aggressive compaction:* consumes CPU and I/O, hurting performance.
- *Under‑compaction:* leads to many small SSTables → high read amplification.
- *Ignoring tombstone cleanup:* stale deletes can bloat SSTables; use `gc_grace_seconds` appropriately.

---

**5️⃣ Sanity checks & communication**

- **Ask:** “Does the compaction strategy match my workload’s write/read pattern?”  
  If not, tweak thresholds or switch strategies.
- **Explain in plain terms:** “Think of compaction as a cleanup crew that merges piles of files so your system reads faster and uses less space.”
- **Confirm understanding:** Have the learner describe when they’d choose size‑tiered vs. leveled.

This structured approach lets you decide *when* to compact and *how* to configure ScyllaDB’s compaction for optimal performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
