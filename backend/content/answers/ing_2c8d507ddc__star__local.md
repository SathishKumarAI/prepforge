---
qid: ing_2c8d507ddc__star__local
question: 'Explain: Keep Membership Consistent Enough — Consistent Hashing | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 375
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:56:58-05:00'
sources: []
---

**Situation**  
At my previous company we built a distributed recommendation engine that served millions of users per day. Our model shards were stored on a cluster of GPU nodes, and the traffic pattern shifted rapidly with new promotions. The load balancer kept re‑routing user requests to different nodes, but each time a node was added or removed, many feature vectors had to be recomputed locally, causing 30 % latency spikes during scaling events.

**Task**  
I needed to design a sharding scheme that would keep the assignment of user IDs to GPU nodes stable even as we added or retired machines, so that most requests could hit the same node and avoid costly recomputations while still balancing load evenly.

**Action**  
I introduced consistent hashing with virtual buckets. Each GPU node was represented by 100 virtual tokens on a hash ring built with Murmur3. User IDs were hashed to the nearest token clockwise, guaranteeing that only about 1/|nodes| of keys moved when scaling. I wrapped this logic in a lightweight Java service that exposed a REST endpoint for lookups and used ZooKeeper to track node heartbeats. To avoid hotspots, I ran an offline analysis that redistributed tokens after each deployment to keep the bucket sizes within ±5 % of the mean.

**Result**  
After rolling out consistent hashing, our system’s average latency dropped from 350 ms to 210 ms during scaling windows, and the number of recomputed feature vectors fell by 78 %. The model update pipeline became predictable, allowing us to schedule GPU maintenance without service interruption. I learned that a simple, proven algorithm like consistent hashing can solve complex distribution problems when combined with careful token sizing and monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
