---
qid: vq_063be31e3d__eli5__local
question: What are the different file formats in Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 251
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:01:23-05:00'
sources: []
---

Think of Hive as a giant library where each book (table) can be written in different “paper types.”  
The most common paper types are:

* **TextFile** – plain, one‑line‑per‑record sheets that anyone can read but can be slow to scan.  
* **SequenceFile** – pairs of keys and values glued together; faster for MapReduce jobs because the data is already split into blocks.  
* **RCFile (Row‑Column File)** – a mix of rows and columns on the same page, so you can jump straight to the columns you need without reading every row.  
* **Parquet** – a column‑wise “stacked” paper that compresses well; great for big analytics where you read only some columns.  
* **ORC (Optimized Row Columnar)** – similar to Parquet but with extra compression tricks and built‑in checksums, making it super fast for Hive queries.

Just pick the paper type that matches how you’ll use the data—plain text for quick prototyping, columnar formats for heavy analysis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
