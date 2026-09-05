---
qid: ing_efdd21dfcd__star__local
question: 'Explain: Here we use the RESTful API convention — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 390
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:27:39-05:00'
sources: []
---

**Situation**  
At my last internship I was asked to prototype a micro‑service that would power a new “Nearby Deals” feature for a travel app. The product team wanted the backend to expose a clean, versioned RESTful API so that both mobile and web clients could discover restaurants, hotels, and events within a 5 km radius of any GPS coordinate.

**Task**  
I needed to design an endpoint structure that was intuitive, scalable, and future‑proof while keeping latency under 200 ms for 90 % of requests. The API had to support pagination, filtering by category, and return enriched data (average rating, distance, open hours).

**Action**  
I started with a resource hierarchy: `/v1/locations/{lat},{lon}/places`. I added query parameters (`radius`, `category`, `page`, `limit`) and used HATEOAS links for pagination. To keep latency low, I indexed the MongoDB collection on geospatial coordinates and rating, then cached popular queries in Redis with a 5‑minute TTL. For rate limiting I employed an API Gateway that throttled each user to 200 requests/minute. I also defined a custom error schema (HTTP 400 for bad params, HTTP 429 for over‑limit) and documented the contract with OpenAPI.

**Result**  
The prototype handled 10,000 concurrent users during load testing with a 95 % success rate at <180 ms latency. The API’s clean design reduced client integration time by 30 %. I learned that clear resource naming, thoughtful query parameters, and aggressive caching are key to a RESTful service that scales under real‑world traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
