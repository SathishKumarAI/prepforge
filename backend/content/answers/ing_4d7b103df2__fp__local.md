---
qid: ing_4d7b103df2__fp__local
question: 'What is data replication? — Data replication explained: types, examples
  & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 423
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:49:51-05:00'
sources: []
---

**Data replication** is the deliberate duplication of information across multiple storage sites so that a system can *optimize* availability, reliability, and locality while still preserving consistency.  
At its core it solves the **trade‑off between latency and fault tolerance**: if every read must hit a single source, a failure or network partition kills service; if every write must wait for all copies to acknowledge, performance plummets. Replication chooses where the “bottleneck” lies—latency‑critical reads get local replicas, while writes are serialised on a master.

### Types
| Type | Pattern | Typical use |
|------|---------|-------------|
| **Master–Slave (Primary–Replica)** | One writable node, many read‑only replicas. | Web apps with heavy read traffic (e.g., social feeds). |
| **Multi‑Master** | All nodes accept writes; conflicts resolved via vector clocks or CRDTs. | Collaborative editors, distributed key‑value stores. |
| **Peer‑to‑Peer** | Nodes equally participate in replication and conflict resolution. | Decentralised file systems (IPFS). |

### Examples & Use Cases
* **Database sharding + replication**: a MySQL cluster with a master per shard and read replicas to handle 10 k RPS while keeping writes fast.  
* **Content Delivery Networks (CDNs)**: edge caches store replicated static assets, reducing origin load and latency for global users.  
* **Disaster recovery**: off‑site geo‑replicated backups enable instant failover in a region outage.

### Non‑obvious Insight
Most engineers focus on *how many* replicas to keep. The deeper principle is **where the replicas live relative to the data’s access pattern**. A single replica in a distant datacenter can be worse than two local ones, because read latency dominates user experience even if write throughput is marginally higher. Thus, optimal replication isn’t about quantity but *geographic and workload alignment*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
