---
qid: ing_e5fdcec8e9__fp__local
question: 'Explain: Multi-tenant architecture — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 438
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:07:41-05:00'
sources: []
---

### Why shard a multi‑tenant database?

A **multi‑tenant** system stores data for many customers (tenants) in the same cluster, yet each tenant must see *only* its own documents and be insulated from others’ traffic.  
The core problem is **scalable isolation**: we need to

1. **Separate tenants** so that a heavy query by one tenant cannot starve another.  
2. **Scale horizontally** because the combined data size grows linearly with the number of tenants.

MongoDB’s sharding solves this by partitioning data across *shards* (replica sets) using a **shard key**—a field common to all documents, e.g., `tenantId`. Each shard stores a contiguous range of that key.  

#### How it works

1. **Config servers** maintain metadata: which tenant ranges live on which shards.  
2. **Mongos routers** route queries by inspecting the `tenantId` and forwarding them to the appropriate shard(s).  
3. Because each shard is a replica set, read/write operations are distributed; writes go to the primary of that shard, reads can be served from secondaries.

#### Deeper principle

Sharding is an **optimisation of data locality**: by aligning the keyspace with tenant boundaries we reduce cross‑shard traffic (an O(1) lookup per query). This aligns with the *divide‑conquer* strategy in distributed systems, guaranteeing that each shard handles a bounded portion of the workload.

#### Non‑obvious insight

If you shard on `tenantId` alone and later add new tenants, you may inadvertently create *hot shards*: a few high‑volume tenants could overwhelm one shard while others sit idle. The solution is **hash‑based sharding** (`{ tenantId: "hashed" }`) which disperses tenants uniformly across shards, preserving isolation while preventing load imbalance—an elegant trade‑off between logical partitioning and physical distribution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
