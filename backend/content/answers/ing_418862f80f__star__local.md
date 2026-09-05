---
qid: ing_418862f80f__star__local
question: 'Explain: 134: Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 342
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:39:28-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning the push‑notification pipeline for a fitness app that had 4 million daily active users and an average latency of 8 seconds during peak hours, causing users to miss workout reminders.

**Task** – My goal was to cut end‑to‑end notification delivery time to under 2 seconds while keeping cost per message below $0.0005 and ensuring reliability >99.9%.

**Action** – I started by profiling the current architecture: a single regional Pub/Sub topic feeding a Lambda function that pulled from an RDS queue, then pushed via APNs/FCM. I re‑architected it to a multi‑region Kafka cluster with per‑app partitioning so that each user’s messages stayed in order but were processed in parallel. The consumer workers spun up on Kubernetes autoscaling pods, using gRPC to batch writes to a Redis cache (TTL 30 s) before sending through APNs/FCM. I added a circuit‑breaker layer with exponential backoff and implemented a dead‑letter queue for failures. Finally, I set up Prometheus alerts on consumer lag and latency.

**Result** – Latency dropped from 8 seconds to 1.4 seconds during peak load; throughput increased by 5× without exceeding the cost budget. The system now processes 200k messages per second with 99.97% success rate, and I learned that fine‑tuning partition strategy and caching can dramatically improve mobile push performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
