---
qid: ing_fb5e874064__fp__local
question: 'Explain: When to shard a collection across multiple shards'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 377
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:54:26-05:00'
sources: []
---

**When to shard a collection across multiple shards**

The core problem sharding solves is *linear scalability* for data and traffic that outgrows the capacity of a single machine.  
A shard is an independent replica set; a cluster routes queries to the correct shard by a **shard key**.  
You should consider sharding when:

| Criterion | Why it forces sharding |
|-----------|------------------------|
| **Size > single‑node limits** (disk, RAM, I/O) | A single node cannot store or serve the data fast enough. |
| **Write or read latency spikes** despite scaling vertically | Hot spots appear; a single node becomes a bottleneck. |
| **Predictable key distribution** (e.g., user id, timestamp) | The shard key allows uniform hashing of operations across shards. |
| **Workload is largely *read‑heavy* or *write‑heavy* with no cross‑shard joins** | Sharding preserves locality; costly distributed joins become unnecessary. |

From an optimization perspective, sharding trades off **consistency guarantees** for throughput: each shard maintains ACID semantics locally while the cluster tolerates eventual consistency across shards (the CAP theorem).  
A non‑obvious insight is that *shard key selection* can be guided by **query locality** rather than data size alone. If most queries filter on a field with low cardinality, even distribution will fail; instead pick a key that both balances load and keeps the majority of query predicates local to one shard, reducing cross‑shard traffic and improving latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
