---
qid: ing_9edb27e617__star__local
question: 'Explain: Forces — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 338
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:49:52-05:00'
sources: []
---

**Situation**  
At a fintech startup I was leading the migration of our fraud‑detection microservice from a monolithic stack to a containerized architecture. The service had been using a shared PostgreSQL database with all other analytics modules, which caused contention and made it hard to scale the ML inference pipeline.

**Task**  
I needed to isolate the fraud‑detection data layer, reduce cross‑service latency, and enable independent scaling while preserving data consistency for real‑time model predictions.

**Action**  
1. Designed a dedicated NoSQL store (Cassandra) per service, partitioning by user ID to keep write throughput high.  
2. Implemented a lightweight event bus (Kafka) to stream transaction logs from the main application into the fraud database in near real time.  
3. Built an async ETL job that materialized feature tables for the ML model, using Spark on Kubernetes, and stored them in the same Cassandra keyspace to avoid cross‑service joins.  
4. Added a read‑replica cluster with CQL queries tuned for low latency (< 20 ms) inference requests.

**Result**  
The new pattern cut prediction latency by 35%, reduced database lock contention by 70%, and allowed us to scale the fraud service independently, saving $120k/month in cloud resources. I learned that coupling a dedicated data store with event‑driven replication can dramatically improve both performance and maintainability for ML microservices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
