---
qid: ing_6402970247__star__local
question: 'Explain: Message Service — Design WhatsApp | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 366
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:47:54-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a lightweight internal messaging platform for a fintech startup that needed real‑time chat between customers and support agents, similar to WhatsApp. The company had already built a monolith in Node.js; we had to keep the existing stack but add end‑to‑end encrypted messaging without blowing up latency.

**Task** – Deliver a scalable, low‑latency system that supports 50k concurrent users, guarantees at least 99.9% delivery, and encrypts every message on the fly while staying within our budget of $10k/month for cloud services.

**Action** – I designed a microservice architecture: a Node.js gateway with WebSocket support for real‑time traffic; a Go service handling encryption/decryption using libsodium; and a Redis‑backed publish/subscribe queue to decouple producers from consumers. For persistence, we used PostgreSQL with partitioned tables per user pair and added an in‑memory LRU cache for the most recent 10k messages. I also implemented a retry mechanism with exponential backoff and built dashboards in Grafana to monitor message latency and error rates.

**Result** – The prototype handled 30k concurrent connections with average round‑trip time of 120 ms, and we met the delivery SLA after just two weeks of testing. User satisfaction scores rose by 18% in the first month, and we stayed under budget by using Spot instances for the Go service. I learned that balancing real‑time requirements with cost constraints often means offloading heavy cryptographic work to a lightweight, stateless microservice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
