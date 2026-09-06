---
qid: ing_93bbfea635__fp__local
question: 'Explain: Replication — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 390
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:19:11-05:00'
sources: []
---

**Replication – the performance‑oriented mirror of data**

The *fundamental problem* is that a single server becomes a bottleneck: every read or write must traverse the same physical path.  
Replication solves this by **spreading traffic across multiple nodes**, each holding a copy of the dataset. The deeper principle at work is *redundancy as parallelism*: if one node processes a request, another can process an independent one, so the total throughput scales roughly with the number of replicas.

There are two classic modes:

| Mode | Consistency | Latency | Use‑case |
|------|-------------|---------|----------|
| **Master–Slave** | Reads see the master’s latest state (strong) | Slave reads are slightly stale; writes stay on master | Read‑heavy workloads, write serialization |
| **Multi‑master** | Requires conflict resolution; eventual consistency | All nodes can accept writes, reducing latency | Distributed OLTP where high availability is critical |

The *why* behind each choice:

- **Master–Slave**: Keeps the write path single‑threaded to avoid race conditions, thus guaranteeing a linearizable order.  
- **Multi‑master**: Introduces *conflict graphs*; resolution algorithms (vector clocks, CRDTs) trade immediacy for availability per CAP.

**Non‑obvious insight:** The *network topology* of replicas matters as much as the replication algorithm itself. Placing a replica on a node with lower RTT to the majority of clients can yield higher effective throughput than simply adding more replicas. Thus, optimal performance is not merely “more copies” but *strategically located copies* that balance consistency, latency, and fault tolerance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
