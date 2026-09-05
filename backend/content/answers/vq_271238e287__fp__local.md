---
qid: vq_271238e287__fp__local
question: What is granularity?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 346
total_tokens: 511
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:27:34-05:00'
sources: []
---

**Granularity in data engineering is the *resolution* at which information is stored, processed, or queried—essentially the “size” of the atomic unit of a dataset.**

Why must we care about it?  
When a system ingests raw events (e.g., click‑stream logs), each event is an *atom*. If we keep every atom separate, we obtain **high granularity**: fine‑grained detail, but high storage cost and slow aggregation. Conversely, if we pre‑aggregate into 1‑hour buckets, we have **low granularity**: cheaper, faster queries, but loss of detail that may be needed for downstream analytics.

The deeper principle is *information theory*: each atom carries a certain amount of entropy. Aggregating reduces entropy (lossy compression) but can preserve the relevant *mutual information* needed for a specific query. The trade‑off between storage cost and query latency is an instance of the classic **rate–distortion problem**: we choose a granularity that minimizes distortion while respecting resource constraints.

A non‑obvious insight: granularity should not be fixed per table but *dynamic*. Modern columnar stores (e.g., Apache Parquet) let you compress at block level; you can keep a high‑granularity “hot” slice for recent data and a low‑granularity “cold” slice for archival. This hybrid strategy aligns with the *temporal locality* of queries, yielding both cost savings and performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
