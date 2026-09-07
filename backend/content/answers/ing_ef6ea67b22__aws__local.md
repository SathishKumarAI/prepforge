---
qid: ing_ef6ea67b22__aws__local
question: 'Explain: Get started with Redis today — Data replication explained: types,
  examples & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 395
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:18:37-05:00'
sources: []
---

**Situation** – At my previous role I was tasked with building a global e‑commerce catalog that had to stay available during peak traffic while keeping write latency under 5 ms. The data set grew to 3 M SKUs, and the single‑node Redis instance started throttling.

**Task** – Design a replication strategy that would keep read throughput high, ensure durability, and allow us to scale out with minimal operational overhead.

**Action**  
1. **Choose Redis Sentinel for automatic failover** – it watches master health and promotes a replica in < 3 s, satisfying our *Customer Obsession* (zero‑downtime).  
2. **Set up asynchronous primary‑replica replication** – replicas were placed in separate AZs to satisfy *Availability*.  
3. **Use Redis Cluster for sharding** – 12 shards across 4 nodes; each shard replicated once to a standby node, giving us linear read scaling and cost‑effective memory usage.  
4. **Leverage Amazon ElastiCache** – eliminates manual patching, provides automated backups (RDB snapshots) and point‑in‑time restores (Invent & Simplify).  

**Result** – Read throughput increased from 10 k/s to 120 k/s (12×), write latency dropped to 2.3 ms, and the mean time to recover after a node failure fell from 8 min to < 30 s. We saved $18K/yr on on‑prem hardware and reduced ops tickets by 70%.

**Reflection** – I learned that choosing the right replication model (asynchronous vs synchronous) depends on latency tolerance; a hybrid approach can meet both *Bias for Action* and *Dive Deep* requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
