---
qid: ing_fe942ee631__faang__local
question: What is a Live Video? — Live Comment System Design - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 517
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:31:54-05:00'
sources: []
---

**Clarify**  
A “live video” is an unbuffered stream where viewers watch in real‑time and can post comments that appear instantly for all participants. I’ll assume:  
* Millions of concurrent viewers, ~10–100 k messages per second;  
* Low latency (<200 ms) for comment delivery;  
* Durable persistence (historical chat), scalability across regions, and moderation hooks.

**Approach**  
1. **Front‑end → CDN edge**: Clients send POSTs to a regional API gateway; responses are routed through a global CDN to reduce round‑trip time.  
2. **Ingestion layer**: Stateless HTTP endpoints that push messages into a sharded Kafka topic (topic per stream ID).  
3. **Processing & Persistence**: A consumer service writes to a distributed NoSQL store (e.g., Cassandra) for history and to an in‑memory cache (Redis cluster) for hot data.  
4. **Broadcasting**: Consumers publish to a Pub/Sub system (Kinesis/Google Pub/Sub). Clients subscribe via WebSocket or SSE endpoints behind the CDN, pulling from regional shards.  
5. **Moderation**: A separate stream filters profanity and spam before reaching subscribers; flagged messages are dropped or replaced.

**Depth**  
*Sharding*: 1 k partitions per stream → ~10 k msg/s spread across brokers.  
*Latency*: Ingestion <30 ms, publish to Pub/Sub <50 ms, client receive <200 ms.  
*Fault tolerance*: Replicated Kafka and multi‑AZ Redis; read‑repair on cache miss.  
*Cost*: On‑demand scaling of WebSocket workers; auto‑pause idle streams.

**Edge Cases**  
*Burst traffic (e.g., during a celebrity drop)* → pre‑provision extra consumer capacity, use burst buffers.  
*Network partitions*: Clients reconnect to nearest region; messages re‑queued.  
*User spoofing*: Authenticate via JWT; rate‑limit per IP/UID.

**Optimize & Communicate**  
Future improvements:  
* Edge caching of popular comments (e.g., “lol” repeats).  
* Use a CDN push API for ultra‑low latency.  
I’d explain that the design balances real‑time delivery, durability, and horizontal scalability while keeping operational complexity manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
