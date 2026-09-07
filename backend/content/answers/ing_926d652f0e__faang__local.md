---
qid: ing_926d652f0e__faang__local
question: 'Explain: Push — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 471
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:24:58-05:00'
sources: []
---

**Clarify**  
We’re designing a *push‑based* publish/subscribe system (e.g., Google Cloud Pub/Sub). The goal is to deliver messages from publishers to subscribers with high throughput, low latency, and fault tolerance. I’ll assume: 1) millions of topics, 2) subscribers can scale horizontally, 3) at-least-once delivery semantics, and 4) the system must handle bursts.

**Approach**  
1. **Topic & Subscription sharding** – split each topic into shards (hash‑based).  
2. **Message ingestion** – publishers write to a broker queue; brokers partition by key and persist to disk/SSD.  
3. **Push workers** – pull from shard queues, batch messages, and push via HTTP/WebSocket to subscriber endpoints.  
4. **Ack & retry** – subscribers ack after processing; missing acks trigger exponential back‑off retries.  
5. **Metrics & scaling** – monitor queue depth → spin up more workers.

**Depth**  
- *Sharding*: 1024 shards per topic gives O(1) lookup and parallelism.  
- *Persistence*: Append‑only log + checkpoints; compaction removes acknowledged messages.  
- *Push protocol*: HTTP/2 multiplexed streams reduce connection overhead.  
- *Throughput*: Each worker handles ~10k msgs/s; horizontal scaling keeps latency < 100 ms.  
- *Failure handling*: If a push fails, re‑queue the message and use dead‑letter topics after N retries.

**Edge Cases**  
- **Slow consumer**: backpressure via flow control or buffer limits.  
- **Network partitions**: messages stay in queue until acked.  
- **Duplicate delivery**: idempotent processing required on subscriber side.

**Optimize & Communicate**  
Future improvements: use *topic‑level load balancing* (e.g., consistent hashing) to avoid hotspots, add *priority queues* for high‑value messages, and employ *serverless push* functions for cost efficiency. I’d explain each trade‑off—latency vs. durability—and validate with a small prototype before full rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
