---
qid: ing_95b137ad7a__star__local
question: 'Explain: The Cost of Hitting the Database — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 360
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:32:13-05:00'
sources: []
---

**Situation**  
In my last role, we built a recommendation engine that served personalized product suggestions to 3 million daily users. Each request hit our PostgreSQL database for user profiles and item vectors, leading to an average latency of 250 ms and over 1 M queries per hour, which strained the DB cluster and pushed costs up.

**Task**  
I needed to reduce end‑to‑end latency below 100 ms while cutting query volume by at least 70% so we could scale cost‑effectively without compromising recommendation quality.

**Action**  
I introduced a two‑tier caching strategy. First, I deployed Redis as an in‑memory store for the most frequently accessed user vectors (top 10% of users), using a sliding LRU eviction policy and a TTL of 15 minutes to keep data fresh. Second, I added a CDN‑style edge cache for item embeddings that were static across sessions, storing them in Amazon ElastiCache for Redis clusters with read replicas for high availability. We instrumented Prometheus metrics to monitor cache hit ratios and automatically triggered a Lambda function to pre‑warm cold caches during off‑peak hours.

**Result**  
Cache hit ratio climbed from 12% to 78%, cutting database queries by 72%. Average request latency dropped to 65 ms, meeting our SLA. Operational costs fell by 35% due to fewer DB connections and lower read traffic. I learned that a thoughtful cache hierarchy—combining volatile user data with immutable item data—can deliver both performance and cost savings in ML‑driven systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
