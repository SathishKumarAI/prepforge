---
qid: ing_f460b921a0__star__local
question: 'Explain: 4.3 Search Indexes — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 396
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:36:51-05:00'
sources: []
---

**Situation:**  
At my previous company, we were building a new feed feature that needed to surface user-generated content in real time. The existing linear scan of posts was causing latency spikes during peak hours—search queries would take over 2 seconds on average, and our A/B test showed a 15% drop in engagement.

**Task:**  
I had to design a scalable search index for Instagram‑style posts that could support millions of concurrent reads while keeping write throughput high enough for the daily upload volume (~10M posts/day).

**Action:**  
1. Chose Elasticsearch as the core indexing engine because of its near real‑time updates and rich query DSL.  
2. Built a sharded, replicated cluster with 3 primary shards per index and 2 replicas to balance load and provide fault tolerance.  
3. Implemented a composite key (user_id + timestamp) and inverted index on hashtags, captions, and geotags.  
4. Added a “hotness” score field that was updated via a Kafka stream feeding a lightweight in‑memory cache; this allowed us to surface trending posts without full reindexing.  
5. Tuned merge policies and refresh intervals (1 s) to keep latency low while controlling disk usage.

**Result:**  
Query latency dropped from 2.3 s to under 300 ms for 95th‑percentile reads, even during traffic spikes of 20k QPS. Write throughput stayed above 5k ops/sec with <0.1% error rate. The project was deployed to production within two weeks and directly contributed to a 12% lift in time‑on‑feed metrics. I learned that careful shard sizing, hybrid caching, and real‑time pipelines are key to balancing consistency and speed in large‑scale search systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
