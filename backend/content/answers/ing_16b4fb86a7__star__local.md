---
qid: ing_16b4fb86a7__star__local
question: 'Explain: LSM-Tree (Log-Structured Merge Tree) — Database-Internals/DataStructures/LSMTree.md
  at main \u00b7 Anshul619/Database-Internals \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 273
output_tokens: 361
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:14:06-05:00'
sources: []
---

**Situation** – While working on a real‑time analytics platform for IoT devices, our write throughput was hitting 120 k ops/sec and the single‑node database stalled after a few hours of continuous ingestion.

**Task** – I had to redesign the storage layer so that writes stayed fast, reads remained efficient, and disk usage didn’t explode. The goal was to keep the latency under 5 ms for point queries while sustaining the high write rate.

**Action** – I introduced an LSM‑Tree architecture:  
1. **Write buffer (memtable)** in memory, sorted by timestamp, flushed to a new SST file once it hit ~4 MB.  
2. **Compaction strategy** that merged SSTs in levels—level‑0 had up to 4 files, level‑i grew geometrically (×10). I tuned the merge thresholds to keep read amplification below 3×.  
3. Used **Cassandra‑style Bloom filters** per SST to avoid disk seeks for missing keys.  
4. Implemented a background compaction daemon that ran during low‑traffic windows, using RocksDB’s LevelCompaction API as a reference.

**Result** – Write latency dropped from ~15 ms to <2 ms, and the system sustained 200 k ops/sec without crashes. Read latency improved from 12 ms to 4 ms for 95th percentile queries. I learned that careful tuning of memtable size, compaction thresholds, and filter usage is key to balancing throughput and storage efficiency in LSM‑Tree systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
