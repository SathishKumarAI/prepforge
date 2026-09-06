---
qid: ing_ffe1bd2362__fp__local
question: 'Explain: 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 627
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:03:48-05:00'
sources: []
---

**Why 15 database flavors exist**

Every data‑system solves a *constraint* (speed, consistency, scalability, flexibility).  
By varying one or more constraints you obtain a distinct class of databases.  
The 15 types below are the canonical families that arise when we combine:

| Class | Key constraint(s) |
|-------|-------------------|
| **Relational** | ACID, schema‑rigid, joins |
| **Object‑oriented** | Objects + inheritance |
| **Key–value** | O(1) lookup by key |
| **Document (JSON/BSON)** | Semi‑structured, nested docs |
| **Column‑family** | Wide rows, sparse columns |
| **Graph** | Explicit edges, traversal cost |
| **Time‑series** | Append‑only, retention policies |
| **Spatial/Geospatial** | R‑tree indexes, spatial predicates |
| **Search (Full‑text)** | Inverted index, relevance scoring |
| **In‑memory** | Volatile, low latency |
| **Distributed (NoSQL)** | Horizontal scaling, eventual consistency |
| **NewSQL** | Distributed ACID + SQL interface |
| **Embedded** | Local, file‑based persistence |
| **Multi‑model** | Combines two or more of the above in one engine |

### When to pick each

- **Relational / NewSQL** – structured data with strong consistency; transactional workloads.  
- **Object‑oriented** – domain models that map cleanly to objects (e.g., CAD).  
- **Key–value** – session stores, caches where only the key matters.  
- **Document** – content management, user profiles with evolving schema.  
- **Column‑family** – analytics dashboards, log aggregation.  
- **Graph** – social networks, recommendation engines.  
- **Time‑series** – IoT telemetry, financial tickers.  
- **Spatial** – GIS, location services.  
- **Search** – e‑commerce catalogs, document retrieval.  
- **In‑memory** – real‑time analytics, leaderboards.  
- **Distributed NoSQL** – global web apps needing low‑latency writes.  
- **Embedded** – mobile apps, IoT devices with local persistence.  
- **Multi‑model** – when a single application needs, say, graph and document features without microservice fragmentation.

### Non‑obvious insight

*The “right” database is rarely about performance alone; it’s about aligning the data’s *access pattern* (read vs write, schema stability, relationships) with the constraint that the engine enforces.*  
For instance, a key–value store may outperform a document DB for simple counters because the overhead of parsing nested JSON becomes unnecessary. Choosing the correct type early turns a hard scalability problem into a trivial optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
