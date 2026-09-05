---
qid: ing_db95e9c3e0__star__local
question: 'Explain: Step 2: Notification Service Ingestion — Design Notification Service
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 344
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:46:58-05:00'
sources: []
---

**Situation** – At my previous company we launched a new mobile app that sent real‑time alerts for e‑commerce order updates. During beta testing the system crashed when users hit peak traffic (≈3k events/s) and latency spiked to 2 s, far above our SLA of 200 ms.

**Task** – I was tasked with designing a robust Notification Service ingestion layer that could handle bursty traffic, guarantee at‑least‑once delivery, and scale horizontally while keeping cost under $5k/month.

**Action** – I chose a stateless microservice architecture using Go for low overhead. Incoming HTTP requests were queued in Amazon SQS FIFO queues (deduplication + ordering). A worker pool of 10 EC2 Spot instances pulled messages via long polling, parsed the payload, and published to an Amazon SNS topic per user segment. To avoid throttling I implemented exponential back‑off retries and a dead‑letter queue for persistent failures. For observability I added Prometheus metrics (queue depth, processing latency) and Grafana dashboards; alerts were set on >80 % queue depth.

**Result** – After deployment the ingestion layer handled 8k events/s during flash sales with average latency of 85 ms and <0.01 % message loss. Costs stayed below $4.2k/month, and we reduced crash incidents by 97 %. I learned that coupling lightweight services with managed queues and proper observability is key to building resilient notification pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
