---
qid: vq_4090e1b716__faang__local
question: Is the data structured, semi-structured, or unstructured?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 385
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:07:11-05:00'
sources: []
---

**Clarify**  
The interview asks you to categorize a dataset as *structured*, *semi‑structured*, or *unstructured*. Confirm the context: Is it a single file, a stream, or a collection of logs? What schema (if any) is present? Knowing whether keys/fields exist will shape your answer.

**Approach**  
1. Identify explicit schema → **Structured**.  
2. Detect key/value pairs or tags but no rigid schema → **Semi‑structured**.  
3. Raw text, images, audio/video with no consistent delimiters → **Unstructured**.

**Depth**  
- *Structured*: tabular data in relational tables or CSVs; fixed columns, datatypes, constraints.  
- *Semi‑structured*: JSON, XML, Avro, Parquet; hierarchical but optional fields, schema evolution supported by tools like Hive/Hudi.  
- *Unstructured*: free‑form text logs, PDFs, images, sensor streams; require NLP/ML or feature extraction before analytics.

**Edge Cases**  
- Mixed formats (e.g., JSON inside a CSV) → treat as semi‑structured but note nested parsing.  
- Evolving schema in “semi‑structured” can drift toward unstructured if key patterns become arbitrary.  
- Binary blobs with metadata may be semi‑structured if the wrapper provides tags.

**Optimize & Communicate**  
Explain trade‑offs: structured data offers fast joins and ACID guarantees; semi‑structured balances flexibility and queryability via schema‑on‑read engines; unstructured demands preprocessing but unlocks richer insights. Conclude by recommending appropriate storage (RDBMS, NoSQL, object store) and processing frameworks (Spark, Flink, ElasticSearch) based on the classification.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
