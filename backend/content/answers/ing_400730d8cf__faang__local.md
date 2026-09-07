---
qid: ing_400730d8cf__faang__local
question: 'Explain: 4.2 Requirement 2: Music Search — Design Spotify | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 533
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:12:50-05:00'
sources: []
---

**1️⃣ Clarify**

> *Goal:* Build a scalable “Music Search” feature for Spotify that returns relevant tracks, albums, artists, or playlists based on free‑text queries (e.g., “love in the dark”).  
> **Assumptions to confirm:**  
> • Search scope: all public catalog + user’s own library.  
> • Latency target: ≤200 ms per request at 10k QPS.  
> • Result ranking must respect popularity, freshness, and personalized context (e.g., user’s listening history).  

**2️⃣ Approach**

1. **Ingest & index** – crawl catalog → tokenize → build inverted index + n‑gram index for fuzzy matches.  
2. **Storage layer** – use a distributed key‑value store (Cassandra) for raw metadata; an analytics engine (Druid/ElasticSearch) for search.  
3. **Query pipeline** – query parser → candidate retrieval → relevance scoring (TF‑IDF + popularity + user bias) → top‑k result aggregation.  
4. **Caching & CDN** – in‑memory LRU cache + edge CDN to serve repeated queries.  

**3️⃣ Depth**

*Indexing:* For each token, store posting lists of song IDs with term frequency. Use a Bloom filter per document for quick existence checks.  
*Scoring:* `score = α·tfidf + β·popularity + γ·user_score`. Compute user_score via a lightweight matrix factorization model cached per user.  
*Complexity:* Retrieval O(log N + |postings|); scoring O(K) where K is candidate size (≈100).  
*Trade‑offs:* ElasticSearch offers rich query DSL but higher RAM; custom Lucene‑style index reduces overhead at the cost of less flexibility.

**4️⃣ Edge Cases**

- **Misspellings / slang:** rely on n‑gram and phonetic matching.  
- **Very popular tracks returning too many results:** apply a popularity cap per page.  
- **Cold start users:** default to global popularity until enough listening data accumulates.  

**5️⃣ Optimize & Communicate**

*Improvements:* Introduce incremental indexing via Kafka streams; use GPU‑accelerated ANN for personalized ranking.  
*Narrative:* “We first build a robust inverted index, then layer personalization on top, ensuring latency stays within SLA while scaling horizontally.”  

---  
*(Word count ≈ 190)*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
