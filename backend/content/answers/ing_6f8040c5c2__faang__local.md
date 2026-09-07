---
qid: ing_6f8040c5c2__faang__local
question: 'Explain: Non-Functional Requirements — Distributed Counter System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 495
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:02:28-05:00'
sources: []
---

**1️⃣ Clarify**  
We need a *distributed counter* that supports high‑rate increments and reads with eventual consistency, low latency (<10 ms), and strong fault tolerance. Assume:  
- Writes (increments) are the majority of traffic.  
- Reads may be stale by ≤ 1 s.  
- The system runs in a single cloud region but must survive node failures.

**2️⃣ Approach**  
Use *sharded counters* + *replication*.  
1. Partition the key space into N shards (e.g., 256).  
2. Each shard is managed by an in‑memory store (Redis, Memcached) with local persistence (AOF/RDB).  
3. Replicate each shard to a hot standby for high availability.  
4. Clients hash the counter id → shard, then issue `INCR` on that shard.  
5. Periodically (e.g., every 100 ms) aggregate shard values into a global store or publish via Kafka.

**3️⃣ Depth**  
- **Latency**: In‑memory ops ≈ 1–2 µs; network round‑trip adds ~<10 ms.  
- **Consistency**: Read‑your‑write within the same shard is strong; cross‑shard reads may lag by aggregation window.  
- **Fault tolerance**: Hot standby per shard ensures 99.999% uptime; if a node dies, its replica takes over instantly.  
- **Scalability**: Adding shards linearizes traffic; replication keeps read/write throughput high.

**4️⃣ Edge Cases**  
- *Shard split*: when a counter grows beyond threshold, re‑hash to new shard—requires migration and consistency window.  
- *Network partition*: during split‑brain, replicas may diverge; use anti‑entropy or quorum reads.  
- *Burst traffic*: queue increments locally before persisting to avoid overload.

**5️⃣ Optimize & Communicate**  
- Use pipelining for bulk increments.  
- Cache aggregated totals in a CDN cache for read‑heavy workloads.  
- Explain trade‑offs: stronger consistency → higher latency; eventual consistency gives sub‑10 ms ops.  
- Summarize design decisions to interviewers, highlighting how each requirement is met and where compromises were made.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
