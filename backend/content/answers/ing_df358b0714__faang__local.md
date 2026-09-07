---
qid: ing_df358b0714__faang__local
question: 'Explain: Storage systems overview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 424
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:17:59-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise yet deep rundown of how ML workloads persist data—feature stores, model artifacts, training logs, and inference checkpoints. I’ll assume we’re talking about production‑grade systems that must support high throughput, low latency, and strong consistency for both batch and online use.

**Approach**  
1. Outline the three layers: *raw data ingestion → feature engineering → model persistence*.  
2. Map each layer to storage primitives (object stores, relational/NoSQL tables, time‑series DBs).  
3. Discuss trade‑offs: durability vs latency, schema evolution, and cost.

**Depth**  
- **Raw data & logs**: S3/Blob for immutable archives; HDFS or GCS for Hadoop‑style analytics.  
- **Feature stores**: Online (Redis, DynamoDB) for low‑latency serving; offline (Delta Lake on Parquet) for batch recompute.  
- **Model artifacts**: Artifact registry (MLflow, SageMaker Model Store) with version tags and metadata in a relational DB.  
- **Checkpointing & hyperparameter tuning**: Write to object store; use ACID guarantees where needed.  
Complexity is O(1) read for online features, O(log n) for checkpoint retrieval. Cost scales linearly with storage size but can be tiered (hot vs cold).

**Edge Cases**  
- Schema drift in feature tables → automated migration scripts.  
- Distributed training across regions → consistent versioning of models.  
- GDPR: enforce encryption at rest and audit logs.

**Optimize & Communicate**  
Highlight that a hybrid architecture—object store for bulk, NoSQL for hot features, relational for metadata—balances cost and latency. I’d explain how monitoring metrics (latency, read/write throughput) guide tiering decisions, and mention future‑proofing via serverless storage APIs to reduce operational overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
