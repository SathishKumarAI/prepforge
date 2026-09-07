---
qid: ing_75fa570690__aws__local
question: 'Explain: Disk use during compaction — SSTable compaction and compaction
  strategies \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 507
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:52:18-05:00'
sources: []
---

**Situation & Task**  
I was hired by a fintech client to slash query latency on their Cassandra‑derived store (ScyllaDB). The problem: after months of writes, the SSTable set ballooned to 2 TB; compaction thrived but consumed >80 % disk I/O, stalling reads. **Goal:** reduce compaction overhead by 70 % while keeping throughput ≥ 10k RPS.

**Action (Technical Design)**  
1. **Analyze compaction metrics** – used `nodetool status` and Scylla Monitoring to confirm *full* compactions were triggered nightly.  
2. **Switch to size‑tiered + leveled hybrid strategy**:  
   - Small tables (≤ 50 GB) stay size‑tiered for rapid ingestion.  
   - Larger tables migrate to *leveled* compaction; each level capped at 10× the previous, preventing runaway read amplification.  
3. **Tune `compaction_throughput_mb_per_sec`** to 500 MB/s per node and enable *async* compactions via Scylla’s new `sstable_preemptive_compaction`.  
4. **Introduce a “staging” table**: writes go here; nightly Spark job merges into production tables, reducing on‑node compaction.  
5. **Automate monitoring with CloudWatch alarms** that trigger a Lambda to adjust thresholds based on disk I/O spikes.

**Result**  
- Disk I/O dropped from 85 % to 30 %.  
- Read latency improved by 4× (from 350 ms to 90 ms).  
- Throughput stayed >10k RPS, and cost‑effective storage usage fell by 25 % over 6 months.  

**Reflection & Leadership Principles**  
*Ownership* – I took full responsibility for the data layer’s performance, not waiting for vendor patches.  
*Dive Deep* – The metrics‑driven approach uncovered hidden compaction patterns that standard docs missed.  
*Bias for Action* – Implemented hybrid strategy within a sprint, avoiding costly “wait‑for‑release” cycles.  
Learning: early testing of leveled compaction on a subset revealed write amplification; we mitigated by combining with staging tables before full rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
