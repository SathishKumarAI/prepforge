---
qid: ing_8a802d040c__faang__local
question: 'Explain: Write Globally and Read Locally — Live Comment System Design -
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 413
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:05:52-05:00'
sources: []
---

**Clarify**

You’re asked to design a real‑time comment system that can be written by any user worldwide (“globally”) and read locally (latency‑sensitive, region‑specific).  
Assumptions:  
* High write throughput (~10k writes/s) with eventual consistency.  
* Read latency < 50 ms for most users.  
* Users may see comments from many regions but prefer local ones first.  

**Approach**

1. **Write path** – a write‑through cache (Redis) that forwards to a globally replicated database (Cassandra/Spanner).  
2. **Read path** – per‑region read replicas; each replica serves the region’s traffic and caches hot comments in Memcached.  
3. **Global ordering** – use a monotonically increasing timestamp from a distributed clock (Lamport or vector clocks) to merge writes across regions.  

**Depth**

*Write:* Clients send POST → regional API → Redis → Cassandra write with `write‑through`.  
*Read:* GET → region’s replica → Memcached lookup; if miss, query Cassandra and cache result.  
Replication uses hinted handoff for fault tolerance. Complexity: O(1) writes (cache), O(log n) DB inserts; reads O(1) from cache, O(log n) fallback.  

**Edge Cases**

* Clock skew → use logical timestamps to avoid out‑of‑order comments.  
* Region failure → traffic rerouted to nearest replica, with eventual sync.  
* Hotspotting on popular threads → scale replicas or shard by thread ID.  

**Optimize & Communicate**

Explain trade‑offs: write latency vs consistency (eventual), read locality vs global freshness. Highlight monitoring (latency dashboards) and automated failover. Conclude that this architecture satisfies high write throughput, low read latency, and global scalability while keeping the system maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
