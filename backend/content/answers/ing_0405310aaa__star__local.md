---
qid: ing_0405310aaa__star__local
question: 'Explain: Components of Distributed Caching — What is Distributed Caching?
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 354
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:36:43-05:00'
sources: []
---

**Situation**  
At my last job I was tasked with scaling a recommendation engine that served millions of users per day. The latency on our model inference endpoint had spiked from 30 ms to 250 ms during peak hours, and the database read load doubled because each request hit the same cold cache.

**Task**  
I needed to design a distributed caching layer that would keep hot embeddings in memory across multiple nodes, reduce read traffic by 70%, and support TTL updates for model parameters without downtime.

**Action**  
I chose Redis Cluster as the underlying store and built a custom sharding key: `user_id|model_version`. The cluster automatically partitions data across six shards, each with replicas for high availability. I implemented a cache-aside pattern where the inference service first queries Redis; on miss it pulls from PostgreSQL, updates the cache, and serves the response. To keep embeddings fresh, I added a background worker that listens to an SNS topic publishing `model_version` changes and invalidates relevant keys using Redis’ `KEYS`/`SCAN` with pattern matching. For consistency, I used Lua scripts to atomically update or delete multiple related keys.

**Result**  
After deployment, cache hit rate climbed from 15% to 92%, reducing inference latency to under 35 ms even during traffic spikes. Database read traffic dropped by 68%. The system also handled zero‑downtime model rollouts; the invalidation script ensured stale embeddings never surfaced. I learned that careful key design and leveraging Redis’ cluster sharding can deliver both scalability and consistency in a distributed cache.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
