---
qid: ing_ed798a7975__star__local
question: 'Explain: FAANG System Design Interview: Design A Location Based Service
  (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 366
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:23:45-05:00'
sources: []
---

**Situation** – While interning at a startup that built a local‑events app, we noticed our user growth stalled because the event recommendation engine couldn’t scale past 10 k concurrent users and was returning stale data after a few minutes.

**Task** – I was tasked to design a robust location‑based service (similar to Yelp/Google Places) that could handle millions of queries per day, deliver near‑real‑time venue information, and support future features like personalized recommendations and AR overlays.

**Action** – First, I broke the system into microservices: an **Ingress API** (NGINX + Kubernetes), a **Geocoding Service** (PostGIS on PostgreSQL with reverse‑geocode indexes), a **Venue Cache** (Redis Cluster with LRU eviction), and a **Recommendation Engine** (Spark batch jobs feeding a GraphQL layer). I added a **content‑delivery network (CDN)** for static assets and used **Kafka** for event streaming to keep caches fresh. For latency, I employed a two‑tier lookup: fast in‑memory cache for the top 1 M venues, fallback to disk‑based PostGIS. We also implemented rate limiting with Envoy and automated health checks.

**Result** – The new architecture handled 3 million requests per day with <120 ms average latency, reduced cache miss rates from 45% to 8%, and increased user session length by 27%. I learned that careful partitioning of data, caching strategies, and observability are key to scaling location services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
