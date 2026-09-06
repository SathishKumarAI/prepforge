---
qid: ing_318ac9e898__think__local
question: Are indices and shards not free? — How many shards should I have in my Elasticsearch
  cluster? | Elastic Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 439
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:50:22-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**

- *What is “free” here?*  We’re talking about resource usage (CPU, memory, disk) that comes with each shard/indices pair.
- *Assume a typical production‑grade ES cluster:* 4–8 nodes, SSD storage, moderate query volume.

**2️⃣ Mental model: the “shard cost equation”**

- **Shard count = index × replicas + extra system shards.**
- Each primary shard consumes ~30 MB RAM (JVM heap) + disk space.
- More shards → more file handles, more thread pools, higher GC pressure.

**3️⃣ Step‑by‑step reasoning**

1. **Compute data size per shard** – aim for 10–50 GB; keep under 200 GB to avoid heavy merge costs.
2. **Estimate document count & write throughput** – a single shard can handle ~1k writes/sec comfortably.
3. **Factor in replicas** – each replica doubles the memory overhead and disk usage.
4. **Add a safety margin** – leave 10–20 % headroom for growth, node failures, and re‑indexing.

**4️⃣ Common traps to avoid**

- *“More shards = better performance.”*  Over‑sharding leads to GC spikes and slow query planning.
- *Ignoring the “50 shards per node” rule of thumb.*  Exceeding this can saturate OS limits.
- *Assuming one shard per index is optimal.*  For large indices, split into several shards; for tiny ones, merge.

**5️⃣ Sanity‑check & communicate**

- **Check disk usage:** `GET _cat/shards` → confirm each shard’s size ≈ expected.
- **Monitor JVM GC and thread pool stats.**  If GC > 30 % or thread pools hit limits, reduce shards.
- **Explain to stakeholders:** “We’re keeping ~20 GB per shard with 1 replica; this balances query latency and resource usage.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
