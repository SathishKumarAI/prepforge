---
qid: ing_086be104cb__star__local
question: 'Explain: Backing indices — Data streams | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 395
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:45:53-05:00'
sources: []
---

**Situation** – In early 2024 I was leading the migration of our log‑analytics pipeline from a legacy MySQL store to an Elastic Stack stack for real‑time alerting. The volume had exploded: 3 TB/month, with peak bursts of 10 k logs/sec during product launches.

**Task** – We needed to preserve high ingestion throughput while keeping query latency under 200 ms and ensuring that roll‑ups could be performed nightly without affecting the live data view. My goal was to design a scalable storage model that separated raw events from aggregated metrics without sacrificing searchability.

**Action** – I introduced Elastic’s *data streams* with backing indices. For each log type (e.g., `app-events`, `security-logs`) I created a single logical stream backed by three indices: one hot index for current data, one warm index for 7‑day retention, and one cold index for archival. The hot index was mapped with dynamic templates and an ingest pipeline that enriched logs with geo tags. I set lifecycle policies to automatically rollover the hot index after 500 GB or 24 h, and to move indices to the warm tier on XFS SSDs. Aggregation views were built as read‑only “searchable snapshots” over the backing indices, allowing nightly cron jobs to materialize summaries without locking the live stream.

**Result** – Ingest throughput improved by 4× (from 1 k to 4 k logs/sec) and query latency dropped from 350 ms to 120 ms on average. The automated rollover cut operational overhead by 70 %. I learned that carefully aligning data streams with Elastic’s lifecycle policies can give you both real‑time agility and long‑term cost efficiency without a separate sharding strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
