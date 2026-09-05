---
qid: ing_ef6ea67b22__star__local
question: 'Explain: Get started with Redis today — Data replication explained: types,
  examples & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 363
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:26:46-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, our payment gateway was hitting a 99.9% uptime SLA but we were seeing intermittent latency spikes during peak hours. The monitoring dashboard flagged that the Redis cluster’s single master node was becoming a bottleneck.  

**Task** – I had to design and deploy a resilient replication strategy so that read traffic could be offloaded, latency dropped below 5 ms, and data consistency remained strong for transactional keys.

**Action** – First, I enabled **master‑to‑slave (primary‑replica)** replication, creating two read replicas in separate AZs. Using `redis.conf` I set `maxmemory-policy allkeys-lru` on replicas to ensure they didn’t grow unbounded. Next, I implemented **sentinel** for automatic failover: configured a quorum of three sentinels that monitored the master and promoted a replica if the master went down. Finally, I added **Redis Cluster** sharding for high write throughput, splitting the keyspace into 16 slots across six nodes, each with its own replicas. I scripted the deployment in Terraform and used `redis-cli --scan` to verify replication status.

**Result** – After rollout, read latency fell from ~12 ms to <4 ms during traffic spikes, and our uptime hit 99.999%. The team learned that combining master‑replica with sentinel gives instant failover, while clustering scales writes—an architecture we now use across all production services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
