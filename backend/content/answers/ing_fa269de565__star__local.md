---
qid: ing_fa269de565__star__local
question: 'Explain: VIII. Concurrency — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 325
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:48:53-05:00'
sources: []
---

**Situation** – While leading the migration of our recommendation engine from a monolith to a micro‑service architecture at an e‑commerce startup, we discovered that our API gateway was becoming a bottleneck during flash sales; request latency spiked to 800 ms and error rates hit 5%.

**Task** – I had to redesign the service so it could handle 10× the traffic without increasing cost, while staying compliant with the 12‑Factor App principles (process isolation, statelessness, logs as streams).

**Action** – First, I containerized the model inference process using Docker and orchestrated it with Kubernetes, ensuring each pod ran a single worker process. I implemented a message queue (RabbitMQ) to decouple request handling from inference, allowing workers to scale horizontally. To keep services stateless, I moved session data to Redis and used environment variables for configuration. I also adopted the “log as stream” pattern by streaming logs to ELK, enabling real‑time monitoring of throughput and latency.

**Result** – The new architecture cut average latency from 800 ms to 120 ms under peak load, and error rates dropped below 0.2%. We achieved a 4× increase in concurrent users while keeping infrastructure costs flat. I learned that applying the 12‑Factor App model not only improves scalability but also simplifies observability and maintenance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
