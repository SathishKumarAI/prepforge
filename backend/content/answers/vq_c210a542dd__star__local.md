---
qid: vq_c210a542dd__star__local
question: what is scala Map?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 346
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:18:03-05:00'
sources: []
---

**Situation** – In my last role I was building a real‑time analytics pipeline for ad impressions. The data came in as JSON streams, and I needed to aggregate counts per campaign every second.

**Task** – My goal was to transform the raw event stream into a `Map[String, Long]` that held the current impression count for each campaign key, while keeping the transformation low‑latency and thread‑safe.

**Action** – I used Scala’s immutable `Map` first for its functional safety: each update produced a new map, which fit nicely with our Akka Streams back‑pressure model. When throughput spiked, I switched to a mutable `HashMap` wrapped in an `AtomicReference` so updates were O(1) and we avoided copying the whole structure on every event. I also leveraged pattern matching on the JSON to extract the campaign ID and used the `+` operator to increment counts:  
```scala
val updated = current.getOrElse(id, 0L) + 1L
current = current.updated(id, updated)
```
Finally, I added a cleanup step that pruned campaigns inactive for over five minutes, keeping memory usage bounded.

**Result** – The pipeline processed 2.5 M impressions per minute with an average latency of 12 ms per record, and the map size stayed under 10 KB even during traffic spikes. I learned that while immutable maps offer safety, mutable ones can be justified in high‑frequency scenarios when coupled with proper synchronization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
