---
qid: ing_2b9a7a192c__star__local
question: 'Explain: How to do distributed locking — Martin Kleppmann’s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 365
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:55:03-05:00'
sources: []
---

**Situation**  
While leading the recommender‑engine rollout for a large e‑commerce site, we hit a bottleneck: every user session triggered parallel data pulls from our Cassandra cluster, and the hot key “user_session” caused lock contention that slowed overall throughput by 35 %.  

**Task**  
I had to design a lightweight distributed locking mechanism so each microservice could safely acquire exclusive access to a per‑session cache without stalling the entire pipeline.  

**Action**  
After evaluating Redis, ZooKeeper, and etcd, I chose etcd for its strong consistency guarantees. I wrote a Go package that wraps etcd’s lease API:  
1. A service creates a short‑lived lease (10 s) and attempts to `Put` a key (`/locks/session/<id>`) with the lease attached.  
2. If the put succeeds, the lock is held; if it fails, the service retries with exponential backoff.  
3. On success, the service performs its cache update, then immediately revokes the lease (or lets it expire).  
4. I added a watch on `/locks/` to publish lock‑release events to a Kafka topic, enabling downstream jobs to react without polling.  

**Result**  
Lock contention dropped from 35 % to under 5 %, boosting request latency by 22 % and allowing us to serve 1.3× more concurrent sessions during peak traffic. I learned that choosing the right coordination primitive (etcd lease vs. Redis set‑nx) can dramatically change system resilience and developer productivity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
