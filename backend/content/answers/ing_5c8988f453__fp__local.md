---
qid: ing_5c8988f453__fp__local
question: 'Explain: Document Databases — 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 717
total_tokens: 894
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:21:05-05:00'
sources: []
---

**Document‑centric data stores are chosen by the *shape* of the payload, not just by CRUD speed.**  
At their core they solve a geometric problem: you have a set of high‑dimensional vectors (JSON, XML, Protobuf) that must be retrieved, updated and queried efficiently without flattening them into rows. The key insight is that the cost of *de‑serialization* dominates when the schema is fluid; thus the storage engine trades off strict relational guarantees for flexible indexing.

| # | DB type | Core property | When to use it |
|---|---------|---------------|----------------|
| 1 | **MongoDB** | Document + B‑tree indexes, TTL, sharding | Real‑time analytics with evolving schema. |
| 2 | **Couchbase** | Key/value + N1QL query layer | Mobile sync & offline first apps. |
| 3 | **RavenDB** | Full‑text + event sourcing support | Domain‑driven design with audit trails. |
| 4 | **Amazon DocumentDB** | Managed Mongo‑API, Aurora backend | Cloud‑native, low‑maintenance. |
| 5 | **Azure Cosmos DB (SQL API)** | Multi‑model + global distribution | Ultra‑low latency worldwide. |
| 6 | **Google Firestore** | Offline persistence, strong consistency | Mobile/web apps with real‑time UI. |
| 7 | **CouchDB** | Replication & conflict resolution | Decentralized data sharing. |
| 8 | **ArangoDB** | Graph + document in one engine | Complex joins without foreign keys. |
| 9 | **OrientDB** | Multi‑model, ACID transactions | Mixed graph/document workloads. |
|10 | **Neo4j (JSON support)** | Pure graph with JSON import | Relationship‑heavy analytics. |
|11 | **PostgreSQL + jsonb** | Relational + schema‑less column | Mix of strict reporting and flexible logs. |
|12 | **MySQL + JSON** | Light weight, familiar ecosystem | Small to medium services needing JSON fields. |
|13 | **SQLite + JSON1** | Embedded store for mobile | Offline caching on device. |
|14 | **Redis (JSON module)** | In‑memory fast reads/writes | Session state or transient config. |
|15 | **Elasticsearch** | Full‑text + structured search | Search‑heavy log ingestion and analytics. |

### Why this list matters
1. **Indexing strategy** – B‑tree vs inverted vs graph traversals dictate query latency for nested fields.  
2. **Consistency model** – If you need multi‑document ACID, pick a relational overlay; otherwise relaxed consistency can scale better.  
3. **Replication & sharding** – Some stores (CouchDB) natively sync across devices; others (MongoDB) rely on manual sharding.

### One non‑obvious insight
*The choice of “document” format (JSON vs BSON vs Protobuf) often determines the engine’s ability to compress and cache effectively.*  
BSON stores field names per document, which hurts compression for homogeneous collections. Switching to a binary format with a shared schema header can reduce I/O by 30–50 % on large writes—an optimization many overlook when migrating from JSON‑only systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
