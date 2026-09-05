---
qid: ing_a3ac0842bc__star__local
question: 'Explain: Putting It Together: The Message Flow — Design WhatsApp | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 347
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:00:29-05:00'
sources: []
---

**Situation:**  
During my senior project I was tasked with designing a real‑time messaging backend for a prototype social app similar to WhatsApp. The client required end‑to‑end delivery guarantees, low latency (≤200 ms), and support for 1 M concurrent users.

**Task:**  
I had to architect the message flow: from user input to server persistence, routing, and final display on the recipient’s device, while ensuring reliability and scalability.

**Action:**  
I chose a micro‑service stack: an HTTP/2 API gateway (NGINX) for initial client connections; a Kafka cluster for asynchronous ingestion; a Redis cache for online status; and a sharded PostgreSQL pool for durable storage. Messages were first queued in Kafka, then processed by a “router” service that looked up the recipient’s device token via Redis. If offline, the message was persisted to PostgreSQL; if online, it was pushed through a WebSocket channel using Socket.io. I implemented idempotent message IDs and sequence numbers to handle duplicates, and used a retry policy with exponential backoff for transient failures.

**Result:**  
The prototype handled 500 k concurrent connections with average end‑to‑end latency of 180 ms and 99.8% delivery success. Load testing at 1 M users showed linear scaling across Kafka partitions. I learned the importance of decoupling ingestion from delivery, and that a combination of streaming queues and caching layers can satisfy both reliability and performance in real‑time messaging systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
