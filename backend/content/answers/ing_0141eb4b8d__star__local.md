---
qid: ing_0141eb4b8d__star__local
question: 'Explain: Runtime fields — Mapping | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 322
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:30:58-05:00'
sources: []
---

**Situation**  
In a recent e‑commerce analytics platform upgrade, our data team was ingesting daily clickstream logs into an Elastic cluster that already had a heavy search workload. The new logs included a user agent string that we needed to parse on the fly for segmentation, but adding a static field in every document would bloat storage and slow writes.

**Task**  
I had to enable real‑time extraction of device type from the raw user agent without altering the existing index schema or impacting write throughput.

**Action**  
I introduced an Elastic runtime field via the `runtime_mappings` section. Using a Painless script, I parsed the `user_agent_raw` string during search time, mapping it to a virtual `device_type` field. I also added a simple keyword normalizer for consistent casing and set a default value so queries wouldn’t fail on missing data. The runtime field was defined once in the index template, so all future documents automatically benefited without reindexing.

**Result**  
Query latency dropped by 15 % because we avoided storing an extra field, and storage usage fell by ~200 MB per day—equivalent to saving a full shard. Analysts could now filter and aggregate on `device_type` instantly, improving reporting turnaround from hours to minutes. I learned that runtime fields are powerful for dynamic data transformations while keeping the index lean and write‑friendly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
