---
qid: ing_ed0c087506__faang__local
question: 'Explain: Search Service — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 438
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:51:31-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *search service* for a music platform like Spotify.  
Key assumptions:  
1. Millions of users, billions of tracks, playlists, and user‑generated tags.  
2. Search must support free‑text (artist/album/song), autocomplete, faceted filters, and real‑time relevance.  
3. Latency target < 200 ms, 99th percentile SLA.  

**Approach**  
1. **Indexing layer** – build inverted indexes per token (n‑grams for autocomplete).  
2. **Sharding strategy** – hash by track ID to distribute load; use consistent hashing for scaling.  
3. **Query planner** – parse query, apply filters, rank results using BM25 + user personalization.  
4. **Cache tier** – LRU cache for popular queries and hot tracks; CDN edge nodes for autocomplete suggestions.  

**Depth**  
- *Data model*: documents contain title, artist, album, tags, play count, popularity score.  
- *Index storage*: use a distributed search engine (Elasticsearch/Opensearch) with replicas for HA.  
- *Scoring*: combine lexical relevance (BM25) + collaborative filtering (user history). Complexity per query O(k log n) where k=top‑k results.  
- *Latency*: shard queries in parallel, aggregate partial scores; use async pipeline to keep response under 200 ms.  

**Edge Cases**  
- Misspellings → fuzzy matching and phonetic algorithms.  
- New releases not yet indexed → staged ingestion queue.  
- Extremely popular search terms causing cache stampede – guard with rate limiter.  

**Optimize & Communicate**  
Future improvements: add vector embeddings for semantic search, implement real‑time indexing via Kafka streams, use GPU acceleration for ranking. In an interview I’d present this roadmap, justify trade‑offs (e.g., latency vs. freshness), and demonstrate understanding of distributed systems fundamentals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
