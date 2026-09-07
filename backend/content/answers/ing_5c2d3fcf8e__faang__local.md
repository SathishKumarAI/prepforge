---
qid: ing_5c2d3fcf8e__faang__local
question: 'Explain: So what you could use is a — Database Design Tips | Choosing the
  Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 468
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:17:33-05:00'
sources: []
---

**Clarify**  
You’re asked how to pick a database for a system‑design interview, focusing on design tips and trade‑offs. I’ll assume we have high traffic, mixed read/write patterns, need horizontal scalability, and may store both structured and semi‑structured data.

**Approach**  
1. Identify *data model* (relational vs document/graph).  
2. Evaluate *consistency*, *latency*, and *throughput* needs.  
3. Map these to candidate databases: SQL (PostgreSQL, MySQL), NoSQL (MongoDB, Cassandra, DynamoDB), NewSQL (CockroachDB, Spanner).  
4. Consider operational factors: sharding, replication, backup, monitoring.

**Depth**  
- **Relational DBs** give ACID guarantees; ideal for complex joins and transactions (e.g., financial ops).  
- **Document stores** (MongoDB) excel with flexible schemas and rich queries on JSON docs; good for content‑heavy apps.  
- **Wide‑column stores** (Cassandra, DynamoDB) provide linear scalability and high write throughput, at the cost of eventual consistency.  
- **NewSQL** blends relational semantics with distributed scaling; useful when you need SQL support but must shard.

When choosing:  
- *Read‑heavy*: use read replicas or caching layers.  
- *Write‑heavy*: pick a NoSQL that can partition data by key.  
- *Strong consistency*: favor RDBMS or NewSQL.  
- *Schema evolution*: lean to document stores.

**Edge Cases**  
- Mixed workloads (e.g., analytics + transactional) may require polyglot persistence.  
- Multi‑region latency: choose a globally distributed DB like DynamoDB Global Tables.  
- Data size > petabytes: need sharding or columnar storage for analytics.

**Optimize & Communicate**  
I’d present a decision matrix, quantify trade‑offs (latency vs consistency), and outline fallback strategies (e.g., start with PostgreSQL + Redis cache, migrate to DynamoDB if write load spikes). This shows structured thinking, clear communication, and depth—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
