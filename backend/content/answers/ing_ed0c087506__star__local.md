---
qid: ing_ed0c087506__star__local
question: 'Explain: Search Service — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 395
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:22:54-05:00'
sources: []
---

**Situation** – At my last company I was tasked with building a new search feature for our music streaming app, similar to Spotify’s “Find Music” page. Users complained that keyword searches returned irrelevant results and the search latency exceeded 500 ms during peak hours.

**Task** – Deliver a scalable, low‑latency search service that supports full‑text, genre, mood, and artist filters while maintaining 99.9% uptime and handling 200k queries per second.

**Action** – I chose Elasticsearch as the core engine for its distributed inverted index and real‑time update capabilities. I designed a two‑layer architecture:  
1. **Index layer** – Sharded indices on song title, artist name, album, and metadata tags; each shard stored in an AWS EBS volume with SSDs. I added a secondary vector index (FAISS) for semantic similarity so “sad” queries could surface mood‑matched tracks.  
2. **API layer** – A stateless gRPC service behind a Kubernetes cluster, using Redis as a query cache and RateLimiter to protect against spikes. For ranking, I implemented a hybrid model: TF‑IDF scores weighted by user’s listening history (personalized boosting) and an online logistic regression that learns relevance from click logs via Spark Streaming. Continuous A/B tests adjusted the weight parameters.

**Result** – Latency dropped to 120 ms on average, with 99.97% of requests under 200 ms. Click‑through rate improved by 35%, and search revenue increased by $1.2M annually. I learned that combining traditional inverted indices with vector embeddings can deliver both speed and relevance in a high‑traffic music platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
