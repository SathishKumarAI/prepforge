---
qid: vq_3b378279b0__star__local
question: How can you import large objects like BLOB and CLOB in sqoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 387
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:55:29-05:00'
sources: []
---

**Situation**  
At a telecom client I was tasked with migrating their legacy billing database (Oracle) into Hadoop for real‑time analytics. The billing tables contained massive CLOB fields holding JSON payloads and BLOB fields storing call recordings—each record could be 50 MB or more, which blew up the default Sqoop import job.

**Task**  
I needed to build a reliable, memory‑efficient pipeline that could pull these large objects into HDFS without corrupting data or exhausting cluster resources, while keeping the import time under 12 hours for a 30 GB dataset.

**Action**  
I leveraged Sqoop’s `--fetch-size` and `--split-by` options to tune JDBC fetching. For BLOBs I used the `--map-column-hive` flag to cast them to `binary`, then streamed them directly into HDFS using the `-D sqoop.hdfs.compress.codec=org.apache.hadoop.io.compress.SnappyCodec` setting to keep disk usage low. CLOBs were handled by adding a custom Mapper that read the `CLOB` stream and wrote it as UTF‑8 text files, ensuring we didn’t load the entire column into memory. I also split the job across 16 mappers, each processing a range of primary keys, and used Hive’s external tables to expose the data for downstream analysts.

**Result**  
The import completed in 10 hours, under the 12‑hour SLA, with 99.9% data integrity verified by checksum comparison. The pipeline now runs nightly, ingesting new billing records in real time, and I documented the tuning parameters so the team can scale to larger datasets without re‑engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
