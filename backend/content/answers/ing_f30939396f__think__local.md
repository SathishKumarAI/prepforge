---
qid: ing_f30939396f__think__local
question: 'Explain: Sources — Databricks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 484
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:03:28-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   *Identify what “Sources” means here – the data inputs that a Databricks notebook or job consumes (files, tables, streaming topics, etc.). Assume the audience knows basic Spark but not all Databricks‑specific connectors.  

**2️⃣ Adopt a layered mental model**  
   *Start with the high‑level architecture: Data Lake ↔ Databricks → Delta Lake ↔ downstream services.*  
   *Map each source type to its place in that flow (e.g., raw S3 objects, Kafka streams, JDBC tables).  

**3️⃣ Step‑by‑step reasoning**  
   1. List the common source categories: flat files, relational DBs, streaming topics, APIs.  
   2. For each, explain how Databricks reads it—`spark.read.format("csv")`, `spark.readStream.format("kafka")`, etc.—and why that format matters (schema inference, partitions).  
   3. Highlight the role of *Databricks Connectors* (e.g., Azure Blob, AWS S3, GCS) and how they hide authentication details.  
   4. Show how Delta Lake can act as a source for downstream jobs by being queried like any table.  

**4️⃣ Avoid common traps**  
   • Don’t conflate “source” with “sink”; stress that sources are read‑only in the job context.  
   • Beware of implying every file is auto‑partitioned; explain manual partitioning when needed.  
   • Don’t overpromise real‑time for batch‑style sources—clarify event‑time vs ingestion time.  

**5️⃣ Sanity‑check & verbalize**  
   *Re‑read the explanation to ensure each source type is linked to its connector, format, and typical use case.*  
   *Speak it out loud: “In Databricks we treat any external data—whether a CSV in S3 or a Kafka topic—as a source by loading it into a Spark DataFrame using the appropriate `.read` API. That DataFrame can then be written to Delta for downstream consumption.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
