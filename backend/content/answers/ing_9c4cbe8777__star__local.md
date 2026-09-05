---
qid: ing_9c4cbe8777__star__local
question: 'Explain: Session Service — Design WhatsApp | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 377
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:44:38-05:00'
sources: []
---

**Situation:** While working on a messaging platform upgrade, we noticed that our real‑time chat sessions were dropping when users switched devices or lost connectivity. The existing single‑node session store caused latency spikes and made it hard to guarantee message delivery.

**Task:** I was tasked with designing a robust Session Service for WhatsApp that could persist user session state across device changes, scale horizontally, and provide low‑latency lookups while ensuring strong consistency of the “last seen” and typing indicators.

**Action:**  
1. Adopted a sharded Redis cluster as the primary cache for active sessions, using consistent hashing to balance load.  
2. Implemented an asynchronous write‑through layer with Kafka; session updates were published to topic `session_updates` and persisted in a PostgreSQL CQRS read model for audit and analytics.  
3. Added a conflict‑resolution strategy: each session record carried a Lamport timestamp, and the service used vector clocks to merge concurrent device updates.  
4. Deployed an edge‑gateway that cached the most recent 10 k sessions per region, reducing global lookups by 85%.  
5. Built health checks and auto‑scaling policies in Kubernetes; introduced circuit breakers for Redis failures.

**Result:** The new Session Service cut session‑lookup latency from ~120 ms to <30 ms under peak load (200 k concurrent users). Message delivery reliability improved by 15%, and the system handled a 4× traffic spike during a global event without degradation. I learned that combining an in‑memory cache with an immutable event store balances performance and durability, and that careful conflict resolution is essential when multiple devices can modify the same session concurrently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
