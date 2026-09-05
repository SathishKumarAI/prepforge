---
qid: ing_260d6881e8__star__local
question: How to configure replication in Redis? — Redisleaderfollowreplication
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 396
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:45:05-05:00'
sources: []
---

**Situation:**  
When I joined the e‑commerce analytics team, our real‑time recommendation engine was hitting a bottleneck: a single Redis instance became a performance choke point during flash sales, causing cache misses and slower query times.

**Task:**  
I had to set up a highly available Redis replication architecture that could handle 10 k RPS spikes while keeping read latency below 2 ms, without disrupting the existing production pipeline.

**Action:**  
First, I provisioned an HA‑Proxy front‑end and created one master and two replica nodes on separate availability zones. Using `redis.conf`, I set `replicaof` on each replica to point to the master’s IP, and enabled persistence with RDB snapshots (`save 900 1`) for durability. To avoid split‑brain, I added `cluster-enabled no` and configured a sentinel instance: `sentinel monitor mymaster <master_ip> 6379 2`. I tuned `maxmemory-policy allkeys-lru` on the master to keep hot data in memory and set `min-slave-max-lag 10` so replicas would failover only if lagged more than 10 s. Finally, I scripted a health‑check that rotated traffic between replicas via HA‑Proxy using `server replica1 <ip> check inter 2000 rise 2 fall 3 weight 50`. 

**Result:**  
After deployment, read latency dropped from ~12 ms to under 1.5 ms during peak events, and the system sustained 15 k RPS without cache misses. The failover test showed automatic promotion within 4 s when the master went offline. I learned that careful tuning of replica lag thresholds and HA‑Proxy weights is key to balancing performance with resilience in a Redis cluster.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
