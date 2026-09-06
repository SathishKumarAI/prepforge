---
qid: ing_21667d46fd__think__local
question: 'Explain: Horizontal Scalability — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 543
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:54:34-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- *Goal*: Build a notification system that can handle millions of users and messages per day, scaling horizontally (adding more machines).  
- *Assumptions*: We care about high availability, low latency, eventual consistency; we have existing user data in a relational DB; notifications are push‑to‑device or email.  

**2️⃣ Adopt a layered, modular mental model**  
1. **Client → API Gateway** (load‑balancing, throttling)  
2. **Notification Service cluster** (stateless workers)  
3. **Queue / Pub/Sub layer** (decouples producers & consumers)  
4. **Persistence layer** (message store + user preferences)  
5. **Delivery layer** (push/email gateways).  

Think of each as a micro‑service that can be scaled independently.

**3️⃣ Step‑by‑step reasoning**

1. *Ingest*: User action → API → enqueue “send notification” message.  
2. *Process*: Worker pulls from queue, reads user prefs, formats payload.  
3. *Persist*: Store in a fast NoSQL (e.g., Cassandra) for audit and retry.  
4. *Deliver*: Push to device via FCM/APNs or send email through SMTP/SES.  
5. *Feedback*: Delivery status written back to the message store; retries on failure.

Use partitioning keys (user ID, topic) in the queue to avoid hotspots. Horizontal scaling is achieved by adding more workers and replicas of each component; queues handle burst traffic gracefully.

**4️⃣ Common traps**

- **Monolithic services**: hard to scale one part without others.  
- **Blocking I/O**: use async frameworks (Node.js, asyncio).  
- **Single queue**: becomes a bottleneck; prefer sharded or topic‑based queues.  
- **Ignoring idempotency**: duplicate messages can cause repeated notifications.

**5️⃣ Sanity checks & verbalizing**

- *Check*: Does adding 10 nodes reduce latency? *Explain* the load‑balancing path and that each worker is stateless.  
- *Check*: Can we recover from a node crash? *Explain* the queue’s persistence guarantees and the use of “at least once” delivery with idempotent consumers.  
- Finally, rehearse: “We expose a REST endpoint → API Gateway → message queued → workers scale horizontally → persistent store → delivery gateway → status callback.” This verbal flow confirms that all components are decoupled and can be scaled independently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
