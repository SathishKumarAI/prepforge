---
qid: ing_97f66e1dcb__faang__local
question: 'Explain: Redis Replication - Leader-follower technique'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 507
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:38:11-05:00'
sources: []
---

**Clarify**  
*Question:* “Explain Redis replication – the leader‑follower (master‑replica) technique.”  
Assumptions I’d confirm: you’re asking about the built‑in asynchronous replication model used in production clusters, not a custom sharding scheme.

---

### 1. Approach  

1. **Define roles** – Master and Replica(s).  
2. **Explain data flow** – how writes reach the master, then propagate.  
3. **Highlight failure handling** – failover, promotion, persistence.  
4. **Cover tuning knobs** – `replica-read-only`, `slave-serve-stale-data`.  
5. **Mention trade‑offs** – latency vs consistency.

---

### 2. Depth  

*Master:* accepts all writes and publishes them via a continuous I/O stream (`PSYNC`).  
*Replica:* on startup, performs a full RDB snapshot (or AOF) sync, then streams incremental commands from the master. Replication is **asynchronous**; replicas lag by a few ms‑seconds depending on network load.

During normal operation:
- Clients read from any replica if `slave-read-only` is set.
- If the master fails, Sentinel or Redis Cluster automatically promotes an eligible replica (after majority agreement).
- Persistence (`RDB`, `AOF`) ensures data durability even if replication lags.

**Complexity:** O(1) per command on master; replicas incur O(1) overhead for each command they replay. Network bandwidth is the primary bottleneck.

---

### 3. Edge Cases  

- **Network partitions** – replicas may become stale; `slave-read-only` can be toggled to avoid serving dirty data.  
- **Clock skew** – affects timestamp‑based expirations on replicas.  
- **Large writes** – can cause replication lag or pipe blocking.

---

### 4. Optimize & Communicate  

Improvements: use *partial resynchronization* (`PSYNC`) to reduce full sync time; enable `max-replica-lag` for automatic failover thresholds.  
When explaining, emphasize the “read‑scale” benefit (cheap replicas) vs the “write consistency” cost (async lag). Conclude with a quick comparison: *Redis replication = low‑latency reads + eventual consistency, ideal for session stores, counters, and caching.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
