---
qid: ing_45ed87b3b8__faang__local
question: 'Explain: Now normally the choice of database depends'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 523
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:26:26-05:00'
sources: []
---

**Clarify**  
The interview asks how we decide which type of database (SQL, NoSQL, graph, time‑series, etc.) is appropriate for a machine‑learning workload. I’ll assume the goal is to store training data, feature tables, model metadata, and inference logs, with requirements around read/write latency, schema flexibility, scalability, and analytics.

**Approach**  
1. Identify core workloads: bulk ingestion of raw data, fast random reads for features, analytical queries on labels/metrics, and eventual consistency for model registry.  
2. Map each workload to database strengths (relational for ACID & joins; NoSQL for high write throughput; column‑store for analytics).  
3. Evaluate trade‑offs: latency vs consistency, schema evolution vs query complexity, operational overhead.

**Depth**  
- **Relational (PostgreSQL/MySQL)**: ideal for feature tables that need strong consistency and complex joins between entities (e.g., user × transaction). ACID guarantees help avoid dirty reads during training.  
- **Wide‑column (Cassandra/ScyllaDB)**: excellent for high‑velocity ingestion of raw logs or telemetry; schema‑flexible to accommodate evolving features, with tunable consistency.  
- **Document (MongoDB)**: useful when feature vectors are semi‑structured and vary per user; supports aggregation pipelines for quick exploratory analysis.  
- **Graph (Neo4j/JanusGraph)**: fits relational patterns that are naturally graphy (social networks, recommendation graphs). Enables traversal queries to pull multi‑hop features.  
- **Time‑series (InfluxDB, TimescaleDB)**: best for monitoring model performance metrics and drift detection; native down‑sampling and retention policies reduce storage cost.

**Edge Cases**  
- *Real‑time inference*: low latency may favor in‑memory stores or embedding indexes.  
- *Large feature vectors (>1 GB)*: column‑store or object store (S3) with metadata in a relational DB.  
- *Schema evolution*: NoSQL handles it gracefully; SQL requires migrations that can be costly.

**Optimize & Communicate**  
I’d recommend a hybrid architecture: use a relational DB for core feature tables, Cassandra for raw event ingestion, and TimescaleDB for monitoring metrics. This balances consistency, scalability, and analytic capability while keeping operational complexity manageable. I’ll explain the reasoning step‑by‑step to keep interviewers engaged.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
