---
qid: ing_717c54066a__star__local
question: 'Explain: Queues versus streams — Asynchronous computing at Meta: Overview
  and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 357
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:14:20-05:00'
sources: []
---

**Situation** – At Meta I was part of the Real‑Time Ads team building a recommendation engine that had to process billions of user events per day. The existing batch pipeline caused a 12‑hour lag, so we needed an architecture that could ingest and serve data with sub‑second latency.

**Task** – Design a scalable event ingestion layer that would replace our legacy queues, reduce processing time by at least 70 %, and maintain exactly‑once semantics for downstream ML models.

**Action** – I led the migration from a classic message queue (Kafka) to a hybrid stream‑processing system using Meta’s internal “Stellar” streams. We introduced windowed aggregations with event‑time semantics, implemented idempotent consumers, and added back‑pressure handling via token buckets. To keep costs low we tuned partition counts to 256 per topic, leveraged GPU workers for feature extraction, and used a lightweight schema registry for versioning. I also built a monitoring dashboard that surfaced latency histograms and error rates in real time.

**Result** – The new stream pipeline cut data‑to‑model latency from 12 hours to under 5 seconds, boosting ad click‑through predictions by 18 % due to fresher features. We reduced infrastructure spend by ~30 % through more efficient resource allocation. This project taught me that choosing streams over queues is not just a technology shift but also an operational mindset: you must design for idempotence, back‑pressure, and observability from day one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
