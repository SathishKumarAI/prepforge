---
qid: ing_2a475468fa__fp__local
question: 'Explain: Shard — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 492
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:34:53-05:00'
sources: []
---

**Why we shard at all**

In a distributed database the *fundamental problem* is: *how do you keep data “locally” for queries while still scaling write throughput and storage?*  
If every node holds the whole collection, each write must be replicated everywhere – bandwidth and latency explode.  
Conversely, if each node holds only a fragment, we need to know where that fragment lives when a query arrives.  

**The sharding solution**

1. **Choose a shard key** `k` – an attribute whose values can be split into disjoint ranges or hashed buckets.  
2. **Partition the key space** into *chunks* (ranges or hash slots). Each chunk is assigned to a *shard* (a replica set).  
3. When a document arrives, its shard key value determines which chunk it belongs to; the query router (`mongos`) looks up the chunk map and forwards the request to the responsible shard.  

**Why this works**

- **Locality + Load‑balance**: All documents with similar keys stay on the same shard, preserving read locality.  
- **Parallelism**: Writes are distributed across shards; each handles a fraction of traffic.  
- **Transparency**: The query router hides physical placement from clients; only the metadata store (config servers) tracks chunk–shard mappings.

**Deeper principle**

Sharding is an instance of *divide‑and‑conquer* optimization: we partition data to reduce contention, then conquer by routing queries via a lightweight lookup. It’s also a probabilistic load balancer—hash‑based keys spread writes uniformly, turning the system into a set of independent servers with minimal coordination.

**Non‑obvious insight**

The *chunk migration* algorithm is critical: when a shard becomes hot, its chunks are split and moved to underutilized shards. Because chunk boundaries are **immutable** (only the metadata changes), ongoing operations never need to re‑route mid‑transaction—ensuring strong consistency without locking across shards.

In short, sharding turns the “single large table” problem into many small tables that can grow independently while keeping queries efficient and the system fault‑tolerant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
