---
qid: ing_59fa7c9203__fp__local
question: 'Explain: Step 4: Scale the design — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 576
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:15:34-05:00'
sources: []
---

**Step 4: Scale the Design – Why It Must Be Done the Way It Is**

The core problem a Paste‑Bin solves is *high‑throughput, low‑latency storage of short text blobs* that are later retrieved by an arbitrary key (the paste URL).  
When load grows from a handful of requests per second to millions, the system can fail in three ways:

1. **Hot spots** – A single node becomes overloaded because all writes or reads target it.
2. **Contention on shared state** – Locks, counters or leader election become bottlenecks.
3. **Resource exhaustion** – Disk, memory or network saturate before traffic does.

To guarantee *linearly‑scalable throughput* we must make every operation *stateless and idempotent*, so that any request can be served by any machine. This is the principle of **horizontal scalability**: add more identical copies and let the load distribute evenly.

### 1. Partition the key space (sharding)

Instead of a monolithic database, split keys into shards using a consistent hashing ring.  
*Why?* Consistent hashing gives near‑uniform distribution while minimizing remapping when nodes join/leave—an application of the **load balancing** principle in distributed systems.

### 2. Use a write‑through cache

Cache writes in an in‑memory store (e.g., Redis) and asynchronously persist to disk or object storage.  
*Why?* The cache hides expensive I/O, turning each write into an O(1) operation. This is an instance of the **write‑back vs. write‑through** trade‑off; we choose write‑through for durability guarantees.

### 3. Replicate for fault tolerance

Each shard is replicated (primary‑secondary or multi‑master).  
*Why?* Replication turns a single point of failure into a *probabilistic guarantee* that at least one copy is available, leveraging the **redundancy principle** from reliability engineering.

### Non‑obvious insight

Many designs stop at “use a cache and replicate.” The deeper requirement is to make *every shard independent in its own right*: each node must have its own consistent hash ring slice and local cache. If a node fails, its shards’ keys are still reachable via the ring’s redistribution logic—no global lock or coordinator is needed. This eliminates a classic bottleneck: the **single‑point‑of‑control** that scales poorly.

In short, scaling Paste‑Bin means *partitioning the key space*, *caching writes*, and *replicating shards*—all derived from fundamental distributed‑systems principles of load balancing, caching, and redundancy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
