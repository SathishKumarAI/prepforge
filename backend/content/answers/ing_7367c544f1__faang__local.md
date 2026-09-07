---
qid: ing_7367c544f1__faang__local
question: 'Explain: Listen to: ''What is a data architecture?'''
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 515
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:12:32-05:00'
sources: []
---

**Clarify**  
*Question*: “Explain: *Listen to*: ‘What is a data architecture?’”  
Interpretation: The interviewee should describe the concept of **data architecture**, its purpose in ML pipelines, and how it supports reliable model development. I’ll assume the audience knows basic ML terms but not enterprise data design.

**Approach**  
1. Define data architecture in the context of ML.  
2. Break down its core components (sources, ingestion, storage, processing, governance).  
3. Explain how each component enables reproducible, scalable models.  
4. Touch on trade‑offs (batch vs stream, relational vs NoSQL).  

**Depth**  
Data architecture is a blueprint that specifies **how data moves, transforms, and lives** from raw capture to model consumption.  
- **Sources & Ingestion**: APIs, IoT streams, batch files; use Kafka/Flink for real‑time, Airflow/DBT for batch.  
- **Storage**: Lakehouse (Delta/Snowflake) combines raw lake with structured tables, enabling ACID ops and schema evolution.  
- **Processing & Feature Store**: Spark/Beam compute features; feature store (e.g., Feast) caches them for training/inference with versioning.  
- **Governance & Security**: Catalogs (DataHub), lineage, access control (LakeFS).  
- **Serving Layer**: Model‑ready datasets exposed via REST or streaming endpoints.  

This design yields *reproducibility* (same feature set across experiments) and *scalability* (elastic compute/storage). Trade‑offs: a relational warehouse gives strong consistency but slower for high‑velocity data; a lakehouse mitigates this with schema‑on‑read.

**Edge Cases**  
- Mixed‑data formats → enforce schema enforcement.  
- Data drift → continuous monitoring in the feature store.  
- Privacy constraints → differential privacy layers before ingestion.

**Optimize & Communicate**  
I’d emphasize that a well‑engineered data architecture turns messy raw logs into a single source of truth for ML, reducing “garbage‑in” errors and speeding time‑to‑model. I’d narrate the flow from ingestion to inference, highlighting how each layer solves a specific pain point (latency, governance, reproducibility). This showcases structured thinking, depth, and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
