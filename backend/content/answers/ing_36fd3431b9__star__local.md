---
qid: ing_36fd3431b9__star__local
question: 'Explain: Push Notification Service — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 409
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:18:19-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a new messaging app targeted at 50 million users in India. The product team wanted real‑time push notifications for messages and status updates, but the existing Firebase Cloud Messaging (FCM) tier was limited to 1,000 devices per topic and couldn’t guarantee delivery latency under peak load.

**Task:**  
I had to architect a scalable, fault‑tolerant push notification service that could handle 5 million concurrent connections, deliver messages within 200 ms during traffic spikes, and support user opt‑in preferences without breaking the existing mobile clients.

**Action:**  
1. Built a distributed “notification queue” using Kafka with topic partitions per region to ensure horizontal scaling.  
2. Implemented a stateless microservice in Go that pulls batches of payloads, enriches them with device tokens from a Redis cache (TTL = 30 days), and publishes to FCM or APNs via HTTP/2 streams for low overhead.  
3. Added a retry back‑off algorithm and dead‑letter queue to capture failed deliveries; metrics were sent to Prometheus for real‑time alerting.  
4. Introduced per‑user “do‑not‑disturb” flags stored in DynamoDB, checked during message routing to skip sending.  
5. Deployed the service on Kubernetes with autoscaling based on CPU and queue depth.

**Result:**  
During a 24‑hour beta test we handled 3 million push events with an average latency of 140 ms and <0.1% delivery failures. The system also reduced infrastructure cost by 30 % compared to the legacy FCM setup, and I learned how to balance consistency, latency, and cost in a high‑throughput notification pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
