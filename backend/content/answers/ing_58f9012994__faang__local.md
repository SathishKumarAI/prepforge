---
qid: ing_58f9012994__faang__local
question: 'Explain: Twitter Search — System Design Interview Cheat Sheet - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 519
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:10:18-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design a *search* service for a platform like Twitter: given a query (text, hashtags, user handles) return the most relevant tweets in real‑time. Assume millions of daily tweets, 10⁶+ users, low latency (<200 ms), and eventual consistency.

**2️⃣ Approach**  
1. **Ingestion pipeline** – stream each tweet to a *Kafka* topic; workers index it into an inverted index (Lucene/Solr) stored in a distributed cluster.  
2. **Index structure** – token‑to‑tweet ID mapping, plus posting lists with positions for phrase queries. Maintain separate indices per language and shard by hash of the tweet id.  
3. **Query execution** – client → API gateway → query planner (handles filters: user, hashtags, date). Planner fetches relevant shards in parallel, merges results via a *score‑based* priority queue.  
4. **Caching & ranking** – hot queries cached in Redis; scoring combines TF‑IDF, retweet/follow score, recency decay.  
5. **Fault tolerance** – replicas per shard, leader election with Zookeeper, and checkpointed Kafka offsets.

**3️⃣ Depth**  
- **Complexity**: Indexing O(1) amortized per tweet; search time ≈ O(log N + K) where N = number of tweets in shards, K = results.  
- **Trade‑offs**: Full replication gives high availability but doubles storage; eventual consistency acceptable for search freshness.  
- **Scalability**: Add more Kafka partitions and index nodes linearly; use sharding key to balance load.

**4️⃣ Edge Cases**  
- Extremely long tweets → truncated in index.  
- Multi‑language content → language detection at ingestion.  
- Zero‑result queries → fallback to “Did you mean” suggestions using edit distance over popular terms.

**5️⃣ Optimize & Communicate**  
Explain that we first guarantee *low latency* with in‑memory caches, then *high recall* via sharded inverted indices. We’d iterate: monitor query latency, add more shards or adjust cache size; use A/B tests on ranking algorithm to improve relevance. This shows structured thinking, clear trade‑offs, and a pragmatic design—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
