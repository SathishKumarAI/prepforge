---
qid: ing_fcbfc88a42__fp__local
question: 'Explain: Design the Twitter timeline and search — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 446
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:56:59-05:00'
sources: []
---

**Why a Twitter‑style feed must be “just‑in‑time”**

The core problem is *low latency, high throughput* for billions of users who read their feed every second.  
A naïve approach would store all tweets in one gigantic table and run a linear scan for each user—impossible at scale.

1. **User‑centric pre‑aggregation**  
   Every tweet is written once to the user’s own stream (e.g., `user_tweets:U`).  
   When a follower reads, we merge *K* recent streams (`K ≈ 200–300`) using a priority queue.  
   This satisfies *O(K log K)* read time and keeps writes cheap because each tweet is written only to the author’s stream.

2. **Caching & hot‑spotting**  
   The top N followers of a celebrity generate a “hot” stream; we materialize a global “trending” table (`global_hot:U`) that fans out updates in near real‑time via a pub/sub queue (Kafka).  
   This eliminates repeated merges for the same hot content.

3. **Search – inverted index + time‑based pruning**  
   Tweets are tokenized into an inverted index (`term → list[tweet_id, timestamp]`).  
   Queries first intersect term lists, then filter by recency using a sliding window (e.g., last 24 h).  
   This keeps the candidate set tiny before scoring.

4. **Deep insight** – *time is the natural sharding key*.  
   By partitioning data per day or hour we avoid cross‑day joins and keep hot spots localized.  
   Most designs ignore this, leading to contention on “today’s” shards; our time‑based partitions turn a global write problem into many independent writes.

**Bottom line:** pre‑aggregate per user, cache hot streams, index by term with time windows, and shard by timestamp—this combination delivers the sub‑second latency that users expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
