---
qid: ing_0274f6438e__faang__local
question: 'Explain: How to do distributed locking — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 493
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:49:49-05:00'
sources: []
---

**Clarify**  
We’re asked how a system can guarantee that only one replica holds a lock on a resource at any time across multiple machines (e.g., for leader election or cache invalidation). Assume we have a shared, highly‑available storage layer (like Redis, Zookeeper, DynamoDB) and a failure model where nodes can crash but the storage remains consistent.

**Approach**  
1. **Token acquisition** – each node attempts to write a unique token (its ID + timestamp) into a dedicated lock key with an *atomic set-if‑absent* operation.  
2. **Lease expiration** – the lock entry carries a TTL; if the holder fails to renew before expiry, another node can acquire it.  
3. **Renewal & heartbeats** – the owner periodically refreshes the TTL to keep ownership.  
4. **Re‑acquisition logic** – on failure to set or upon observing an expired token, retry with backoff.

**Depth**  
- *Atomicity*: use `SETNX`/`PUT_IF_ABSENT` in Redis/Zookeeper; ensures no two nodes get the lock simultaneously.  
- *Clock skew*: include a buffer in TTL and optionally embed a logical clock (Lamport) to avoid stale leases.  
- *Failure handling*: if the owner crashes, its lease eventually expires, allowing others to acquire it. If the owner crashes mid‑renewal, the next node sees the expired key.  
- *Complexity*: O(1) network round‑trip per lock attempt; constant memory.

**Edge Cases**  
- Network partitions may allow multiple nodes to think they own the lock (split brain). Mitigate with quorum writes (e.g., 2/3 of Zookeeper replicas).  
- Clock drift causing premature expiry. Use NTP or logical clocks.  
- Re‑entrant locks: store owner ID and a counter; only the same node can release.

**Optimize & Communicate**  
Explain that this pattern trades off strict safety for availability: during partitions, we may lose strict lock ordering but preserve progress. Highlight that in production we’d use a proven system (Zookeeper, etcd) rather than roll our own to avoid subtle bugs. Emphasize the importance of lease renewal intervals, backoff strategies, and monitoring for lost locks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
