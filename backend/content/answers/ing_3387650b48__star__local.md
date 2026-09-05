---
qid: ing_3387650b48__star__local
question: 'Explain: Online Banking — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 362
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:11:44-05:00'
sources: []
---

**Situation** – I was part of a fintech startup that had just launched a mobile‑first online banking app with over 50k active users. The existing monolith was choking on peak traffic: transaction latency spiked to 2 s and the database hit 120 MOPS, causing frequent timeouts during morning check‑ins.

**Task** – Redesign the backend into a scalable client–server architecture that could support 200 k concurrent users, keep end‑to‑end latency below 300 ms, and guarantee ACID compliance for money transfers while allowing real‑time fraud alerts.

**Action** – I broke the system into microservices: an API gateway (NGINX + Envoy), a stateless user service (Node.js with Redis session cache), a transaction service (Go + gRPC, PostgreSQL with row‑level isolation), and a notification service (Kafka + Spark streaming). For stateful consistency I used two‑phase commit across the services, while read‑heavy queries hit a read replica cluster. I also introduced circuit breakers (Hystrix) to isolate failures and implemented TLS‑termination at the gateway for end‑to‑end encryption.

**Result** – After deployment we saw transaction latency drop from 2 s to 120 ms, database load reduced by 60 %, and peak concurrent users handled without outages. The system now supports a projected 500 k users with only one more replica per service. I learned that careful service boundaries combined with asynchronous messaging can dramatically improve both reliability and performance in financial apps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
