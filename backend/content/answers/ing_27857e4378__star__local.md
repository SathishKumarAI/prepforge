---
qid: ing_27857e4378__star__local
question: What is the difference between message queues and pub/sub messaging?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 357
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:47:39-05:00'
sources: []
---

**Situation:** While leading a real‑time recommendation engine for an e‑commerce platform, we noticed the ingestion layer was choking on spikes during flash sales—latency spiked to over 3 s and some user requests timed out.

**Task:** I had to redesign the messaging layer so that the data pipeline could handle bursty traffic without dropping events, while still allowing multiple downstream services (analytics, personalization) to consume the same stream.

**Action:** First, I evaluated a traditional message queue like RabbitMQ: it guarantees strict ordering and at‑least‑once delivery but forces each consumer to pull messages from its own queue—duplicate work and higher latency under load. Then I switched to a pub/sub system (Kafka). With Kafka’s partitioned log, producers write once and any number of consumers read independently, scaling horizontally. I configured topic compaction for user click events and set retention to 48 h for auditability. To keep ordering per user, I keyed messages by user ID across partitions. We also added a fallback consumer that writes to SQS if Kafka brokers go down.

**Result:** The new architecture cut average end‑to‑end latency from 3 s to under 500 ms during peak periods and increased throughput from 5k to 35k events per second. No data loss was observed over three months, and the system now supports a growing list of downstream services without re‑ingesting data. I learned that choosing between queue and pub/sub hinges on whether you need point‑to‑point guarantees or scalable fan‑out with minimal duplication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
