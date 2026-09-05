---
qid: ing_ff67fe17d2__star__local
question: How to increase ElasticSearch throughput and concurrency capacity?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 328
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:59:35-05:00'
sources: []
---

**Situation:**  
At my previous role we were running a recommendation engine that fed product search queries into Elasticsearch. During peak traffic (holiday season) the cluster hit 4 k QPS and latency spiked to 1.2 s, which hurt conversion rates.

**Task:**  
I needed to double throughput while keeping CPU utilization under 70% and ensuring query latency stayed below 500 ms for 95% of requests.

**Action:**  
First, I sharded the index more aggressively (from 5 to 20 shards) and enabled shard allocation awareness by zone. Then I tuned thread pool settings—raised bulk queue size, lowered merge scheduler concurrency, and added a dedicated search‑only node type. I switched from the default `dfs_query_then_fetch` routing to `query_then_fetch`, which cut down DFS overhead. Next, I implemented index lifecycle management: older data moved to frozen tiers, freeing hot nodes for active traffic. Finally, I wrapped bulk writes in async pipelines and added a lightweight caching layer with Redis for frequent query results.

**Result:**  
Throughput jumped from 4 k QPS to over 9 k QPS, latency dropped to an average of 320 ms (95th percentile < 480 ms), and CPU usage stayed below 65%. The project also reduced operational costs by 15% thanks to the tiered storage strategy. I learned that balancing shard count, thread pool tuning, and data lifecycle policies can unlock significant gains in Elasticsearch scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
