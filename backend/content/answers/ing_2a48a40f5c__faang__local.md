---
qid: ing_2a48a40f5c__faang__local
question: 'Explain: Requirements and Goals of the System — Twittersearch'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 470
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:21:39-05:00'
sources: []
---

## Clarify  
**Problem:** Design a search system for Twitter that returns relevant tweets quickly while handling billions of users, real‑time streams, and massive tweet volumes.  
*Assumptions:*  
1. Tweets are immutable once posted (except deletions).  
2. Search is query‑by‑text + optional filters (user, hashtag, location).  
3. Latency target < 200 ms for 99% of queries.  

## Approach  
1. **Indexing** – inverted index per token + metadata shard.  
2. **Scoring** – BM25 + real‑time popularity boost.  
3. **Caching** – LRU cache for hot queries; in‑memory key‑value store for user timelines.  
4. **Distributed architecture** – sharding by tweet ID hash, replication for fault tolerance.

## Depth  
- **Index size:** 10 billion tweets × avg 30 tokens ≈ 300 billion postings → ~3 TB on SSDs.  
- **Query pipeline:** tokenize → lookup posting lists → merge & rank → top‑k return.  
- **Latency analysis:** token lookup O(1), merging O(k log n). With 10 shards, parallelism keeps latency <200 ms.  
- **Consistency:** eventual consistency for deletions; use tombstone markers.

## Edge Cases  
- **Zero results** – fallback to trending topics.  
- **Spam bursts** – rate‑limit and filter flagged content.  
- **User privacy** – respect follow relationships: exclude non‑public tweets via ACL checks in merge phase.

## Optimize & Communicate  
1. **Compression:** use delta + variable‑byte on posting lists to cut index size by 70 %.  
2. **Adaptive caching:** cache results of queries with > 10k hits per hour.  
3. **Explainability:** expose score breakdown for compliance.  

*Narrative:* I start by framing user goals (speed, relevance), then lay out a sharded inverted‑index design, analyze complexity, handle edge cases, and finish with concrete optimizations—all within the 160–240 word limit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
