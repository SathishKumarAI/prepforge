---
qid: ing_4c2f5e1f1f__star__local
question: 'Explain: Relational Model — SQL vs NoSQL | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 329
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:00:36-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with redesigning the customer analytics pipeline for a mid‑size e‑commerce firm that had outgrown its legacy MySQL database. The new system needed to support real‑time recommendation scoring, while still handling historical cohort analysis.

**Task:**  
I had to decide between staying with a relational SQL store or moving to a NoSQL solution, ensuring data integrity for transactional records and flexibility for unstructured clickstream logs, all within a 3‑month deadline.

**Action:**  
I mapped the schema requirements: transactional orders required ACID guarantees; user sessions were semi‑structured and high‑velocity. I chose a hybrid approach—PostgreSQL for core tables (orders, inventory) with JSONB columns for optional attributes, and Apache Cassandra for session logs to exploit its wide‑row design and linear scalability. I implemented a Kafka pipeline that streamed session events into Cassandra and batched writes back to PostgreSQL via Debezium change data capture. For the recommendation engine, I leveraged materialized views in Postgres to precompute user‑item affinity scores, while Spark on YARN processed Cassandra data for feature extraction.

**Result:**  
The migration cut query latency for recommendation lookups from 350 ms to 45 ms and increased write throughput by 4×. Historical analytics queries ran 3× faster thanks to the materialized views. I learned that a relational‑plus‑NoSQL hybrid can provide both consistency and horizontal scaling when designed with clear data access patterns in mind.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
