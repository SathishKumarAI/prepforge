---
qid: ing_3092d5a47b__think__local
question: 'Explain: What do we know so far? There — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 450
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:21:40-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - Ask whether we need a *global* service or a regional prototype.  
   - Decide on key features: search, filtering, reviews, ratings, map view, offline mode.  
   - Assume high traffic (millions of requests/day), low latency (<200 ms), and eventual consistency for writes.

**2. Adopt the “big‑picture → detail” framework**  
   - First outline core components (API layer, data store, search index, recommendation engine).  
   - Then drill down into each: scaling strategy, consistency model, failure modes.

**3. Step‑by‑step reasoning**  
   1. **User flow** → request → geocode → query DB/search → rank → render.  
   2. Identify bottlenecks (e.g., geospatial queries).  
   3. Choose technologies: PostgreSQL/PostGIS for structured data, ElasticSearch/Typesense for full‑text + geo‑search, Redis cache for hot spots.  
   4. Design API contracts, rate limiting, authentication.  
   5. Plan data pipelines (ETL for reviews, real‑time updates).  
   6. Discuss eventual consistency for user‑generated content.

**4. Common traps to avoid**  
   - Over‑optimizing early; start with a simple monolith then split services.  
   - Ignoring cold‑start latency for new locations.  
   - Forgetting to handle “no data” or sparse regions.  
   - Underestimating the volume of writes from reviews/comments.

**5. Sanity‑check & verbalize**  
   - Verify that each component meets SLAs (latency, throughput).  
   - Rehearse the user journey and ensure every edge case is covered.  
   - Explain trade‑offs clearly: e.g., choosing eventual consistency over strict ACID to scale writes.

Follow this checklist to structure a clear, complete interview answer while anticipating follow‑up questions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
