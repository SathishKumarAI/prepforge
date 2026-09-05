---
qid: ing_cde2254c49__star__local
question: 'Explain: This is pretty standard for an API — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 319
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:20:52-05:00'
sources: []
---

**Situation:**  
At my last company we were tasked with launching a new location‑based recommendation feature for our mobile app. The existing backend couldn’t handle real‑time queries from millions of users in different cities, and the latency requirement was under 150 ms.

**Task:**  
Design an end‑to‑end system that can ingest user check‑ins, store places with geospatial metadata, and serve ranked results based on proximity, popularity, and custom filters—all while scaling to 10M daily active users.

**Action:**  
I chose a microservices architecture: a Kafka ingestion pipeline for real‑time updates; a Redis GeoHash cache for quick nearest‑neighbor lookups; and a PostGIS cluster for persistent storage. For ranking I implemented a hybrid algorithm combining Haversine distance with a popularity score, tuned via A/B tests. To keep latency low, I added an edge CDN layer that cached frequently requested neighborhoods. We used Kubernetes to autoscale services based on request spikes and set up Prometheus alerts to monitor query times.

**Result:**  
Launch went live two weeks ahead of schedule; average response time dropped from 350 ms to 90 ms under peak load, meeting the SLA. The feature increased user engagement by 18% and drove a 12% lift in local‑search revenue within three months. I learned how balancing caching, geospatial indexing, and real‑time analytics can deliver both performance and business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
