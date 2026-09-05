---
qid: ing_58f9012994__star__local
question: 'Explain: Twitter Search — System Design Interview Cheat Sheet - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 390
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:25:24-05:00'
sources: []
---

**Situation:**  
During my senior year I interned at a startup that was building a lightweight social‑media platform. We had a growing user base of 500 k daily active users and the feature team wanted a search engine that could return relevant tweets within 200 ms for any keyword query.

**Task:**  
I was asked to design a scalable, low‑latency search service that could handle 5 k queries per second while supporting real‑time indexing of new posts and incremental relevance scoring.

**Action:**  
I chose an inverted index stored in Elasticsearch clusters sharded by user ID ranges. To keep write latency low I used a two‑stage pipeline: a “write buffer” (Redis) for incoming tweets, then bulk updates to the search cluster every 30 s. For ranking I implemented BM25 with a custom field boosting based on retweet count and author credibility. Caching was added at two levels: a CDN edge cache for popular queries and an in‑memory LRU cache inside the API gateway for the last 10 k query results. We also introduced a “search‑as‑you‑type” feature by precomputing prefix trees (tries) on hot keywords.

**Result:**  
The prototype handled 7 k QPS with average latency of 180 ms, and the relevance metric (precision@5) improved from 0.42 to 0.61 after tuning BM25 weights. The incremental indexing pipeline reduced tweet‑to‑search lag from 15 min to under 2 min. I learned how sharding, caching, and algorithmic tuning combine to meet strict SLAs in a social‑media context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
