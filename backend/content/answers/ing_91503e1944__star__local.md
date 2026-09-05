---
qid: ing_91503e1944__star__local
question: 'Explain: Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 298
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:23:23-05:00'
sources: []
---

**Situation**  
At my last company we had a recommendation engine that served millions of users. The backend used a cluster of Redis shards for caching model predictions, but as traffic grew the shards kept rebalance‑ing, causing cache miss storms and 30 % latency spikes.

**Task**  
I was asked to design a sharding strategy that minimized data movement when adding or removing nodes while keeping lookup time O(1).

**Action**  
I introduced consistent hashing. Each Redis node got multiple virtual replicas on the hash ring to even out key distribution. We used MurmurHash3 for fast, uniform hashing and stored the ring in ZooKeeper so all services could read it without a single point of failure. For key lookup I computed the hash, found the next clockwise node, and routed the request there. When scaling up we only moved keys belonging to the new node’s segment—about 1/N of the data. We also added a small “lazy” rebalancing routine that gradually migrated hot keys to reduce latency spikes.

**Result**  
After deployment, cache hit rates rose from 68 % to 92 %, and average request latency dropped by 45 %. The system now handles 2× traffic without additional hardware. I learned how a simple hashing scheme can drastically improve elasticity and reliability in distributed ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
