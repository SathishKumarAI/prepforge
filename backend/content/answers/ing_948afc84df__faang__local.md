---
qid: ing_948afc84df__faang__local
question: 'Explain: So let''s if you want to track — Database Design Tips | Choosing
  the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 467
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:29:33-05:00'
sources: []
---

**Clarify**  
You’re asked to explain how you’d design a database layer for an ML‑driven system (e.g., tracking model metrics, feature store, experiment logs). Key assumptions:  
* Scale → millions of rows per day, low latency reads.  
* Consistency → eventual is fine for metrics; strong needed for feature lookups.  
* Schema flexibility → new features added over time.

**Approach**  
1. **Identify data domains** – experiment metadata, run logs, feature vectors, model artifacts.  
2. **Choose storage per domain** – relational (PostgreSQL) for ACID on experiment configs; column‑store (ClickHouse/BigQuery) for metrics aggregation; object store (S3) for large artefacts; vector DB (Pinecone/FAISS) for feature similarity queries.  
3. **Define schemas & indexes** – composite keys (`experiment_id, run_id`), time‑series partitioning, bloom filters on feature IDs.  
4. **Data ingestion pipeline** – Kafka → Debezium CDC or direct writes via gRPC; batch loads for large vectors.

**Depth**  
*Metrics*: Use ClickHouse with `time` and `model_id` primary keys; query cost ~O(log n).  
*Feature store*: Store dense vectors in Pinecone; retrieval latency <5 ms, supports k‑NN.  
*Experiment logs*: PostgreSQL JSONB columns for flexible schema, enforce foreign key to experiment table.

**Edge Cases**  
*Schema evolution* → add nullable columns, use migrations with downtime minimization.  
*Cold starts* → pre‑warm feature store indexes; cache hot features in Redis.  
*Data skew* → shard by hash of `experiment_id` to balance load.

**Optimize & Communicate**  
- **Horizontal scaling**: Shard ClickHouse and Pinecone nodes, use read replicas for PostgreSQL.  
- **Cost trade‑off**: Store only recent metrics in OLTP DB; archive older data to cheaper cold storage with lifecycle policies.  
Explain that this layered design balances consistency, performance, and cost while keeping the system extensible for new ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
