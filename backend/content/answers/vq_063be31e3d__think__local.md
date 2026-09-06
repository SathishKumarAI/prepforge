---
qid: vq_063be31e3d__think__local
question: What are the different file formats in Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 401
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:06:07-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**  
   - Confirm “file formats” refers to *storage formats* Hive can read/write (e.g., TextFile, Parquet).  
   - Assume the user wants a concise list for typical Hadoop/Hive use‑cases; not every obscure format.  

**2️⃣ Mental model / framework**  
   - Think of Hive as a query layer over HDFS.  
   - File formats fall into two categories: *row‑oriented* (text, csv) and *columnar/serialization* (Parquet, ORC).  
   - Remember that some are built‑in, others need external libraries.

**3️⃣ Step‑by‑step reasoning**  
   1. Start with the default – `TextFile`.  
   2. Add common delimited formats (`CSV`, `TSV`).  
   3. Include binary/serialization types (`RCFile`, `SequenceFile`).  
   4. Bring in modern columnar options (`Parquet`, `ORC`).  
   5. Mention optional or legacy ones (`Avro` as a storage format, not just schema).  

**4️⃣ Common traps to avoid**  
   - Don’t mix *serialization formats* (e.g., Avro) with *storage layouts* unless you clarify they’re both usable in Hive.  
   - Avoid listing every Hadoop `SequenceFile` variant; keep it focused on what Hive directly supports via SerDe.  

**5️⃣ Sanity‑check & communicate**  
   - Recount the list aloud, checking each format’s purpose (text vs columnar).  
   - Ensure you cover both built‑in and externally supported ones.  
   - End with a quick note that selecting the right format depends on query patterns and data size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
