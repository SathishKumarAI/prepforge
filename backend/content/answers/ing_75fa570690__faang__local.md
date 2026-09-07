---
qid: ing_75fa570690__faang__local
question: 'Explain: Disk use during compaction — SSTable compaction and compaction
  strategies \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 633
total_tokens: 891
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:18:23-05:00'
sources: []
---

**Clarify**  
The interviewer asks how disk space is handled during an SSTable compaction in ScyllaDB and what strategies exist to control it. I’ll assume we’re dealing with a typical LSM‑tree based key‑value store, that compactions are triggered by size or time thresholds, and that the goal is to keep read amplification low while avoiding sudden disk pressure.

**Approach**  
1. Explain the basic compaction flow: merge multiple SSTables → new SSTable + tombstone cleanup.  
2. Describe how ScyllaDB tracks “compaction overhead” (bytes written – bytes freed).  
3. Outline the three built‑in strategies: *leveled*, *size‑tiered* and *universal*.  
4. Show how each strategy limits peak disk usage via compaction throttling or table selection.

**Depth**  
- **Disk Usage Calculation**:  
  `Δdisk = Σ (input_bytes) – Σ (output_bytes)` for all SSTables in the merge.  
  ScyllaDB monitors this and, if Δdisk exceeds a configurable threshold, it pauses compactions until free space grows or a background flush frees space.
- **Leveled Compaction**:  
  Levels grow exponentially; each level has at most one overlapping SSTable per key range. This keeps Δdisk small because merges involve few files, but can increase read amplification if data is hot in the lowest level.
- **Size‑Tiered Compaction**:  
  Merges many SSTables of similar size; higher throughput but larger Δdisk spikes. Throttled by `max_concurrent_compactions` and a *compaction window* that limits how many files can be merged at once.
- **Universal Compaction**:  
  Uses a priority queue based on size and overlap; aggressively merges large, overlapping tables to reduce read amplification while keeping Δdisk bounded by the *target compaction ratio*.

ScyllaDB also supports *compaction strategies per table*, so a hot table can use leveled while cold data uses tiered.

**Edge Cases**  
- Sudden burst of writes → many tiny SSTables → size‑tiered may cause large Δdisk spikes.  
- Data loss or corruption during compaction could leave orphaned files; ScyllaDB has a repair step that re‑writes bad SSTables.  
- Disk full before compaction finishes: the node will pause reads/writes until space is reclaimed.

**Optimize & Communicate**  
To reduce disk pressure, I’d recommend tuning `compaction_throughput_mb_per_sec`, setting `max_bytes_for_level_base` appropriately, and monitoring `compaction_pending_bytes`. I’d explain that choosing a strategy is a trade‑off: leveled gives predictable reads at the cost of more frequent small merges; size‑tiered maximizes write throughput but can temporarily consume >50 % extra disk. Communicating these trade‑offs clearly shows deep understanding of both LSM internals and operational constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
