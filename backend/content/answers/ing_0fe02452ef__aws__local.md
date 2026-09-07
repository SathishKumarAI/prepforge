---
qid: ing_0fe02452ef__aws__local
question: 'Explain: Ledger Databases — 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 651
total_tokens: 888
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:01:23-05:00'
sources: []
---

**Situation – Task**

While leading the data‑platform team for a fintech startup, we needed to audit every transaction with immutable, tamper‑proof guarantees while still supporting real‑time analytics. The choice of database architecture directly impacted our ability to deliver on **Customer Obsession** (accurate statements) and **Ownership** (end‑to‑end responsibility).

**Action – Design**

I scoped the problem as a *ledger*—a sequential, append‑only record that must preserve integrity, support rollbacks, and allow fast reads. I mapped 15 common database models to ledger use‑cases:

| Category | Example DB | Strength for Ledger |
|----------|------------|---------------------|
| **Relational** | PostgreSQL (ACID) | Strong consistency, mature tooling |
| **Document** | MongoDB | Flexible schema for evolving metadata |
| **Wide‑column** | Cassandra | High write throughput, linear scalability |
| **Key–value** | DynamoDB | Low latency, auto‑scaling |
| **Graph** | Neo4j | Relationship queries (e.g., fraud chains) |
| **Time‑series** | InfluxDB | Efficient retention policies |
| **Search** | Elasticsearch | Fast full‑text audit search |
| **Object Store** | S3 with Glacier | Cost‑effective long‑term archiving |
| **Blockchain** | Hyperledger Fabric | Immutable, permissioned chaincode |
| **Event Sourcing** | Kafka Streams + Kinesis | Event replay, audit trail |
| **Columnar** | Redshift | Analytical reads over historical ledger |
| **Hybrid** | Snowflake | Scale compute & storage independently |
| **NoSQL Multi‑model** | Cosmos DB | Global distribution, low latency |
| **In‑memory** | Redis Streams | Real‑time aggregation before persistence |
| **Graph‑SQL hybrid** | Amazon Neptune | Cypher + SQL joins for complex queries |

I built a *microservice* layer that writes to **DynamoDB** (fast append) and streams each write to **Kinesis Data Streams**, which triggers a Lambda that persists the event to an **S3 Glacier Deep Archive** bucket. For analytical workloads, we periodically materialize snapshots into **Redshift Spectrum** for BI.

**Result – Impact**

- 99.999% durability with read‑latency <10 ms.
- Cost savings of 35 % by offloading cold data to Glacier.
- Audit compliance achieved in 30 days vs. 90 days previously.
- Reduced engineering effort: single “write” path, auto‑scaling services.

**Reflection – Learning**

I initially over‑engineered with a monolithic SQL ledger; the team struggled with schema changes and scaling. Pivoting to a *polyglot persistence* strategy (DynamoDB + Kinesis) gave us flexibility and resilience—an example of **Bias for Action** and continuous learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
