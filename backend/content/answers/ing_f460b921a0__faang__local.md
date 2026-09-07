---
qid: ing_f460b921a0__faang__local
question: 'Explain: 4.3 Search Indexes — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 533
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:07:50-05:00'
sources: []
---

**Clarify**

We’re asked to design the *search index* that powers Instagram’s Explore/Hashtag search.  
Assumptions:  
- Users issue keyword or hashtag queries and expect fast, ranked results.  
- The catalog is huge (billions of posts) and changes constantly (new uploads, edits, deletions).  
- Search must support relevance, freshness, and scale to millions of concurrent queries.

**Approach**

1. **Data model** – inverted index per token → list of post IDs + metadata (timestamp, engagement).  
2. **Sharding** – partition by hash of first token or alphabetically to distribute load; each shard owns a subset of the index.  
3. **Storage** – use an LSM‑tree store (e.g., RocksDB) for write‑amplification and compaction; keep hot data in memory via memtables + Bloom filters.  
4. **Real‑time updates** – append‑only WAL streams from ingestion services push to a *real‑time* index that merges into the main index nightly.  
5. **Query processing** – lookup tokens, intersect posting lists, score by recency & engagement; use distributed query executor.

**Depth**

- *Inverted list format*: `[post_id][timestamp][engagement_score]`. Lists are sorted by timestamp to support “newest first”.  
- *Ranking*: TF‑IDF is insufficient; we compute a composite score = α·recency + β·engagement.  
- *Complexity*: Lookup O(log N) per token, intersection linear in list size; sharding keeps list sizes manageable (≤ 10⁶).  
- *Consistency*: eventual consistency via background merges; strong consistency for critical features can be achieved with a write‑through cache.

**Edge Cases**

- Extremely popular hashtags → posting lists become huge; mitigate with sampling or “hot” buckets.  
- Deletions: mark tombstones in WAL and purge during compaction.  
- Querying multiple tokens with OR semantics requires union logic, potentially costly—optimize by limiting max results early.

**Optimize & Communicate**

Improvements: use *prefix trees* for autocomplete, cache popular queries in Redis, employ vector embeddings for semantic search.  
When explaining to interviewers, highlight the trade‑off between freshness (real‑time updates) and query latency (pre‑computed lists), and how sharding + LSM compaction solves write scalability while keeping reads fast.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
