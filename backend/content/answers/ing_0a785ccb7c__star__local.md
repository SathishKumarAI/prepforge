---
qid: ing_0a785ccb7c__star__local
question: 'Explain: Let’s discuss what database to use to — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 352
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:49:42-05:00'
sources: []
---

**Situation** – I was tasked with designing the back‑end for a new location‑based review platform similar to Yelp. The user base would grow to millions daily, each leaving geo‑tagged reviews and searching by proximity in real time.

**Task** – Pick a database that supports fast geospatial queries, high write throughput for incoming reviews, and scalable read traffic for search results, while keeping latency below 200 ms under peak load.

**Action** – I evaluated three options: PostgreSQL with PostGIS, MongoDB’s GeoJSON support, and a distributed NoSQL like Cassandra. After profiling, I chose **MongoDB** because its native geospatial indexes (2dsphere) give O(log n) point‑in‑polygon queries, it sharding natively across nodes for horizontal scaling, and its write‑concern can be tuned to allow eventual consistency on review writes while keeping read latency low. I added a secondary Redis cache keyed by location hash to serve frequent “top 10 near me” queries instantly. For analytics, I streamed the MongoDB change stream into Kafka, feeding Spark for real‑time sentiment aggregation.

**Result** – The prototype handled 50k write ops/s and served 200k read ops/s with <120 ms latency under simulated traffic. User engagement rose 35% in three months because reviews appeared instantly on maps. I learned that choosing a database is not just about raw speed; it’s about matching the data model (geo‑JSON), scaling strategy, and eventual consistency trade‑offs to the service’s core use cases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
