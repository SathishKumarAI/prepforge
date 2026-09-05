---
qid: vq_a60128ef4c__star__local
question: How to find a word in a log file by using pyspark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 354
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:13:09-05:00'
sources: []
---

**Situation** – In my last role I was tasked with auditing a distributed logging system that generated over 10 GB of raw text per day across 12 shards. One day an incident report mentioned “unauthorized access” but the exact keyword wasn’t in our monitoring dashboards, so we had to dig through the logs manually.

**Task** – Quickly locate every occurrence of the word “suspicious” (case‑insensitive) and return a timestamped list for forensic analysis, all within a 4‑hour window before the incident could impact production.

**Action** – I spun up an EMR cluster with Spark 3.2, loaded the raw logs into an RDD using `sc.textFile("s3://logs/2023-07/*")`, then applied a map–filter pipeline:  
```python
log_rdd.filter(lambda line: "suspicious" in line.lower())
       .map(lambda line: (extract_timestamp(line), line))
```
I persisted the filtered RDD, joined it with metadata from Hive to enrich each entry, and finally wrote the results back to S3 as a Parquet file for downstream analysts. To keep memory usage low I used `repartition(24)` and set `spark.sql.shuffle.partitions=48`.

**Result** – The job finished in 58 minutes, yielding 1,237 hits that were fed into our incident response playbook. We reduced investigation time by 70 % compared to manual grep passes. I learned how to balance Spark’s parallelism with memory constraints and the importance of naming conventions for log fields so regexes stay simple.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
