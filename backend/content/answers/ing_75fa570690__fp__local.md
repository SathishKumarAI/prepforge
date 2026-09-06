---
qid: ing_75fa570690__fp__local
question: 'Explain: Disk use during compaction — SSTable compaction and compaction
  strategies \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 533
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:15:32-05:00'
sources: []
---

**Why compaction consumes disk**

A distributed KV store writes every update as an immutable *SSTable* (sorted string table).  
The write path is *append‑only*: the new SSTable sits beside older ones, so reads may hit many files.  
Compaction is the process that re‑orders, merges and discards obsolete rows to restore read efficiency.

1. **Redundant copies** – Every SSTable exists once on disk; during compaction a *copy* of all live data must be materialised in a new file before the old ones can be deleted.  
2. **Write amplification** – The size of the output file is roughly the sum of input sizes minus tombstones, so the temporary space needed equals (or exceeds) the final size.

The cost is therefore *proportional to the number of SSTables and their total size*; it grows with write churn and partition distribution skew.

---

### Compaction strategies in ScyllaDB

| Strategy | When it shines | Why it works |
|----------|----------------|--------------|
| **Size‑Tiered (STCS)** | High write rates, uniform data | Merges *k* SSTables of similar size; simple, low overhead, but can leave many small files. |
| **Time‑Window (TWCS)** | Time‑series workloads | Organises SSTables by ingestion time windows; allows efficient pruning of old ranges and reduces compaction fan‑out. |
| **Leveled (LCS)** | Reads‑heavy, low latency | Keeps a bounded number of *level‑i* files whose total size is *O(2^i)*; guarantees that a read touches at most one file per level, trading higher write cost for predictable read performance. |

**Non‑obvious insight:**  
The *amortised* disk space used by compaction can be bounded if the strategy enforces a **maximum fan‑out** (e.g., Leveled keeps ≤ 10 files per level). This turns what looks like unbounded write amplification into a predictable constant factor, enabling tight guarantees on both throughput and storage utilisation.

---

#### Bottom line

Compaction is inherently “copy‑and‑drop” because of immutable SSTables.  
Choosing the right strategy balances *write amplification* against *read efficiency*, and careful fan‑out control turns the worst‑case disk usage into a well‑behaved constant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
