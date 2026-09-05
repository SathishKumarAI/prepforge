---
qid: ing_3f54c13c89__star__local
question: 'Explain: Heartbeat — Real Time Presence Platform System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 342
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:34:47-05:00'
sources: []
---

**Situation:**  
In my last role I led a feature that needed to show live user status for a messaging app with 15 M daily active users. The existing “last seen” data lagged by 2–3 minutes, causing frustration and reducing engagement.

**Task:**  
I had to design a real‑time presence system—“Heartbeat”—that could publish a user’s online/offline state in under 200 ms while scaling to millions of concurrent heartbeats and ensuring eventual consistency across the app’s microservices.

**Action:**  
I chose a hybrid approach: each client sent a lightweight UDP heartbeat every 5 seconds. A Redis Cluster with key‑TTL (30 s) stored the latest timestamp per user; a Kafka topic captured all heartbeats for downstream analytics. The presence service, built in Go, listened to Redis pub/sub for changes and updated a Cassandra column family that served read traffic via gRPC. I added a “deferred eviction” policy: if no heartbeat arrived within 30 s, the key expired automatically, marking offline. To handle network hiccups, I implemented exponential backoff retries and a secondary WebSocket fallback.

**Result:**  
The system achieved <180 ms latency for status updates with 99.9% availability. User engagement rose by 12%, and support tickets related to “offline” errors dropped by 35%. I learned that combining in‑memory stores for speed with durable streams for reliability delivers both performance and auditability in real‑time systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
