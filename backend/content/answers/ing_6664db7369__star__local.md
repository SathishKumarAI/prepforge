---
qid: ing_6664db7369__star__local
question: 'Explain: Now it doesn''t query Third Party Data — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 361
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:52:38-05:00'
sources: []
---

**Situation:** In the second sprint of our ride‑sharing app, we were asked to add a “nearby points of interest” feature that would show users restaurants and gas stations on their route. The original design relied on live calls to Google Maps’ Places API for every request.

**Task:** Reduce latency and cost while still delivering relevant POIs in real time, especially during peak traffic when our API quota was at risk of hitting the daily limit.

**Action:** I redesigned the flow to use a hybrid local‑cache strategy. First, we pre‑seeded a Redis store with popular POI data from Google Maps during off‑peak hours and refreshed it nightly using a scheduled batch job that respected rate limits. During runtime, the service queried Redis for nearby POIs; only when a cache miss occurred did it fall back to a single batched request to Google’s API. I added a geohash index in PostgreSQL to quickly filter cached entries by latitude/longitude and implemented exponential backoff for fallback calls. We also introduced a “stale‑but‑useful” policy, serving slightly older data when the network was congested.

**Result:** Cache hit rate rose from 12% to 92%, cutting third‑party API calls by 85% and eliminating the risk of quota exhaustion. Page load times improved from 1.8 s to 0.9 s on average, boosting user engagement metrics (session length +15%). I learned how to balance freshness with cost by architecting a graceful degradation path and leveraging caching layers effectively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
