---
qid: ing_fcbfc88a42__star__local
question: 'Explain: Design the Twitter timeline and search — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 379
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:54:04-05:00'
sources: []
---

**Situation:**  
At my previous startup we were building a micro‑blogging platform with 10 M daily active users. The product team demanded a real‑time “home” feed that delivered the latest 50 posts per user and a search feature that returned relevant tweets within seconds, even during peak traffic.

**Task:**  
I had to design a scalable timeline generation system and an efficient search engine that could handle high write throughput (hundreds of tweets per second) while keeping read latency below 200 ms for both the feed and search queries.

**Action:**  
1. *Timeline:* I introduced a fan‑out‑on‑write model using Kafka streams to push new posts into each follower’s queue stored in Redis Streams, capped at 50 items with LRU eviction. For cold users we fall back to a pull‑based approach querying Cassandra for the latest posts by followed accounts.  
2. *Search:* I built an inverted index in Elasticsearch, sharded across 12 nodes, and used BM25 scoring combined with user relevance weights (followers’ interactions). To reduce latency I added a caching layer of hot queries in Redis.  
3. Monitored throughput with Grafana; tuned batch sizes and replication factor to keep CPU usage <70% and disk I/O within limits.

**Result:**  
The feed latency dropped from 800 ms to 120 ms, handling 1 M writes/second without outages. Search hit‑rate improved by 40%, returning results in under 150 ms even at peak load. I learned that balancing write amplification against read latency is key: fan‑out on write works well for active users, while a hybrid approach keeps costs manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
