---
qid: ing_142aa326d7__star__local
question: 'Explain: Implement "top-k most frequent search queries" over a large query
  log, then tell me what breaks when the log becomes an unbounded stream across many
  machines.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 338
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:08:33-05:00'
sources: []
---

**Situation** – In my last role at a global e‑commerce platform, we were tasked with surfacing the top‑k trending search terms for real‑time marketing dashboards. Our query log was petabytes in size and arrived as an unbounded stream from 200+ web servers.

**Task** – Build a scalable pipeline that continuously outputs the current top‑k (k = 10) most frequent queries with minimal latency, ensuring accuracy across all shards while keeping memory usage bounded.

**Action** – I chose a distributed sliding‑window sketch: each worker maintained a Count‑Min Sketch for its shard, then emitted only the local top‑k candidates every minute. A central coordinator merged these sketches and ran a deterministic merge to compute the global top‑k, using HyperLogLog to estimate cardinalities and adjust error bounds. We deployed this on Spark Structured Streaming with Kafka as the source, leveraging stateful aggregations and checkpointing for fault tolerance.

**Result** – The system produced accurate top‑10 lists within 2 seconds of data arrival, with a sketch error <0.5%. We reduced memory footprint by 80% compared to naive counters. However, when the log became an unbounded stream across many machines, I observed that hash collisions in Count‑Min Sketch caused bias: popular terms from one shard could be undercounted if their hash bucket was already saturated by less frequent queries from another shard. This highlighted the need for adaptive sketch sizing or a more robust algorithm like Adaptive Counting when dealing with truly unbounded, highly skewed streams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
