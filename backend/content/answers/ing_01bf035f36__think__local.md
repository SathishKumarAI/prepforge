---
qid: ing_01bf035f36__think__local
question: 'Explain: The service sends a query to the — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 422
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:50:24-05:00'
sources: []
---

**1. Clarify the ask and assumptions**  
   - Identify what “the service sends a query to” refers to: is it the client, an API gateway, or a backend micro‑service?  
   - Assume we’re designing a typical location‑based search (e.g., “restaurants near me”) that must handle high traffic, real‑time responses, and large data volumes.  

**2. Adopt a layered design framework**  
   - **Client → API Gateway → Search Service → Data Store + Caching**.  
   - Think in terms of request flow, latency budgets, fault tolerance, and scalability at each layer.  

**3. Step‑by‑step reasoning**  
   1. *API Gateway*: validates auth, rate limits, routes to search service.  
   2. *Search Service*: receives query (location + filters), hits a spatial index (e.g., R‑tree or geohash) in a fast datastore (Redis/Elasticsearch).  
   3. *Data Store*: primary store (PostgreSQL/PostGIS, Bigtable) for persistence; secondary caches for hot spots.  
   4. *Result Aggregation*: rank by distance + relevance, paginate, return JSON.  

**4. Common traps to avoid**  
   - Ignoring **geospatial indexing** → O(n) scans.  
   - Over‑optimizing latency at the cost of data freshness.  
   - Forgetting about **caching invalidation** when POIs update.  

**5. Sanity‑check & verbalize**  
   - Verify each component meets SLA (e.g., 95 % queries < 200 ms).  
   - Explain how a query travels end‑to‑end, highlighting load balancing, caching, and fallback strategies.  
   - Ask “What happens if the index is down?” to ensure fault tolerance coverage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
