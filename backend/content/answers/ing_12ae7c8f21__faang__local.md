---
qid: ing_12ae7c8f21__faang__local
question: 'Explain: The WhatsApp Architecture Facebook Bought For $19 Billion - High
  Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 564
total_tokens: 806
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:26:58-05:00'
sources: []
---

**Clarify**  
The interviewer wants a high‑level overview of the architecture that underpinned WhatsApp when it was acquired for \$19 billion, with an emphasis on how it achieved horizontal scalability and low latency. I’ll assume they’re interested in the core components (message routing, persistence, delivery guarantees) rather than the exact code.

**Approach**  
1. Outline key layers: client‑to‑server transport, load balancing, message broker, storage, and delivery logic.  
2. Explain how each layer scales horizontally.  
3. Highlight the trade‑offs that allowed WhatsApp to keep costs low while supporting billions of users.

**Depth**  

| Layer | Function | Scaling Technique | Rationale |
|-------|----------|-------------------|-----------|
| **Client‑to‑Server Transport** | TLS over TCP, long‑polling/WebSocket fallback | Stateless HTTP(S) endpoints behind a layer‑4 load balancer (Nginx/HAProxy) | Keeps per‑connection state on the client; any server can accept traffic. |
| **Load Balancing** | Global distribution across data centers | Geo‑aware round‑robin + sticky sessions for active chats | Minimizes latency by routing to nearest DC while preserving conversation context. |
| **Message Broker** | Queueing and ordering of messages | Custom lightweight broker built on top of Erlang/OTP, sharded by chat ID | Guarantees at‑most‑once delivery with minimal overhead; sharding allows linear scaling. |
| **Storage** | Persisting chats, media metadata | Distributed key–value store (RocksDB on SSD) + Cassandra for message logs | RocksDB gives fast local writes; Cassandra handles high write throughput and eventual consistency. |
| **Delivery Logic** | Push to online clients, store‑and‑forward for offline | In‑memory cache (Redis) for active sessions; fallback to broker if client is down | Fast path for online users; ensures no message loss when a user reconnects. |

**Edge Cases**  
- *Massive churn*: shard rebalancing must be seamless.  
- *Network partitions*: eventual consistency in Cassandra mitigates split‑brain scenarios.  
- *DDoS*: rate limiting per IP at the load balancer level.

**Optimize & Communicate**  
Future improvements could involve a microservice‑based broker (Kafka) for richer replayability, or serverless compute for media transcoding to reduce operational overhead. I’d explain that each change trades latency for cost/complexity, and that WhatsApp’s original design prioritized low‑cost, high‑throughput, with a minimal feature set that made horizontal scaling straightforward.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
