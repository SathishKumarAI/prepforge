---
qid: ing_bb31091e42__star__local
question: 'Explain: Core APIs — Design WhatsApp | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 382
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:45:26-05:00'
sources: []
---

**Situation:**  
When I joined a startup building a messaging platform, we were tasked with designing the core API layer that would power the app’s real‑time chat, group calls, and media sharing—essentially the backbone of what later became our WhatsApp clone.

**Task:**  
I had to architect a set of REST/GraphQL endpoints that could handle millions of concurrent users, guarantee message delivery order, support end‑to‑end encryption, and scale horizontally without breaking user experience.

**Action:**  
First, I mapped out the key entities: Users, Conversations, Messages, Media. I introduced an event‑driven microservice for message routing, backed by a Kafka cluster to queue events and ensure at‑least‑once delivery. For persistence, I used a sharded PostgreSQL cluster with JSONB columns for flexible metadata, while Redis handled real‑time presence and read receipts. Endpoints were built in Go for low latency; we employed rate limiting per IP/user and token bucket throttling to prevent abuse. To guarantee encryption, each message payload was signed client‑side and verified server‑side before storage. I also set up a CDN pipeline for media uploads, automatically transcoding videos to adaptive bitrate streams.

**Result:**  
The API layer handled 4 M daily active users with an average latency of 120 ms and a 99.9% message delivery success rate. During load tests we scaled from 2 to 8 nodes without any downtime, and the system survived a sudden traffic spike of 3× during a marketing campaign. I learned that coupling event‑driven architecture with lightweight stateless services and careful sharding is key to building a messaging platform that feels instant yet remains robust at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
