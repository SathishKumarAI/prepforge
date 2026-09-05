---
qid: ing_fc1c83d978__star__local
question: 'Explain: Terminology — Real Time Presence Platform System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 350
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:52:49-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with building a real‑time presence platform for a messaging app that had over 10 million concurrent users during peak hours. The existing system could only push updates every few seconds, causing stale “online/offline” indicators and poor user experience.

**Task:**  
I needed to redesign the architecture so that each status change was reflected within 200 ms across all clients, while keeping latency low, scaling horizontally, and minimizing infrastructure cost.

**Action:**  
1. I chose a distributed event‑driven model using Kafka for ingesting presence events (login, logout, idle).  
2. A stateless microservice in Go consumed the stream, updated a Redis Cluster with per‑user TTL keys, and emitted a lightweight “status change” message to a Pub/Sub layer (AWS SNS + Lambda).  
3. On the client side I implemented WebSocket connections that subscribed to user ID topics; the server pushed updates only when Redis state changed.  
4. To handle burst traffic I added auto‑scaling for the consumer pods and tuned Kafka partitions to 8 per topic, ensuring at‑least‑once delivery with idempotent processing.

**Result:**  
The new system reduced status update latency from ~5 s to <200 ms, dropped server CPU usage by 35%, and cut monthly cloud spend by 20%. I learned that coupling event streaming with a fast in‑memory store and lightweight push channels is key for low‑latency presence services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
