---
qid: ing_27bf2727d5__faang__local
question: 'Explain: Efficiency of compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 644
total_tokens: 901
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:15:56-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked how *SSTable* compaction works in ScyllaDB, what “efficiency” means (write amplification, read latency, storage overhead), and the main strategies (Merge‑Tree, Size‑Tiered, Time‑Window, Level‑Based). Assume we’re dealing with a write‑heavy workload on a distributed LSM‑style store.

**2️⃣ Approach**  
- Briefly describe SSTables as immutable sorted files.  
- Explain that compaction merges these files to reduce read amplification and reclaim space.  
- List the four strategies and their trade‑offs.  
- Highlight how ScyllaDB’s implementation (parallel, in‑memory buffers, adaptive tuning) improves efficiency.

**3️⃣ Depth**  
SSTables are immutable B+tree‑like structures written sequentially. Compaction merges *k* SSTables into one larger file, discarding tombstones and duplicate keys.  

| Strategy | Merge factor | Write amplification | Read amplification | Disk I/O |
|----------|--------------|----------------------|---------------------|----------|
| Size‑Tiered (ST) | 2–4 | High (many small files → many merges) | Low (most data in few large SSTables) | Many random reads during compaction |
| Time‑Window (TW) | Variable | Moderate (files aligned to time windows) | Low | Good for time‑series workloads |
| Level‑Based (LB) | 10–50 | Low (controlled merge factor) | Medium (multiple levels may need read) | Sequential I/O, less random reads |
| Merge‑Tree (MT) | Dynamic | Very low (only necessary merges) | High (reads can hit many branches) | Balanced I/O |

ScyllaDB’s compaction engine runs *k* parallel workers per node, each operating on a bounded in‑memory buffer (~64 MB). It uses adaptive merge factors: if the write rate drops, it reduces k to avoid unnecessary merges. The engine also performs *background garbage collection*, freeing space without pausing writes.

**4️⃣ Edge Cases**  
- Heavy read‑write hotspots → “hot” SSTables may never be compacted, causing high read latency.  
- Tombstone storms (mass deletes) can inflate file size until compaction runs; need to throttle.  
- Skewed data distribution leads to imbalanced levels in Level‑Based compaction.

**5️⃣ Optimize & Communicate**  
To improve efficiency:  
1. Tune `compaction_throughput_mb_per_sec` per workload.  
2. Use Time‑Window for log‑like data, Level‑Based for OLTP.  
3. Enable *adaptive merge factor* to auto‑scale k workers.  

Explain to interviewers that ScyllaDB’s compaction achieves <1 % write amplification on average by balancing parallelism and buffer size, while keeping read latency under 5 ms for most queries. This demonstrates deep understanding of LSM internals and practical performance tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
