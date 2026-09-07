---
qid: ing_a9342bec50__faang__local
question: 'Explain: 7.2 Availability — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 460
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:17:53-05:00'
sources: []
---

**Clarify**  
You’re asked to design the *availability* layer for a photo‑sharing app like Instagram. I’ll assume we need ≥ 99.9 % uptime, support millions of concurrent users, and provide fast read/write of media objects with minimal latency.

**Approach**  
1. **Data tiering** – separate hot (recent posts) from cold (archived).  
2. **Horizontal partitioning** – sharding by user ID or geolocation to localize traffic.  
3. **Redundancy** – multi‑region replication with read replicas; write quorum for consistency.  
4. **Failover & health checks** – automatic circuit breakers, graceful degradation, and rapid recovery.

**Depth**  
- Use a *sharded key‑value store* (e.g., Cassandra) for metadata, replicated 3× across zones.  
- Store media in an object store (S3‑compatible) with Geo‑redundant buckets; serve via CDN.  
- Employ *gossip protocols* to detect node failures and trigger rebalancing.  
- For writes, use **Paxos/RAFT** consensus on the primary shard; for reads, allow eventual consistency from replicas.  
- Cache hot feeds in Redis clusters per region (TTL ≈ 10 s).  
Complexity: O(1) read/write per node, with *O(log n)* for rebalancing during scaling.

**Edge Cases**  
- Sudden traffic spikes (“flash crowds”) → auto‑scale shards and CDN capacity.  
- Network partition → fallback to read replicas; writes queued until quorum restored.  
- Disk failure in a shard → seamless failover to standby replica; data loss < 0.01 %.

**Optimize & Communicate**  
To boost reliability, add *proactive health checks* (synthetic transactions) and *canary deployments* for new shards. I’d explain this architecture by mapping each requirement (availability, latency, scalability) to a concrete component, stressing trade‑offs between consistency vs. performance, and highlighting monitoring dashboards that surface failure modes early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
