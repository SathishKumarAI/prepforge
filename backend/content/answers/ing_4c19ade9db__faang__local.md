---
qid: ing_4c19ade9db__faang__local
question: 'Explain: So as in when something changes you — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 523
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:41:14-05:00'
sources: []
---

**Clarify**  
We’re asked to design a system that *detects and propagates changes to a user’s location* (e.g., “you’ve moved”). The core requirement: when a device reports a new GPS coordinate, the backend must update the user’s position in near‑real time so other services (routing, nearby POIs) see the change.  
Assumptions I’d confirm:  
- What latency is acceptable? (≤ 100 ms?)  
- Expected traffic: millions of updates per second?  
- Which clients send updates (mobile, car GPS)?  

**Approach**  
1. **Ingestion layer** – a scalable HTTP/GRPC endpoint that accepts `{user_id, lat, lon, timestamp}`.  
2. **Processing pipeline** – publish to a stream (Kafka/RocketMQ).  
3. **State store** – a distributed key‑value store (Redis Cluster / DynamoDB) keyed by `user_id` → `{lat, lon, last_ts}`.  
4. **Change notification** – on state change, emit an event to downstream services (e.g., routing cache invalidation).  

**Depth**  
- *Ingestion*: Use a load‑balanced pool of stateless workers; rate‑limit per user to avoid abuse.  
- *Processing*: Kafka partitions by `user_id` ensures ordering and parallelism.  
- *State store*: Redis with LRU eviction for active users; fallback to persistent DB for history. Complexity: O(1) read/write, ~10 ms latency.  
- *Event bus*: Pub/Sub (e.g., AWS SNS/SQS) so services can subscribe to `location_update` events.  

**Edge Cases**  
- Clock skew → include server timestamp on ingestion.  
- Duplicate updates → idempotent writes using last‑timestamp check.  
- Offline devices → buffer locally, send on reconnect.  
- Privacy: enforce access control per user.  

**Optimize & Communicate**  
To reduce load, batch updates per user if they arrive > 10 Hz; compress payloads with protobuf. For global scale, shard the state store by region to keep latency low. I’d explain trade‑offs (Kafka vs. direct DB writes: ordering vs. simplicity) and justify each choice in terms of latency, throughput, and consistency requirements. This shows clear structure, depth, and awareness of real‑world constraints—exactly what a FAANG interviewer looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
