---
qid: ing_fad2da6ec7__star__local
question: What is WhatsApp? — Design WhatsApp | System Design Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 361
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:50:29-05:00'
sources: []
---

**Situation** – In a recent capstone project at university we were tasked with building a real‑time messaging platform similar to WhatsApp for a simulated user base of 50 000 people. The goal was to handle millions of messages per day while keeping latency under 200 ms and ensuring end‑to‑end encryption.

**Task** – I had to design the overall architecture, choose appropriate databases, message queues, and scaling strategies, then implement a prototype that could pass load tests mimicking peak traffic (10 000 concurrent users).

**Action** – I started with a horizontally scalable microservice stack: 
- **API Gateway** + **Nginx** for routing.  
- **Kafka** as the event bus to decouple send/receive flows.  
- **Redis** for presence and message caching, backed by a sharded **MongoDB** cluster for durable storage.  
- Implemented a **WebSocket** layer (using Socket.IO) for real‑time delivery with fallback HTTP long polling.  
- For encryption, I used the Signal protocol libraries to handle key exchange and per‑message AES‑256 GCM encryption.  
I also set up auto‑scaling on Kubernetes, applied rate limiting, and wrote integration tests that simulated burst traffic.

**Result** – The prototype sustained 12 000 concurrent users with average latency of 140 ms and a 99.8% message delivery success rate under simulated peak loads. The project earned the highest grade in the class and taught me how to balance consistency, availability, and performance in a large‑scale messaging system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
