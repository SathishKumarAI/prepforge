---
qid: ing_21667d46fd__star__local
question: 'Explain: Horizontal Scalability — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 354
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:36:25-05:00'
sources: []
---

**Situation:**  
I was tasked with building a notification service for a mobile app that had just hit 3 million daily active users. The existing push‑gateway could handle only about 500 k messages per minute before latency spiked, and the team needed to support real‑time alerts for in‑app events as well as scheduled campaigns.

**Task:**  
Design a horizontally scalable architecture that could reliably deliver millions of notifications per hour with sub‑200 ms end‑to‑end latency while keeping cost under $2k/month.

**Action:**  
I split the system into three microservices: an ingestion API, a message queue layer (Kafka), and a worker pool. The API shards requests by user ID to separate Kafka partitions; each partition is consumed by a stateless Go worker that batches up to 1 000 messages before pushing to Firebase Cloud Messaging or Apple Push Notification Service. I added a Redis cache for device tokens to avoid repeated lookups, and employed a circuit‑breaker pattern with exponential backoff to handle transient failures. For scaling, I set up auto‑scaling groups on Kubernetes, using HPA based on Kafka lag metrics. Finally, I introduced a rate limiter per user (10 msg/min) stored in Redis to prevent abuse.

**Result:**  
The new service handled 5 million notifications per hour with an average latency of 180 ms and dropped the cost to $1.7k/month. The key lesson was that horizontal scaling is achieved not just by adding more workers, but by sharding data (Kafka partitions) and decoupling ingestion from processing so each component can scale independently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
