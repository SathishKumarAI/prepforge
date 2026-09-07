---
qid: ing_efdd21dfcd__faang__local
question: 'Explain: Here we use the RESTful API convention — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 530
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:57:11-05:00'
sources: []
---

**Clarify**  
We’re asked to design a RESTful API for a location‑based service like Yelp or Google Places—think “search places, get details, post reviews.” I’d confirm:  
• What entities exist (Place, Review, User)?  
• Which operations are required (list, detail, create, update, delete)?  
• Do we need pagination, filtering, authentication, rate‑limiting?  

**Approach**  
1. Identify resources → `/places`, `/reviews`.  
2. Define verbs via HTTP methods: GET for read, POST for create, PUT/PATCH for update, DELETE for remove.  
3. Add query params for filtering (`?city=NYC&type=cafe`) and pagination (`?page=2&pageSize=20`).  
4. Use HATEOAS links in responses to guide clients.  
5. Secure endpoints with OAuth2/JWT; throttle with API keys.  

**Depth**  
- **GET /places** → return JSON list of place objects (id, name, lat/lng, rating).  
- **GET /places/{id}** → detailed view + nested reviews.  
- **POST /places** → create new place (auth required).  
- **POST /places/{id}/reviews** → add review; body contains rating & text.  
- Responses use HTTP status codes: 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found.  

Complexity: O(1) for single‑resource ops; O(log n + k) for listing with indexed geospatial queries.  

**Edge Cases**  
- Invalid IDs → 404.  
- Duplicate reviews by same user → 409 Conflict.  
- Over‑large pageSize → cap and return warning.  
- Rate limit exceeded → 429 Too Many Requests.  

**Optimize & Communicate**  
We can add caching (ETag/If‑None‑Match) for GETs, use CDN for static assets, and shard the database by geohash to scale writes. In discussion I’d explain trade‑offs: denormalized “place‑review” aggregates vs real‑time consistency, eventual consistency for high traffic, and how pagination impacts cache invalidation. This structure shows clear problem framing, systematic design, depth in API specs, awareness of edge cases, and optimization strategies—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
