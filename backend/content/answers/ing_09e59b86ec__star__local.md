---
qid: ing_09e59b86ec__star__local
question: 'Explain: 5.6 Archiving Old Data — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 359
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:48:50-05:00'
sources: []
---

**Situation** – At my previous company we had a customer‑support platform that logged every ticket interaction. After two years the data lake grew to 12 TB, and our analytics queries slowed from 2 s to 15 s. The compliance team required us to keep all raw events for seven years but could only query recent six months actively.

**Task** – I was tasked with building an archiving service that would move old event streams out of the hot store into cold storage, while still allowing real‑time notifications when a ticket entered or exited the “archived” window. The solution had to be cost‑effective (≤ $0.02/GB/month) and preserve auditability.

**Action** – I designed a Kafka‑based pipeline: every event was written to a “live” topic, then an hourly Lambda scanned the offset for timestamps older than 180 days. Those records were batched into S3 Glacier using multipart uploads, keyed by year/month/day. A DynamoDB table indexed each batch’s metadata. For notifications I added a small SNS topic that published a “archived‑batch‑ready” message whenever a new archive was created; downstream services subscribed to trigger audit logs and update the ticket status in our PostgreSQL view.

**Result** – The migration reduced query latency by 80 % for recent data, cut storage costs from $1.2M/year to $200K/year, and met compliance requirements with zero downtime. I learned how to balance real‑time event processing with long‑term cost‑efficient storage while keeping the system loosely coupled.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
