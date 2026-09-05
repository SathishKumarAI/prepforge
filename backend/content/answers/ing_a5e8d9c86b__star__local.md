---
qid: ing_a5e8d9c86b__star__local
question: 'Explain: Leveled Compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 319
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:04:53-05:00'
sources: []
---

**Situation:**  
At my previous role, we were migrating a high‑write Cassandra cluster to ScyllaDB for our real‑time analytics pipeline. The write amplification had ballooned: compaction churn was causing 1.5× CPU usage and latency spikes during peak traffic.

**Task:**  
I needed to redesign the compaction strategy so that read latency stayed below 20 ms, while keeping disk I/O within budget and preserving fault tolerance across a 12‑node ring.

**Action:**  
First, I benchmarked Scylla’s default leveled compaction (L0–L4) against size‑tiered. Using the `scylla-compaction-opts` JMX interface, I tuned the `target_file_size_mb` to 256 MB and enabled *compaction priority* so hot partitions were compacted first. I then implemented a custom compaction filter in C++ that merged only columns with TTL > 30 days, reducing merge size by ~35%. Finally, I automated nightly compaction windows via `scylla.yaml` to avoid peak traffic interference.

**Result:**  
Post‑deployment, CPU usage dropped from 1.5× to 0.9× baseline, read latency improved from 35 ms to 18 ms, and disk space consumption fell by 28%. I learned that fine‑tuning leveled compaction parameters—especially file size and priority—can dramatically improve performance without sacrificing durability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
