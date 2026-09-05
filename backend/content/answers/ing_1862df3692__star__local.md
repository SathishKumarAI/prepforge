---
qid: ing_1862df3692__star__local
question: 'Explain: Interviewer — Real Time Presence Platform System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 353
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:17:35-05:00'
sources: []
---

**Situation** – At my previous company we launched a messaging app with over 5 million daily active users, but our “online/offline” status lagged behind by an average of 2–3 seconds due to the monolithic presence service hitting a single Redis instance.

**Task** – I was tasked with redesigning the presence platform so that latency dropped below 200 ms at peak load (10 k concurrent connections) while keeping cost under $5,000/month and enabling easy scaling for future features like “do‑not‑disturb” zones.

**Action** – First, I decomposed presence into three microservices: a **Connection Manager** (WebSocket gateway on Nginx + Go), a **Presence Store** (sharded Redis clusters with Geo‑hashing for regional proximity), and an **Event Bus** (Kafka topic per shard). To reduce round‑trips, the Connection Manager writes state changes to Kafka; a consumer updates the sharded store asynchronously. I also introduced **WebSocket heartbeats** every 15 s and a fallback polling endpoint for mobile clients. For scaling, each Redis shard runs on Spot instances with auto‑scaling based on QPS.

**Result** – Latency fell from 2.3 s to 140 ms under simulated peak load; the system handled 25 k concurrent connections without failures. Monthly ops cost dropped by 30%. I learned that micro‑service decomposition combined with event‑driven updates can dramatically improve real‑time responsiveness while keeping infrastructure lean.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
