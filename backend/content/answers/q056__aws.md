---
qid: q056
question: "What is the difference between structured, semi-structured, and unstructured data?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

I'd keep this crisp and tie it to **Invent and Simplify**: matching storage to data shape keeps systems simple and cheap. Structured data has a fixed schema in rows and columns, like transactional tables, and lives naturally in Redshift or RDS with SQL. Semi-structured data has tags or keys but flexible structure, like JSON, Parquet, or logs; it fits S3 plus Athena or a document store, schema-on-read. Unstructured data, images, audio, free text, PDFs, has no inherent schema and lands in S3, processed with ML or embeddings.

The insight I add is that the boundary is really about how much schema is enforced and when. I'd give a concrete example: I stored raw clickstream as semi-structured JSON in S3, queried it with Athena for exploration, then modeled the useful fields into structured Redshift tables for BI, a lake-plus-warehouse pattern that balanced flexibility and query speed while controlling cost. That last point matters for **Frugality**: unstructured lakes on S3 are far cheaper than forcing everything into a warehouse. A bar-raiser listens for whether you map data type to the right storage and query engine with cost and access patterns in mind, not just recite definitions.
