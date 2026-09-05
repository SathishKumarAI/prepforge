---
qid: vq_8ccf251e28__star__local
question: What is checkpoint?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 322
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:08:56-05:00'
sources: []
---

**Situation** – In a streaming pipeline for our ad‑tech platform, we were ingesting click logs at 30 k events per second into Apache Flink. During a heavy traffic spike last quarter, the job started lagging and some windows were replayed, causing duplicate analytics in downstream dashboards.

**Task** – I had to add fault tolerance so that on any node failure or restart the pipeline could recover exactly‑once without data loss or duplication, while keeping latency under 200 ms per event.

**Action** – I implemented Flink’s checkpointing mechanism: enabled a state backend with RocksDB and set `state.backend.checkpoint.storage` to an HDFS snapshot store. Configured checkpoints every 5 seconds with a 30‑second timeout and enabled externalized checkpoints to survive job restarts. I also tuned the `maxConcurrentCheckpoints` to 1 to avoid back‑pressure, added a custom `CheckpointListener` to log checkpoint durations, and used Flink’s exactly‑once source API for Kafka to ensure idempotent reads.

**Result** – After deployment, we saw zero data loss during subsequent traffic surges; latency stayed at ~180 ms, and the duplicate alert rate dropped from 12% to <0.01%. I learned that careful checkpoint interval tuning and externalized storage are key to balancing reliability and performance in real‑time pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
