---
qid: ing_7552419f9a__faang__local
question: 'Explain: Scheduling — SSTable compaction and compaction strategies \u00b7
  scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 522
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:17:23-05:00'
sources: []
---

**Clarify**

The interviewer wants a concise overview of how ScyllaDB handles SSTable compaction—what it is, why it matters, and the main strategies (size‑tiered, leveled, custom).  
Assumptions:  
1. Audience knows basic LSM‑tree concepts.  
2. Focus on *Scylla* specifics rather than generic Cassandra.  

**Approach**

1. Explain SSTable compaction purpose.  
2. List Scylla’s compaction strategies and their trade‑offs.  
3. Highlight how Scylla tunes them for performance.  

**Depth**

- **SSTable Compaction**: Periodic merge of immutable SSTables to reduce read amplification, reclaim space, and maintain key ordering.  
- **Size‑Tiered (ST)**: Merge SSTables when their cumulative size reaches a threshold. Fast writes, high write amplification (~2×). Good for bursty workloads.  
- **Leveled (LT)**: Organize tables into levels with strict size ratios (1:10). Guarantees ≤4 read steps per key, lower read latency, but higher write amplification (~3–4×) and more CPU. Ideal for steady, query‑heavy traffic.  
- **Time‑Window Compaction (TWC)**: Groups by creation time; useful for time‑series data where old ranges are rarely updated. Reduces compaction cost on hot partitions.  
- **Hybrid**: Scylla can auto‑switch or mix strategies per keyspace, allowing write‑heavy tables to stay ST while read‑heavy ones become LT.

**Edge Cases**

- Extremely hot partitions may still suffer from *compaction storms*; enable *Compaction Throttling* and *Bloom Filter* tuning.  
- Disk‑type mismatch (NVMe vs SATA) can skew size ratios, leading to sub‑optimal compaction.  
- Schema changes (wide rows) may trigger unnecessary merges if not batched.

**Optimize & Communicate**

Suggest monitoring `scylla.yaml` metrics (`sstables_compacted`, `compaction_throttle`) and adjusting `sstable_size_in_mb` or `level0_tocreate_threshold`. Emphasize that Scylla’s *auto‑tuning* can adapt thresholds based on observed write rates, keeping the system balanced. Conclude with a trade‑off diagram to visually convey read vs write amplification across strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
