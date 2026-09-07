---
qid: ing_aaec540142__faang__local
question: 'Explain: Interviewer — Distributed Counter System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 558
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:22:02-05:00'
sources: []
---

**Clarify**

> “Design a distributed counter system.”  
> *Assumptions:*  
> • High‑write throughput (≥ 10k ops/s).  
> • Strong consistency is required for read after write.  
> • The counter is global, not sharded per user.  
> • We need to support eventual persistence and fault tolerance.

**Approach**

1. **Core components** – Client → API Gateway → Load‑Balancer → Counter Service (stateless).  
2. **State storage** – Replicated key/value store (e.g., Raft/Etcd) for durability.  
3. **Concurrency control** – Use optimistic locking with compare‑and‑swap or a transactional log.  
4. **Scalability** – Partition the counter value into *segments* (shards) and keep an in‑memory buffer per shard; periodically flush to storage.  
5. **Fault tolerance** – Replicate each segment across N nodes, use majority commit for writes.

**Depth**

- Each increment request is routed to a *segment leader*.  
- The leader increments its local counter atomically (e.g., `incr` in Redis).  
- A background task merges all segments into the global value stored in Raft; each merge logs the delta.  
- Reads query the latest merged value or, if latency matters, read from the nearest segment and add buffered deltas.  
- Complexity: *O(1)* per write locally; merging is *O(S)* where S = number of segments (rare).  
- Trade‑offs: Strong consistency ⇒ higher latency; sharding reduces contention but requires merge logic.

**Edge Cases**

| Scenario | What breaks | Test strategy |
|----------|-------------|---------------|
| Node crash during merge | Counter lost or duplicated | Simulate mid‑merge failure and verify rollback via Raft log |
| Network partition | Inconsistent reads | Run split‑brain tests, ensure majority wins |
| High burst traffic | Leader overload | Stress‑test with 100k ops/s, observe backpressure |

**Optimize & Communicate**

- **Batching**: Group increments before persisting to reduce I/O.  
- **Cache warm‑up**: Keep recent counter in memory for low read latency.  
- **Observability**: Expose metrics (latency, errors) and distributed tracing.

Narrate the design by walking through a single increment → merge → read path, highlighting how each component satisfies scalability, consistency, and fault tolerance. This structured explanation demonstrates clear problem‑solving, technical depth, and awareness of edge conditions—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
