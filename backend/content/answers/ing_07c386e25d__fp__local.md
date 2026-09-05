---
qid: ing_07c386e25d__fp__local
question: 'Explain: Data Warehousing — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 379
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:21:59-05:00'
sources: []
---

**Why we need CDC in a data‑warehouse**

A warehouse is a *snapshot* of business facts, built from many transactional sources.  
When those sources mutate, the warehouse must stay consistent without re‑ingesting everything.  
The fundamental problem is: *how to propagate only the changes that matter, with minimal latency and maximal correctness?*

**Core principle – incremental delta propagation**

1. **Detect** the smallest unit of change (row insert/ update/delete).  
2. **Record** it in a *change log* that preserves order and causality.  
3. **Transform & load** that delta into the warehouse, updating aggregates or materialized views on‑the‑fly.

This is an instance of *online incremental computation*: you maintain a global state by applying small updates instead of recomputing from scratch. It guarantees linear time in the number of changes rather than quadratic in data size.

**Typical CDC mechanisms**

| Source | Technique | Trade‑offs |
|--------|-----------|------------|
| RDBMS | Trigger + log table | Low latency, extra write load |
| File system | Timestamp & checksum diff | Simple, but may miss concurrent writes |
| Streaming (Kafka) | Change events as records | Decouples source/consumer, supports replay |

**Non‑obvious insight**

Most designs treat CDC logs as a *passive* buffer: read‑only by the warehouse.  
But if the log itself is a **distributed stream**, you can run *incremental analytics* (e.g., sliding window aggregates) directly on the CDC channel before it even hits the warehouse.  
Thus, the CDC layer becomes both a *commit log* and an *analytic pipeline*, reducing duplication of effort and enabling real‑time dashboards without extra ETL jobs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
