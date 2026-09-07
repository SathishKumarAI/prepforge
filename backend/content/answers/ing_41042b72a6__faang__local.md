---
qid: ing_41042b72a6__faang__local
question: 'Explain: Databases — System Design was HARD until I Learned these 30 Concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 549
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:15:18-05:00'
sources: []
---

**Clarify**  
The claim is that mastering *“30 concepts”* turns database‑system design from hard to easy.  
Assumptions:  
- “Hard” means difficulty in scaling, performance tuning, and consistency.  
- The 30 concepts are core to relational & NoSQL systems (ACID, CAP, sharding, indexing, etc.).  
- The audience is a mid‑level engineer wanting a quick mental model.

**Approach**  
1. List the 30 concepts as categories: *data modeling*, *transaction guarantees*, *partitioning*, *replication*, *query optimisation*, *storage engines*, *concurrency control*, *security & compliance*.  
2. Show how each category solves a specific pain point (e.g., CAP → trade‑off decision).  
3. Map the concepts to real‑world scenarios: OLTP vs OLAP, microservices vs monoliths.

**Depth**  
- **Data Modeling**: Normalisation vs denormalisation; cardinality & referential integrity.  
- **Consistency Models**: ACID (snapshot isolation), BASE, eventual consistency; impact on latency.  
- **Partitioning & Sharding**: Range vs hash, sticky sessions, re‑shard strategy.  
- **Replication**: Master–slave, multi‑master, quorum reads/writes; write skew prevention.  
- **Indexing**: B‑trees, bitmap, inverted indexes; cost of updates vs query speed.  
- **Storage Engines**: Row‑store vs columnar, LSM‑tree for writes.  
- **Concurrency Control**: MVCC, lock escalation, deadlock detection.  
- **Security & Compliance**: Encryption at rest/transport, role‑based access, GDPR audit logs.

**Edge Cases**  
- Highly skewed workloads → hot spot sharding.  
- Mixed read/write patterns → read replicas with eventual consistency.  
- Regulatory constraints → immutable audit trails.  
Testing involves load simulation, consistency checks across nodes, and rollback scenarios.

**Optimize & Communicate**  
Explain trade‑offs: e.g., stronger consistency = higher latency; denormalised schema = faster reads but harder updates. Show how mastering these concepts lets you pick the right tool (PostgreSQL, Cassandra, DynamoDB) for each use case. Conclude with a mnemonic (“DTC-PARCS” – Data, Transaction, Consistency, Partitioning, Replication, Indexing, Storage, Concurrency, Security) to remember the 30 ideas and keep the design process systematic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
