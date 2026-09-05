---
qid: ing_e0fdad30a6__star__local
question: 'Explain: Browser Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 336
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:58:38-05:00'
sources: []
---

**Situation**  
At my previous company we launched a new SaaS analytics dashboard that served up monthly reports to over 50 000 users. On launch day the page load time spiked from 2 s to 12 s, and our support tickets doubled because users complained of sluggish performance.

**Task**  
I had to reduce the average rendering time for the report view to under 3 seconds while keeping data fresh (updates happen every 5 minutes) and ensuring we didn’t overload the database or backend API.

**Action**  
First, I added a reverse‑proxy cache layer with Varnish that stored fully rendered HTML fragments for each user’s dashboard. I set `Cache-Control: max-age=300` so the cached page was valid for five minutes, matching our data refresh interval. Next, I introduced Redis as an in‑memory store for precomputed report aggregates; the API would read from Redis instead of hitting PostgreSQL on every request. Finally, I leveraged CDN edge caching for static assets and used ETag headers to enable conditional GETs for user‑specific data.

**Result**  
Page load time dropped from 12 s to 2.8 s, a 78% reduction. CPU usage on the API server fell by 60%, freeing capacity for new features. I learned that combining HTTP cache headers, edge caching, and a fast in‑memory store can dramatically improve perceived performance without sacrificing data freshness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
