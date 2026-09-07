---
qid: ing_e1215e1991__faang__local
question: 'Explain: Pull — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 528
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:22:49-05:00'
sources: []
---

**Pull – Pub/Sub (System Design)**  

| Step | What I’d do | Why |
|------|-------------|-----|
| **Clarify** | *Restate*: “We need a pull‑based publish/subscribe system where consumers request messages from a broker.” | Ensures I understand the direction of traffic and that it’s not push. |
| **Assumptions to confirm** | 1) Message size & throughput targets. 2) Desired ordering guarantees. 3) Consumer retry semantics. 4) Fault‑tolerance expectations (at least once, exactly once). | These shape storage, latency, and consistency trade‑offs. |
| **Approach** | 1️⃣ **Topic → Partitioned queues** – horizontal scaling & lock‑free appends. <br>2️⃣ **Consumer groups** – each consumer gets a distinct offset per partition. <br>3️⃣ **Pull API** – consumer sends `GetMessages(partition, lastOffset)`; broker returns batch + new offset. <br>4️⃣ **Acknowledgment** – on success, consumer calls `Ack(offset)`, broker marks messages as delivered. <br>5️⃣ **Retention & compaction** – use configurable TTL or size‑based purge. | This pattern gives backpressure control and linear scalability. |
| **Depth (core)** | *Data store*: Log‑structured file or RocksDB per partition; append‑only ensures high write throughput. *Offset tracking*: Keep a small in‑memory map or compacted offset log per consumer group. *Pull latency*: O(1) read from the tail of the log. *Complexity*: Write O(1), pull O(k) where k is batch size. |
| **Edge Cases** | • Consumer stalls → use heartbeat/lease to detect dead consumers and rebalance offsets. <br>• Network partitions → ensure idempotent `Ack` handling. <br>• Ordering across partitions – impossible unless you serialize pulls per partition. |
| **Optimize & Communicate** | *Batching* reduces RPC overhead; *prefetching* hides network latency. For large‑scale, shard topics globally and use consistent hashing for consumer placement. I’d present this as a diagram: producer → topic → partitions → broker nodes → consumers via pull API, with offset commits shown. Mention that this is essentially the “Pull” model in Kafka/Google Pub/Sub, giving interviewers confidence in my system‑design chops. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
