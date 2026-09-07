---
qid: ing_215ab2b1dc__faang__local
question: AWS re:Invent 2021 - Which NoSQL database is right for you?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 764
total_tokens: 1004
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:02:27-05:00'
sources: []
---

**Clarify**

> *Question:* “Which NoSQL database is right for your use‑case?”  
> We need to pick the best option among DynamoDB, MongoDB (Atlas), Cassandra, Redis, and others, given requirements such as read/write patterns, consistency needs, scaling strategy, and operational overhead.  
> **Assumptions to confirm:**  
> • Transactional vs. analytical workload.  
> • Latency tolerance (single‑digit ms vs. 100 ms).  
> • Data model: key/value, document, wide‑column, or graph.  
> • Scale: millions of ops/sec and petabytes of data?  
> • Consistency model required (eventual vs. strong).  
> • Managed vs. self‑hosted preference.

**Approach**

1. Map each requirement to database strengths.  
2. Rank candidates by fit, then evaluate trade‑offs (cost, operational complexity).  
3. Recommend the top choice with justification and fallback options.

**Depth**

| Database | Strengths | Ideal Use‑Case | Consistency | Scaling | Operational Notes |
|----------|-----------|----------------|-------------|---------|-------------------|
| **DynamoDB** | Serverless, single‑digit ms latency, auto‑scaling, built‑in global tables. | Low‑latency key/value lookups, event streams, IoT telemetry. | Eventual by default; can enable strongly consistent reads. | Horizontal scaling via partitions; no manual sharding. | Managed; pay per request or provisioned throughput. |
| **MongoDB Atlas** | Rich document model, ad‑hoc queries, secondary indexes, aggregation pipeline. | Content management, flexible schema, microservices data store. | Eventual consistency across clusters; tunable read/write concerns. | Auto‑scaling shards; multi‑region replication. | Managed cloud offering; easy CI/CD integration. |
| **Apache Cassandra** | Linear scalability, high write throughput, tunable consistency. | Time series, log ingestion, real‑time analytics where writes dominate. | Tunable (QUORUM, ALL). | Manual partitioning but auto‑replication across nodes. | Requires ops expertise; cluster maintenance overhead. |
| **Redis (Elasticache)** | In‑memory key/value, pub/sub, caching, stream support. | Session store, leaderboards, real‑time messaging. | Strong consistency within a node; eventual across replicas. | Clusters can be sharded; limited persistence options. | Managed or self‑hosted; memory cost high for large datasets. |

**Edge Cases**

- **Multi‑region writes**: DynamoDB global tables are the only managed option; others need custom replication logic.  
- **Large binary objects**: DynamoDB limits item size (400 KB); use S3 + metadata in DB.  
- **Strict ACID transactions across collections**: Only DynamoDB and MongoDB 4.x+ support multi‑document transactions.

**Optimize & Communicate**

*Recommendation:* If the workload is read‑heavy with sub‑10 ms latency, choose **DynamoDB** for its serverless model and global tables.  
If you need flexible schema and rich queries (e.g., content search), pick **MongoDB Atlas**.  
For write‑intensive time series where linear scaling matters, go with **Cassandra** but be prepared to manage the cluster.

Explain trade‑offs: DynamoDB offers zero ops but limits on item size; Cassandra gives raw performance at cost of ops overhead; MongoDB balances flexibility and ease of use. This structured response demonstrates clarity, depth, and communication—key FAANG interview strengths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
