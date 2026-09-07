---
qid: ing_a091849a3e__faang__local
question: 'Explain: SQL — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 541
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:57:46-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise cheat‑sheet that bridges **SQL** concepts with **system‑design** thinking—useful for FAANG interviews where candidates must articulate how to store, query, and scale data in production systems.

**Approach**  
1. Map core SQL constructs (tables, indexes, joins, transactions) to architectural primitives (tablespaces, shards, replication).  
2. Highlight trade‑offs: ACID vs. eventual consistency, read/write amplification, latency budgets.  
3. Provide quick formulas for cost estimation (storage = rows × row size; query time ≈ #rows / throughput).

**Depth**  
| SQL Concept | System Design Counterpart | Key Trade‑offs |
|-------------|--------------------------|----------------|
| **Primary key + unique index** | Partition key & hash‑based sharding | Lookup latency vs. write amplification |
| **Foreign key** | Foreign‑key enforcement via two‑phase commit or event sourcing | Consistency overhead vs. availability |
| **Join (inner/outer)** | Distributed join (MapReduce / pre‑joined materialized views) | CPU vs. network cost |
| **Transactions (ACID)** | Two‑phase commit / Paxos / Raft | Strong consistency → higher latency, lower write throughput |
| **Index (B‑tree/B+tree)** | LSM‑trees (Cassandra), Bloom filters | Write amplification but faster reads |
| **Partitioning (range/hash)** | Horizontal scaling (shards) | Hot‑spot mitigation vs. rebalancing cost |
| **Replication** | Master–slave, multi‑region, quorum reads | Latency trade‑off with data freshness |

**Edge Cases**  
- *Hot keys*: use consistent hashing + anti‑entropy.  
- *Skewed joins*: denormalize or pre‑aggregate.  
- *Long‑running transactions*: opt for optimistic locking.

**Optimize & Communicate**  
Start by describing the data model, then layer in sharding, replication, and caching. Quantify expected read/write throughput (e.g., 10k QPS → ~1 GB/day storage). Conclude with monitoring knobs: latency SLA, consistency level, and failure recovery time. This narrative shows you can translate SQL semantics into scalable, fault‑tolerant system designs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
