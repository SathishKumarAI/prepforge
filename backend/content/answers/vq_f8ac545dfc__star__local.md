---
qid: vq_f8ac545dfc__star__local
question: What types of transformations do we perform in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 366
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:27:26-05:00'
sources: []
---

**Situation** – In my last role I was tasked with cleaning and enriching a 12‑TB clickstream dataset for a real‑time recommendation engine. The raw logs were messy: missing fields, duplicate sessions, and mixed time zones.

**Task** – My goal was to transform the data into a tidy, partitioned Parquet table that could be queried by downstream analytics within an hour of ingestion, while keeping memory usage under 32 GB on our Spark cluster.

**Action** – I first applied *map* and *flatMap* to parse each JSON line into a case class, expanding nested arrays of events. Then *filter* removed malformed records and duplicates using a combination of `dropDuplicates` on session IDs. To standardize timestamps I used a UDF with Spark SQL’s `to_timestamp`, followed by a *window* transformation for daily aggregates. For the heavy join between user profiles and click logs, I broadcasted the smaller profile table to avoid shuffles. Finally, I employed *groupByKey* with `agg` to compute per‑user metrics and wrote the result as Parquet using *coalesce(200)* to balance partition size.

**Result** – The pipeline processed 12 TB in under 45 minutes, reduced storage by 35% through compression, and cut query latency from 15 s to <3 s. I learned that choosing the right transformation (broadcast join vs shuffle) can make a huge difference in both performance and resource consumption.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
