---
qid: ing_ae7eeb0914__faang__local
question: 'Explain: When one cache server is not enough — What is Distributed Caching?
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 436
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:29:16-05:00'
sources: []
---

**Clarify**  
The interviewer asks why a single cache (e.g., Redis or Memcached) can become a bottleneck and what “distributed caching” offers. I’ll confirm: we’re talking about horizontal scaling of in‑memory caches to support millions of requests per second, low latency, fault tolerance, and consistency guarantees.

**Approach**  
1. Identify the limits of a single node (CPU, RAM, network).  
2. Explain how distributing shards across many nodes breaks those limits.  
3. Highlight key properties: data partitioning, replication, failure handling, and consistency models.

**Depth**  
Distributed caching splits data into partitions (“shards”) that each cache node stores. A client uses a consistent‑hash ring to map keys to nodes, ensuring uniform load. Replication (e.g., 2–3 copies) gives high availability; if one node dies, another serves the same key. Consistency can be relaxed (eventual) for read‑heavy workloads or strict (two‑phase commit) when needed. Popular systems: **Hazelcast**, **Apache Ignite**, **Redis Cluster**, **Memcached with consistent hashing**. Complexity is O(1) lookup per node, but coordination overhead rises during rebalancing or failover.

**Edge Cases**  
- *Node churn*: adding/removing nodes causes key migration; must be handled gracefully to avoid cache misses.  
- *Network partitions*: can lead to split‑brain if replication isn’t carefully managed.  
- *Hot keys*: skewed access patterns may overload a single shard; techniques like sticky hashing or secondary indexing help.

**Optimize & Communicate**  
I’d propose using a client‑side consistent hash with virtual nodes for even distribution, enable read‑through/writes‑back policies, and monitor eviction rates to trigger auto‑scaling. In an interview, I’d emphasize the trade‑off between latency (single node) vs. availability/scalability (distributed), and how design choices affect system resilience and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
