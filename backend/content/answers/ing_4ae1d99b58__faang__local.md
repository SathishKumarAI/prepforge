---
qid: ing_4ae1d99b58__faang__local
question: 'Explain: Candidate — Real Time Presence Platform System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 557
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:38:37-05:00'
sources: []
---

**Clarify**  
We need to design a *real‑time presence platform* (think Slack/Teams status). The system must ingest user heartbeats, expose current online/offline state to many clients, and scale to millions of users with sub‑100 ms latency. Key assumptions: 1) Users generate a heartbeat every ~30 s; 2) Presence is binary (online/offline) or multi‑state (active/idle); 3) Clients poll via WebSocket or long‑poll; 4) We tolerate eventual consistency for a few seconds.

**Approach**  
1. **Data ingestion**: User heartbeat → Kafka topic “presence”.  
2. **Processing & TTL**: Consume with a stream processor (Kafka Streams/Flink). Each record updates an in‑memory state store (Redis, RocksDB). Attach a TTL of 90 s; if no heartbeat arrives, key expires → offline.  
3. **Storage**: Persist to a fast key–value DB (Redis Cluster) for read latency <10 ms. Replicate across zones for availability.  
4. **API layer**: Stateless gRPC/WebSocket server that queries Redis. Push notifications via Pub/Sub when state changes, so clients receive updates instantly.  
5. **Scaling**: Partition by user ID hash; use auto‑scaling on CPU/memory. Use CDN edge nodes to cache common “offline” status.

**Depth**  
- **Read path**: gRPC → Redis Cluster (single round‑trip). Latency < 10 ms, throughput > 50k QPS per node.  
- **Write path**: Heartbeat → Kafka (latency ~5 ms) → Stream processor → Redis update. Throughput ≥ 1M heartbeats/s with a single cluster of 6 nodes.  
- **Consistency**: Eventual; offline transition delayed by TTL + processing lag (~200 ms). Acceptable for presence.

**Edge Cases**  
- Network partitions → heartbeat loss → stale online status until TTL expires.  
- Clock skew on clients → out‑of‑order heartbeats; use server timestamps.  
- Sudden spike (e.g., app launch) → burst of heartbeats; Kafka auto‑scaling mitigates.  

**Optimize & Communicate**  
We can reduce write amplification by batching updates in the stream processor. For high cardinality presence (many states), switch to a Bloom filter per zone to detect offline quickly. Explain trade‑offs: more memory vs lower latency. Conclude with monitoring (latency, error rates) and alerting for heartbeat gaps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
