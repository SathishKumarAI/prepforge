---
qid: ing_bd4531050a__eli5__local
question: 'Explain: Common Use-cases: — 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 476
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:37:10-05:00'
sources: []
---

Imagine a toolbox where every tool is made for a specific job—hammer, wrench, screwdriver. In machine‑learning projects the “tools” are databases, each best suited for a particular data task.

| Database type | What it stores | When to use it |
|---------------|----------------|----------------|
| **Relational (SQL)** | Structured tables with strict columns | When you need ACID guarantees and complex joins (e.g., user profiles). |
| **NoSQL – Document** | JSON‑like flexible records | For semi‑structured logs or product catalogs that evolve. |
| **Key‑Value Store** | Simple key → value pairs | Fast look‑ups of feature vectors during inference. |
| **Column‑Store** | Wide tables with many columns | Analytical queries over millions of rows (e.g., clickstream). |
| **Time‑Series DB** | Data tagged by time | Monitoring sensor streams or model drift logs. |
| **Graph DB** | Nodes and edges | Social network relationships or recommendation paths. |
| **Search Engine (Elasticsearch)** | Full‑text indexed documents | Retrieving relevant text for NLP pipelines. |
| **Object Storage (S3, GCS)** | Large binary blobs | Storing raw images, audio, or model checkpoints. |
| **Data Lake** | Raw, unprocessed files in a bucket | Central repository before cleaning and modeling. |
| **In‑Memory Store (Redis, Memcached)** | Volatile fast cache | Serving predictions with sub‑millisecond latency. |
| **Distributed SQL (CockroachDB, Spanner)** | Scalable relational data | Enterprise ML pipelines needing global consistency. |
| **Hybrid OLAP** | Multidimensional cubes | Fast aggregation for business intelligence dashboards. |
| **Geospatial DB** | Spatial indexes and shapes | Location‑based feature engineering. |
| **Embedded DB (SQLite)** | Lightweight local storage | Edge devices or offline training on a laptop. |

Just as you’d pick a hammer for nails, choose the database that matches your data shape, speed needs, and consistency requirements. That’s how ML teams keep their data organized and ready to learn.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
