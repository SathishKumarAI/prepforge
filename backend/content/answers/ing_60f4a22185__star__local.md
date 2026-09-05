---
qid: ing_60f4a22185__star__local
question: 'Explain: Message Queue — Inter-Process Communication on Linux'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 336
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:41:58-05:00'
sources: []
---

**Situation** – In a production recommendation engine, the feature‑engineering microservice would block while waiting on GPU inference results from another process. Latency spikes were hitting our SLA of <120 ms per request.

**Task** – I needed to decouple the two processes so that the data pipeline could continue streaming user events without blocking on GPU compute, yet still guarantee ordered delivery and fault tolerance.

**Action** – I introduced POSIX message queues (`mq_open`, `mq_send`, `mq_receive`) as a lightweight IPC mechanism. The producer wrote feature vectors to `/dev/mqueue/feature_q` with priority flags encoding batch importance. The consumer (GPU worker) blocked on `mq_receive`, processed the batch, and pushed results back via another queue. I tuned the queue attributes (`mq_maxmsg`, `mq_msgsize`) to match our 64‑byte embeddings and set `O_NONBLOCK` for the producer to avoid deadlocks. I also added a watchdog that monitored message age and retried failed sends, ensuring at‑least‑once delivery.

**Result** – Throughput increased from 1.2 k requests/s to 3.8 k requests/s while average latency dropped to 78 ms. The system now scales horizontally: adding more GPU workers simply consumes the same queues. I learned that choosing the right IPC primitive—here, a POSIX message queue—can dramatically reduce coupling and improve resilience in ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
