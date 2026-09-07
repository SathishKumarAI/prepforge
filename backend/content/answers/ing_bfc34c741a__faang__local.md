---
qid: ing_bfc34c741a__faang__local
question: 'Explain: Database Choice — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 436
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:08:04-05:00'
sources: []
---

**Clarify**  
The interviewer asks how one selects a database when preparing for a system‑design interview.  
Assumptions: we’re designing an online ML platform (training jobs, feature store, model registry) that must handle high write throughput, real‑time queries, and eventual consistency.

**Approach**  
1. **Identify data types & access patterns** – structured metadata vs large binary blobs, read‑heavy analytics vs write‑heavy ingestion.  
2. **Map workloads to database families** – relational for ACID constraints, NoSQL (key–value/column) for scalability, graph for relationships.  
3. **Consider operational trade‑offs** – CAP theorem, latency goals, cost, and team expertise.

**Depth**  
- *Relational* (PostgreSQL/MySQL): use for model metadata, user accounts; supports joins, transactions, strong consistency.  
- *Document/Column* (Cassandra, Bigtable): store feature vectors and training logs; offers linear scalability, tunable consistency.  
- *Object Store* (S3, GCS): hold large tensors or checkpoints; cheap, highly available, eventual consistency is acceptable.  
- *Search Engine* (Elasticsearch): enable quick retrieval of models by tags or metrics.  
Use a polyglot persistence pattern: each component speaks the database that best fits its workload.

**Edge Cases**  
- Sudden spike in training jobs → need hot‑partition handling; Cassandra’s partition key design mitigates this.  
- Schema evolution for feature store → use a schema‑on‑read approach or versioned tables.  
- Cross‑region consistency when deploying globally → leverage read replicas with read/write splits.

**Optimize & Communicate**  
Explain that the chosen stack balances latency, throughput, and developer productivity. Mention monitoring (Prometheus), automated sharding, and backup strategies. Conclude by stressing that a thoughtful database selection reduces future refactoring and aligns with FAANG’s emphasis on scalable, maintainable systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
