---
qid: ing_5aeb33f3a3__faang__local
question: 'Explain: System APIs — Twittersearch'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 482
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:14:49-05:00'
sources: []
---

**Clarify**

We’re asked to explain how a *system API* could be designed for “Twitter search.”  
Assumptions:  
1. The API should support keyword, user, hashtag, and geolocation queries.  
2. It must handle high throughput (millions of requests per day).  
3. Results should be paginated, sorted by relevance or recency, and support filters.

**Approach**

1. Define a REST/GraphQL endpoint: `GET /search`.  
2. Accept query parameters (`q`, `lang`, `from_user`, `hashtag`, `geo`, `sort_by`, `limit`, `cursor`).  
3. Internally route to a search service that queries an inverted index and a real‑time stream store.  
4. Return JSON with tweet IDs, metadata, and optionally full text.

**Depth**

- **Indexing:** Use a sharded Lucene/Solr cluster; each shard holds a subset of tweets keyed by posting time.  
- **Scoring:** Combine TF‑IDF for relevance with recency decay.  
- **Caching:** Frequently used queries hit an in‑memory cache (Redis).  
- **Pagination:** Cursor‑based pagination to avoid offset cost.  
- **Rate limiting & throttling** per IP/user to protect against abuse.  
- **Security:** OAuth 2.0 for authentication; scopes limit access.

Complexity: Query time ≈ O(log N + k) where *N* is index size and *k* results returned.  

**Edge Cases**

- Empty or malformed `q` → 400 Bad Request.  
- Exceeding rate limits → 429 Too Many Requests.  
- Geo queries with no nearby tweets → empty array, 200 OK.

**Optimize & Communicate**

To improve latency: shard by user ID for personalized feeds; use a CDN for static assets.  
Explain trade‑offs: heavier indexing = faster search but more storage; caching reduces load but adds staleness risk.  
Narrate the design as “We first expose a clean, versioned endpoint, then layer scalable search infrastructure on top, ensuring we meet latency SLAs while keeping costs in check.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
