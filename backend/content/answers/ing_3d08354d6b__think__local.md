---
qid: ing_3d08354d6b__think__local
question: 'Explain: The last point we would like to — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 480
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:48:56-05:00'
sources: []
---

**1. Clarify scope & assumptions**  
- Ask whether the service is for restaurants only or any POI.  
- Decide on key features: search, filter, rating, reviews, maps, offline mode.  
- Assume high traffic (millions daily), low latency (<200 ms), global reach.

**2. Choose a mental model**  
Use the classic **“System Design Canvas”**:  
- *Users & use cases* → mobile app, web, API.  
- *Core domain entities* → Place, User, Review, Rating, Location.  
- *Data flow* → request → routing → services → storage → response.

**3. Build step‑by‑step**  
a. **Front‑end**: lightweight SPA + native SDKs, caching with Service Workers.  
b. **API Gateway**: rate‑limit, auth (OAuth2), routing to microservices.  
c. **Search service**: use a geo‑search engine (Elasticsearch/Algolia) indexed by latitude/longitude; support fuzzy text search.  
d. **Data ingestion**: batch jobs + real‑time CDC from source DBs into the index.  
e. **Persistence**: NoSQL for flexible schema (MongoDB), relational for transactions (PostgreSQL).  
f. **Caching layer**: Redis/Memcached for hot places, user prefs.  
g. **Analytics**: stream reviews to Kafka → Spark/Beam → dashboards.  
h. **Scaling**: auto‑scale services via Kubernetes; use CDN for static assets.

**4. Avoid common traps**  
- Don’t ignore **geo‑indexing**; a simple R‑tree or geohash is essential.  
- Forgetting **rate‑limiting** can blow out downstream services.  
- Mixing read/write heavy ops in the same database hurts performance.

**5. Sanity‑check & verbalize**  
Run through a sample flow: user searches “pizza near me” → API gateway → search service → geo‑index → hits DB for details → cache hit → response. Verify latency targets, failure paths (fallback to cached data), and cost estimates. Explain each layer’s trade‑offs aloud so interviewers see your reasoning process.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
