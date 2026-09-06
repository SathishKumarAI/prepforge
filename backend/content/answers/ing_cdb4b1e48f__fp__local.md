---
qid: ing_cdb4b1e48f__fp__local
question: 'Explain: Redis — What is Distributed Caching? - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 522
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:17:52-05:00'
sources: []
---

**Distributed caching in Redis – why it exists and how it works**

The fundamental problem a cache solves is *latency‑to‑data*.  
When an application repeatedly fetches the same key from a slow storage (e.g., a relational DB), the average response time grows linearly with the number of requests. A cache places hot data in fast memory, breaking that linearity: each hit costs O(1) lookup instead of a round‑trip to disk or network.

In a single‑node system this is trivial—just store key/value pairs in RAM. But modern workloads span many servers and may need:

1. **High availability** – if one node dies, the cache must still serve requests.
2. **Horizontal scaling** – as traffic grows we add nodes; the dataset should sharded automatically.
3. **Fault tolerance** – data loss on crash is unacceptable.

Redis implements a *distributed cache* by combining two low‑level guarantees:

| Guarantee | How Redis achieves it |
|-----------|-----------------------|
| **Consistent hashing** | Keys are mapped to hash slots (16 384 by default). Each node owns a subset of slots; adding/removing nodes only reassigns ~1/slot fraction of keys, keeping the mapping stable. |
| **Replication & persistence** | Every primary slot has one or more replicas that asynchronously sync via append‑only files and RDB snapshots. A client can failover to a replica instantly if its primary fails. |

Because Redis operations are single‑threaded per instance, there is no lock contention on the in‑memory data structure; each node handles its own subset of slots concurrently. Clients perform *cluster‑aware* lookups: they query any node for a key, receive a redirect (MOVED) to the correct slot owner, then talk directly to that node. Thus latency stays constant even as the cluster grows.

**Non‑obvious insight:**  
Redis’s cluster mode is *not* a traditional “distributed hash table” but an *optimised sharding layer* on top of a highly serial data store. This design trades off pure parallelism for simplicity and speed: every node can serve millions of operations per second, while the cluster only needs to route keys once per request. The heavy lifting—fast serialization, pipelining, and memory‑efficient compression—is done inside each node; the cluster logic stays lightweight. This separation is why Redis remains a top choice for real‑time caching at web scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
