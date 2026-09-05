---
qid: ing_5c2d3fcf8e__star__local
question: 'Explain: So what you could use is a — Database Design Tips | Choosing the
  Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 399
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:31:48-05:00'
sources: []
---

**Situation:** In my last role I was tasked with building an online recommendation engine that served real‑time personalized content to millions of users. The data pipeline had to ingest clickstream logs, store user profiles and item metadata, and support low‑latency queries for the inference layer.

**Task:** My goal was to choose a database architecture that could handle high write throughput from the ingestion service, provide fast reads for the recommendation engine, and scale horizontally without breaking consistency guarantees required by our ML models.

**Action:** I first benchmarked three options: PostgreSQL (relational), Cassandra (wide‑column NoSQL), and Redis Streams combined with a columnar analytics store. I modeled the workload in pgbench and Cassandra’s CQL for write amplification, then measured read latency from the inference layer using JMeter. After evaluating trade‑offs—PostgreSQL’s ACID guarantees vs. Cassandra’s linear scalability—I decided on a hybrid approach: use Apache Kafka as a durable log, stream events into an Elasticsearch index for real‑time search and a Snowflake warehouse for batch analytics. The recommendation engine queried Elasticsearch via REST for sub‑100 ms latency, while the offline training pipeline pulled from Snowflake.

**Result:** We achieved 10× faster query response times compared to our previous monolithic database, reduced operational costs by 30% through efficient scaling, and maintained data consistency required for model retraining. This experience taught me that in system design interviews, mapping real‑world workloads to the right mix of databases—and clearly articulating the trade‑offs—demonstrates both technical depth and practical judgment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
