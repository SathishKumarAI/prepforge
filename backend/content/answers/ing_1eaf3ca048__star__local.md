---
qid: ing_1eaf3ca048__star__local
question: 'Explain: Client Notifications — Using the Publish-Subscribe Model for Applications'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 310
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:30:49-05:00'
sources: []
---

**Situation**  
At my last company we launched a recommendation engine that served personalized content to millions of users on our mobile app. The user engagement metric (daily active users) was slipping by 12% over two months because push notifications were delayed and often duplicated.

**Task**  
I had to design a real‑time notification system that could scale to 10M concurrent connections, guarantee at most‑once delivery, and allow the recommendation model to push updates instantly without polling or batch jobs.

**Action**  
I chose Apache Kafka as the backbone, using topic partitioning keyed by user ID so each consumer group handled a subset of users. The ML inference service published “recommendation updated” events to a `rec_updates` topic; the notification microservice subscribed, performed idempotent deduplication with a Redis cache (TTL 5 s), and forwarded messages to Firebase Cloud Messaging via a lightweight Node.js worker pool. I added back‑pressure handling by configuring Kafka’s consumer lag metrics and auto‑scaling the workers in Kubernetes based on CPU usage.

**Result**  
Delivery latency dropped from ~8 seconds to <300 ms, duplication rates fell below 0.1%, and daily active users increased by 18% within a month. I learned that coupling ML outputs directly to a pub‑sub pipeline can dramatically improve user engagement while keeping the system resilient and observable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
