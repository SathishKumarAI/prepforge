---
qid: ing_ae7fb3d3da__star__local
question: 'Explain: Geo distance sorting — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 283
total_tokens: 521
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:21:10-05:00'
sources: []
---

**Situation:** At my previous startup, we built a local marketplace app where users could find nearby home‑service providers. Our search page returned millions of listings, but the default relevance ranking didn’t prioritize proximity, so customers often saw distant options first.

**Task:** I was tasked with re‑engineering the search to sort results by geographic distance while still honoring relevance scores and maintaining sub‑second latency for mobile users.

**Action:** I added a `geo_distance` script score function to our Elasticsearch query, combining it with the built‑in BM25 relevance weight. I tuned the `weight` parameter so that proximity had a stronger influence at short radii but gradually yielded to content relevance beyond 30 km. To keep performance high, I pre‑computed each provider’s latitude/longitude in a dedicated `_geo_point` field and used Elasticsearch’s native distance calculation. I also set up a shard‑level cache for the most common query prefixes.

**Result:** After deployment, average search response time dropped from 350 ms to 210 ms, while click‑through rates on nearby listings jumped 18% within two weeks. I learned how to balance custom scoring with Elasticsearch’s built‑in mechanisms and the importance of caching for high‑traffic geo queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
