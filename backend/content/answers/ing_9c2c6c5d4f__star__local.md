---
qid: ing_9c2c6c5d4f__star__local
question: 'Explain: We need to make one more assumption — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 387
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:44:23-05:00'
sources: []
---

**Situation** – At my previous company we were building a new location‑based service to recommend restaurants and events within a 5 km radius of the user. The traffic forecast was 10 million requests per day, with 95% latency SLA under 200 ms.

**Task** – I had to design an architecture that could scale horizontally, keep geo‑query latency low, and support real‑time updates from partners (e.g., new venues or price changes) without downtime.

**Action** – I split the system into three layers:  
1. **Ingestion** – a Kafka cluster consumed venue feeds; we used schema registry for versioning and Avro serialization.  
2. **Storage & Indexing** – I chose PostgreSQL with PostGIS for core data, but built an auxiliary Elasticsearch cluster for fast geo‑searches, indexing `lat`, `lon` and popularity scores. We added a Redis cache for hot spots (top 10k venues per city).  
3. **API Gateway** – a Node.js microservice behind NGINX handled request routing; it queried the cache first, then Elasticsearch if needed, falling back to PostGIS only on cache misses. For real‑time updates I implemented a “write‑through” pattern: changes hit Kafka → consumer writes to PostgreSQL and triggers an async ES reindex.

**Result** – The prototype processed 12 M requests/day with 92% of queries under 150 ms, exceeding the SLA. Cache hit rate rose to 85% after two weeks of traffic. I learned that coupling a relational store for consistency with a search engine for speed is often the sweet spot in location services, and that an event‑driven ingestion pipeline keeps data fresh without service interruption.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
