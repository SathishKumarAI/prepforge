---
qid: ing_5cb06f324e__star__local
question: 'Explain: Cardinality in Time Series Databases — What Is Cardinality in
  a Database? - SolarWinds Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 367
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:33:09-05:00'
sources: []
---

**Situation**  
At my previous company we migrated our network monitoring system from a relational store to InfluxDB. The new schema stored every metric per device, interface, and location – roughly 12 dimensions. When the production load hit 50 k metrics per second, queries for average latency over the last hour started returning after 30 seconds.

**Task**  
I had to reduce query latency below one second while keeping historical granularity intact. The culprit was high cardinality: too many unique tag combinations caused InfluxDB’s index to balloon and memory pressure to spike.

**Action**  
First, I profiled the tag space with InfluxDB’s `SHOW TAG VALUES` and found 4,500 distinct interface IDs per device, each combined with a region tag. I applied two tactics: (1) created a composite tag “device‑region” by hashing the pair into a single value, reducing unique combinations from ~10 M to ~2 M; (2) switched off retention on the raw metric series and set downsampled 5‑minute aggregates with `continuous queries`. I also enabled sharding across 3 nodes and tuned `max-series-per-index` to 1.5 M.

**Result**  
Query times dropped from 30 s to <0.8 s for the same aggregation window, and memory usage fell by 60 %. The lesson: in time‑series systems cardinality is not just a number – it dictates index size, GC pressure, and ultimately performance. Carefully aggregating tags and downsampling can turn a nightmare into a smooth, responsive workload.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
