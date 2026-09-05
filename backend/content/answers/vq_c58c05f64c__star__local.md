---
qid: vq_c58c05f64c__star__local
question: What are the complex data types in Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 300
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:18:52-05:00'
sources: []
---

**Situation** – In my last role, our analytics team was pulling quarterly sales reports from a raw data lake into Hive for downstream BI tools. The source schema included nested JSON objects: each transaction had an array of line items and a map of product attributes that were changing frequently.

**Task** – I needed to design a Hive table that could ingest this data efficiently, preserve the hierarchy, and allow quick ad‑hoc queries without exploding storage costs.

**Action** – I created a partitioned external table using **struct**, **array**, and **map** types:  
- `transaction STRUCT<id:string, items:ARRAY<STRUCT<sku:string, qty:int>>, attrs:MAP<string,string>>`.  
I leveraged Hive’s built‑in SerDe (`org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe`) with a JSON input format and added a custom UDF to flatten the `attrs` map into key/value pairs for reporting. I also tuned the vectorized query engine and set `hive.exec.compress.output=true` to reduce disk usage.

**Result** – Query latency dropped from 12 minutes to under 45 seconds on average, and storage savings of ~30% were achieved. I learned how to balance schema flexibility with performance by carefully selecting complex types and tuning Hive’s execution engine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
