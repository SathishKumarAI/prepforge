---
qid: ing_7bd5c11a89__star__local
question: 'Explain: 2.1 Consistency — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 323
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:41:34-05:00'
sources: []
---

**Situation** – While leading the redesign of our real‑time analytics platform for a fintech client, we discovered that the existing architecture could not guarantee up-to-date user balances during peak trading hours; latency spikes caused stale reads and audit complaints.

**Task** – I had to choose between maintaining low latency (Availability) or ensuring every read reflected the latest write (Consistency), while still keeping Partition tolerance across our multi‑region deployment.

**Action** – I scoped a CAP trade‑off: we would accept eventual consistency for non‑critical metrics but enforce strong consistency on balance queries. Using Apache Kafka as a distributed commit log, I wired each transaction record to an event stream that updated a replicated in‑memory store (Redis Cluster). For read requests, the service first checked the local Redis instance; if it missed the latest key, it queried a “primary” node via gRPC with a short timeout. If no primary was reachable, the request fell back to the local cache, flagging the response as potentially stale. I also added an “audit trail” endpoint that replayed Kafka events to reconstruct balances when needed.

**Result** – Balance accuracy improved from 92 % to 100 % during peak loads; latency stayed under 120 ms for 95 % of requests. The system now meets regulatory consistency requirements while preserving high availability, and I learned how to balance CAP trade‑offs with practical tooling like Kafka and Redis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
