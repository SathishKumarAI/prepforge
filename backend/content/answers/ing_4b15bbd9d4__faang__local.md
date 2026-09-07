---
qid: ing_4b15bbd9d4__faang__local
question: 'Explain: Search Service — Design Instagram | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 477
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:39:10-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design a *search* service for an Instagram‑style app (posts, users, hashtags).  
Assumptions:  
- Millions of active users, billions of posts.  
- Search is read‑heavy; latency < 200 ms.  
- We need full‑text search on captions/tags and faceted filters (date, location).  

**2️⃣ Approach**  
1. **Indexing layer** – Ingest every post into a distributed inverted index (e.g., Elasticsearch/Opensearch).  
2. **Query router** – API gateway that parses the query, decides whether to use keyword match, fuzzy search or autocomplete.  
3. **Scoring & ranking** – TF‑IDF + popularity boost + recency.  
4. **Caching** – LRU cache for hot queries; use Redis for top results.  
5. **Result delivery** – Paginated cursor with pre‑fetched next page, served via CDN edge nodes.  

**3️⃣ Depth**  
- *Inverted index*: shards per hash of keyword → O(log n) lookup, memory‑efficient postings lists.  
- *Scoring*: BM25 + user’s follow graph boost (posts from followed users rank higher).  
- *Scalability*: Shard replication for HA; autoscale based on query volume.  
- *Consistency*: Near real‑time indexing with write‑ahead logs; eventual consistency acceptable for search.  

**4️⃣ Edge Cases**  
- Empty or malformed queries → return “no results” quickly.  
- Hot posts spike → cache them aggressively.  
- New hashtags: delayed visibility until index refresh.  
- Spam/malicious content → filter via moderation queue before indexing.  

**5️⃣ Optimize & Communicate**  
- **Batching writes** to reduce I/O.  
- **Pre‑compute popular hashtag counts** for instant autocomplete.  
- Show trade‑offs: higher replication = lower latency but more storage; tighter consistency = higher write cost.  
Narrate stepwise: “First we ingest → next we route → then we score → finally we cache and serve.” This structure aligns with FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
