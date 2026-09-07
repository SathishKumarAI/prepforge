---
qid: ing_c5dd7fdbbb__faang__local
question: 'Explain: Database Design — How to Ace System Design Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 540
total_tokens: 774
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:21:05-05:00'
sources: []
---

**Clarify**  
You’re being asked how a data‑engineer or ML practitioner can design a database that supports high‑throughput training and inference workloads. Confirm the scale (millions of rows? petabytes?), latency goals for read/write, consistency needs, and whether the schema is static or evolving.

**Approach**  
1. Identify *core entities* (users, models, datasets, experiments).  
2. Decide on a *storage layer*: relational RDBMS for ACID ops + metadata; object store (S3/Blob) for raw data; NoSQL (Cassandra/Dynamo) for fast key‑value lookups of model checkpoints.  
3. Model *relationships* with foreign keys or denormalized tables where joins would be expensive.  
4. Plan *partitioning/sharding*: hash‑shard by user/model id, time‑based partitions for logs.  
5. Add *indexes* on frequently queried columns (e.g., model_id, status).  
6. Design a *schema evolution* strategy: use migration tools and keep backward compatibility.

**Depth**  
- **Relational**: PostgreSQL with partitioned tables; WAL archiving for point‑in‑time recovery.  
- **Object Store**: Store raw datasets as Parquet + checksum.  
- **Checkpoint Store**: Use S3 + DynamoDB to map checkpoint keys to metadata (size, last updated).  
- **Caching**: Redis for hot experiment configs.  
- **Consistency**: Strong consistency on metadata, eventual consistency on checkpoints is acceptable.

Complexity: CRUD ops O(log n) due to indexes; sharding adds O(1) lookups. Trade‑off between normalization (data integrity) and denormalization (speed).

**Edge Cases**  
- Rapid schema changes → migration downtime.  
- Burst writes during model training → hot spot on a shard.  
- Data loss if checkpoint metadata falls out of sync with object store.

**Optimize & Communicate**  
- Benchmark read/write latencies; tune partition keys to avoid hotspots.  
- Use automated backups and multi‑region replication for durability.  
- Explain trade‑offs: “We chose DynamoDB for checkpoints because write throughput is critical, but we accept eventual consistency since the training job will reread if needed.”  

Narrate your design as a flow: ingestion → metadata RDBMS → object store → checkpoint DB → cache, highlighting how each component meets ML lifecycle requirements. This demonstrates structured thinking and depth expected at FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
