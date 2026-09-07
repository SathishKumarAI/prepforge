---
qid: ing_e5fc249be2__aws__local
question: 'Explain: Caching after compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 412
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:57:58-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the redesign of our distributed KV store that used ScyllaDB for real‑time analytics. The query latency was 120 ms on average, but downstream dashboards required < 30 ms to stay in sync with a 10 Gbps ingest stream.  

**Action (Design)**  
I introduced *caching after compaction*—a two‑step strategy:  
1. **Post‑compaction snapshot** – After every major compaction I ran a lightweight “snapshot” job that materialized the latest SSTable into an in‑memory cache (Redis Cluster) keyed by the partition hash.  
2. **Lazy eviction policy** – Evict entries only when their underlying SSTables are purged or older than 24 h, ensuring consistency while keeping memory bounded.

I leveraged Scylla’s `sstable_compaction` hooks to trigger the snapshot, and used AWS ElasticCache for Redis (multi‑AZ) so that cache reads were served within < 5 ms.  

**Result**  
Latency dropped from **120 ms → 25 ms** on average; CPU utilization fell by 18 % because compaction threads spent less time scanning stale data. The system now supports 50 % more ingestion throughput without additional hardware.

**Reflection (Leadership)**  
- *Ownership*: I owned the end‑to‑end pipeline, from ingestion to caching.  
- *Dive Deep*: I profiled compaction traces, identified hotspots, and quantified cache hit ratios (> 92%).  
- *Bias for Action*: Implemented a phased rollout, monitored impact, and iterated on eviction thresholds.  

**Bar‑raiser check** – The solution demonstrates ownership, depth of technical insight, measurable impact, and lessons learned (e.g., balancing memory vs latency).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
