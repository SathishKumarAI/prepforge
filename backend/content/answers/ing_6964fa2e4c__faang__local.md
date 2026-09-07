---
qid: ing_6964fa2e4c__faang__local
question: 'Explain: could either do some sort of dynamic — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 541
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:48:23-05:00'
sources: []
---

**Clarify**  
We’re asked how a delivery‑app like DoorDash could build a dynamic location service that matches drivers to orders in real time. Key assumptions:  

- Clients (drivers & customers) need low‑latency updates on nearby offers or orders.  
- The system must scale to millions of concurrent users across many cities.  
- Accuracy of proximity queries is critical; we can tolerate ~50 m error.  

**Approach**  
1. **Geospatial indexing** – use geohashes (base‑32 strings) to bucket the world into cells (~100 m × 100 m).  
2. **Publish/Subscribe layer** – each client subscribes to the hash(es) covering its current location.  
3. **WebSocket or long‑polling channel** – push updates when new orders enter a cell or drivers move.  
4. **Cache & sharding** – keep per‑cell state in Redis shards; shard by hash prefix for horizontal scale.  
5. **Fallback & consistency** – on disconnect, poll every 30 s to catch missed events.

**Depth**  
- *Geo‑hashing*: encode lat/long → 12‑char string → cell size ~100 m.  
- *Subscription*: driver opens WS; server sends `{"cell":"u4pruydqqvj"}` and receives updates.  
- *Update flow*: when an order is posted, the service computes its geohash, looks up the corresponding Redis shard, pushes a message to all subscribed sockets in that cell. Complexity: O(1) per push; amortized over many clients.  
- *Trade‑offs*: larger cells reduce hash count but increase false positives; smaller cells improve precision but raise churn.

**Edge Cases**  
- **Cell boundary crossing**: client moves across cells → unsubscribe/resubscribe.  
- **High churn cities**: too many subscriptions can overload WS server – mitigate with connection pooling or message batching.  
- **Network partitions**: fallback to HTTP polling ensures eventual consistency.

**Optimize & Communicate**  
To improve latency, pre‑compute neighbor hashes and push them as a single batch; use Pub/Sub (e.g., Redis Streams) to decouple producers from consumers. I’d explain the design in a whiteboard diagram, highlight scalability metrics (10k WS per shard), and discuss how this architecture meets DoorDash’s real‑time matching goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
