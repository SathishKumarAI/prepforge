---
qid: ing_7119c26a1f__faang__local
question: 'Explain: Object-Oriented Databases — 15 Types of Databases and When to
  Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 687
total_tokens: 929
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:06:58-05:00'
sources: []
---

**Clarify**  
The interview asks me to explain *object‑oriented databases* (OODB) and then list **15 database types**—relational, document, key‑value, graph, time‑series, columnar, wide‑column, in‑memory, embedded, cloud‑native, multi‑model, spatial, full‑text, event‑streaming, and hybrid. I’ll confirm the scope: Do we need only storage‑level distinctions or also use‑case guidance? Assume a 5‑minute answer for a FAANG technical interview.

**Approach**  
1. Define OODB fundamentals (objects, classes, inheritance).  
2. Enumerate the 15 types, grouped by paradigm.  
3. For each type give: *primary strength*, *typical workload*, and *when to pick it*.  
4. Conclude with a quick decision matrix.

**Depth**  

| DB Type | Core Strength | Typical Use‑Case | When to Choose |
|---------|---------------|------------------|----------------|
| **Relational** | ACID, joins | OLTP, finance | Structured schemas, strong consistency |
| **Document (MongoDB)** | Flexible schema, JSON | CMS, mobile backends | Rapid iteration, semi‑structured data |
| **Key‑Value (Redis)** | Low latency | Session store, caching | Simple lookups, high throughput |
| **Graph (Neo4j)** | Traversals | Social networks, recommendation | Relationship‑heavy queries |
| **Time‑Series (InfluxDB)** | Down‑sampling, retention | IoT telemetry | Continuous metrics |
| **Columnar (ClickHouse)** | Analytical reads | BI dashboards | Large read‑intensive analytics |
| **Wide‑Column (Cassandra)** | Horizontal scaling | Real‑time analytics | Partitioned writes at scale |
| **In‑Memory (Memcached)** | Zero‑latency | Cache layer | Very fast reads, short TTL |
| **Embedded (SQLite)** | Lightweight persistence | Mobile apps | Local storage, offline mode |
| **Cloud‑Native (DynamoDB)** | Managed scalability | Serverless workloads | Auto‑scaling, global distribution |
| **Multi‑Model (ArangoDB)** | Unified API | Polyglot systems | Mixed query patterns |
| **Spatial (PostGIS)** | GIS queries | Mapping services | Geospatial data |
| **Full‑Text (Elasticsearch)** | Text search | Search engines | Rich querying on text |
| **Event‑Streaming (Kafka Streams)** | Real‑time processing | Stream analytics | Continuous ingestion & analysis |
| **Hybrid (SQL/NoSQL mix)** | Flexibility | Data lake pipelines | Combine structured + unstructured data |

**Edge Cases**  
- Over‑engineering: pick a single model if workloads are homogeneous.  
- Consistency vs availability trade‑off in NoSQL systems.  
- Schema evolution costs in relational vs document stores.

**Optimize & Communicate**  
I’d finish by recommending a decision tree: start with the data’s structure → latency needs → scaling pattern → choose the matching DB type. This shows I can translate business constraints into technical choices, satisfying FAANG interviewers’ focus on structured reasoning and depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
