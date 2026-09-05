---
qid: ing_c1a1fc1454__star__local
question: 'Explain: Cost optimization — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 402
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:57:07-05:00'
sources: []
---

**Situation:**  
At my previous startup we were scaling a real‑time analytics platform that ingested over 5 million events per day into MongoDB. By Q3 the cluster grew to 800 GB and our hosting bill was $12K/month, which threatened our runway.

**Task:**  
I needed to cut storage and compute costs by at least 30% without sacrificing query latency for the dashboard that pulled aggregate metrics in under 200 ms.

**Action:**  
First, I profiled data access patterns with `mongostat` and identified a hot collection (`events`) that was growing linearly. I chose a shard key on `user_id` to evenly distribute writes across shards. I spun up a 3‑node replica set per shard and added two additional shards, then rebalanced the cluster using `sh.enableSharding()` and `sh.shardCollection()`. To reduce storage overhead I enabled TTL indexes for events older than 90 days and switched from WiredTiger’s default compression to zlib. Finally, I automated monitoring with Ops Manager alerts on read/write latency spikes.

**Result:**  
After rebalancing, total storage fell to 480 GB— a 40% reduction—cutting the monthly bill to $7K. Query latency for our dashboard improved from 250 ms to 180 ms, and the system now scales linearly as we add more users. I learned that careful shard key selection combined with TTL policies can deliver significant cost savings while maintaining performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
