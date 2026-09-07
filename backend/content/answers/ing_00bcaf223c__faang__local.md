---
qid: ing_00bcaf223c__faang__local
question: 'Explain: Database Types — How to Decide Which Type of Database to Use'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 488
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:46:08-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise decision framework for picking a database type (SQL vs NoSQL, relational vs document, key‑value, graph, time‑series). Key assumptions: we’re designing a new feature set, data volume & velocity are unknown, and there may be future scaling or analytics needs.

**Approach**  
1. **Model the data** – schema rigidity, relationships, transactionality.  
2. **Identify workloads** – read/write mix, latency targets, consistency requirements.  
3. **Project growth & ops** – scaling strategy, multi‑region, backup/replication.  
4. **Choose a family** – relational, document, key‑value, graph, time‑series, or hybrid.

**Depth**  
| Data Pattern | Typical DB | Rationale |
|--------------|------------|-----------|
| Strong ACID, complex joins | Relational (PostgreSQL, MySQL) | Guarantees consistency; mature tooling. |
| Flexible schema, high write throughput | Document (MongoDB, Couchbase) | JSON‑like storage, easy sharding. |
| Simple key–value lookups, cache style | Key‑value (Redis, DynamoDB) | O(1) access, auto‑scaling. |
| Traversing relationships | Graph (Neo4j, Amazon Neptune) | Efficient adjacency queries. |
| Time‑ordered metrics | TS (InfluxDB, TimescaleDB) | Downsampling, retention policies. |

Consider **polyglot persistence** if workloads differ across services; use a single DB only when data is highly interrelated.

**Edge Cases**  
- Mixed transaction & analytics workloads → choose a database that supports OLTP + OLAP or separate stores.  
- Regulatory constraints (e.g., GDPR) → ensure the DB offers encryption, audit logs.  
- Rapid prototyping → start with a document store to avoid schema migrations.

**Optimize & Communicate**  
Explain trade‑offs: relational = consistency but slower scaling; NoSQL = speed but eventual consistency unless configured otherwise. Highlight that the decision is iterative—start with the simplest solution that satisfies current requirements, then refactor as constraints evolve. This demonstrates clear reasoning, technical depth, and a pragmatic approach expected in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
