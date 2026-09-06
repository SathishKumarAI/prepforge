---
qid: ing_98a068ed2c__fp__local
question: 'Explain: Features — How Uber Serves Over 40 Million Reads Per Second from
  Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 489
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:30:27-05:00'
sources: []
---

**Why the problem demands a hybrid store**

When a city‑wide ride‑hailing platform must answer *tens of millions* of “what’s my next pickup?” queries every second, a single database layer cannot satisfy two constraints simultaneously:

1. **Low latency** – each request must return within 10 ms to keep drivers and riders happy.
2. **High capacity** – the system must ingest thousands of updates per second from mobile clients while serving the same volume of reads.

A pure *online* store (e.g., PostgreSQL) would choke on read traffic; a pure *offline* warehouse (e.g., Hadoop) would be too slow for real‑time decisions. Uber’s solution is to treat **features**—pre‑computed, time‑varying attributes such as “driver proximity” or “current demand heatmap”—as the single source of truth that lives in two tiers:

- **Persistent tier** (HDFS + Hive): every change is logged and replayed into a columnar store for analytical accuracy.
- **Hot tier** (Redis‑style cache): the same feature vectors are materialized in memory, partitioned by geographic region.

**How it works**

1. Every driver update writes to a Kafka log → *online* storage updates a Redis hash per zone.  
2. A nightly Spark job re‑calculates the full feature set from raw logs and overwrites the HDFS tables.  
3. The cache is refreshed asynchronously: a “feature refresh” worker streams the new table into Redis, preserving the exact schema.

**Deeper principle**

This architecture is an instance of *consistent hashing + read‑through caching*, which guarantees that the probability a query hits stale data is bounded by the refresh interval. It turns the expensive “read” operation into a cheap memory lookup while still allowing batch consistency checks.

**Non‑obvious insight**

The key trick is **feature symmetry**: every field that drivers or riders need is stored *once* in both tiers, so no translation layer is needed at query time. This eliminates the classic cache–DB “stale vs. fresh” trade‑off and lets Uber serve 40 M reads/sec with a single read path.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
