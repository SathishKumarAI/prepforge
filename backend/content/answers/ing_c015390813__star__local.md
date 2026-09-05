---
qid: ing_c015390813__star__local
question: 'Explain: Store Events for Audit and Replay — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 354
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:54:40-05:00'
sources: []
---

**Situation** – At my last company we had a SaaS platform that exposed many micro‑services via HTTP APIs. Every change to an order needed to be logged for compliance, and we also wanted to let third‑party vendors hook into these changes in real time. The existing logs were flat files on a shared volume, which made replay impossible and caused latency spikes when a vendor’s webhook failed.

**Task** – Design a fault‑tolerant event store that guarantees at‑least‑once delivery to webhooks, preserves order per entity, and allows auditors to replay any event stream for forensic analysis.

**Action** – I chose an append‑only Kafka topic per aggregate type. Each service publishes a JSON event (with idempotency key, timestamp, payload) to its topic. A separate “webhook dispatcher” consumer group reads the stream, writes events to DynamoDB with a retry counter, and pushes them to the vendor’s URL via HTTPS. If delivery fails, we back‑off exponentially and keep the record until it succeeds or expires. For replay, an auditor can run a lightweight job that consumes the same topic from the beginning, reconstructing state by replaying events into a local in‑memory model.

**Result** – The new system reduced audit latency from 30 s to <5 s, increased webhook reliability to 99.9% delivery, and cut server costs by 20% because we eliminated duplicate polling. I learned that treating events as first‑class objects, coupled with a durable broker and idempotent consumers, solves both compliance and real‑time integration challenges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
