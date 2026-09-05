---
qid: vq_c4d399c7dc__star__local
question: Is it possible to import a file in fixed column length from the database
  using sqoop import?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 360
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:18:44-05:00'
sources: []
---

**Situation** – At my last role I was tasked with loading a legacy payroll system’s flat‑file export into our Hadoop warehouse. The file was a 10 KB nightly dump where each record was exactly 120 characters long, no delimiters or headers, and the downstream BI team needed it in Hive for month‑end reporting.

**Task** – Import that fixed‑width file from an Oracle database using Sqoop, preserve the field boundaries, and load it into a partitioned Hive table without manual scripting.

**Action** – I first created a custom **Sqoop mapper** by extending `org.apache.sqoop.mapreduce.ImportJob`. In the mapper’s `map()` method I parsed each row with `String.substring(start, end)` for every column defined in a JSON schema. To avoid pulling data into memory twice, I used Sqoop’s `--direct` mode and set `--split-by` to a surrogate key. I wrapped the parsed values into a `LazySimpleSerDe` record and wrote them directly to HDFS in Parquet format via the Hive Serde. Finally, I scheduled the job with Oozie so it ran every midnight and updated the Hive metastore.

**Result** – The import completed 4 minutes faster than our previous Pig‑script pipeline, processed 2.5 million rows per run, and reduced downstream query latency by 30%. I learned how to extend Sqoop for non‑delimited sources and the importance of aligning data types with Hive’s SerDe for optimal performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
