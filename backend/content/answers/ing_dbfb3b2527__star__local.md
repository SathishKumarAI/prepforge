---
qid: ing_dbfb3b2527__star__local
question: 'Explain: Sharding — 7 Must-Know Strategies to Scale Your Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 402
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:47:51-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup we were launching a real‑time fraud detection service. The PostgreSQL instance that stored user transaction logs was hitting 3 TB by the end of month two, and query latency for our anomaly model grew from 200 ms to over 1.2 s—well beyond SLA.

**Task:**  
I had to redesign the data layer so the database could scale horizontally while keeping read performance below 300 ms and write throughput above 10k TPS, all within a two‑week sprint.

**Action:**  
I applied seven sharding strategies:  

1. **Horizontal partitioning by user ID hash** – distributed rows across four physical shards.  
2. **Geographic routing** – placed shards in regions closest to transaction origin to reduce network hops.  
3. **Write‑through cache with Redis** – buffered writes, reducing contention on the underlying tables.  
4. **Read replicas per shard** – offloaded analytics queries from primaries.  
5. **Consistent hashing ring** – ensured even load distribution and graceful handling of node churn.  
6. **Automated failover scripts** – used Patroni to promote a replica within 30 s on primary failure.  
7. **Partition pruning with time‑based table splits** – kept active partitions under 50 GB, speeding up index scans.

I orchestrated the rollout with Terraform and Helm charts, monitored with Grafana, and ran nightly load tests using pgbench to validate latency targets.

**Result:**  
After deployment, read latency dropped to 180 ms on average, write throughput hit 12.5k TPS, and we handled a 4× data growth without any downtime. The team learned that sharding is as much about operational tooling (monitoring, automation) as it is about schema design, which has become our baseline for every new service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
