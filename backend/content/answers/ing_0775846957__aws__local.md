---
qid: ing_0775846957__aws__local
question: 'Explain: Lat lon as array — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 440
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:42:45-05:00'
sources: []
---

**Situation & Task**  
I led a feature that let users find nearby events by sorting ElasticSearch (ES) hits on a latitude/longitude array. The goal was to reduce latency from 1 s to <300 ms while keeping cost <10 % of the existing monolith.

**Action – Technical Design**  
- **Data model:** Stored `location` as `[lon, lat]` in ES, using the `geo_point` type for native geospatial indexing.  
- **Query:** Used a *geodistance* filter (`"distance": "0km"`) combined with a scripted score that calculated haversine distance and sorted by it.  
- **Performance tuning:** Added a pre‑computed `_routing` key on the event ID to shard data geographically, reducing cross‑shard traffic. Employed `search_type: query_then_fetch` for deterministic ordering.  
- **Scalability/Availability:** Deployed ES on an Auto Scaling group with dedicated master nodes; enabled snapshotting on S3 for disaster recovery.  
- **Cost & Trade‑offs:** Chose 3 data nodes (R5.large) vs the monolith’s 12 VM instances, cutting infra cost by 65 %. Acceptable trade‑off: slightly higher write latency (~50 ms) due to secondary index updates.

**Result**  
Achieved a *300 ms* average query time, 70 % reduction in user wait time, and lowered operational spend from **$12k/month to $4.5k/month**. Post‑deployment A/B test showed a 15 % increase in event bookings, proving the feature’s business value.

**Reflection (Bar‑raiser cues)**  
I took *full ownership* of the migration, *dove deep* into ES internals to optimize scoring, and quantified impact with clear metrics. The biggest learning was that pre‑computing routing keys dramatically improved read performance—an insight I documented for future data‑model changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
