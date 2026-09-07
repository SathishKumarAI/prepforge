---
qid: ing_c7de86bb1f__faang__local
question: 'Explain: Sharding based on the tweet object — Twittersearch'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 507
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:25:07-05:00'
sources: []
---

**Clarify**  
We’re asked how to *shard* data for a search service that indexes individual tweets (e.g., Twitter Search).  
Key assumptions:  
1. Tweets are immutable once posted; updates only occur for deletions or edits.  
2. Query patterns are keyword‑based, often with user‑by‑user filters.  
3. The system must support low‑latency read (search) and high write throughput.

**Approach**  
1. **Sharding key design** – pick a deterministic hash of the tweet ID or author ID to distribute load evenly.  
2. **Index replication** – each shard holds a full inverted index for its subset, replicated across nodes for availability.  
3. **Secondary routing** – maintain a lightweight mapping table (e.g., consistent hashing ring) so that search queries can locate relevant shards quickly.

**Depth**  
*Hash‑by‑tweetID*: `shard = hash(tweet_id) % N`. Guarantees uniform distribution; deletions naturally remove the document from its shard.  
For *user‑centric* queries, an additional *author‑hash* shard layer can be added: first locate author shards, then within them find tweet shards.  
Replication factor (e.g., 3 replicas) ensures fault tolerance; write latency is bounded by the majority commit.  
Search latency ≈ O(log N + M), where N = number of shards and M = size of matching inverted list per shard.

**Edge Cases**  
- Hot tweets (massive retweets) may skew load; mitigate with a “hot‑shard” cache or secondary hot‑tweet index.  
- Shard rebalancing when scaling up/down can cause temporary search gaps – use consistent hashing to minimize movement.  
- Deletions must propagate to all replicas; otherwise stale results appear.

**Optimize & Communicate**  
Introduce *write amplification* reduction by batching updates per shard, and *search amplification* reduction via Bloom filters to skip empty shards.  
Explain trade‑offs: hash‑by‑tweetID maximizes write simplicity but may hurt user‑based search locality; adding a secondary author layer improves that at the cost of extra routing hops.  
Conclude with measurable goals: 99.9 % query latency <50 ms, <1 % data loss on node failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
