---
qid: ing_5dd84f35ab__faang__local
question: 'Explain: Physical data models — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 438
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:22:15-05:00'
sources: []
---

**Clarify**

The interview asks for an explanation of *physical data models* and the broader concept of *data architecture*.  
Assumptions:  
- Audience has basic ML/DB knowledge but not deep DBA background.  
- We should focus on how physical models fit into a production ML pipeline.

**Approach**

1. Define a data architecture as the blueprint that maps business requirements to storage & processing layers.  
2. Contrast logical vs. physical modeling.  
3. Show where physical models sit in an ML workflow (ETL, feature store, model serving).  
4. Touch on key design decisions and trade‑offs.

**Depth**

A **physical data model** is the concrete representation of tables, columns, indexes, storage formats, partitioning, and physical constraints that a DBMS will actually use. It translates the *logical* schema (entities, relationships) into machine‑readable objects.  
In an ML stack, the physical layer stores raw logs → ETL jobs transform them into feature tables in a data lake or warehouse. The model dictates read/write performance, compression, and query cost—critical for real‑time inference and batch training.  
Design choices: star vs. snowflake schemas, columnar (Parquet) vs. row‑store; OLAP cubes vs. graph stores; sharding/partitioning to support high‑velocity pipelines. Each choice balances latency, throughput, and storage costs.

**Edge Cases**

- Mixed workloads (OLTP + ML inference) may require separate physical models.  
- Schema evolution: adding a column can break downstream ML features if not backward compatible.  
- Partition pruning failures cause query slowness on cold data.

**Optimize & Communicate**

Explain that optimizing the physical model is an iterative process: monitor query plans, adjust indexes/partitioning, and revisit storage formats as data volume grows. Conclude by stressing that a well‑designed physical data architecture underpins scalable ML pipelines, reduces latency, and keeps costs predictable—key metrics for any FAANG product team.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
