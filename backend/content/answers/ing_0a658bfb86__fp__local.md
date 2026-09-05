---
qid: ing_0a658bfb86__fp__local
question: 'Explain: Synchronous replication — Data replication explained: types, examples
  & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 513
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:27:31-05:00'
sources: []
---

### Synchronous replication – why it exists  
At its core, data must be **consistent** across all sites that depend on it. When an update arrives at a primary node, any replica that will later serve reads or participate in a transaction must *see* the same value. The simplest way to guarantee this is to hold the write until every involved replica acknowledges receipt—this is synchronous replication. It trades latency for strong consistency: the caller pays the round‑trip time of the slowest network hop.

### How it works  
1. **Write** arrives at the leader.  
2. Leader forwards the operation to each follower (often via a lightweight “prepare” message).  
3. Follower persists locally and sends back an acknowledgment.  
4. Only when all acknowledgments return does the leader commit and reply to the client.

Because the write is persisted on all nodes before acknowledgement, a crash of any single node cannot cause lost data; the others already have the record.

### Types & examples  
| Type | Mechanism | Typical use case |
|------|-----------|------------------|
| **Primary‑secondary (leader‑follower)** | One master writes, followers mirror | PostgreSQL streaming replication, MySQL GTID replication |
| **Multi‑master** | All nodes accept writes but coordinate via quorum | Apache Cassandra’s hinted handoff + lightweight transactions, Riak |
| **Synchronous multi‑region** | Replicas in geographically separated regions confirm before commit | Cloud database services (e.g., Azure SQL Database Sync) for compliance or low‑latency global reads |

### Use cases  
- **Financial systems** where a single lost transaction is unacceptable.  
- **Regulated data stores** that require auditability across jurisdictions.  
- **High‑availability clusters** where automatic failover must preserve the last committed state.

### Non‑obvious insight  
Synchronous replication is not just about “copying fast”; it embeds an *information‑theoretic* guarantee: every replica holds a complete, lossless representation of the transaction log up to the commit point. This allows any node to become primary without re‑playing or reconciling divergent states—because all nodes already agree on what the state is. In contrast, asynchronous replication must resolve conflicts post‑hoc, which introduces subtle consistency bugs that are hard to detect until a failure occurs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
