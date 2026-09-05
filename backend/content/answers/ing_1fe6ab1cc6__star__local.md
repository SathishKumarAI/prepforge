---
qid: ing_1fe6ab1cc6__star__local
question: 'Explain: Features — Microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 327
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:33:09-05:00'
sources: []
---

**Situation** – At a fintech startup I was leading the migration of our fraud‑detection model from a monolith to a set of microservices. The existing system served over 1 M transactions per day, but latency had spiked to 350 ms and CPU usage hit 85 % during peak hours.

**Task** – My goal was to redesign the feature extraction pipeline so that each microservice could process events in under 100 ms while keeping model accuracy above 97 %.

**Action** – I first profiled the monolith with Py-Spy, discovering that feature engineering was the bottleneck. I decomposed the pipeline into three services: *Raw‑Event Collector*, *Feature Extractor*, and *Model Inference*. Using Apache Kafka for event streaming, the Feature Extractor ran as a stateless container on Kubernetes, loading only the necessary embedding tables (≈200 MB) from Redis instead of the full dataset. I implemented incremental feature updates with Delta Lake to avoid re‑computing static features. Finally, I added a caching layer in Go that served pre‑computed rolling aggregates for high‑frequency users.

**Result** – The new architecture cut average latency to 78 ms and reduced CPU usage to 42 %. Throughput increased by 30 % and we maintained the same accuracy metrics. I learned that careful feature isolation across microservices not only improves performance but also simplifies CI/CD and observability for ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
