---
qid: ing_588e15ec2d__star__local
question: 'Explain: Shrink an existing index to fewer shards'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 338
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:24:39-05:00'
sources: []
---

**Situation**  
During a quarterly data‑warehouse refresh for our customer analytics platform, we noticed that the daily query latency on the “customer_behavior” index had spiked from 120 ms to over 400 ms after we added new dimensions. The cluster was running Elasticsearch 7.14 with 12 primary shards across 6 nodes.

**Task**  
I needed to reduce the index’s fragmentation and improve read performance by shrinking it to fewer, larger shards without losing data or downtime.

**Action**  
1. I first created a snapshot of the current index in our S3-backed repository to ensure recoverability.  
2. Using the `_shrink` API, I reindexed into a new index with 4 primary shards, specifying `index.number_of_shards: 4`.  
3. To avoid hot‑spotting during the operation, I set `cluster.routing.allocation.enable` to “none” on the target nodes, ran the shrink in a maintenance window, and monitored shard allocation via Kibana’s Cluster Health.  
4. Once the shrink completed, I switched aliases so production queries pointed to the new index atomically.  
5. Finally, I deleted the old 12‑shard index after verifying data integrity with checksum comparison.

**Result**  
Query latency dropped back to ~110 ms (a 70% improvement). Search throughput increased by 30%, and the cluster’s CPU usage fell from 85% to 55%. The exercise taught me the importance of snapshot safety, careful allocation control, and aliasing to avoid service interruptions during index transformations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
