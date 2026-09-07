---
qid: ing_c97a088c49__faang__local
question: 'Explain: Frontend — The WhatsApp Architecture Facebook Bought For $19\u00a0Billion
  - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 601
total_tokens: 849
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:28:14-05:00'
sources: []
---

**Clarify**  
The interviewer wants a high‑level view of the system that powers WhatsApp’s front‑end (client‑side and server side) after Facebook’s $19 B acquisition, with emphasis on how it achieves high scalability.

**Approach**  
1. Map out the data flow from device → edge → regional data center → global backend.  
2. Identify key scaling levers: microservices, horizontal partitioning, caching, message queueing, and geo‑redundancy.  
3. Discuss failure isolation and latency guarantees.  

**Depth**  
- **Client SDKs (Android/iOS/Web)** use a lightweight binary protocol (e.g., *MessagePack*) over TLS.  
- **Edge Layer**: Multiple front‑end servers per region expose an HTTP/2 + QUIC gateway that terminates TLS, does load‑balancing, and forwards traffic to regional *WhatsApp Servers*.  
- **Regional WhatsApp Server** is a stateless microservice cluster built on Erlang/OTP (originally), now largely migrated to Go/Node for new features. Each node handles 10k–20k concurrent connections via event‑driven I/O, using in‑memory KV store (Redis) for session state.  
- **Message Routing**: A sharded publish‑subscribe bus (Kafka or Pulsar) routes messages by conversation ID; each shard runs on a dedicated broker partition to avoid hot spots.  
- **Storage**: End‑to‑end encrypted blobs stored in S3‑compatible object stores with per‑region replication. Metadata lives in a globally replicated NoSQL DB (Cassandra/Scylla).  
- **Scaling levers**:  
  - *Horizontal scaling* of edge gateways and regional servers.  
  - *Consistent hashing* for conversation sharding.  
  - *Cache layers* (Memcached, Redis) at multiple tiers to serve presence & read receipts with <50 ms latency.  

**Edge Cases**  
- Sudden traffic spikes during viral events → auto‑scaling of edge nodes and burst queueing.  
- Device churn or network partitions → graceful fallback to local message store.  
- End‑to‑end encryption keys rotation → secure key distribution via a dedicated Key Management Service.

**Optimize & Communicate**  
Future improvements: move more stateful logic to *serverless* functions for rapid feature rollouts, adopt HTTP/3 for lower handshake latency, and experiment with vectorized message routing using graph databases. I would explain each trade‑off (e.g., consistency vs. latency) and present metrics like MTTR < 30 s, 99.999% uptime, and ~1 ms regional latency to demonstrate the architecture’s robustness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
