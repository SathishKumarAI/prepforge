---
qid: ing_d75a08b33e__star__local
question: 'Explain: Read requests — Data streams | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 359
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:39:37-05:00'
sources: []
---

**Situation**  
At my previous role we had a real‑time analytics dashboard for an e‑commerce platform that needed to surface product view counts within seconds of each click. The existing batch ETL pipeline was too slow – updates lagged up to 10 minutes, which hurt A/B testing accuracy.

**Task**  
I was tasked with redesigning the ingestion and query layer so we could push click events into Elasticsearch in near real‑time while keeping query latency under 200 ms for a million‑document index.

**Action**  
I switched from bulk uploads to Elastic Streams. I set up a Kafka topic as the source, then used the Logstash “stream” plugin to pipe each click record directly into an Elasticsearch data stream. I defined an ingest pipeline that parsed the JSON, added a `timestamp` field and enriched it with user‑agent parsing. To keep storage efficient, I configured rollover policies to archive older shards after 7 days and deleted them after 30 days. On the query side, I leveraged the `_search/scroll` API for aggregation dashboards and created an index template that set up a `docvalue_fields` mapping for fast numeric aggregations.

**Result**  
Query latency dropped from ~1.2 s to <180 ms, while ingestion throughput exceeded 50k events/sec with zero data loss. The dashboard now refreshes every 5 seconds, enabling real‑time decision making. I learned how Elastic Streams can replace heavy batch pipelines and the importance of proper rollover/delete policies for long‑term cost control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
