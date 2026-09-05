---
qid: ing_61d20442f5__star__local
question: 'Explain: Database — Design URL Shortener | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 337
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:43:43-05:00'
sources: []
---

**Situation** – At my previous startup we had a public API that generated short URLs for user‑generated content. The traffic spiked during a marketing campaign: we went from ~5k requests/day to over 300k in a single week, and the existing NoSQL solution started throttling under write contention.

**Task** – I was asked to redesign the URL storage layer so it could handle high write rates, provide instant lookup with sub‑millisecond latency, and support easy analytics (click counts, geographic breakdown) without compromising consistency.

**Action** – I chose a hybrid schema on DynamoDB: a partition key of the hashed short code and a sort key of `meta` for TTL cleanup. To avoid hot partitions, I used a random prefix derived from a MurmurHash of the original URL, distributing writes evenly across shards. For analytics I added a separate Aurora PostgreSQL table with an ON‑DELETE trigger that streams click events into Kinesis, then aggregates in Redshift nightly. I also implemented a cache layer (Redis) for hot URLs and a global secondary index on `original_url` to enable reverse lookup.

**Result** – The new design handled 1 million writes per minute with <5 ms read latency, reduced error rates from 2.3% to <0.01%, and cut storage costs by 30% thanks to TTL cleanup. I learned that careful partitioning plus a complementary analytical store can turn a simple URL shortener into a scalable, data‑rich service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
