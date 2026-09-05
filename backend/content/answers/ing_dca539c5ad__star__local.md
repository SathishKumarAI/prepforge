---
qid: ing_dca539c5ad__star__local
question: 'Explain: Fan-Out — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 403
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:49:14-05:00'
sources: []
---

**Situation:** While leading the data ingestion layer for a real‑time analytics platform at my previous company, we had to broadcast sensor updates from thousands of IoT devices to multiple downstream services (alerting, storage, and dashboard). The existing monolithic push model caused latency spikes and single points of failure during peak traffic.

**Task:** I was tasked with designing a scalable, fault‑tolerant fan‑out architecture that could decouple producers from consumers, guarantee at‑least‑once delivery, and support dynamic subscription changes without downtime.

**Action:** I chose Apache Kafka as the backbone because of its log‑based persistence and consumer group semantics. I created a topic per device type (e.g., `temperature`, `pressure`) and configured retention policies to balance storage costs and replay needs. Producers used idempotent keys to avoid duplicates, while consumers ran in parallel consumer groups for horizontal scaling. To reduce load on the broker during burst periods, I implemented back‑pressure via Kafka’s `linger.ms` and `batch.size` tuning, and set up a Redis cache as a lightweight pub/sub fallback for low‑latency alerts. Monitoring with Prometheus exposed lag metrics; when lag exceeded thresholds, an auto‑scaling policy spun up additional broker nodes.

**Result:** The new fan‑out system handled 200k messages per second with sub‑50 ms end‑to‑end latency and a consumer lag of <5 seconds during peak loads. Overall uptime improved from 96% to 99.9%, and our data pipeline cost dropped by 15% due to more efficient resource utilization. I learned the importance of aligning topic design, retention policies, and consumer scaling with real‑world traffic patterns to build resilient pub/sub systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
