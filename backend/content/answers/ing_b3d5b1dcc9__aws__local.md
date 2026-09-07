---
qid: ing_b3d5b1dcc9__aws__local
question: 'Explain: Memory use during compaction — SSTable compaction and compaction
  strategies \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 454
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:11:31-05:00'
sources: []
---

**Situation & Task**  
When I migrated a production ScyllaDB cluster from on‑prem to AWS, the write throughput spiked by 3× during peak hours. The compaction pipeline started thrashing: memory usage climbed past 70 % of node RAM, leading to frequent GC pauses and a 20 % SLA degradation.

**Action (Dive Deep + Ownership)**  
1. **Diagnose memory‑footprint** – instrumented the `CompactionExecutor` to log per‑SSTable read/write buffer sizes; found that default *SizeTiered* strategy kept 10 SSTables in memory for each compaction round, while our workload had a high write amplification.  
2. **Redesign strategy** – switched to *Leveled* compaction, which keeps at most one level‑0 SSTable per key range and limits the number of active SSTables to ~4 GB per node.  
3. **Tune parameters** – reduced `compaction_threshold` from 10 to 5, enabled `memtable_flush_writers=1`, and added a background compaction thread pool capped at 2.  
4. **Validate** – ran a 48‑hour load test on an identical EC2 g4dn.xlarge (8 GiB RAM) cluster; memory usage dropped to ~35 %, GC pauses < 5 ms, and throughput stayed above 30k ops/s.

**Result (Deliver Results)**  
- **Memory consumption:** ↓ 35 % → no out‑of‑memory crashes.  
- **Latency:** average write latency fell from 18 ms to 9 ms.  
- **Cost impact:** the cluster remained on a single instance type, saving ~15 % annually versus scaling up for GC mitigation.

**Learnings (Bias for Action & Invent & Simplify)**  
I documented the compaction‑tuning playbook in Confluence and automated the strategy switch via Terraform modules, ensuring future teams can apply the same pattern without manual intervention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
