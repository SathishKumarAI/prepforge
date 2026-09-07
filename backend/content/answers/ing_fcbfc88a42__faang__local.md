---
qid: ing_fcbfc88a42__faang__local
question: 'Explain: Design the Twitter timeline and search — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 509
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:27:22-05:00'
sources: []
---

**Clarify**  
We need to design Twitter’s *timeline* (user feed) and *search* services: how tweets are stored, retrieved in real‑time order, and queried by keywords or hashtags. Key assumptions: millions of users, billions of tweets per day; low latency (< 200 ms) for timeline reads; search must support fuzzy matching and pagination.

**Approach**  
1. **Data model & storage** – Tweets as immutable records in a distributed key‑value store (e.g., Cassandra or Bigtable). Partition by user ID for timeline, by hash of tweet text for inverted index.  
2. **Timeline generation** – *Pull* model: on read, fetch recent tweets from followed users via a sorted list stored per follower (`followers→timeline`). Use a priority queue to merge streams; cache hot timelines in Redis or Memcached.  
3. **Search indexing** – Build an inverted index (Lucene/Solr/Elastic) with shards by token hash. Store term → tweet IDs, support stemming and stop‑word removal. Maintain a secondary store for retweets and likes.  
4. **Consistency & scalability** – Use eventual consistency for timelines; write‑through cache invalidation on new tweets. Shard search indices horizontally, replicate across regions.

**Depth**  
- Timeline read: O(k log n) where *k* = page size, *n* = number of followees.  
- Search query: inverted index lookup + posting list intersection → O(∑|postings|).  
- Write path: append to user’s tweet table, update follower timelines asynchronously (Kafka/stream processor), index new tweet in search shards.

**Edge Cases**  
- New followers: rebuild partial timeline or lazy‑load.  
- Deleted tweets: tombstones propagate to indexes and caches.  
- High write burst: backpressure via Kafka partitions; rate‑limit per user.

**Optimize & Communicate**  
- Cache hot timelines for 1–2 hours to reduce DB hits.  
- Use Bloom filters in search to quickly reject non‑existent terms.  
- Monitor latency distribution; auto‑scale compute nodes during peak hours.  

By layering immutable storage, asynchronous timeline updates, and a distributed inverted index, we achieve low‑latency reads, scalable writes, and robust search—all within the constraints of a global social platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
