---
qid: ing_3f4f334fbf__faang__local
question: 'Explain: Distributed Counter Data Schema Design — Distributed Counter System
  Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 611
total_tokens: 850
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:11:04-05:00'
sources: []
---

## 1️⃣ Clarify  
We need a highly‑available **distributed counter** (e.g., like a view or click count) that supports:

* **Concurrent increments** from many clients worldwide.
* **Low latency reads** (≤10 ms) and fast writes (≈5 ms).
* Strong consistency *or* eventual, depending on the use case.
* Graceful handling of node failures and network partitions.

Assumptions to confirm:  
- Maximum write rate per counter?  
- Required read consistency level (linearizable vs. eventual).  
- Allowed staleness window for reads.  

## 2️⃣ Approach  
1. **Choose a data model** – key‑value store with `counter_id → value`.  
2. **Select a storage backend** – distributed log (Kafka) + in‑memory cache (Redis Cluster) or NoSQL (Cassandra).  
3. **Implement write path** – client → local node → broadcast to replicas via Raft/Quorum.  
4. **Read path** – read from local replica; optionally merge with other nodes for freshness.  
5. **Compaction & eviction** – periodic aggregation of logs into compacted counters.

## 3️⃣ Depth  
- **Write Path:** Client sends `INCR(id)` to a leader node (Raft). Leader appends increment event to its log and replicates to followers; once *majority* ack, reply success. Complexity: **O(1)** per write + network hop.  
- **Read Path:** Local read from in‑memory cache → O(1). For linearizable reads, issue a quorum read (Raft read‑only request) costing extra roundtrip.  
- **Fault Tolerance:** Raft ensures consistency; if leader fails, election runs in < 2 RTTs (~50 ms).  
- **Scalability:** Shard counters by hash(id); each shard is an independent Raft group.  

## 4️⃣ Edge Cases  
* Network partition → split‑brain: use Raft to prevent two leaders.  
* Counter overflow → store as 64‑bit signed; roll over logic if needed.  
* High write bursts → batch increments into a single log entry (e.g., `INCR(id, delta)`).

## 5️⃣ Optimize & Communicate  
- **Batching**: Group multiple increments per client into one log record to cut replication traffic.  
- **Compression**: Use delta‑encoding in logs for space savings.  
- **Monitoring**: Track lag between leader and followers; auto‑replay on lag spikes.  

Narration: “We’ll shard counters, use Raft for strong consistency, batch writes for throughput, and expose a low‑latency read API that falls back to quorum reads when linearizability is required.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
