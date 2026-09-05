---
qid: ing_64c587339e__eli5__local
question: 'Explain: Common Use-Cases: — 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 621
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:15:41-05:00'
sources: []
---

Imagine you’re a librarian who needs to decide where to shelve different kinds of books so people can find them fast. Each “book” is data, and each shelf type represents a database that suits that book’s shape and how often it changes.

1. **Relational (SQL)** – like a tidy library with shelves organized by genre and author; great for structured data that needs strong relationships.  
2. **Document (MongoDB, Couchbase)** – think of loose‑leaf binders where each page is a self‑contained story; perfect when items have varying fields.  
3. **Key–Value (Redis, DynamoDB)** – like a quick index card: you look up a key and instantly get the value; ideal for caching or session data.  
4. **Column‑Family (Cassandra, HBase)** – picture a filing cabinet with columns that can be added on the fly; good for wide tables and heavy reads.  
5. **Graph (Neo4j, JanusGraph)** – imagine a social network of people linked by friendships; excels at relationship queries.  
6. **Time‑Series (InfluxDB, TimescaleDB)** – think of a chronicle that records events every second; built for fast inserts and range queries over time.  
7. **Object‑Store (S3, Azure Blob)** – like a massive attic where you store pictures or videos without worrying about structure.  
8. **Search Engine (Elasticsearch, Solr)** – imagine a hyper‑powered index that can find any word in seconds; great for full‑text search.  
9. **Spatial/Geographic (PostGIS, GeoMesa)** – think of maps where you need to know distances and regions; perfect for location data.  
10. **In‑Memory (SAP HANA, VoltDB)** – like a whiteboard that can be rewritten instantly; used when speed trumps persistence.  
11. **Object‑Relational (SQLAlchemy ORM)** – a bridge between the tidy shelves and loose binders, letting you work with objects instead of tables.  
12. **Hybrid (Couchbase, Oracle Fusion)** – combines several shelf types in one place to avoid moving books around.  
13. **Multi‑Model (ArangoDB, OrientDB)** – a versatile library that lets you choose the best shelf for each book on the fly.  
14. **Distributed Ledger (Ethereum, Hyperledger)** – a public ledger where every page is copied across many libraries; used for immutable records.  
15. **Embedded (SQLite, Realm)** – like a pocket notebook inside a phone; ideal for local, lightweight apps.

By matching the “shape” of your data and how fast you need to read or write it to one of these shelves, you’ll keep information organized, accessible, and efficient—just as a good librarian keeps readers happy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
