---
qid: ing_c21788fb3d__faang__local
question: 'Explain: Search Request — Design Instagram | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 481
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:12:16-05:00'
sources: []
---

**Clarify**  
We need a system that accepts a user’s search query on Instagram (e.g., “cats”, “NYC”) and returns relevant posts, accounts, hashtags, stories, reels, etc. Key assumptions:  

* Queries are short text strings; users type in real‑time.  
* The service must support millions of concurrent requests with <200 ms latency.  
* Results are ranked by relevance, popularity, recency, and user context (followers, interests).  

**Approach**  
1. **Query ingestion & tokenization** – parse text, stem, remove stop words.  
2. **Candidate generation** – use an inverted index over post captions, tags, and metadata; pull top‑N by term frequency–inverse document frequency (TF‑IDF).  
3. **Ranking & personalization** – a lightweight ML model (e.g., LambdaRank) fuses features: content relevance, engagement score, user’s follow graph, and recency.  
4. **Caching & sharding** – cache hot queries in Redis; shard index by hashtag hash to distribute load.  

**Depth**  
* Inverted index stored in Lucene/Elasticsearch for fast term lookup.  
* Ranking model served via TensorFlow Serving; inference cost <1 ms per candidate.  
* Use Bloom filters to quickly reject empty queries.  
* Latency budget: 50 ms for query parse + 80 ms for index lookup + 30 ms for ranking + 20 ms for network round‑trip.  

**Edge Cases**  
* Misspellings → fuzzy matching or character n‑grams.  
* Ambiguous terms (“apple”) → context from user’s follow graph.  
* Zero results → fallback to trending content or “show me more”.  

**Optimize & Communicate**  
To improve throughput, we can pre‑compute a popularity cache for frequent queries and use approximate nearest neighbor (FAISS) for semantic embeddings when the query contains natural language. I’d explain this trade‑off: exact TF‑IDF is fast but brittle; embeddings add robustness at cost of extra compute. Overall, the design balances speed, relevance, and scalability while keeping the system modular for future feature expansion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
