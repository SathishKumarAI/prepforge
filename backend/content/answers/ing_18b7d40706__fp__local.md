---
qid: ing_18b7d40706__fp__local
question: 'Explain: Types of data replication — Data replication explained: types,
  examples & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 574
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:58:34-05:00'
sources: []
---

## Why do we replicate data at all?

Every distributed system is a *probabilistic* observer of the same reality: network partitions, node failures, and latency mean that any single copy may be stale or unreachable. To keep the “system view” coherent, we duplicate data so that local reads can succeed even if the source disappears. The choice of replication strategy balances three competing costs:

| Cost | What it protects against | Typical trade‑off |
|------|--------------------------|-------------------|
| **Latency** | User read speed | More replicas → lower latency but higher write cost |
| **Consistency** | Correctness of reads | Stronger guarantees → serialization overhead |
| **Availability** | Service uptime | More copies → higher availability, but more network traffic |

---

## Replication flavors

| Type | Core idea | Example | Use case |
|------|-----------|---------|----------|
| **Master‑Slave (Primary‑Secondary)** | One write‑only master; replicas copy in order. | MySQL *replica* servers. | OLTP where writes are rare, reads dominate (e.g., e‑commerce catalog). |
| **Multi‑Master (Conflict‑free Replication)** | Every node accepts writes; conflicts resolved by deterministic rules or last‑write wins. | CouchDB, Cassandra with *QUORUM*. | Collaborative apps where users edit offline and sync later (Google Docs style). |
| **Quorum Consensus** | Operations require a majority of nodes to agree before commit. | Raft, Paxos, Dynamo’s *R+W> N* rule. | Systems that demand linearizability but tolerate some partition (distributed logs). |
| **Geo‑Distributed Sharding** | Data split by key ranges; each shard replicated across regions. | Amazon DynamoDB global tables. | Global SaaS with low cross‑region latency and legal compliance. |

---

### Non‑obvious insight

The *shape* of the replication graph matters more than raw node count. A star topology (one master, many slaves) is cheap to maintain but becomes a single point of failure; a mesh (each node talks to all others) offers resilience but incurs \(O(n^2)\) bandwidth. Optimizing for **edge‑to‑center** traffic—placing replicas closer to the most active clients and using *adaptive replication* that scales the number of copies with observed read/write ratios—yields the best trade‑off between cost and performance.

In short, data replication is not a one‑size‑fits‑all switch; it’s an optimization problem where latency, consistency, availability, and network economics must be weighted according to the workload’s statistical profile.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
