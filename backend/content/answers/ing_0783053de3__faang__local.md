---
qid: ing_0783053de3__faang__local
question: 'Explain: High Level Design — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 501
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:01:49-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *notification service* (push/email/ SMS) that can scale globally and support real‑time delivery. I’d confirm:  
- What channels (push, email, SMS)?  
- Throughput target per second?  
- Latency requirement (≤ 200 ms for push).  
- Reliability guarantees (at least once, exactly once?).  

**Approach**  
1. **API layer** – stateless gRPC/REST front‑end that receives “send notification” requests.  
2. **Queueing** – publish to a partitioned Kafka topic keyed by user ID to preserve ordering per user.  
3. **Workers** – consume from the queue, route to channel adapters (FCM/APNs, SendGrid, Twilio).  
4. **Delivery tracking** – each worker writes ack/failed status to a NoSQL store (DynamoDB/Cassandra) with TTL for deduplication.  
5. **Retry & back‑off** – exponential retry loop in the worker; dead‑letter queue for persistent failures.  

**Depth**  
- *Scalability*: Kafka partitions → horizontal scaling of workers; stateless API behind a load balancer.  
- *Latency*: Push adapters are async; we can batch messages per device token to reduce round trips.  
- *Reliability*: Idempotent writes in the DB; use sequence numbers per user to avoid duplicates.  
- *Complexity*: O(1) enqueue, O(log n) lookup for status, total cost dominated by message volume.  

**Edge Cases**  
- Rapid bursts → back‑pressure from Kafka; implement consumer lag monitoring.  
- Device token rotation → keep a cache of latest tokens per user to avoid stale sends.  
- Message size limits (e.g., SMS 160 chars) → truncate or split with continuation markers.  

**Optimize & Communicate**  
I’d propose adding a *deduplication service* that hashes message payloads and user ID, rejecting near‑duplicate sends within a window to cut spam. For presentation, I’ll sketch the diagram, explain each component’s responsibility, and walk through a sample flow from API call → Kafka → worker → channel adapter → status DB, emphasizing how we meet latency, throughput, and reliability targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
