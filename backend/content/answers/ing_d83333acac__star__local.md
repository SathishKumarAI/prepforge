---
qid: ing_d83333acac__star__local
question: 'Explain: When to start using compacted tables — SSTable compaction and
  compaction strategies \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 439
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:41:28-05:00'
sources: []
---

**Situation:**  
At my last job we ran a real‑time recommendation engine on ScyllaDB. Our traffic spiked during flash sales and the write throughput hit 1 M ops/sec. The cluster’s read latency shot up to 15 ms from an acceptable 3–4 ms because the SSTables were bloated with many tombstones and duplicate keys.

**Task:**  
I had to reduce read latency below 5 ms while keeping write performance high, all without taking the service offline for a long maintenance window.

**Action:**  
I started by enabling **compact tables** on the heavily‑written recommendation column family. Compact tables eliminate per‑row SSTable metadata and merge duplicate columns at compaction time, which cuts down the number of SSTables we needed to scan. I then switched from the default **SizeTieredCompactionStrategy (STCS)** to **LeveledCompactionStrategy (LCS)** for that CF because LCS keeps read amplification low and produces smaller, more uniform SSTables. To avoid a write stall during compaction, I tuned the `compaction_throughput_mb_per_sec` to 500 MB/s and scheduled compactions during off‑peak hours using Scylla’s `nodetool compact` with `--dry-run` first. I also added a **Materialized View** on a hot key set to pre‑aggregate counts, reducing read load.

**Result:**  
After the changes, read latency dropped from 15 ms to 3.8 ms (a 75 % improvement), and the write throughput stayed above 1 M ops/sec with only a 5 % increase in disk usage. I learned that compact tables are ideal for write‑heavy workloads where duplicate columns dominate, but they work best when paired with an appropriate compaction strategy like LCS to keep read amplification minimal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
