---
qid: ing_84c908953f__star__local
question: 'Explain: Why compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 335
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:58:53-05:00'
sources: []
---

**Situation:**  
While leading the migration of our recommendation engine to ScyllaDB, we hit a spike in read latency—average queries were slow by ~120 ms during peak traffic (10k req/s). The data model involved many time‑series tables with high write churn.

**Task:**  
Reduce query latency below 30 ms and keep the disk usage under 70% of capacity while preserving consistency across three DCs.

**Action:**  
I first profiled compaction logs; the default “Size‑Tiered” strategy was creating too many small SSTables, leading to frequent merge operations. I switched to a “Time‑Window Compaction Strategy (TWCS)” tailored for time‑series data, setting the window size to 12 hours and enabling “sstable_filtering.” I also tuned the compaction thresholds: min_sstable_size=256 MB, max_sstable_size=1 GB. On the client side, I added a lightweight write path that batches writes into 5 MB blocks to reduce compaction load. Finally, I monitored compaction metrics via Scylla Monitoring Stack and iterated on window size until read latency stabilized.

**Result:**  
Read latency dropped from 120 ms to 28 ms (a 77% improvement), disk usage fell to 68%, and write throughput increased by ~15%. The exercise taught me that selecting the right compaction strategy—based on data access patterns—is critical for balancing performance, storage efficiency, and operational overhead in ScyllaDB.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
