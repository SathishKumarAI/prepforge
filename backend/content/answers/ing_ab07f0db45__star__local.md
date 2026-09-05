---
qid: ing_ab07f0db45__star__local
question: 'Explain: Database/Storage — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 355
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:15:01-05:00'
sources: []
---

**Situation**  
At my previous company we launched a real‑time gaming platform that had to push millions of push notifications per day while keeping latency below 100 ms for the top 5% of users.

**Task**  
I was asked to design a scalable notification service that could queue, route, and deliver messages with high availability, support user preferences, and provide analytics on delivery success.

**Action**  
I chose an event‑driven architecture: events were written to Kafka topics per region. A stateless microservice consumed the stream, enriched each message by querying Redis for user device tokens (cached from PostgreSQL). For persistence I used a write‑through cache pattern where notifications were stored in Cassandra with TTLs of 7 days, enabling quick replay if delivery failed. Delivery was handled by a fleet of workers using Amazon SNS for push and an internal HTTP endpoint for webhooks; we sharded the worker pool by user ID hash to avoid hotspots. I implemented exponential back‑off retries and dead‑letter queues in SQS. Metrics were pushed to Prometheus, visualized in Grafana, and alerts triggered on delivery failure rates above 1%.

**Result**  
The system handled 20 M notifications daily with a 95th percentile latency of 80 ms. Delivery success rose from 88% to 98%, reducing customer churn by 3%. I learned that combining stream processing with distributed caching and sharded workers is key for low‑latency, high‑throughput notification pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
