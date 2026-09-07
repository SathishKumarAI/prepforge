---
qid: ing_2823e3061c__faang__local
question: 'Explain: Size your shards — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 450
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:16:47-05:00'
sources: []
---

**Clarify**

The question asks how to determine the optimal shard size in an Elasticsearch cluster (e.g., “Size your shards”). I’ll assume we’re dealing with a typical use‑case: high ingest rate, near‑real‑time search, and a mix of read/write workloads. We need to decide on shard count/size per index, balancing query performance, storage overhead, and recovery time.

**Approach**

1. Estimate total data volume (current + growth).
2. Define the target shard size (typically 10–50 GB for SSDs; larger if using HDD or very large indices).
3. Compute number of shards = ceil(total volume / target size).
4. Validate against cluster limits: max shards per node, JVM heap usage.
5. Iterate with monitoring metrics (search latency, merge time, recovery).

**Depth**

- **Shard size** directly impacts search performance: too small → many fragments → higher I/O; too large → long recovery times and inefficient merges.
- **JVM overhead**: each shard consumes ~40 MB of memory for Lucene internals; exceeding the heap can cause GC pauses.
- **Storage efficiency**: larger shards reduce per‑doc compression overhead but may hinder hot/cold tiering.
- **Practical rule**: aim for 10–30 GB on SSD, <5 GB on HDD. Use index templates to enforce shard settings.

**Edge Cases**

- Rapid data growth → reindex or use rollover indices.
- Mixed workloads (heavy writes + complex queries) may need smaller shards to keep search latency low.
- Legacy indices: avoid manual splits; prefer “shard split” APIs or reindex with new template.

**Optimize & Communicate**

Explain trade‑offs: larger shards reduce cluster overhead but hurt recovery and query parallelism. Communicate the plan as a living policy: monitor `cluster_stats`, adjust via templates, and automate rollover when thresholds are hit. This shows structured thinking, technical depth, and awareness of operational constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
