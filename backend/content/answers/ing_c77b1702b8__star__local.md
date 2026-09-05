---
qid: ing_c77b1702b8__star__local
question: 'Explain: ActiveMQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 353
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:08:32-05:00'
sources: []
---

**Situation:**  
While leading a fraud‑detection pipeline for an online marketplace, we were ingesting real‑time transaction logs from millions of users. The existing batch ETL delayed model predictions by hours, causing merchants to miss critical alerts.

**Task:**  
I needed to build a low‑latency data transport layer that could push new transaction events to our Spark Streaming jobs and downstream alert services within seconds, while guaranteeing message durability and fault tolerance.

**Action:**  
I chose Apache ActiveMQ as the broker because of its JMS compatibility, persistence options, and support for multiple consumer protocols. I configured a topic named `transactions` with durable subscriptions, set up a producer in the ingestion microservice to publish JSON events via the STOMP protocol, and created a Spark Structured Streaming source that subscribed to the same topic using the Kafka‑connect bridge (ActiveMQ’s “Kafka Bridge” plugin). I tuned ActiveMQ’s prefetch size to 1000, enabled message persistence on disk with `PERSISTENCE_TYPE=DISK`, and implemented a retry policy in the producer for transient broker outages. To monitor throughput, I exposed JMX metrics to Grafana dashboards.

**Result:**  
Message latency dropped from ~5 minutes to under 2 seconds, increasing our fraud‑alert coverage by 35% during peak traffic. The system handled 50k messages per second without loss, and we reduced infrastructure costs by 20% by reusing the same broker for both ML training and inference pipelines. This experience taught me how to balance durability with speed in a distributed streaming architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
