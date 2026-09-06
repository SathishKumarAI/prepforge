---
qid: ing_fe942ee631__think__local
question: What is a Live Video? — Live Comment System Design - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 608
total_tokens: 802
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:49:19-05:00'
sources: []
---

**1. Clarify the question & state assumptions**

* *What is meant by “Live Video”?*  
  – Assume it refers to a real‑time video stream that users can watch and interact with (e.g., Twitch, YouTube Live).  
* *Scope of the design*:  
  – Focus on the comment subsystem only; we’ll treat video delivery as already handled.  
* *Key requirements*: latency < 200 ms for comments, high concurrency (millions of viewers), fault tolerance.

**2. Mental model / framework**

Use a classic **publish/subscribe + sharded message queue** architecture:

```
Viewer  →  Client →  Comment API (REST/WebSocket)
                                 |
                                 v
                     Message Broker (Kafka) → Consumer(s) → DB
```

Key components:  
- Front‑end clients (web/mobile).  
- Comment API gateway.  
- Real‑time message broker (Kafka, Pulsar).  
- Sharded comment storage (NoSQL or relational).  
- Optional caching layer.

**3. Step‑by‑step reasoning**

1. **User flow**: Viewer opens stream → client connects to WebSocket for comments.  
2. **Posting a comment**: Client sends JSON via HTTP POST /comments. API validates auth, writes to Kafka topic `stream_<id>`.  
3. **Broadcasting**: Consumers read from the topic and push to all connected clients (via a Pub/Sub service or direct WebSocket).  
4. **Storage**: Consumer also persists comment to sharded DB partitioned by stream ID/time.  
5. **Scalability**: Partition Kafka topic per stream; consumers scale horizontally.  
6. **Latency**: Use lightweight serialization, keep the consumer pipeline minimal.  
7. **Reliability**: Enable at‑least‑once delivery, idempotent writes, and replay for late joiners.

**4. Common traps to avoid**

- *Overloading the DB*: Don’t write every comment directly to SQL; use batch/async writes.  
- *Single point of failure*: Avoid a monolithic API server; route via load balancer and have stateless workers.  
- *Duplicate comments*: Without idempotency, retries can create duplicates.  
- *Ignoring back‑pressure*: If consumers lag, Kafka will fill up—monitor and auto‑scale.

**5. Sanity checks & verbalizing**

- **Check latency**: Measure end‑to‑end roundtrip; target < 200 ms.  
- **Load test**: Simulate millions of concurrent WebSocket connections.  
- **Failover test**: Kill a consumer, ensure comments still reach clients.  
- When explaining, start with the high‑level flow (client → API → broker → consumer → DB), then drill into scaling and failure handling. This keeps the answer focused yet comprehensive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
