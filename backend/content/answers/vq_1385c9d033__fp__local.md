---
qid: vq_1385c9d033__fp__local
question: What format (JSON, Avro, Parquet)?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 482
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:23:45-05:00'
sources: []
---

### Choosing a storage format in data engineering

When you store terabytes of analytical data, the *goal* is two‑fold:

1. **Efficient compression & I/O** – fewer bytes on disk → cheaper storage and faster reads.
2. **Schema evolution & self‑describing semantics** – downstream jobs must decode without hard‑coding field positions.

#### JSON  
- **Why it exists:** human‑readable, no schema required; great for real‑time ingestion where structure may be unknown.  
- **What it gives you:** flexible nesting, but every value is a string or primitive with delimiters → 2–3× larger than binary.  
- **When to use:** lightweight APIs, log aggregation, or when downstream systems need raw text.

#### Avro  
- **Why it exists:** Apache’s answer to “self‑describing binary” – schema is stored in the file and can evolve.  
- **What it gives you:** column‑major serialization (but still row‑oriented), efficient compression via codecs, built‑in support for complex types.  
- **When to use:** streaming pipelines (Kafka/Confluent) or services that require strict schema validation.

#### Parquet  
- **Why it exists:** columnar storage designed for analytical workloads; each column is compressed independently and stored in blocks.  
- **What it gives you:** remarkable speed on SELECT‑heavy queries because only needed columns are read, even within a file block.  
- **When to use:** data lakes or warehouses (Hive, Spark, Presto) where large scans dominate.

#### Non‑obvious insight  

All three formats trade *row‑oriented* vs *column‑oriented* access patterns. The key principle is that **compression and read locality are maximised when the storage layout matches the query pattern**. If you anticipate heavy filtering on a few columns, Parquet’s block compression will win; if you need to emit data verbatim for downstream services, Avro keeps the schema in sync without extra glue code.

So:  
- **Logs & APIs → JSON** (human‑readable).  
- **Streaming ingestion with strict schema → Avro**.  
- **Batch analytics & OLAP → Parquet**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
