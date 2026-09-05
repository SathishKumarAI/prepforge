---
qid: vq_83c20338db__star__local
question: How to choose partitioning column in hive? and which column shouldn't use
  partition and why?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 388
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:07:30-05:00'
sources: []
---

**Situation** – In my last role I was tasked with migrating a 3‑TB log dataset from S3 into Hive for downstream BI. The data had millions of daily logs and we needed to keep query latency under two seconds for the marketing team’s dashboards.

**Task** – Design an efficient partitioning scheme that maximized pruning while avoiding excessive metadata overhead, and identify columns that would break the system if used as partitions.

**Action** – I started by profiling the data: `log_date` was a daily field with 365 distinct values per year; `user_id` had over 10 million unique values; `event_type` had only five. I chose **`log_date`** as the partition column because it offered high selectivity, matched query patterns (date ranges), and kept the number of partitions manageable (~1k). For each day we created a single partition directory, which reduced the Hive metastore size from ~10 GB to <500 MB. I avoided using `user_id` or `event_type` as partitions because their cardinality would have produced millions of tiny files, causing an explosion in task scheduling overhead and slowing down compaction.

**Result** – Query performance improved from 15 s to under 2 s for typical date‑range selects. The metastore size shrank by 95%, and we eliminated the need for manual partition pruning scripts. I learned that a good partition column balances cardinality, query patterns, and file system limits—while high‑cardinality or low‑selectivity columns should be left out to prevent metadata bloat and poor performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
