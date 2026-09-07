---
qid: ing_d74f71dec3__faang__local
question: 'Explain: NoSQL Database — Distributed Counter System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 432
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:00:00-05:00'
sources: []
---

**Clarify**  
You’re asked to design a *distributed counter* (e.g., view counts, likes) that lives in a NoSQL store and can scale horizontally. Clarify:  
• What max QPS?  
• Consistency requirement (strong vs eventual)?  
• Failure model (node crashes, network partitions).  

**Approach**  
1. Partition the key space across shards.  
2. Each shard holds an *in‑memory* delta buffer per counter.  
3. Periodically flush deltas to a persistent NoSQL table (e.g., DynamoDB or Cassandra) with “add” semantics.  
4. Use a lightweight replication factor (2–3) for fault tolerance.  

**Depth**  
- **Data model:** `CounterShard{counterId, shardId, delta}` stored in a wide‑column store.  
- **Update path:** client → local shard → increment in RAM → ack immediately.  
- **Flush strategy:** time‑based or size‑based; use background workers to batch updates and send an atomic “add” via `PUT`/`UPDATE`.  
- **Consistency:** eventual consistency is acceptable for counters; strong consistency would require Paxos/2PC, adding latency.  
- **Complexity:** O(1) per increment; flush cost amortized over many ops (O(n/k)).  

**Edge Cases**  
- *Shard failure:* replicate delta to a standby shard before ack.  
- *Network partition:* counters may diverge; reconcile on merge using vector clocks or last‑write‑wins.  
- *Hot key:* split the counter into multiple sub‑shards and aggregate client‑side.  

**Optimize & Communicate**  
Explain trade‑offs: higher replication → lower latency but more writes; stronger consistency → more coordination overhead. Emphasize that this design yields linear scalability, low per‑op cost, and tolerates failures with eventual correctness—exactly what FAANG teams need for high‑traffic counters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
