---
qid: ing_593382ebf7__faang__local
question: 'Explain: Stage 2: Separate Database (10K-100K users)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 602
total_tokens: 841
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:11:22-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *Stage 2* of a ML‑driven product pipeline: “Separate Database (10K–100K users).”  
Assumptions I’d confirm:  
- The database is dedicated solely for model training data (user features, labels, etc.).  
- It must support 10k–100k active users with realistic ingestion rates.  
- Latency and throughput requirements are moderate (batch‑like processing).  

**Approach**  
1. **Define schema & partitioning strategy** to keep read/write fast.  
2. **Choose storage engine** that balances consistency, scalability, and cost.  
3. **Set up ETL pipelines** from operational DB → feature store.  
4. **Implement access controls & monitoring** for data integrity.  

**Depth**  
- *Schema*: Normalized tables (Users, Sessions, Events) plus a denormalized Feature table keyed by `user_id`. Use JSONB or Parquet for sparse features.  
- *Partitioning*: Range partition on `created_at` + hash on `user_id`; this gives even load and enables time‑based pruning.  
- *Storage Engine*: PostgreSQL (or Aurora Postgres) for ACID guarantees; alternatively, Snowflake or BigQuery for cost‑effective analytics at scale.  
- *ETL*: Kafka → Spark Structured Streaming → Feature Store. Compute rolling aggregates (e.g., last 30 days engagement). Persist to the DB in micro‑batches.  
- *Indexing*: B‑tree on `user_id`; GIN index on JSONB for quick lookups.  
- *Scalability*: Scale read replicas horizontally; use connection pooling.  
- *Cost*: Leverage reserved instances or spot pricing for compute, and tiered storage (e.g., S3 Glacier) for archival data.  

**Edge Cases**  
- Sudden spike in writes → backpressure on Kafka → buffer overflow. Test burst scenarios.  
- Data drift: feature schema changes; need migration scripts that preserve old columns.  
- User deletion requests: GDPR “right to be forgotten.” Ensure cascading deletes and audit logs.  

**Optimize & Communicate**  
- **Performance**: Benchmark query latency (<50 ms for 95th percentile). Use explain plans to spot slow scans.  
- **Reliability**: Replication factor ≥3, automated failover.  
- **Observability**: Log query metrics, alert on increased error rates.  

Narrate the reasoning by walking through each decision point—why we pick Postgres over NoSQL (consistency + relational features), why Kafka for buffering, and how partitioning keeps the system responsive as users grow from 10k to 100k. Highlight trade‑offs (cost vs. latency) and justify with typical FAANG metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
