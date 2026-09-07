---
qid: ing_5f742e2255__faang__local
question: 'Explain: So let’s add another 16 bytes. So — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 566
total_tokens: 820
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:26:18-05:00'
sources: []
---

**1️⃣ Clarify**  
We need a scalable “Location‑Based Service” (LBS) like Yelp/Google Places: users query nearby venues, get details, ratings, reviews, and can add new places. Key constraints: high read throughput, low latency (<100 ms), massive data (billions of points), eventual consistency for writes, and geographic distribution.

**2️⃣ Approach**  
1. **Data model** – split *static* venue info (name, address, categories) from *dynamic* user‑generated content (reviews, ratings).  
2. **Storage** – use a Geo‑partitioned key‑value store (e.g., DynamoDB with geohash partition keys) for static data; a separate NoSQL DB (Cassandra/Firestore) for reviews.  
3. **Geospatial indexing** – build a hierarchical grid (geohashes) and maintain an in‑memory cache of nearby points per cell.  
4. **Query flow** – client sends lat/lon + radius → API Gateway → Service Layer → fetch relevant geohash cells, query DB, merge results, sort by relevance, return JSON.  
5. **Write path** – new venue: write to static table; new review: append to review stream (Kafka) → microservice updates rating aggregates asynchronously.

**3️⃣ Depth & Trade‑offs**  
- *Geohash granularity*: finer cells reduce data per query but increase cell count; choose ~50 m resolution.  
- *Consistency*: eventual consistency on reviews allows high write throughput; strong consistency only for critical fields (e.g., venue name).  
- *Caching*: CDN + Redis for hot spots dramatically cuts DB reads.  
- *Scalability*: horizontal scaling via sharding by geohash; auto‑scaling based on request rate.

**4️⃣ Edge Cases**  
- Users near cell borders → query neighboring cells.  
- Sparse regions (oceans) → return empty set gracefully.  
- Large radius queries → paginate results, cap at 1000 items to avoid overload.  
- Duplicate venue submissions → deduplicate via fuzzy matching on name/address.

**5️⃣ Optimize & Communicate**  
We can add *pre‑computed heatmaps* for popular areas to answer “most visited” queries in O(1). Also, batch review writes into a time‑windowed aggregation job to keep rating updates fast. In interviews, I’d walk through each component, justify choices with latency/throughput numbers, and highlight how the system handles growth (data partitioning) and reliability (replication, failover).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
