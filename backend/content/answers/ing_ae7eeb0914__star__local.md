---
qid: ing_ae7eeb0914__star__local
question: 'Explain: When one cache server is not enough — What is Distributed Caching?
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 286
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:21:10-05:00'
sources: []
---

**Situation:**  
At a fintech startup, our real‑time fraud detection engine pulled user profiles from Redis every millisecond. During a traffic spike, the single cache node hit its memory ceiling and latency spiked to 120 ms, breaking SLA.

**Task:**  
I had to design a solution that kept read latency below 10 ms while scaling with traffic, without rewriting the entire data pipeline.

**Action:**  
I introduced a distributed caching layer using Redis Cluster. First, I partitioned user profiles by sharding key (user ID hash) across six nodes, configuring replication for high availability. Then I updated our microservice to route cache requests through a client‑side consistent hashing library so each request hit the correct shard. To maintain freshness, I implemented a publish/subscribe invalidation channel: when the database updated a profile, an event was broadcast and all relevant shards refreshed asynchronously. Finally, I added a monitoring dashboard that tracked per‑shard hit ratios and latency.

**Result:**  
Cache hit ratio rose from 72 % to 95 %, while average read latency dropped to 8 ms under peak load. The system handled a 4× traffic increase with no downtime. I learned the importance of sharding strategy, graceful failover, and real‑time monitoring in distributed cache design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
