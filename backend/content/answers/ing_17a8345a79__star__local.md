---
qid: ing_17a8345a79__star__local
question: 'Explain: Examples — Statefulvsstateless'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 325
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:16:10-05:00'
sources: []
---

**Situation** – In a streaming recommendation engine for an e‑commerce platform, we had a real‑time feature extractor that ran on Kafka streams and produced user embeddings every second. The latency SLA was 50 ms per event, but the initial implementation hit 120 ms because each event triggered a full model inference from scratch.

**Task** – Reduce processing time to meet the SLA while keeping accuracy high, by deciding which parts of the pipeline could be stateful and which should remain stateless.

**Action** – I refactored the feature extractor into two stages. The first stage (stateless) parsed raw click events and computed simple statistics (hour‑of‑day, device type). The second stage (stateful) maintained a per‑user rolling window of recent interactions in a RocksDB store; it updated the user embedding incrementally using an online learning update instead of recomputing from all history. I used Kafka Streams’ `KeyValueStore` for state and set up a TTL of 24 h to avoid unbounded growth.

**Result** – Latency dropped from 120 ms to 35 ms on average, meeting the SLA with margin. The online update preserved 98% of the batch‑mode model’s AUC. I learned that judiciously separating stateless parsing from stateful incremental updates can dramatically improve throughput in real‑time ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
