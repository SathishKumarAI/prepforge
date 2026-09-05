---
qid: vq_5dbf754d32__star__local
question: What do you know about SequenceFileFormat?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 364
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:00:46-05:00'
sources: []
---

**Situation** – At my previous employer I was tasked with building a nightly ingestion pipeline for click‑stream data that fed into our recommendation engine. The raw logs were over 30 GB per day, and we needed to reduce storage costs while keeping query latency under 2 s.

**Task** – Convert the unstructured log files into an efficient, splittable format that could be consumed by Spark without expensive deserialization, all within a 4‑hour maintenance window.

**Action** – I chose Hadoop’s SequenceFileFormat because it stores key/value pairs in a compressed binary form and supports block‑level compression (BZip2). I wrote a MapReduce job that read the raw logs, parsed each line into a `Text` key (user ID) and a custom `Writable` value (click event struct). Using `SequenceFileOutputFormat`, I configured 128 MB blocks and set the compression type to `BLOCK`. I also added an index file by enabling SequenceFile’s “split‑aware” feature, which allowed Spark to skip irrelevant partitions during reads. After testing on a staging cluster, I scheduled the job in Airflow to run nightly.

**Result** – Storage space dropped from 30 GB to 12 GB per day (60 % savings). Spark jobs that previously took ~10 s now finish in <2 s, and the index enabled us to query user sessions with a 4× reduction in shuffle data. I learned that choosing the right file format and tuning block size can dramatically improve both cost and performance in large‑scale data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
