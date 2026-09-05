---
qid: ing_65784035b1__star__local
question: 'Explain: Delayed or Scheduled Queue — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 335
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:50:42-05:00'
sources: []
---

**Situation:** In a real‑time recommendation service for an e‑commerce platform, we had to deliver personalized product suggestions within 500 ms of a user’s click. A spike during Black Friday pushed our message ingestion rate from 1k/s to 20k/s, causing the Kafka consumer lag to grow beyond acceptable limits.

**Task:** I needed to design a lightweight mechanism that could defer non‑critical recommendation jobs (e.g., batch affinity updates) without breaking the low‑latency pipeline for immediate clicks.

**Action:** I introduced a two‑tier queue system using Redis Streams and RabbitMQ. For latency‑sensitive tasks, we routed messages directly to a “hot” stream with a 10 ms visibility timeout. For delayed jobs, we used RabbitMQ’s `x-delayed-message` plugin to schedule them up to an hour ahead, backed by a cron‑driven worker that pulled from the delayed exchange and pushed into a secondary Kafka topic for later batch processing. I added TTL checks in Redis to prevent stale messages and implemented a lightweight circuit breaker to fallback to immediate processing if delays exceeded 200 ms.

**Result:** The consumer lag dropped from 12 s to under 300 ms, keeping SLA compliance at 99.9%. Batch jobs completed on schedule with a 40% reduction in peak CPU usage. I learned that combining short‑term stream buffering with long‑term delayed exchanges can reconcile real‑time and batch workloads without overhauling the entire architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
