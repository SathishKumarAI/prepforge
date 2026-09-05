---
qid: ing_e7ab0aa643__star__local
question: 'Explain: Kafka Topics and Partitions — The Ultimate Kafka 101 You Cannot
  Miss'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 333
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:11:51-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a real‑time fraud detection pipeline for a fintech client that processed ~2 M transactions per day. The data had to be ingested, scored by ML models, and flagged within seconds.

**Task** – My job was to design the Kafka layer so it could handle the volume, provide low latency, and allow horizontal scaling of consumers without bottlenecks.

**Action** – I created a single topic “transactions” but split it into 12 partitions. Each partition is an ordered log that can be read in parallel by consumer groups. I used a hash key on the customer ID so related events stayed in the same partition, preserving order for stateful ML models. I set `min.insync.replicas=2` and `acks=all` to guarantee durability, while tuning `linger.ms` to batch messages for throughput. We added an offset commit strategy that stored consumer offsets in a separate compacted topic so we could replay or recover from failures.

**Result** – The pipeline handled peak loads of 4 k TPS with <50 ms end‑to‑end latency and 99.9% availability. Partitioning also allowed us to scale the ML inference service across 8 consumer instances, cutting processing time by 35%. I learned that partition count is a balance: too few limits parallelism; too many can hurt ordering guarantees and increase coordination overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
