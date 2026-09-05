---
qid: ing_03849aaec2__star__local
question: 'Explain: Terminology — Distributed Counter System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 344
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:35:28-05:00'
sources: []
---

**Situation** – At my previous company we built a real‑time analytics dashboard for a global e‑commerce platform. The “page views per product” metric was being calculated in a single Redis instance; as traffic spiked to 50 k requests/second, the counter service started throttling and data lagged by minutes.

**Task** – I had to redesign the counter subsystem so it could scale horizontally, tolerate node failures, and still provide sub‑second read latency for the dashboard while keeping write consistency within ±1 count.

**Action** – I chose a sharded architecture using Apache Kafka as an event log. Each request generated a lightweight “increment” message that was routed to one of 32 topic partitions via a consistent hash on product ID. A pool of stateless workers consumed from these partitions, updated per‑partition counters in RocksDB, and published snapshots to a Redis cluster for fast reads. To avoid lost increments during worker restarts, I implemented idempotent writes using a monotonically increasing sequence number stored alongside each counter. For consistency checks, a nightly job replayed the Kafka log against the Redis state and repaired any discrepancies.

**Result** – The new system handled 200 k ops/sec with <15 ms read latency across all regions. Counter accuracy improved to ±0.5% (previously ±3%). I learned how event‑driven sharding, idempotence, and periodic reconciliation can turn a fragile single‑node counter into a robust distributed service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
