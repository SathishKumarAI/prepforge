---
qid: ing_811a64d320__faang__local
question: 'Explain: Delivery Failures — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 438
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:45:05-05:00'
sources: []
---

**Delivery Failures – Pub/Sub (System Design)**  

| Step | What I’d do |
|------|-------------|
| **Clarify** | • We need a pub/sub system that guarantees *at‑least‑once* delivery even when consumers crash or network hiccups occur.<br>• Assume millions of publishers, thousands of subscribers, 99.999% uptime, and latency < 200 ms. |
| **Approach** | 1. **Decouple via durable message store** (e.g., Kafka topic partitions).<br>2. **Track consumer offsets** in a distributed log (Zookeeper/Etcd) so that on restart we resume from the last acked offset.<br>3. **Use idempotent processing** at the subscriber side to handle duplicates.<br>4. **Back‑pressure & retry policy**: exponential backoff + dead‑letter queue after N retries. |
| **Depth** | • *Storage*: each partition is a log of immutable records; consumers poll in batches (offset range).<br>• *Reliability*: replication factor 3 → data survives node failure.<br>• *Complexity*: Publish O(1) append; consume O(batch‑size). Latency ≈ network + serialization. <br>• *Trade‑offs*: higher replication = more storage, lower latency. |
| **Edge Cases** | • Consumer crashes before ack: offset not advanced → message re‑delivered.<br>• Network partition: publisher can still write; subscribers reconnect later.<br>• Duplicate keys: idempotent handlers or dedupe cache (e.g., Redis TTL). |
| **Optimize & Communicate** | • **Compression** and **batching** reduce wire cost. <br>• Use **topic compaction** for state‑driven streams to avoid stale data. <br>Explain that the design balances *throughput*, *latency*, and *exactly‑once* semantics while remaining horizontally scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
