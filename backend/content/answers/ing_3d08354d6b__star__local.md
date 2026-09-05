---
qid: ing_3d08354d6b__star__local
question: 'Explain: The last point we would like to — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 330
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:30:10-05:00'
sources: []
---

**Situation**  
At my previous company we were launching a new “Local Eats” feature that needed to surface restaurants within a 5‑km radius of users in real time. Our existing geo‑index was slow; each query hit the relational DB and returned ~2 s, which broke the UX SLA of <300 ms.

**Task**  
I had to redesign the location lookup so that we could serve millions of concurrent requests with sub‑200 ms latency while keeping cost under $1k/month on AWS.

**Action**  
I chose a hybrid architecture: 1) Use Amazon DynamoDB with a composite primary key (city, latitude‑rounded, longitude‑rounded) and Global Secondary Indexes for bounding boxes. 2) Cache hot spots in Redis Cluster to eliminate DB hops for the top 10 % of queries. 3) Implement a geohash pre‑filtering layer in Go that translates user coordinates into the nearest grid cells, reducing candidate set size by ~90%. 4) Add a background Lambda that periodically updates the cache and syncs new restaurant data from our ingestion pipeline.

**Result**  
Latency dropped from 2 s to 120 ms average; peak traffic (200k QPS) was handled with a single Redis node. Monthly cost stayed below $800, and we saw a 35% increase in user engagement for the feature. I learned that combining vectorized geohashing with a cache‑first strategy often beats pure database sharding for real‑time location services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
