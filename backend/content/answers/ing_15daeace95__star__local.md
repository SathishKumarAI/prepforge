---
qid: ing_15daeace95__star__local
question: 'Explain: Need for high availability — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 429
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:12:00-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, we had just launched a real‑time fraud detection platform that processed ~15 k transactions per second. Our analytics service was built on MongoDB and was the single source of truth for all transaction metadata. In production, a single replica set could only sustain 8 k TPS before latency spiked to 200 ms, and any outage in the primary node caused a 30‑second downtime that violated our SLA.

**Task**  
I needed to redesign the database layer so it could handle peak traffic, keep read/write latency below 50 ms, and guarantee zero single point of failure while preserving data consistency for audit purposes.

**Action**  
First, I performed a sharding feasibility study: identified the natural shard key (user_id) that evenly distributed writes. I then set up a balanced cluster with three shards, each an 3‑node replica set, and added a config server replica set for metadata. To keep the write path fast, I enabled **write concern majority** only on critical audit collections while using **unacknowledged writes** for transient logs. For reads, I leveraged read preferences to route latency‑sensitive queries to secondary nodes, and implemented **read/write splitting** in our application layer. Finally, I automated failover testing with MongoDB Atlas’s built‑in monitoring and added a load balancer that switched traffic to the healthiest shard set.

**Result**  
After migration, we achieved 22 k TPS throughput with sub‑30 ms read latency during peak hours, and zero downtime in a year of operation. The system now automatically recovers from any node failure within 10 seconds, keeping our SLA intact. I learned that sharding isn’t just about scaling horizontally; it’s also about carefully choosing shard keys, tuning write concerns, and aligning application logic with the cluster topology to maintain high availability without compromising data integrity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
