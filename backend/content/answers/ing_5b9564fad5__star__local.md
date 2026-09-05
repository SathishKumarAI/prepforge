---
qid: ing_5b9564fad5__star__local
question: 'Explain: It will also store all the — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 362
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:30:34-05:00'
sources: []
---

**Situation** – At my previous company we were building a real‑time navigation feature for our ride‑hailing app. The backend had to handle millions of concurrent users and deliver turn‑by‑turn directions with sub‑second latency.

**Task** – I was tasked with designing the data layer that would not only serve map tiles but also store every user interaction: origin, destination, waypoints, traffic incidents, and historical routes for analytics.

**Action** – I chose a hybrid approach. For static map data (roads, POIs) we used a spatially indexed PostGIS cluster; it gives fast range queries for routing. For dynamic events (traffic jams, accidents) we leveraged Redis Streams to ingest real‑time updates and push them into a Cassandra table that retained the full event history for up to six months. To keep query costs low, we materialized a “hot” view in Elasticsearch, indexed by geohash, which served the top 10 % of frequently traversed segments. All writes were wrapped in an idempotent Kafka pipeline so we could replay events if needed.

**Result** – The new system handled 1.2 M concurrent requests with <120 ms average latency and reduced storage costs by 35 % compared to our monolithic design. We also gained a 40 % improvement in route‑prediction accuracy because the analytics pipeline had access to the full event history. I learned that marrying spatial databases with stream processing is key for scalable, real‑time map services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
