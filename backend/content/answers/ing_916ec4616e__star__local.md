---
qid: ing_916ec4616e__star__local
question: 'Explain: Adding a Node — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 325
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:23:44-05:00'
sources: []
---

**Situation:**  
At my previous company we ran a distributed recommendation engine that stored user preference vectors in a Cassandra cluster. When our traffic doubled, the read latency for hot users rose from 15 ms to 70 ms because shards were unevenly balanced after adding two new nodes.

**Task:**  
I had to rebalance the data across the expanded cluster without downtime or data loss, while keeping the cache hit ratio above 95%.

**Action:**  
I implemented a consistent‑hashing ring using virtual nodes (vnodes). First, I added 100 vnodes per physical machine to smooth distribution. Then I wrote a migration script that streamed only the affected partitions from old to new nodes, updating the gossip metadata so readers immediately saw the new topology. To avoid hot‑spotting, I used a custom hash function based on Murmur3 and sprinkled the vnodes evenly across token ranges. Finally, I monitored latency with Grafana dashboards; I set up alerts for any node exceeding 60 ms.

**Result:**  
The rebalancing completed in under two hours with zero service interruption. Read latency dropped to 18 ms on average, cache hit ratio improved to 97%, and the cluster now scales linearly—adding another node only increases throughput by ~20% without a new data‑repartitioning event. I learned that careful vnode sizing and incremental migration are key to painless scaling in a production ML system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
