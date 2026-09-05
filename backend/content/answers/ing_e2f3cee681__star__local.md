---
qid: ing_e2f3cee681__star__local
question: 'Explain: Aggregations — Aggregations | Elasticsearch: The Definitive Guide
  [2.x] | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 338
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:02:31-05:00'
sources: []
---

**Situation**  
During a quarterly analytics sprint for our e‑commerce platform, the product team noticed that the conversion rate drop on mobile devices was not reflected in our dashboards because we were only pulling raw logs and visualizing them with Kibana.

**Task**  
I needed to build a real‑time metric that aggregated session counts by device type, browser, and location, then surface it as an alertable dashboard so stakeholders could act before the next release cycle.

**Action**  
I designed a daily ingestion pipeline using Logstash to index raw clickstream data into Elasticsearch. In ES I created an index template with appropriate mappings (keyword for `device_type`, `browser`; geo_point for `location`). Then I wrote a composite aggregation query that bucketed by `device_type` → `browser` → geohash of location, and used sub‑aggregations to compute average session duration and conversion rate. To keep the response fast, I leveraged the `terms` aggregation with a size limit and added a `top_hits` sub‑aggregation for the most recent 5 sessions per bucket. Finally, I set up Watcher alerts that trigger when any bucket’s conversion falls below 2%.

**Result**  
The new dashboard cut manual reporting time by 70 % and caught a mobile‑specific drop of 3.4 % before it impacted revenue. The team now uses the same aggregation pattern for all event‑driven metrics, and I’ve documented best practices on index sizing and caching to keep query latency under 200 ms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
