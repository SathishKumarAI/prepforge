---
qid: ing_0a658bfb86__faang__local
question: 'Explain: Synchronous replication — Data replication explained: types, examples
  & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 484
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:08:20-05:00'
sources: []
---

**Clarify**  
You’re asking about *synchronous* data replication—how a system guarantees that writes are committed on both primary and replica nodes before acknowledging success. I’ll assume we’re discussing database or storage systems, not message‑queue topics.

**Approach**  
1. Define synchronous replication and contrast it with asynchronous.  
2. Enumerate typical types (e.g., multi‑master, leader‑follower).  
3. Give concrete examples from industry.  
4. List use cases where consistency outweighs latency.

**Depth**  

| Type | Mechanism | Example | Use Case |
|------|-----------|---------|----------|
| **Leader–Follower (Primary‑Secondary)** | Primary writes to log, sends log entry to follower(s); follower acknowledges before commit. | PostgreSQL streaming replication, MySQL Group Replication | OLTP systems needing strong consistency (banking). |
| **Multi‑Master** | All nodes accept writes; changes are propagated and reconciled in real time. | Couchbase Sync Gateway, Cassandra with quorum writes (when configured for synchronous). | Geo‑distributed services where local latency matters but eventual consistency is not enough. |
| **Consensus‑Based (Raft/ Paxos)** | Nodes elect a leader; all log entries must be replicated to a majority before commit. | etcd, Consul, HashiCorp Vault | Configuration stores, distributed locks. |

**Edge Cases**  
- Network partitions: synchronous systems may block until partition resolves or fallback to degraded mode.  
- Latency spikes can increase write latency; monitor round‑trip times.  
- Clock skew isn’t an issue because commit is based on acknowledgments, not timestamps.

**Optimize & Communicate**  
Explain trade‑offs: *Strong consistency* → higher latency and reduced availability under partitions (CAP theorem). Use synchronous replication when data loss cannot be tolerated (financial transactions, real‑time inventory). For read‑heavy workloads, combine with asynchronous replicas to offload traffic. Always expose metrics (`commit_latency`, `replication_factor`) so ops can adjust quorum sizes or add faster links.

*Result:* A concise, structured overview that covers definition, types, examples, and practical considerations—exactly what a FAANG interview panel expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
