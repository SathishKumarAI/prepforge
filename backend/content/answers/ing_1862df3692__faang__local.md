---
qid: ing_1862df3692__faang__local
question: 'Explain: Interviewer — Real Time Presence Platform System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 480
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:41:13-05:00'
sources: []
---

**Clarify**

> *“Design a real‑time presence platform.”*  
> I’ll assume we need to track “online/offline” status for millions of users, support instant read/write latency < 50 ms, handle bursty updates (chat, games), and provide a subscription API so clients get live changes. Key constraints: high write throughput, low read latency, eventual consistency, and fault tolerance.

**Approach**

1. **Data model** – `user_id → {status, last_seen}` in a key‑value store.  
2. **Write path** – client sends status update → API gateway → stateless microservice → append‑only log (Kafka).  
3. **Read path** – cache layer (Redis) with LRU, backed by the KV store for persistence.  
4. **Change propagation** – use Kafka topics per shard; subscribers consume updates and push via WebSocket/FCM.  
5. **Scaling & partitioning** – hash users across 1 k shards; each shard owns its own cache+DB instance.  
6. **Fault tolerance** – replicate logs, use synchronous replication for critical status changes, fallback to “last known” if a node dies.

**Depth**

*Complexity*: Write O(1) per update (log append + cache write). Read O(1) from cache; cache miss → O(log N) in KV store.  
*Trade‑offs*: Log‑based writes give durability but introduce slight lag for reads; caching reduces latency at cost of memory.  

**Edge Cases**

- **Network partitions**: resolve using quorum writes or last‑write-wins with timestamps.  
- **Rapid status toggling**: backpressure on Kafka, deduplicate updates in microservice.  
- **User churn**: TTL on cache entries to free stale slots.

**Optimize & Communicate**

Explain that we could switch to a *pub/sub* store (e.g., Redis Streams) for lower latency if budget allows. Mention monitoring metrics (latency histograms, backpressure counters). Conclude by summarizing the system’s ability to meet 50 ms reads, 10k writes/sec per shard, and graceful degradation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
