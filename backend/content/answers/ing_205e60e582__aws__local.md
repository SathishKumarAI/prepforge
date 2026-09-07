---
qid: ing_205e60e582__aws__local
question: 'Explain: Merging partitions — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 532
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:40:25-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation** – In my last role I led a migration of a high‑traffic SaaS analytics platform from Cassandra to **ScyllaDB** to reduce latency and storage costs.  
> **Task** – The biggest bottleneck was *SSTable compaction*: fragmented data caused 40 % read amplification and burst CPU usage during nightly merges.  
> **Action** – I applied the following strategy:  

1. **Compaction Strategy Tuning** – switched from *SizeTiered* to **TimeWindowCompactionStrategy (TWCS)** for time‑series tables, grouping rows by 4‑hour windows. This keeps hot data in recent SSTables and reduces merge frequency.  
2. **Partition Merging Logic** – enabled **partition‑merge** within TWCS: when a window closes, Scylla merges all partitions belonging to that window into one SSTable, cutting the number of files from ~2000 to <50 per node.  
3. **Monitoring & Autoscaling** – instrumented *Prometheus* + *Grafana* on CloudWatch, set alerts for CPU >80 % during compaction, and auto‑scales the Scylla cluster by adding 2 nodes when compaction load spikes.  

> **Result** – After re‑engineering:  
> • Read latency dropped from 120 ms to **30 ms** (4×).  
> • CPU usage during compactions fell by **70 %**, freeing compute for user queries.  
> • Storage footprint shrank by **35 %**, saving ~$12k/month on EBS.  

**Leadership Principles Reflected** – *Ownership* (I owned the end‑to‑end performance issue), *Dive Deep* (I dissected compaction internals and tuned parameters), and *Deliver Results* (measurable latency, cost, and capacity gains).  

> **Bar‑raiser cues** – I demonstrated ownership by taking responsibility for the entire migration; I dove deep into Scylla’s compaction mechanics; I quantified impact with clear metrics; and I learned from a failed initial attempt where I ignored window boundaries, leading to data skew—correcting that taught me the importance of precise configuration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
