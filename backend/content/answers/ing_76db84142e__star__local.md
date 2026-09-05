---
qid: ing_76db84142e__star__local
question: 'Explain: Work Queue — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 340
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:31:35-05:00'
sources: []
---

**Situation:** While leading a team that built an automated recommendation engine for a streaming platform, we hit a bottleneck: the nightly batch job that retrained models was stalling because data ingestion from user activity logs lagged behind. Our SLA required model updates within two hours of new data.

**Task:** I had to design a scalable, fault‑tolerant pipeline that could queue and process large volumes of log events in real time, ensuring the training job always received fresh data without manual intervention.

**Action:** I introduced Apache Kafka as our work queue. Each microservice publishing user interactions wrote to topic partitions keyed by region. The training orchestrator consumed from a dedicated “training‑events” topic using consumer groups for parallelism. To guarantee at‑least‑once delivery, I enabled idempotent producers and committed offsets only after successful batch ingestion into our feature store (PostgreSQL + Redis cache). For backpressure, I set broker retention to 7 days and used Kafka Streams to aggregate events before they hit the training job. Monitoring was built with Prometheus alerts on lag metrics, triggering auto‑scaling of consumer pods.

**Result:** The end‑to‑end latency dropped from 4 hours to under 90 minutes, with a 40% reduction in training failures due to missing data. I learned that treating event ingestion as a message queue not only decouples services but also provides built‑in resilience and observability for ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
