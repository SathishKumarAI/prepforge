---
qid: ing_e502010327__star__local
question: 'Explain: Mapping — Mapping | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 336
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:05:45-05:00'
sources: []
---

**Situation:**  
In a product‑analytics platform we had to ingest 15 M click‑stream events per day into Elasticsearch for real‑time dashboards. The raw JSON payloads varied: some users had “utm_source” as a string, others sent it as an array; the timestamp field was in ISO format or epoch milliseconds.

**Task:**  
Design a robust index mapping that would allow fast aggregations on `user_id`, `event_type`, and time‑range queries while preventing data duplication or incorrect type errors during bulk ingestion.

**Action:**  
I drafted a dynamic template with explicit field types:  
- `timestamp` mapped as `date` with `epoch_millis` format.  
- `utm_source` defined as `keyword` but also added an ingest pipeline that normalizes array values into a single string.  
- Used `ignore_above` on keyword fields to avoid exploding the index size.  
Then I created a dedicated “events” index template, enabled field‑data for numeric aggregations, and set up rollover policies to keep hot indices under 500 GB. I tested with 1 M synthetic documents; ingestion throughput hit 3k docs/sec without mapping conflicts.

**Result:**  
The new mapping eliminated 98% of ingest errors, cut query latency on time‑series visualizations from 2.5 s to 0.8 s, and reduced disk usage by ~30%. I learned that thoughtful mapping, coupled with ingest pipelines, is key to balancing flexibility and performance in real‑time analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
