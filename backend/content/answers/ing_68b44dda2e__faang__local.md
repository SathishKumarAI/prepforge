---
qid: ing_68b44dda2e__faang__local
question: 'Explain: Event Notification — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 557
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:47:06-05:00'
sources: []
---

**Event Notification – Pub/Sub System Design**

| Step | What I’d do |
|------|-------------|
| **Clarify** | *Problem:* Build a system that pushes events (e.g., “user signed up”) to multiple independent consumers in real‑time. <br>*Assumptions to confirm:* 1) Scale: millions of events/sec, 10k+ subscribers.<br>2) Ordering guarantees? 3) Latency target (<50 ms).<br>4) Delivery semantics (at‑least‑once vs exactly‑once). |
| **Approach** | 1. **Event Producer → Topic Router**: hash‑shard by key, write to a distributed log (Kafka/Segmented S3). <br>2. **Subscription Layer**: maintain per‑subscriber offset table; push events via pull or push APIs. <br>3. **Delivery Guarantees**: use idempotent processing + deduplication tokens. <br>4. **Scalability**: partition topics, auto‑scale consumers, employ back‑pressure queues (e.g., SQS). |
| **Depth** | *Core Components:*<br>• **Topic Store** – append‑only log with compaction.<br>• **Metadata Service** – registry of subscribers and offsets.<br>• **Broker** – dispatches events to subscribed endpoints, supports batching & compression.<br>*Complexity:* O(log P) for partition lookup, constant time offset updates; throughput linear in number of partitions. <br>*Trade‑offs:* Pull gives back‑pressure control but higher latency; push is lower latency but harder to throttle. |
| **Edge Cases** | • Subscriber crash → replay from last committed offset.<br>• Duplicate events → dedupe via unique event ID.<br>• Schema evolution – use Avro/Protobuf with versioning.<br>• Bursty traffic – use adaptive prefetch or consumer groups. |
| **Optimize & Communicate** | 1. Add *compaction* to keep only latest state per key for “latest‑state” topics. <br>2. Use *topic partitioning* proportional to event rate to avoid hotspots.<br>3. Expose a health‑check API so clients can monitor lag. <br>4. Document delivery guarantees and back‑off strategies in the design doc. |

**Takeaway:** A robust Pub/Sub system hinges on a scalable, fault‑tolerant log, precise offset tracking, and clear semantics around ordering/delivery—balanced between pull/push models to meet latency vs. reliability goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
