---
qid: ing_5cb06f324e__fp__local
question: 'Explain: Cardinality in Time Series Databases — What Is Cardinality in
  a Database? - SolarWinds Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 370
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:21:23-05:00'
sources: []
---

**Cardinality in a time‑series database is the number of distinct values a column can take at any instant.**  
In practice this means how many different “labels” (tags) a metric can be broken down into—e.g., CPU, memory, disk, network per host, region, or environment. The fundamental problem it solves is *storage‑efficiency vs. query granularity*. Every distinct label combination forces the database to create a separate time series line; each line consumes overhead (headers, index entries) and slows down writes.

Why does this matter?  
- **Write path**: A higher cardinality means more series to update per timestamp, increasing CPU and I/O.
- **Read path**: Queries that filter on many tags must scan a larger set of series, inflating memory usage and latency.
- **Compression**: Time‑series engines rely on run‑length or delta compression; too many unique series dilute these patterns, hurting compression ratios.

The deeper principle is *information theory*: each tag value carries entropy. A database that stores every possible combination treats them as independent random variables, exploding the state space. Efficient systems therefore limit cardinality—by coalescing tags, using sparse representations, or applying dimensionality reduction (e.g., hashing) to keep the entropy manageable.

**Non‑obvious insight:**  
In many workloads, *temporal locality* of tags is high—most series share the same set of labels for long periods. Exploiting this by caching tag dictionaries and reusing them across writes can reduce cardinality on‑disk without sacrificing query precision, a trick often overlooked when designing new metrics pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
