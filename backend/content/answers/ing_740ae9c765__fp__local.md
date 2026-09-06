---
qid: ing_740ae9c765__fp__local
question: 'Explain: Time series databases — Timeseries Databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 417
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:11:36-05:00'
sources: []
---

**Why a special database for “time‑series” data?**  
At its core, a time‑series database (TSDB) is an *index‑by‑timestamp* system that must satisfy three constraints:

1. **Continuous ingestion** – sensor streams produce millions of rows per second; the write path has to be O(1) and lock‑free.  
2. **Temporal locality** – queries almost always request recent data or a narrow window, so reads should skip irrelevant points by using *time‑based partitioning* (daily shards, hourly blocks).  
3. **Aggregation on demand** – analytics need down‑sampled views (avg/min/max) at arbitrary resolutions; storing raw data and recomputing each query would be quadratic.

From these constraints emerges the TSDB architecture:  
- **Append‑only, immutable files** written in a columnar format so that *timestamp* is the first key.  
- **Compression by delta‑encoding and bit‑packing**, exploiting the monotonicity of timestamps and locality of values.  
- **Hierarchical roll‑up trees** (e.g., downsampled blocks) that provide constant‑time “look‑ups” for any granularity.

The deeper principle is *information theory*: a TSDB trades entropy for predictability. By encoding time differences, it reduces the effective alphabet size; by pre‑aggregating, it reduces variance in queries.  

**Non‑obvious insight:** The most efficient TSDBs treat *time itself as a primary key* and *value as a secondary dimension*. This turns every query into a range scan over a single sorted list, which is far cheaper than a multi‑dimensional index. It also means that the database can be distributed simply by sharding on time slices—no need for complex partitioning logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
