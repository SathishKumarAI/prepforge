---
qid: ing_156c10ebe2__think__local
question: 'Explain: Data Model — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 448
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:08:16-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - Confirm “Data Model” means designing a data schema or storage strategy for a ML pipeline (e.g., feature store, model registry).  
   - Assume interviewers want you to discuss trade‑offs: relational vs NoSQL, batch vs streaming, schema evolution.  

**2️⃣ Adopt the “System Design → ML‑Specific” framework**  
   1. *Problem scope*: What ML problem? (classification, recommendation, forecasting).  
   2. *Data sources & volume*: Batch ingestion from logs, real‑time telemetry.  
   3. *Core entities*: Features, feature groups, model artifacts, experiment metadata.  
   4. *Storage choice*: RDBMS for transactional consistency vs columnar store (Parquet) for analytics; object storage for raw blobs.  

**3️⃣ Reason step‑by‑step**  
   - Map each entity to a table/collection; define keys, indexes, partitioning.  
   - Decide on schema evolution strategy: versioned tables or append‑only logs.  
   - Design APIs for feature read/write (e.g., REST/GRPC).  
   - Consider caching layers (Redis) for low‑latency feature lookup.  
   - Add monitoring: lineage tracking, data quality checks, audit logs.  

**4️⃣ Avoid common traps**  
   - Don’t over‑optimize early; start with a simple schema then iterate.  
   - Forget to model *metadata* (feature stats, source version).  
   - Assume all data fits in memory—plan for sharding/partitioning.  

**5️⃣ Sanity‑check & verbalize**  
   - Walk through an end‑to‑end request: ingest → feature extraction → serve to model.  
   - Ask “What happens if a new feature is added?” or “How do we handle schema drift?” to demonstrate robustness.  

This structured, trade‑off‑aware approach shows you can design a scalable, maintainable data model for ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
