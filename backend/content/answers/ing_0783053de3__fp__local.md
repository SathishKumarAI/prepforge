---
qid: ing_0783053de3__fp__local
question: 'Explain: High Level Design — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 410
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:21:38-05:00'
sources: []
---

**Why a notification service is needed**

A system must inform users about events (e.g., order shipped, new message) *on‑time* and *at scale*.  
The core problem is **timely delivery with bounded latency** while guaranteeing that every user receives exactly the messages they subscribed to.  

**Fundamental design principle: “pull‑push equilibrium”**

1. **Publish–subscribe queue** – Treat each event as a message in a partitioned log (Kafka, Pulsar).  
   *Why*: Queues provide durable ordering and back‑pressure; partitions give horizontal scale.

2. **Subscription catalog** – A small, fast key‑value store mapping `user → [channels]`.  
   *Why*: Subscriptions change infrequently; keeping them in RAM eliminates a hot spot.

3. **Delivery workers** – Stateless consumers that pull batches from the queue, look up subscriptions, and push to the appropriate channel (FCM/APNs/Email).  
   *Why*: Decouples event generation from delivery; workers can be throttled per channel to respect provider limits.

4. **Acknowledgement & retries** – Each worker writes a “delivered” flag in an append‑only log; failed deliveries are re‑queued with exponential back‑off.  
   *Why*: Guarantees at-least-once semantics without complex coordination.

**Non‑obvious insight**

Treat the subscription catalog as a **secondary index on the event stream** rather than a primary store.  
Instead of querying all users per event, let each worker join locally: read a batch of events, load the relevant subscriptions once, and fan‑out.  
This dramatically reduces cross‑service traffic and turns a potentially O(N²) problem into linear time in the number of messages, enabling millions of notifications per second.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
