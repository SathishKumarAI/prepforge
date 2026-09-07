---
qid: ing_93bbfea635__faang__local
question: 'Explain: Replication — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 718
total_tokens: 952
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:27:42-05:00'
sources: []
---

**Clarify**  
You’re asking for a quick‑reference guide that explains how *replication* (the copying of data from one database node to another) impacts database performance. I’ll assume we’re talking about **write‑heavy OLTP systems** using either master–slave or multi‑master replication, and that the audience is familiar with SQL/NoSQL basics but needs a concise cheat sheet.

---

### Approach  
1. **Define key terms** (primary, replica, lag, consistency).  
2. **Outline trade‑offs**: latency vs. throughput, consistency models, failure modes.  
3. **Show common patterns** and their performance signatures.  
4. **Add quick metrics & tuning knobs** to help engineers spot bottlenecks.

---

### Depth (cheat sheet)

| Aspect | Master–Slave | Multi‑Master |
|--------|--------------|--------------|
| **Write path** | Single source → network → replica sync (async) | Parallel writes → conflict resolution |
| **Read path** | Reads from any replica → lower read latency if replicas spread geographically | Same as master–slave, but risk of stale reads increases with conflict window |
| **Consistency** | *Eventual* (async) or *Strong* (synchronous). Strong mode adds round‑trip to commit. | Requires consensus (Paxos/Raft); higher overhead; strong consistency only if all masters agree. |
| **Latency impact** | Each write incurs network hop + replication delay (`replication lag`). As replicas grow, lag grows linearly unless batching or pipelining is used. | Write latency dominated by conflict resolution and quorum acknowledgment (O(log N) in Raft). |
| **Throughput** | Bounded by master CPU/IO; replicas can offload reads. | Throughput limited by the slowest master; contention on shared resources. |
| **Failure recovery** | Replica promotion is fast; lag may cause data loss if sync was async. | Requires re‑synchronization of all nodes; risk of split‑brain if network partitions not handled. |

#### Tuning knobs
- **Batch size / pipelining** – larger batches reduce per‑row overhead but increase replication lag.
- **Replication interval** – set `sync_commit` or `write_timeout` to trade consistency for latency.
- **Read replicas placement** – co‑locate with read traffic; use geolocated replicas to cut RTT.
- **Conflict resolution strategy** – last‑writer-wins vs. custom merge functions (affects write path cost).

---

### Edge Cases  
- **Network partitions**: Master–slave may lose writes if slave is unreachable; multi‑master must prevent split brain via quorum.  
- **High write spikes**: Async replication can build up a huge backlog, leading to out‑of‑memory errors on replicas.  
- **Schema changes**: Propagating migrations asynchronously can cause read inconsistencies.

---

### Optimize & Communicate  
Start with *async* replication for latency‑sensitive workloads; switch to *sync* only for critical data. Use metrics (`replication_lag_seconds`, `write_latency_ms`) in dashboards to trigger alerts. When explaining to stakeholders, emphasize that “latency is the price of consistency” and that tuning knobs let you slide along this spectrum.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
