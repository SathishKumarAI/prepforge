---
qid: ing_4bf94b5b63__star__local
question: 'Explain: Popular Implementations — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 386
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:00:15-05:00'
sources: []
---

**Situation:**  
In my last role I led the migration of a real‑time recommendation pipeline that was bottlenecked by a monolithic batch job running every hour. The data scientists needed instant feature updates to serve personalized content on a live e‑commerce site with 12 k concurrent users.

**Task:**  
Redesign the architecture so that raw event streams (clicks, page views, cart additions) could be ingested and processed in near real‑time, delivering updated model scores within 200 ms of each user action while keeping latency below 5 % under peak load.

**Action:**  
I chose a Kafka‑based Pub/Sub layer: producers were the web front‑ends emitting JSON events to topic “user_actions.” A consumer group ran Spark Structured Streaming jobs that aggregated per‑user metrics, updated feature tables in ClickHouse, and published new score updates to another topic “recommendation_scores.” To guarantee at‑least‑once delivery I enabled exactly‑once semantics with idempotent writes. For low‑latency downstream consumption, I added a Redis Streams cache that exposed the latest scores via Lua scripts for the recommendation microservice. We also implemented backpressure by throttling producers when Kafka lag exceeded 10 s and auto‑scaling consumer pods based on topic lag.

**Result:**  
The new pipeline reduced model update latency from 45 s to under 150 ms, increased click‑through rate by 18 % within two weeks of deployment, and cut the batch job cost by 70 %. I learned how to balance throughput, fault tolerance, and sub‑200 ms latency using Pub/Sub primitives in a production ML system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
