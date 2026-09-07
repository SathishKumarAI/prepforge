---
qid: ing_93f0dab15e__faang__local
question: 'Explain: Functional Requirements — Live Comment System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 552
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:28:17-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *live comment* service (think YouTube or Twitch).  
Key functional requirements:  
1. **Write** – users post comments instantly.  
2. **Read** – clients fetch the latest N comments for a video/stream, in order.  
3. **Real‑time push** – new comments appear on all viewers without polling.  
4. **Scalability** – millions of concurrent streams, billions of comments.  
5. **Reliability & ordering** – no duplicates, strict chronological order per stream.

Assumptions: single‑region focus, moderate read/write latency (<200 ms), eventual consistency for cross‑region reads.

---

**Approach**  
1. **API layer** → stateless microservice (REST/GRPC).  
2. **Write path** – publish to a *Kafka* topic per stream; store in a sharded NoSQL DB (Cassandra) keyed by `(stream_id, timestamp)` for fast range scans.  
3. **Read path** – query Cassandra with `WHERE stream_id = ? ORDER BY timestamp DESC LIMIT N`. Cache recent comments in Redis (LRU).  
4. **Push layer** – Kafka consumers feed a *WebSocket* service; each client subscribes to its stream’s topic and receives new messages instantly.

---

**Depth**  
- **Write latency**: ~5 ms (Kafka ack) + 10 ms DB write → <20 ms.  
- **Read latency**: Cassandra range query + Redis cache ≈ 15–30 ms.  
- **Throughput**: Kafka can handle millions of writes per second; Cassandra shards horizontally to scale.  
- **Ordering**: Kafka guarantees order per partition; we assign one partition per stream, so comments are serialized.

---

**Edge Cases**  
- *Burst traffic*: backpressure via Kafka’s throttling; auto‑scaling DB nodes.  
- *Deleted/edited comments*: store an “is_deleted” flag; propagate via a separate topic.  
- *Out‑of‑order writes*: use server‑side timestamp to sort; client reorders if needed.

---

**Optimize & Communicate**  
We could shard by time windows to reduce read contention, or use a CDN for static comment history. For latency trade‑offs, we might pre‑aggregate top N comments in memory. I’d present this diagrammatically, walk through a write/read flow, then discuss scaling tests and SLAs, emphasizing how each component meets the functional goals while staying cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
