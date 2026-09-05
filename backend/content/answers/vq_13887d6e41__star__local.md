---
qid: vq_13887d6e41__star__local
question: How can I import large objects (BLOB and CLOB objects) in Apache Sqoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 411
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:48:53-05:00'
sources: []
---

**Situation:**  
At a financial services client I was tasked with migrating the legacy Oracle data warehouse into Hadoop for real‑time analytics. The schema included several large BLOB (PDF statements) and CLOB (customer notes) columns, each up to 50 MB, which were blocking our initial Sqoop imports because the default `--fetch-size` caused memory exhaustion on the mapper nodes.

**Task:**  
I needed to design a robust Sqoop import pipeline that could handle these large objects without blowing out YARN containers or exceeding Oracle’s session limits, while still keeping the overall job runtime under 4 hours for a 5‑TB dataset.

**Action:**  
1. I switched from the default `--direct` mode to JDBC mode and used `--split-by` on a surrogate key so each mapper handled a manageable chunk of rows.  
2. Added `--max-mappers 8` and set `--fetch-size 1000` to reduce Oracle round‑trips.  
3. Leveraged Sqoop’s `--as-avrodatafile` option with Avro schema evolution, which automatically streams BLOB/CLOB as binary/text fields without loading them fully into memory.  
4. Implemented a custom Java mapper that used `ResultSet.getBinaryStream()` and `getCharacterStream()` to write directly to HDFS via the Hadoop FileSystem API, thus streaming data out of memory.

**Result:**  
The import completed in 3 hours 45 minutes with an average throughput of 12 GB/h. All BLOB/CLOB contents were preserved intact, verified by checksum comparison. I learned that streaming large objects directly to HDFS and tuning fetch size are critical for scalable Sqoop jobs, and that the Avro format simplifies downstream consumption in Hive/Impala.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
