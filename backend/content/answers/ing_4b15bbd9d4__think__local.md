---
qid: ing_4b15bbd9d4__think__local
question: 'Explain: Search Service — Design Instagram | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 499
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:20:15-05:00'
sources: []
---

**1. Clarify the scope & constraints**  
- Confirm which *features* of an Instagram‑style search service are required (text, hashtag, location, image similarity).  
- Ask about scale: number of users, posts per day, query volume, latency SLA, data freshness.  
- Identify non‑functional priorities: availability, fault tolerance, cost, compliance.

**2. Adopt a layered mental model**  
1. *Data ingestion & storage* – how posts are indexed (relational, NoSQL, search engine).  
2. *Indexing & query processing* – inverted index, sharding, caching, ranking.  
3. *Serving layer* – API gateway, request routing, rate‑limiting.  
4. *Auxiliary services* – recommendation, personalization, monitoring.

**3. Step‑by‑step reasoning**  
- Start with a **baseline**: store posts in a document DB; build an inverted index in Elasticsearch for text/hashtag search.  
- Add **sharding** by user or hashtag to scale writes and queries.  
- Introduce **caching** (Redis) for hot queries, and a **pre‑computed ranking cache** for recent posts.  
- Consider **image similarity**: use feature vectors in a vector DB (FAISS/Annoy).  
- Design **API contracts**: `/search?query=…&type=text|hashtag|location`.  
- Plan **monitoring & metrics**: query latency, error rates, cache hit ratio.  
- Outline **failure scenarios** and how to keep the service available.

**4. Common pitfalls to avoid**  
- Mixing *write* and *read* scaling strategies (e.g., naive replication).  
- Over‑optimizing for cold starts at the expense of hot path latency.  
- Neglecting data freshness in eventual consistency models.  
- Ignoring cost implications of large vector indexes.

**5. Sanity check & verbalize**  
- Re‑state the problem and constraints to ensure alignment.  
- Walk through a typical user query: request → routing → cache hit/miss → index lookup → ranking → response.  
- Verify latency targets at each step; if any exceed, iterate on that layer.  

Use this checklist whenever you tackle a system design interview question of similar complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
