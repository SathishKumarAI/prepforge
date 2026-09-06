---
qid: ing_5f742e2255__think__local
question: 'Explain: So let’s add another 16 bytes. So — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 210
output_tokens: 648
total_tokens: 858
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:19:56-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**

- *What* is being added? “Another 16 bytes” – likely a field in a data model or message.  
- *Why* 16 bytes? Assume it’s a fixed‑size identifier (e.g., UUID, GeoHash, or hash of a place).  
- *Scope*: We’re designing a location‑based service like Yelp/Google Places, so we’ll think about data schema, indexing, caching, and latency.

**2️⃣ Adopt a layered mental model**

1. **Domain layer** – business entities (Place, Review, User).  
2. **Persistence layer** – database choice & schema.  
3. **Indexing / search layer** – spatial indexes, full‑text, filters.  
4. **API & caching** – REST/GraphQL endpoints, in‑memory cache, CDN.  
5. **Scalability** – sharding, replication, rate limiting.

Use this scaffold to keep each concern separate while ensuring they interlock.

**3️⃣ Step‑by‑step reasoning**

1. *Define the 16‑byte field*: e.g., `place_id` as a UUIDv4 (128 bits).  
2. **Schema**: Add `place_id BINARY(16)` to the `places` table; set it as primary key or unique index.  
3. **Indexing**: Create a 2‑D R‑tree (PostGIS) on latitude/longitude for proximity queries.  
4. **Search**: Full‑text index on name, category, and reviews.  
5. **API design**: `GET /places?lat=&lng=&radius=` returns paginated results; include `place_id` in payload.  
6. **Caching**: Cache hot spots (e.g., top 1000 places) in Redis with TTL.  
7. **Scalability**: Shard by geohash prefix; replicate read replicas for high traffic.

**4️⃣ Common traps to avoid**

- *Over‑optimizing*: Don’t pre‑compute everything; cache only hot data.  
- *Ignoring data consistency*: Ensure eventual consistency between DB and cache.  
- *Underestimating storage*: 16 bytes per row is fine, but multiply by millions → plan for growth.  
- *Skipping monitoring*: Without metrics (latency, cache hit ratio) you can’t tune.

**5️⃣ Sanity‑check & verbalize**

- **“Does this answer the question?”**: We added a 16‑byte field and explained its integration into a location service.  
- **“Is it realistic?”**: UUIDv4 fits in 16 bytes; spatial indexes are standard.  
- **“Can I explain each layer quickly?”**: Yes, we have a concise walk‑through.  

When speaking, start with the new field, then cascade through schema → indexing → API → caching → scaling, ending with pitfalls and sanity checks. This structured approach keeps the explanation clear and reproducible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
