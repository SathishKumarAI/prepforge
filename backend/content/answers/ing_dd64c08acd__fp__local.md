---
qid: ing_dd64c08acd__fp__local
question: 'Explain: Storage — Uncovering Kafka\u2019s Hidden Infrastructure Costs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 361
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:50:10-05:00'
sources: []
---

**Why Kafka’s “storage” cost is hidden**

At its core, Kafka is a *distributed log*: it stores every byte of data in a sequence that guarantees fault‑tolerance and low latency. The fundamental problem it solves is **durable, ordered message delivery with high throughput**. To do this efficiently, each broker writes records to immutable segment files on disk and maintains a small index for fast look‑ups. The cost structure follows two intertwined principles:

1. **Write‑once, read‑many** – Kafka’s append‑only design turns every write into a sequential disk operation, which is cheap in raw I/O terms. However, because segments never shrink, the total on‑disk footprint grows linearly with the *retention period* and *topic throughput*. This linear growth is invisible until you hit disk limits or need to provision more storage.

2. **Replication as safety** – Kafka replicates each partition across `N` brokers (`N≥3` for 3‑node clusters). The replication factor multiplies raw data volume by `N`. Many teams ignore this multiplier, assuming “one copy” suffices; in reality, every message exists *N* times on disk.

The non‑obvious insight: **the cost is not just the bytes you see in your UI but the bytes that exist implicitly due to replication and immutable retention**. If a topic ingests 1 GB/s for 24 h with a replication factor of 3, you need ~260 TB of raw storage (≈ 1 GB/s × 86,400 s × 3). That’s the hidden infrastructure cost Kafka forces you to pay for durability and availability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
