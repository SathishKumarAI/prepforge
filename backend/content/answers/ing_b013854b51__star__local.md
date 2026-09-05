---
qid: ing_b013854b51__star__local
question: 'Explain: Functional Requirements — Real Time Presence Platform System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 355
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:24:13-05:00'
sources: []
---

**Situation** – At my previous company we had a live‑chat product where users could see if their teammates were online or idle. The existing system was batch‑updated every minute, causing stale presence data and unhappy customers during peak hours (≈ 1 M concurrent users).  

**Task** – I was tasked to redesign the presence service so that status updates were reflected within 200 ms, support millions of events per second, and keep the cost below $10k/month.  

**Action** – I chose a publish/subscribe model with Apache Kafka for ingestion, partitioned by user ID to guarantee ordering. For real‑time propagation I built a stateless gRPC gateway that subscribes to Kafka topics and pushes updates via WebSocket to clients; the gateway is horizontally scaled behind a Kubernetes cluster. To reduce memory overhead I used Redis Streams as a short‑term cache (TTL = 5 s) for the last known status, so that new connections can instantly receive the current state without hitting the database. For persistence I persisted snapshots every 30 s to DynamoDB, ensuring durability while keeping write traffic low.  

**Result** – The new system cut presence lag from 60 s to < 200 ms and handled 3 M events/s with a 0.2% error rate. User‑reported latency dropped by 85%, and we reduced infrastructure cost to $8k/month. I learned how to balance real‑time guarantees with cost efficiency using event‑driven architecture and lightweight caching.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
