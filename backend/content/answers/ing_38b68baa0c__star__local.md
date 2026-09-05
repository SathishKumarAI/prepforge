---
qid: ing_38b68baa0c__star__local
question: 'Explain: Endpoint: GET /analytics/{short_code} — Design URL Shortener |
  System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 341
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:22:06-05:00'
sources: []
---

**Situation:**  
While leading the backend team at a startup that launched a URL‑shortening service, we noticed that our analytics dashboard was lagging during traffic spikes; users couldn’t view real‑time click stats for their short links.

**Task:**  
I needed to design an efficient, scalable endpoint `GET /analytics/{short_code}` that returns click counts, geographic breakdowns, and referrer data with sub‑second latency, even under 10k requests per second.

**Action:**  
First, I introduced a sharded Redis cache keyed by `{short_code}` to hold a pre‑aggregated JSON payload updated asynchronously via Kafka consumer jobs. The API server pulls from Redis; if miss, falls back to PostgreSQL aggregation but caches result for 5 s. For geo and referrer details, I used materialized views in ClickHouse, enabling fast range queries. I added rate limiting per IP (100 req/min) with token bucket to protect against abuse, and signed JWTs for authenticated users to enforce ownership. Finally, I instrumented OpenTelemetry to log request latency and error rates.

**Result:**  
Latency dropped from 350 ms average to under 80 ms at peak load, with a 99th‑percentile of 120 ms. User satisfaction scores rose by 18%, and we reduced PostgreSQL query volume by 70%. I learned the value of caching hot analytics data and leveraging columnar stores for heavy aggregations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
