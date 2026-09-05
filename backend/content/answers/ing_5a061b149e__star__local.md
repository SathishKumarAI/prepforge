---
qid: ing_5a061b149e__star__local
question: 'Explain: Date-Tiered Compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 370
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:27:46-05:00'
sources: []
---

**Situation:**  
At my previous role I was tasked with scaling a time‑series analytics platform that ingested millions of IoT events per day into ScyllaDB. The write latency kept creeping up as the cluster grew because compaction was flooding the disk and CPU.

**Task:**  
I had to redesign the compaction strategy so that writes stayed sub‑10 ms while keeping read amplification low, all without breaking the existing query patterns.

**Action:**  
I switched from the default Size‑Tiered Compaction (STCS) to Date‑Tiered Compaction (DTCS). I first benchmarked both strategies on a staging cluster, measuring compaction throughput and disk usage. With DTCS I configured a 24‑hour retention window, so each SSTable was split by day and only merged within its own tier. This reduced the number of files on disk from ~12k to ~1.2k per node. I also tuned the `compaction_window` parameters and enabled `sstable_preemptive_compaction` to keep hot data in RAM longer. Finally, I scripted a nightly job to delete SSTables older than 30 days to enforce our retention policy.

**Result:**  
Write latency dropped from ~35 ms to <9 ms on average, and disk usage fell by 70%. Read amplification improved because queries were hitting fewer SSTables. The team learned that aligning compaction strategy with data access patterns—especially in time‑series workloads—can deliver huge performance gains without adding hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
