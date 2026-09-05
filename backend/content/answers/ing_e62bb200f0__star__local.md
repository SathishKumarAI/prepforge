---
qid: ing_e62bb200f0__star__local
question: 'Explain: In-App Notification Processor — Design Notification Service |
  System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 297
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:08:12-05:00'
sources: []
---

**Situation** – At my previous startup we had a mobile app that delivered real‑time alerts (price drops, friend activity). Every day we pushed over 2 million notifications and the latency spikes during flash sales caused users to miss critical updates.

**Task** – I was tasked with redesigning the in‑app notification processor so that it could handle peak loads, guarantee at‑least‑once delivery, and keep end‑to‑end latency under 200 ms while reducing infrastructure cost by 30%.

**Action** – I broke the system into three layers: a Kafka topic per event type (ensuring ordering), a stateless microservice written in Go that consumes from Kafka, enriches payloads using Redis for user preferences, and pushes to FCM/APNs via a round‑robin pool. To guarantee delivery I added a retry queue with exponential backoff and a deduplication key stored in DynamoDB. For latency I used HTTP/2 multiplexing and kept the service horizontally scaled on Spot instances, autoscaling based on consumer lag.

**Result** – After deployment we saw a 4× drop in missed notifications, latency averaged 120 ms even during flash sales, and infrastructure spend fell by 32%. The exercise taught me how to blend event‑driven architecture with cache‑backed enrichment for real‑time mobile alerts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
